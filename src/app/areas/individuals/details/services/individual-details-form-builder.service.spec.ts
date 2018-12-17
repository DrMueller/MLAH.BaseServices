import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { provideMock } from '@drmueller/testing';

import { IndividualDetailsFormBuilderService } from './individual-details-form-builder.service';

describe('IndividualDetailsFormBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      provideMock(FormBuilder)
    ]
  }));

  it('should be created', () => {
    const service: IndividualDetailsFormBuilderService = TestBed.get(IndividualDetailsFormBuilderService);
    expect(service).toBeTruthy();
  });
});
