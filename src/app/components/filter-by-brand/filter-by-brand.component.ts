import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-filter-by-brand',
  templateUrl: './filter-by-brand.component.html',
  styleUrls: ['./filter-by-brand.component.scss'],
})
export class FilterByBrandComponent implements OnInit {
  brands: Brand[] = [];
  dataLoaded: boolean = false;
  activeBrandId: number = -1;

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  changeActiveBrand(id: number) {
    this.activeBrandId = id;
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }
}
