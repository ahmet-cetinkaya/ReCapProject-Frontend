import { Component, OnInit } from '@angular/core';
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

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }
}
