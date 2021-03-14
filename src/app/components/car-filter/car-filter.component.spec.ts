import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFilterComponent } from './car-filter.component';

describe('CarFilterComponent', () => {
  let component: CarFilterComponent;
  let fixture: ComponentFixture<CarFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
