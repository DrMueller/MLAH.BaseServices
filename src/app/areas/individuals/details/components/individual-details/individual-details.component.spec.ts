import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { provideMock } from '@drmueller/testing';

import { of } from 'rxjs';

import { IndividualsNavigationService } from '../../../common/navigation';
import { IndividualDetailsDataService, IndividualDetailsFormBuilderService } from '../../services';
import { IndividualDetailsComponent } from './individual-details.component';
import { RxFormModelBindingService } from 'src/app/infrastructure/shared-features/rx-forms';

describe('IndividualDetailsComponent', () => {
  let component: IndividualDetailsComponent;
  let fixture: ComponentFixture<IndividualDetailsComponent>;

  const activateRouteMock = {
    data: of()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualDetailsComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: ActivatedRoute, useValue: activateRouteMock },
        provideMock(IndividualDetailsFormBuilderService),
        provideMock(RxFormModelBindingService),
        provideMock(IndividualDetailsDataService),
        provideMock(IndividualsNavigationService)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
