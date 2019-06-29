import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SicParentComponentComponent } from './sic-parent-component.component';

describe('SicParentComponentComponent', () => {
  let component: SicParentComponentComponent;
  let fixture: ComponentFixture<SicParentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SicParentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SicParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
