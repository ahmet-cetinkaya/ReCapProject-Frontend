import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByBrandBarComponent } from './filter-by-brand-bar.component';

describe('FilterByBrandComponent', () => {
  let component: FilterByBrandBarComponent;
  let fixture: ComponentFixture<FilterByBrandBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterByBrandBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByBrandBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
