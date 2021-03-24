import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsListComponent } from './cars-list.component';

describe('CarsComponent', () => {
  let component: CarsListComponent;
  let fixture: ComponentFixture<CarsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
