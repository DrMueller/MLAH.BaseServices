import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { provideMock } from '@drmueller/testing';

import { ObjectFactoryService } from 'projects/drmueller/ng-base-services/src/public_api';

import { IndividualOverviewHttpService } from './individual-overview-http.service';

describe('IndividualOverviewHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      provideMock(HttpClient),
      provideMock(ObjectFactoryService)
    ]
  }));

  it('should be created', () => {
    const service: IndividualOverviewHttpService = TestBed.get(IndividualOverviewHttpService);
    expect(service).toBeTruthy();
  });
});
