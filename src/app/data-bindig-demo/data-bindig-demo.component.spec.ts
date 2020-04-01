import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindigDemoComponent } from './data-bindig-demo.component';

describe('DataBindigDemoComponent', () => {
  let component: DataBindigDemoComponent;
  let fixture: ComponentFixture<DataBindigDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindigDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindigDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
