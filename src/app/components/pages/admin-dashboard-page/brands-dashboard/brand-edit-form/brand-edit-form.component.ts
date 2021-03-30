import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-edit-form',
  templateUrl: './brand-edit-form.component.html',
  styleUrls: ['./brand-edit-form.component.scss'],
})
export class BrandEditFormComponent implements OnInit {
  brand!: Brand;
  brandEditForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBrandIdFromParam();
  }

  createBrandForm() {
    this.brandEditForm = this.formBuilder.group({
      name: [this.brand.name, Validators.required],
    });
  }

  getBrandIdFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.getBrandById(params['id']);
    });
  }

  getBrandById(brandId: number) {
    this.brandService.getBrandById(brandId).subscribe((response) => {
      this.brand = response.data;

      this.createBrandForm();
    });
  }

  update() {
    if (!this.brandEditForm.valid) {
      this.toastrService.error('There are missing fields.');
      return;
    }

    let brandModule: Brand = { id: this.brand.id, ...this.brandEditForm.value };
    this.brandService.update(brandModule).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'brands']);
    });
  }

  delete() {
    if (window.confirm('Are you sure delete brand?')) {
      let brandModule: Brand = {
        id: this.brand.id,
        ...this.brandEditForm.value,
      };
      this.brandService.delete(brandModule).subscribe((response) => {
        this.toastrService.success(response.message);
        this.router.navigate(['admin', 'brands']);
      });
    }
  }
}
