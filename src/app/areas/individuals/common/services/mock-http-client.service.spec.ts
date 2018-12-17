import { TestBed } from '@angular/core/testing';

import { MockHttpClientService } from './mock-http-client.service';

describe('MockHttpClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockHttpClientService = TestBed.get(MockHttpClientService);
    expect(service).toBeTruthy();
  });
});
