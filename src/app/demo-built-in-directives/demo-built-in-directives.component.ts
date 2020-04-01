import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-built-in-directives',
  templateUrl: './demo-built-in-directives.component.html',
  styleUrls: ['./demo-built-in-directives.component.css']
})
export class DemoBuiltInDirectivesComponent implements OnInit {

  ngIfVariable = true;
  users = [
    { name: 'User 1', role: 'Developer' },
    { name: 'User 2', role: 'Tester' },
    { name: 'User 3', role: 'Developer' },
    { name: 'User 4', role: 'Tester' }
  ];
  switchCaseVariable = 1;

  constructor() { }

  ngOnInit(): void {
  }

  showHideElement(){
    this.ngIfVariable = !this.ngIfVariable;
  }

}
