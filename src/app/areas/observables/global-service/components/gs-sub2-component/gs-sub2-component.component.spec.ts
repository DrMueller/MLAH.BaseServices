import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsSub2ComponentComponent } from './gs-sub2-component.component';

describe('GsSub2ComponentComponent', () => {
  let component: GsSub2ComponentComponent;
  let fixture: ComponentFixture<GsSub2ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsSub2ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsSub2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
