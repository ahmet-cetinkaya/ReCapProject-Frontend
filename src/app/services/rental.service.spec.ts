import { TestBed } from '@angular/core/testing';

import { RentalService } from './rental.service';

describe('RentalService', () => {
  let service: RentalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
