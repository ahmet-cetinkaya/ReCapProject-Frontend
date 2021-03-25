import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsDashboardComponent } from './brands-dashboard.component';

describe('BrandsDashboardComponent', () => {
  let component: BrandsDashboardComponent;
  let fixture: ComponentFixture<BrandsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
