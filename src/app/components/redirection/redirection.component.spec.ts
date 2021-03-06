import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectionComponent } from './redirection.component';

describe('RedireccionComponent', () => {
  let component: RedirectionComponent;
  let fixture: ComponentFixture<RedirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
