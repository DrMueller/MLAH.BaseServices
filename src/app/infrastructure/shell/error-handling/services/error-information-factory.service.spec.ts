import { TestBed } from '@angular/core/testing';

import { ErrorInformationFactoryService } from './error-information-factory.service';

describe('ErrorInformationFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorInformationFactoryService = TestBed.get(ErrorInformationFactoryService);
    expect(service).toBeTruthy();
  });
});
