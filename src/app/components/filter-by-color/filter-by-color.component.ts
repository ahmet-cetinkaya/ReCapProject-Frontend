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
  activeColorName?: string;
  filterText: string = '';

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
      if (params['colorName']) this.setActiveColor(params['colorName']);
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  setActiveColor(colorName?: string) {
    this.activeColorName = colorName;
  }

  isActive(colorName?: string): string {
    return this.activeColorName == colorName ? 'btn-primary' : '';
  }

  routeToCarsByColor(event: any) {
    let targetValue: string = event.target.value;

    if (!targetValue) {
      this.setActiveColor();
      this.router.navigateByUrl('');
    } else {
      this.setActiveColor(targetValue);
      this.router.navigateByUrl(
        `${this.router.url.includes('/cars') ? '.' : '/cars'}/color/${
          this.activeColorName
        }`
      );
    }
  }

  isSelected(colorName?: string): boolean {
    return this.activeColorName == colorName;
  }

  getNavigateByUrl(): string {
    return `${this.router.url.includes('/cars') ? '.' : '/cars'}/color/${
      this.activeColorName
    }`;
  }
}
