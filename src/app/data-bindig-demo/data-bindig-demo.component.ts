import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bindig-demo',
  templateUrl: './data-bindig-demo.component.html',
  styleUrls: ['./data-bindig-demo.component.css']
})
export class DataBindigDemoComponent implements OnInit {
  someText = 'This is string interpolation binding';
  className = 'some-class-name';

  constructor() { }

  ngOnInit(): void {
  }

}
