import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { provideMock } from '@drmueller/testing';

import { IndividualsNavigationService } from './individuals-navigation.service';

describe('IndividualsNavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      provideMock(Router)
    ]
  }));

  it('should be created', () => {
    const service: IndividualsNavigationService = TestBed.get(IndividualsNavigationService);
    expect(service).toBeTruthy();
  });
});
