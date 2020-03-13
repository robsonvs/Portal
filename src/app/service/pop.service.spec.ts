import { TestBed } from '@angular/core/testing';

import { PopService } from './pop.service';

describe('PopService', () => {
  let service: PopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
