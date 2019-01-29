import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { provideMock } from '@drmueller/testing';

import { IndividualsNavigationService } from '../../../common/navigation';
import { IndividualOverviewDataService } from '../../services';
import { IndividualsOverviewComponent } from './individuals-overview.component';

describe('IndividualsOverviewComponent', () => {
  let component: IndividualsOverviewComponent;
  let fixture: ComponentFixture<IndividualsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualsOverviewComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMock(IndividualOverviewDataService),
        provideMock(IndividualsNavigationService)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
