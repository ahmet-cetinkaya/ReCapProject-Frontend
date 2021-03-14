import { TestBed } from '@angular/core/testing';

import { ColorService } from './color.service';

describe('ColorService', () => {
  let service: ColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
