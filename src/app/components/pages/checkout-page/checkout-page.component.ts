import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreditCard } from 'src/app/models/creditCard';
import { Rental } from 'src/app/models/rental';
import { UserDetail } from 'src/app/models/userDetail';
import { AuthService } from 'src/app/services/auth.service';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent implements OnInit {
  userDetail!: UserDetail;
  creditCardForm!: FormGroup;
  creditCards?: CreditCard[];
  selectedCreditCard?: CreditCard = undefined;
  paymentSuccessfull!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private creditCardService: CreditCardService,
    private rentalService: RentalService,
    private paymentService: PaymentService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    if (!this.rentalService.rentalCheckout) {
      this.router.navigateByUrl('404');
      return;
    }

    this.createCreditCardForm();
    this.getUserDetailFromStore();
  }

  createCreditCardForm() {
    this.creditCardForm = this.formBuilder.group({
      nameSurname: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expMonth: ['', Validators.required],
      expYear: ['', Validators.required],
      cvc: ['', Validators.required],
      cardType: ['Mastercard', Validators.required],
    });
  }

  getUserDetailFromStore() {
    this.authService.userDetail$.subscribe((userDetail) => {
      if (userDetail) {
        this.userDetail = userDetail;

        this.getCreditCardsByCustomerId(userDetail.customerId);
      }
    });
  }

  getCreditCardsByCustomerId(customerId: number) {
    this.creditCardService
      .getAllByCustomerId(customerId)
      .subscribe((response) => {
        if (!response.data.length) return;
        this.creditCards = response.data;
      });
  }

  fillCardInformation(selectedCreditCard: CreditCard) {
    this.selectedCreditCard = selectedCreditCard;
    if (this.selectedCreditCard)
      this.creditCardForm.patchValue({ ...this.selectedCreditCard });
    else this.creditCardForm.reset({ cardType: 'Mastercard' });
  }

  payment() {
    if (!this.creditCardForm.valid) return;

    this.paymentService.payment().subscribe(
      (response) => {
        this.paymentSuccessfull = response.success;
        this.toastrService.success(response.message);
        this.addRental();
        this.askSaveCreditCard();
      },
      () => (this.paymentSuccessfull = false)
    );
  }

  addRental() {
    let rental: Rental | undefined = this.rentalService.rentalCheckout;

    if (!rental) {
      this.toastrService.error('An problem has occurred.');
      return;
    }

    this.rentalService
      .add(rental)
      .subscribe((response) => this.toastrService.success(response.message));
  }

  askSaveCreditCard() {
    if (!this.selectedCreditCard)
      if (window.confirm('Would you like to save your credit card?')) {
        let newCreditCard: CreditCard = {
          customerId: this.userDetail.customerId,
          ...this.creditCardForm.value,
          cvc: this.creditCardForm.get('cvc')?.value.toString(),
        };
        this.saveCreditCard(newCreditCard);
      }
  }

  saveCreditCard(creditCard: CreditCard) {
    this.creditCardService.add(creditCard).subscribe((response) => {
      this.toastrService.success(response.message);
    });
  }
}
