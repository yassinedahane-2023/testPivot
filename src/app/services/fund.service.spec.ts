import { TestBed } from '@angular/core/testing';

import { FundServiceService } from './fund.service';

describe('FundServiceService', () => {
  let service: FundServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
