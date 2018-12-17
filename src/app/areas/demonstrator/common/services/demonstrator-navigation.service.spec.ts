import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { provideMock } from '@drmueller/testing';

import { DemonstratorNavigationService } from './demonstrator-navigation.service';

describe('DemonstratorNavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      provideMock(Router)
    ]
  }));

  it('should be created', () => {
    const service: DemonstratorNavigationService = TestBed.get(DemonstratorNavigationService);
    expect(service).toBeTruthy();
  });
});
