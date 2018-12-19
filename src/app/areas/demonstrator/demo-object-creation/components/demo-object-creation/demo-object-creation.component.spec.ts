import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoObjectCreationComponent } from './demo-object-creation.component';

describe('DemoObjectCreationComponent', () => {
  let component: DemoObjectCreationComponent;
  let fixture: ComponentFixture<DemoObjectCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoObjectCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoObjectCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
