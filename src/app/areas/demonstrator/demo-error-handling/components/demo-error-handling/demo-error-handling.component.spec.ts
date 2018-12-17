import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoErrorHandlingComponent } from './demo-error-handling.component';

describe('DemoErrorHandlingComponent', () => {
  let component: DemoErrorHandlingComponent;
  let fixture: ComponentFixture<DemoErrorHandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoErrorHandlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoErrorHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
