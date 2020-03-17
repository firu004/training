import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentAndContentChildDemoComponent } from './ng-content-and-content-child-demo.component';

describe('NgContentAndContentChildDemoComponent', () => {
  let component: NgContentAndContentChildDemoComponent;
  let fixture: ComponentFixture<NgContentAndContentChildDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentAndContentChildDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentAndContentChildDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
