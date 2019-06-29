import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlSub1ComponentComponent } from './ml-sub1-component.component';

describe('MlSub1ComponentComponent', () => {
  let component: MlSub1ComponentComponent;
  let fixture: ComponentFixture<MlSub1ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlSub1ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlSub1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
