import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBuiltInDirectivesComponent } from './demo-built-in-directives.component';

describe('DemoBuiltInDirectivesComponent', () => {
  let component: DemoBuiltInDirectivesComponent;
  let fixture: ComponentFixture<DemoBuiltInDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBuiltInDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBuiltInDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
