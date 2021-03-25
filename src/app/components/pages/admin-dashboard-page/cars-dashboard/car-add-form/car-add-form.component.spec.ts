import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAddFormComponent } from './car-add-form.component';

describe('CarAddFormComponent', () => {
  let component: CarAddFormComponent;
  let fixture: ComponentFixture<CarAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
