import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsSub1ComponentComponent } from './gs-sub1-component.component';

describe('GsSub1ComponentComponent', () => {
  let component: GsSub1ComponentComponent;
  let fixture: ComponentFixture<GsSub1ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsSub1ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsSub1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
