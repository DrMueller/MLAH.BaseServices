import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlMainComponentComponent } from './ml-main-component.component';

describe('MlMainComponentComponent', () => {
  let component: MlMainComponentComponent;
  let fixture: ComponentFixture<MlMainComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlMainComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
