import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-demo',
  templateUrl: './output-demo.component.html',
  styleUrls: ['./output-demo.component.css']
})
export class OutputDemoComponent implements OnInit {

  @Output() somethingChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  keypressHandler(event: any) {
    // this input is coming from the keypress event on input text box
    const inputText = event.target.value;

    // lets annouce outside world something changed
    this.somethingChanged.emit(inputText);
  }
}
