import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add-form',
  templateUrl: './color-add-form.component.html',
  styleUrls: ['./color-add-form.component.scss'],
})
export class ColorAddFormComponent implements OnInit {
  colorAddForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private colorService: ColorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createBrandForm();
  }

  createBrandForm() {
    this.colorAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  add() {
    if (!this.colorAddForm.valid) {
      this.toastrService.error('There are missing fields.');
      return;
    }

    let colorModule: Color = { ...this.colorAddForm.value };
    this.colorService.add(colorModule).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'colors']);
    });
  }
}
