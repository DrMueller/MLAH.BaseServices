import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SicSub1ComponentComponent } from './sic-sub1-component.component';

describe('SicSub1ComponentComponent', () => {
  let component: SicSub1ComponentComponent;
  let fixture: ComponentFixture<SicSub1ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SicSub1ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SicSub1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
