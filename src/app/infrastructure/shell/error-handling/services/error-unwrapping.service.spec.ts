import { TestBed } from '@angular/core/testing';

import { ErrorUnwrappingService } from './error-unwrapping.service';

describe('ErrorUnwrappingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorUnwrappingService = TestBed.get(ErrorUnwrappingService);
    expect(service).toBeTruthy();
  });
});
