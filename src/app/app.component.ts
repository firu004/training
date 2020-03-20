import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent {
  message: string = 'Hello Angular 9+';
  someTextThroughComponentProperty = 'This is text binding through host component variable as input binding';
  variableToCaptureOutputEventInfo: string;
  ngDestroyDemoVariable = true;

  handleSomethingChanged(event: any){
    this.variableToCaptureOutputEventInfo = event;
  }

  constructor() {
    console.log('APP constructor ');
    // console.log('APP viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
  }

  ngOnChanges() {
    console.log('APP ngOnChanges ');
    // console.log('APP viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
  }

  ngOnInit(): void {
    console.log('APP ngOnInit ');
    // console.log('APP viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
  }

  ngDoCheck() {
    console.log('APP ngDoCheck ');
    // console.log('APP viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
  }

  ngAfterContentInit() {
    console.log('APP ngAfterContentInit ');
    // console.log('APP viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
  }

  ngAfterContentChecked() {
    console.log('APP ngAfterContentChecked ');
    // console.log('APP viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
  }

  ngAfterViewInit() {
    console.log('APP ngAfterViewInit ');
    // console.log('APP viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
  }

  ngAfterViewChecked() {
    console.log('APP ngAfterViewChecked ');
    // console.log('APP viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
  }

  ngOnDestroy() {
    console.log('APP ngOnDestroy ');
    // console.log('APP viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
  }
}
