import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image-form',
  templateUrl: './car-image-form.component.html',
  styleUrls: ['./car-image-form.component.scss'],
})
export class CarImageFormComponent implements OnInit {
  carId!: number;
  selectedFiles?: FileList;
  carImages: CarImage[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private carImageService: CarImageService
  ) {}

  ngOnInit(): void {
    this.getCarIdFromParam();
  }

  getCarImagesById(carId: number) {
    this.carImageService.getImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getCarIdFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) this.carId = params['carId'];

      this.getCarImagesById(this.carId);
    });
  }

  getCarImageUrl(carImageId: number): string {
    return this.carImageService.getCarImageUrl(carImageId);
  }

  selectFiles(event: any): void {
    this.selectedFiles = event.target.files;
  }

  uploadFiles(): void {
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(this.selectedFiles[i]);
      }
    }
  }

  upload(file: File): void {
    if (!file) return;

    this.carImageService.add(this.carId, file).subscribe((response) => {
      this.getCarImagesById(this.carId);
      this.toastrService.success(file.name, 'Uploaded car image successfully!');
    });
  }

  delete(carImage: CarImage) {
    if (window.confirm('Are you sure to delete car image?')) {
      this.carImageService.delete(carImage).subscribe((response) => {
        this.toastrService.success('Deleted car image successfully.');
        this.getCarImagesById(this.carId);
      });
    }
  }

  isDefaultCarImage(carImage: CarImage): boolean {
    return carImage.id === 0;
  }
}
