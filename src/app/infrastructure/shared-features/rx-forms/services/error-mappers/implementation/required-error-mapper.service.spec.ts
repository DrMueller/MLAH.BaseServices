import { TestBed } from '@angular/core/testing';

import { RequiredErrorMapperService } from './required-error-mapper.service';

describe('RequiredErrorMapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequiredErrorMapperService = TestBed.get(RequiredErrorMapperService);
    expect(service).toBeTruthy();
  });
});
