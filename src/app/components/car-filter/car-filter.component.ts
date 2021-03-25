import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.scss'],
})
export class CarFilterComponent implements OnInit {
  brands: Brand[] = [];
  colors: Color[] = [];
  activeBrandName?: string = '';
  activeColorName?: string = '';
  brandFilterText: string = '';
  colorFilterText: string = '';
  carFilterText: string = '';

  @Output() carFilterTextEvent = new EventEmitter<string>();

  @Input() isCompact: boolean = false;

  constructor(
    private brandService: BrandService,
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.getActivesFromParams();
  }
  getActivesFromParams() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['brand']) this.activeBrandName = params['brand'];
      if (params['color']) this.activeColorName = params['color'];
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

  sendCarFilterText() {
    this.carFilterTextEvent.emit(this.carFilterText);
  }

  isBrandSelected(brandName?: string): boolean {
    return this.activeBrandName === brandName;
  }

  isColorSelected(colorName?: string): boolean {
    return this.activeColorName === colorName;
  }
}
