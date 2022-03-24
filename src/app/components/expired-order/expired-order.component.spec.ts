import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredOrderComponent } from './expired-order.component';

describe('ExpiredOrderComponent', () => {
  let component: ExpiredOrderComponent;
  let fixture: ComponentFixture<ExpiredOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
