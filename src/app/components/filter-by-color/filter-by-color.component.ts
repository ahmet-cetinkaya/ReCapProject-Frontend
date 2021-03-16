import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-filter-by-color',
  templateUrl: './filter-by-color.component.html',
  styleUrls: ['./filter-by-color.component.scss'],
})
export class FilterByColorComponent implements OnInit {
  colors: Color[] = [];
  dataLoaded: boolean = false;
  activeColorId?: number;

  constructor(
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getColors();
    this.getActiveColorFromParam();
  }

  getActiveColorFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId']) this.setActiveColor(params['colorId']);
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  setActiveColor(colorId?: number) {
    this.activeColorId = colorId;
  }

  isActive(colorId?: number): string {
    return this.activeColorId == colorId ? 'btn-primary' : '';
  }

  routeToCarsByColor(event: any) {
    let targetValue: number = event.target.value;

    if (isNaN(targetValue)) {
      this.setActiveColor();
      this.router.navigateByUrl('');
    } else {
      this.setActiveColor(targetValue);
      this.router.navigateByUrl(`/cars/color/${this.activeColorId}`);
    }
  }

  isSelected(brandId?: number): boolean {
    return this.activeColorId == brandId;
  }
}
