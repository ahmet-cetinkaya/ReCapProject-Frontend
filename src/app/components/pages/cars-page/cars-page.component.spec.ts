import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsPageComponent } from './cars-page.component';

describe('CarsPageComponent', () => {
  let component: CarsPageComponent;
  let fixture: ComponentFixture<CarsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
