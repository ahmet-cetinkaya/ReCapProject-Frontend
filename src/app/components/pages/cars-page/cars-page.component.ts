import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.scss'],
})
export class CarsPageComponent implements OnInit {
  carFilterText: string = '';

  constructor() {}

  ngOnInit(): void {}

  receiveCarFilterText($event: any) {
    this.carFilterText = $event;
  }
}
