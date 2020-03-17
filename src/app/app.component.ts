import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = 'Hello Angular 9+';
  someTextThroughComponentProperty = 'This is text binding through host component variable as input binding';
  variableToCaptureOutputEventInfo: string;

  handleSomethingChanged(event: any){
    this.variableToCaptureOutputEventInfo = event;
  }
}
