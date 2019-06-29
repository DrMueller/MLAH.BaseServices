import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SicSub2ComponentComponent } from './sic-sub2-component.component';

describe('SicSub2ComponentComponent', () => {
  let component: SicSub2ComponentComponent;
  let fixture: ComponentFixture<SicSub2ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SicSub2ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SicSub2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
