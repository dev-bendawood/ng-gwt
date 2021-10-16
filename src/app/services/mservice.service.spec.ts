import { TestBed } from '@angular/core/testing';

import { mService } from './mservice.service';

describe('mService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: mService = TestBed.get(mService);
    expect(service).toBeTruthy();
  });
});
