import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByColorComponent } from './filter-by-color.component';

describe('FilterByColorComponent', () => {
  let component: FilterByColorComponent;
  let fixture: ComponentFixture<FilterByColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
