import { TestBed } from '@angular/core/testing';

import { provideMock } from '@drmueller/testing';

import { IndividualDetailsDataService } from './individual-details-data.service';
import { IndividualDetailsHttpService } from './individual-details-http.service';

describe('IndividualDetailsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      provideMock(IndividualDetailsHttpService)
    ]
  }));

  it('should be created', () => {
    const service: IndividualDetailsDataService = TestBed.get(IndividualDetailsDataService);
    expect(service).toBeTruthy();
  });
});
