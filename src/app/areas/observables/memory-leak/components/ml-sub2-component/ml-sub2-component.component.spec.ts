import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlSub2ComponentComponent } from './ml-sub2-component.component';

describe('MlSub2ComponentComponent', () => {
  let component: MlSub2ComponentComponent;
  let fixture: ComponentFixture<MlSub2ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlSub2ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlSub2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
