import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { Rental } from 'src/app/models/rental';
import { UserDetail } from 'src/app/models/userDetail';
import { AuthService } from 'src/app/services/auth.service';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss'],
})
export class CarPageComponent implements OnInit {
  car!: Car;
  brand!: Brand;
  color!: Color;
  carImages!: CarImage[];
  DateTimeNow: Date = new Date();
  rentStartDate: Date = this.DateTimeNow;
  rentEndDate: Date = this.DateTimeNow;
  userDetail?: UserDetail;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private carService: CarService,
    private colorService: ColorService,
    private carImageService: CarImageService,
    private rentalService: RentalService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarById(params['carId']);
    });
    this.getUserDetailsFromStore();
  }

  getUserDetailsFromStore() {
    this.authService.userDetail$.subscribe(
      (userDetail) => (this.userDetail = userDetail)
    );
  }

  getCarById(carId: number) {
    this.carService.getCarById(carId).subscribe((response) => {
      this.car = response.data;

      this.getBrandById(this.car.brandId);
      this.getColorById(this.car.colorId);
      this.getCarImagesById(this.car.id);
    });
  }

  getBrandById(brandId: number) {
    this.brandService
      .getBrandById(brandId)
      .subscribe((response) => (this.brand = response.data));
  }

  getColorById(colorId: number) {
    this.colorService
      .getColorById(colorId)
      .subscribe((response) => (this.color = response.data));
  }

  getCarImagesById(carId: number) {
    this.carImageService
      .getImagesByCarId(carId)
      .subscribe((response) => (this.carImages = response.data));
  }

  rentCar() {
    if (!this.userDetail) {
      this.router.navigate(['login']);
      this.toastr.info('You must log in.');
      return;
    }

    let rental: Rental = {
      carId: this.car.id,
      customerId: this.userDetail.customerId,
      rentStartDate: new Date(this.rentStartDate),
      rentEndDate: new Date(this.rentEndDate),
      returnDate: undefined,
    };

    this.rentalService.isRentable(rental).subscribe(() => {
      this.rentalService.checkFindeksScoreSufficiency(rental).subscribe(() => {
        this.toastr.info('You are redirected to payment page.');
        this.rentalService.rentalCheckout = rental;
        this.router.navigateByUrl('/checkout');
      });
    });
  }

  isActiveCarousel(carImageIndex: number): string {
    return carImageIndex == 0 ? 'active' : '';
  }

  getCarImageUrl(carImageId: number): string {
    return this.carImageService.getCarImageUrl(carImageId);
  }
}
