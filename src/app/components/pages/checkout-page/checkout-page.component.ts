import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent implements OnInit {
  paymentSuccessfull!: boolean;

  constructor(
    private rentalService: RentalService,
    private paymentService: PaymentService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // if (!this.rentalService.rentalCheckout) this.router.navigateByUrl('404');
  }

  payment() {
    this.paymentService.test().subscribe(
      (response) => {
        this.paymentSuccessfull = true;
        this.toastr.success(response.message);
      },
      (error) => {
        this.paymentSuccessfull = false;
        this.toastr.error(error.error.message);
      }
    );
  }
}
