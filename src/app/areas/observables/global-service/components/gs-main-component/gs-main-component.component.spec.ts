import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsMainComponentComponent } from './gs-main-component.component';

describe('GsMainComponentComponent', () => {
  let component: GsMainComponentComponent;
  let fixture: ComponentFixture<GsMainComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsMainComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
