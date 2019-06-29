import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SicMainComponentComponent } from './sic-main-component.component';

describe('SicMainComponentComponent', () => {
  let component: SicMainComponentComponent;
  let fixture: ComponentFixture<SicMainComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SicMainComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SicMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
