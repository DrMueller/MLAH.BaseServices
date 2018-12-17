import { TestBed } from '@angular/core/testing';

import { IgnoredErrorsService } from './ignored-errors.service';

describe('IgnoredErrorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IgnoredErrorsService = TestBed.get(IgnoredErrorsService);
    expect(service).toBeTruthy();
  });
});
