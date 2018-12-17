import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { provideMock } from '@drmueller/testing';

import { ObjectFactoryService } from 'projects/drmueller/ng-base-services/src/public_api';

import { IndividualDetailsHttpService } from './individual-details-http.service';

describe('IndividualDetailsHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      provideMock(HttpClient),
      provideMock(ObjectFactoryService)
    ]
  }));

  it('should be created', () => {
    const service: IndividualDetailsHttpService = TestBed.get(IndividualDetailsHttpService);
    expect(service).toBeTruthy();
  });
});
