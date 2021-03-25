import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsDashboardComponent } from './colors-dashboard.component';

describe('ColorsDashboardComponent', () => {
  let component: ColorsDashboardComponent;
  let fixture: ComponentFixture<ColorsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
