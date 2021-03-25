import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsDashboardComponent } from './cars-dashboard.component';

describe('CarsDashboardComponent', () => {
  let component: CarsDashboardComponent;
  let fixture: ComponentFixture<CarsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
