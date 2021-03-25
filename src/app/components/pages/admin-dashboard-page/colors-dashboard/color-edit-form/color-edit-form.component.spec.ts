import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorEditFormComponent } from './color-edit-form.component';

describe('ColorEditFormComponent', () => {
  let component: ColorEditFormComponent;
  let fixture: ComponentFixture<ColorEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
