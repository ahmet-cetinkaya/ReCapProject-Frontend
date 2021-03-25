import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarEditFormComponent } from './car-edit-form.component';

describe('CarEditFormComponent', () => {
  let component: CarEditFormComponent;
  let fixture: ComponentFixture<CarEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
