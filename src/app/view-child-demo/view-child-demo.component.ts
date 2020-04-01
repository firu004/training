import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-view-child-demo',
  templateUrl: './view-child-demo.component.html',
  styleUrls: ['./view-child-demo.component.css']
})
export class ViewChildDemoComponent implements AfterViewInit {

  @ViewChild('viewChildRefVariable') viewChildRef: ElementRef;

  constructor() { }

  // doing in this this method because this is where view (or template of host component) is initiated or rendered
  ngAfterViewInit(): void {
    this.viewChildRef.nativeElement.style.backgroundColor = 'lightblue';
  }

}
