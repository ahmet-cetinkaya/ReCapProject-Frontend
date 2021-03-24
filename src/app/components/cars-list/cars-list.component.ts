import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
})
export class CarsListComponent implements OnInit {
  carDetails: CarDetail[] = [];
  dataLoaded: boolean = false;

  @Input() carFilterText: string = '';
  @Input() class: string = '';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['brand'] && params['color'])
        this.getCarDetailsByBrandNameAndColorName(
          params['brand'],
          params['color']
        );
      else if (params['brand']) this.getCarDetailsByBrand(params['brand']);
      else if (params['color']) this.getCarDetailsByColor(params['color']);
      else this.getCarDetails();
    });
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByBrand(brandName: string) {
    this.carService.getCarDetailsByBrand(brandName).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByColor(colorName: string) {
    this.carService.getCarDetailsByColor(colorName).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByBrandNameAndColorName(brandName: string, colorName: string) {
    this.carService
      .getCarDetailsByBrandNameAndColorName(brandName, colorName)
      .subscribe((response) => {
        this.carDetails = response.data;
        this.dataLoaded = true;
      });
  }
}
