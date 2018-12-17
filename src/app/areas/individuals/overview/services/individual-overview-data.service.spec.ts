import { TestBed } from '@angular/core/testing';

import { provideMock } from '@drmueller/testing';

import { IndividualOverviewDataService } from './individual-overview-data.service';
import { IndividualOverviewHttpService } from './individual-overview-http.service';

describe('IndividualOverviewDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      provideMock(IndividualOverviewHttpService)
    ]
  }));

  it('should be created', () => {
    const service: IndividualOverviewDataService = TestBed.get(IndividualOverviewDataService);
    expect(service).toBeTruthy();
  });
});
