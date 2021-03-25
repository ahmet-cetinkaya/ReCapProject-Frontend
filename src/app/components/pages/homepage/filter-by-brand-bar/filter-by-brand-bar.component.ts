import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-filter-by-brand-bar',
  templateUrl: './filter-by-brand-bar.component.html',
  styleUrls: ['./filter-by-brand-bar.component.scss'],
})
export class FilterByBrandBarComponent implements OnInit {
  brands: Brand[] = [];
  dataLoaded: boolean = false;
  activeBrandName?: string;
  filterText: string = '';

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
      if (params['brandName']) this.setActiveBrand(params['brandName']);
    });
  }

  setActiveBrand(brandName?: string) {
    this.activeBrandName = brandName;
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  isActive(brandName?: string): string {
    return this.activeBrandName == brandName ? 'btn-primary' : '';
  }

  routeToCarsByBrand(event: any) {
    let targetValue: string = event.target.value;

    if (!targetValue) {
      this.setActiveBrand();
      this.router.navigateByUrl('');
    } else {
      this.setActiveBrand(targetValue);
      this.router.navigateByUrl(`/cars/brand/${this.activeBrandName}`);
    }
  }

  isSelected(brandName?: string): boolean {
    return this.activeBrandName == brandName;
  }
}
