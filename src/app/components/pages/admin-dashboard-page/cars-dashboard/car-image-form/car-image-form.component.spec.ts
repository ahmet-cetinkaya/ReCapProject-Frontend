import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarImageFormComponent } from './car-image-form.component';

describe('CarImageFormComponent', () => {
  let component: CarImageFormComponent;
  let fixture: ComponentFixture<CarImageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarImageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarImageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
