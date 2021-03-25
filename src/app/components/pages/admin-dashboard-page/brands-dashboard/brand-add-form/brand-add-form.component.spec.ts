import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandAddFormComponent } from './brand-add-form.component';

describe('BrandAddFormComponent', () => {
  let component: BrandAddFormComponent;
  let fixture: ComponentFixture<BrandAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
