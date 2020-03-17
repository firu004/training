import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindigDemoComponent } from './event-bindig-demo.component';

describe('EventBindigDemoComponent', () => {
  let component: EventBindigDemoComponent;
  let fixture: ComponentFixture<EventBindigDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBindigDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBindigDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
