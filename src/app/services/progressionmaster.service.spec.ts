import { TestBed } from '@angular/core/testing';

import { ProgressionmasterService } from './progressionmaster.service';

describe('ProgressionmasterService', () => {
  let service: ProgressionmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressionmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
