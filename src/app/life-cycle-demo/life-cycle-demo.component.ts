import { Component, Input, ViewChild, ElementRef, ContentChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-life-cycle-demo',
  templateUrl: './life-cycle-demo.component.html',
  styleUrls: ['./life-cycle-demo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifeCycleDemoComponent {

  @Input('inputText') text = '';
  @ViewChild('viewChildRef') viewChildRefernce: ElementRef;
  @ContentChild('myContentRef') contentChildRefernce: ElementRef;

  constructor() {
    console.log('LifeCycleDemoComponent constructor ');
    // console.log('LifeCycleDemoComponent viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
  }

  ngOnChanges() {
    console.log('LifeCycleDemoComponent ngOnChanges ');
    // console.log('LifeCycleDemoComponent viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
  }

  ngOnInit(): void {
    console.log('LifeCycleDemoComponent ngOnInit ');
    // console.log('LifeCycleDemoComponent viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
  }

  ngDoCheck() {
    console.log('LifeCycleDemoComponent ngDoCheck ');
    // console.log('LifeCycleDemoComponent viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
  }

  ngAfterContentInit() {
    console.log('LifeCycleDemoComponent ngAfterContentInit ');
    // console.log('LifeCycleDemoComponent viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
  }

  ngAfterContentChecked() {
    console.log('LifeCycleDemoComponent ngAfterContentChecked ');
    // console.log('LifeCycleDemoComponent viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
  }

  ngAfterViewInit() {
    console.log('LifeCycleDemoComponent ngAfterViewInit ');
    // console.log('LifeCycleDemoComponent viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
  }

  ngAfterViewChecked() {
    console.log('LifeCycleDemoComponent ngAfterViewChecked ');
    // console.log('LifeCycleDemoComponent viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
  }

  ngOnDestroy() {
    console.log('LifeCycleDemoComponent ngOnDestroy ');
    // console.log('LifeCycleDemoComponent viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
  }
}