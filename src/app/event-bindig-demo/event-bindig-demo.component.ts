import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bindig-demo',
  templateUrl: './event-bindig-demo.component.html',
  styleUrls: ['./event-bindig-demo.component.css']
})
export class EventBindigDemoComponent implements OnInit {

  someText = 'This is simple event binding example, Click to see the demo';

  constructor() { }

  ngOnInit(): void {
  }

  // the name can be anything
  eventHandler(event: Event) {
    alert('Simple Event Binding Example');
    console.log(event);
  }

}
