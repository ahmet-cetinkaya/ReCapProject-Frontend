import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add-form',
  templateUrl: './brand-add-form.component.html',
  styleUrls: ['./brand-add-form.component.scss'],
})
export class BrandAddFormComponent implements OnInit {
  brandAddForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private brandService: BrandService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createBrandForm();
  }

  createBrandForm() {
    this.brandAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  add() {
    if (!this.brandAddForm.valid) {
      this.toastrService.error('There are missing fields.');
      return;
    }

    let brandModule: Brand = { ...this.brandAddForm.value };
    this.brandService.add(brandModule).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'brands']);
    });
  }
}
