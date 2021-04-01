import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CreditCard } from 'src/app/models/creditCard';
import { UserDetail } from 'src/app/models/userDetail';
import { AuthService } from 'src/app/services/auth.service';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-wallet-page',
  templateUrl: './wallet-page.component.html',
  styleUrls: ['./wallet-page.component.scss'],
})
export class WalletPageComponent implements OnInit {
  userDetail!: UserDetail;
  creditCards!: CreditCard[];
  dataLoaded: boolean = false;

  constructor(
    private authService: AuthService,
    private creditCardService: CreditCardService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUserDetailFromStore();
  }

  getUserDetailFromStore() {
    this.authService.userDetail$.subscribe((userDetail) => {
      if (userDetail) {
        this.userDetail = userDetail;

        this.getAllCreditCards();
      }
    });
  }

  getAllCreditCards() {
    this.creditCardService
      .getAllByCustomerId(this.userDetail.customerId)
      .subscribe((response) => {
        this.creditCards = response.data;
        this.dataLoaded = true;
      });
  }

  deleteCreditCard(creditCard: CreditCard) {
    if (confirm('Are you sure to delete credit card?'))
      this.creditCardService.delete(creditCard).subscribe((response) => {
        this.toastrService.success(response.message);
        this.creditCards = this.creditCards.filter(
          (c) => c.id !== creditCard.id
        );
      });
  }
}
