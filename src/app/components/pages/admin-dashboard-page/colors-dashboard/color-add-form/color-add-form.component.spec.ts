import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorAddFormComponent } from './color-add-form.component';

describe('ColorAddFormComponent', () => {
  let component: ColorAddFormComponent;
  let fixture: ComponentFixture<ColorAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
