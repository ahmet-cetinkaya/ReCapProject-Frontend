import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandEditFormComponent } from './brand-edit-form.component';

describe('BrandEditFormComponent', () => {
  let component: BrandEditFormComponent;
  let fixture: ComponentFixture<BrandEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
