import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-colors-dashboard',
  templateUrl: './colors-dashboard.component.html',
  styleUrls: ['./colors-dashboard.component.scss'],
})
export class ColorsDashboardComponent implements OnInit {
  colors: Color[] = [];

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.colorService
      .getColors()
      .subscribe((response) => (this.colors = response.data));
  }
}
