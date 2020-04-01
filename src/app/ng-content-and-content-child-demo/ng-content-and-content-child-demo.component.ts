import { Component, OnInit, ContentChild, ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ng-content-and-content-child-demo',
  templateUrl: './ng-content-and-content-child-demo.component.html',
  styleUrls: ['./ng-content-and-content-child-demo.component.css']
})
export class NgContentAndContentChildDemoComponent implements AfterContentInit {

  @ContentChild('contentChildRefVariable') contentChild: ElementRef;

  constructor() { }

  // doing in this this method because this is where content is initiated or rendered
  ngAfterContentInit(){
    this.contentChild.nativeElement.style.backgroundColor = 'yellow';
    this.contentChild.nativeElement.style.marginBottom = '10px';
  }

}
