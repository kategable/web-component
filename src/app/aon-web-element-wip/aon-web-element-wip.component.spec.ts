import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AonWebElementWipComponent } from './aon-web-element-wip.component';

describe('AonWebElementWipComponent', () => {
  let component: AonWebElementWipComponent;
  let fixture: ComponentFixture<AonWebElementWipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AonWebElementWipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AonWebElementWipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
