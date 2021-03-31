import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add-form',
  templateUrl: './car-add-form.component.html',
  styleUrls: ['./car-add-form.component.scss'],
})
export class CarAddFormComponent implements OnInit {
  brands: Brand[] = [];
  colors: Color[] = [];
  carAddForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createCarForm();
    this.getBrands();
    this.getColors();
  }

  createCarForm() {
    this.carAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      minFindeksScore: ['', Validators.required],
      modelYear: ['', Validators.required],
      description: ['', Validators.required],
      brandFilterText: [''],
      colorFilterText: [''],
    });
  }

  getBrands() {
    this.brandService
      .getBrands()
      .subscribe((response) => (this.brands = response.data));
  }

  getColors() {
    this.colorService
      .getColors()
      .subscribe((response) => (this.colors = response.data));
  }

  add() {
    if (!this.carAddForm.valid) {
      this.toastrService.error('There are missing fields.');
      return;
    }

    let carModule: Car = { ...this.carAddForm.value };
    this.carService.add(carModule).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'cars']);
    });
  }
}
