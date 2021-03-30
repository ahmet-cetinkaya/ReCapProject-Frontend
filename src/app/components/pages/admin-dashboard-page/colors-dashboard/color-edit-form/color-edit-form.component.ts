import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-edit-form',
  templateUrl: './color-edit-form.component.html',
  styleUrls: ['./color-edit-form.component.scss'],
})
export class ColorEditFormComponent implements OnInit {
  color!: Color;
  colorEditForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getColorIdFromParam();
  }

  createColorForm() {
    this.colorEditForm = this.formBuilder.group({
      name: [this.color.name, Validators.required],
    });
  }

  getColorIdFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.getColorById(params['id']);
    });
  }

  getColorById(colorId: number) {
    this.colorService.getColorById(colorId).subscribe((response) => {
      this.color = response.data;

      this.createColorForm();
    });
  }

  update() {
    if (!this.colorEditForm.valid) {
      this.toastrService.error('There are missing fields.');
      return;
    }

    let colorModule: Color = { id: this.color.id, ...this.colorEditForm.value };
    this.colorService.update(colorModule).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'colors']);
    });
  }

  delete() {
    if (window.confirm('Are you sure delete color?')) {
      let colorModule: Color = {
        id: this.color.id,
        ...this.colorEditForm.value,
      };
      this.colorService.delete(colorModule).subscribe((response) => {
        this.toastrService.success(response.message);
        this.router.navigate(['admin', 'colors']);
      });
    }
  }
}
