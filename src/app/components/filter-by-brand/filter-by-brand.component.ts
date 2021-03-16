import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  activeBrandId?: number;

  constructor(
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.getActiveBrandFromParam();
  }
  getActiveBrandFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) this.setActiveBrand(params['brandId']);
    });
  }

  setActiveBrand(id?: number) {
    this.activeBrandId = id;
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  isActive(brandId?: number): string {
    return this.activeBrandId == brandId ? 'btn-primary' : '';
  }

  routeToCarsByBrand(event: any) {
    let targetValue: number = event.target.value;

    if (isNaN(targetValue)) {
      this.setActiveBrand();
      this.router.navigateByUrl('');
    } else {
      this.setActiveBrand(targetValue);
      this.router.navigateByUrl(`/cars/brand/${this.activeBrandId}`);
    }
  }

  isSelected(brandId?: number): boolean {
    return this.activeBrandId == brandId;
  }
}
