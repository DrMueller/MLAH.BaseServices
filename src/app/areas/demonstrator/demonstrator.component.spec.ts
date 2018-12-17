import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstratorComponent } from './demonstrator.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DemonstratorComponent', () => {
  let component: DemonstratorComponent;
  let fixture: ComponentFixture<DemonstratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemonstratorComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonstratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
