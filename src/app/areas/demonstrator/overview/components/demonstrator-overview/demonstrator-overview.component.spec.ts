import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstratorOverviewComponent } from './demonstrator-overview.component';

describe('DemonstratorOverviewComponent', () => {
  let component: DemonstratorOverviewComponent;
  let fixture: ComponentFixture<DemonstratorOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemonstratorOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonstratorOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
