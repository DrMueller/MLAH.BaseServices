import { TestBed } from '@angular/core/testing';

import { ErrorDispatcherService } from './error-dispatcher.service';

describe('ErrorDispatcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorDispatcherService = TestBed.get(ErrorDispatcherService);
    expect(service).toBeTruthy();
  });
});
