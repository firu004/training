import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appStructuralDirectiveDemo]'
})
export class StructuralDirectiveDemoDirective {

  @Input() views: number;

  constructor(private tr: TemplateRef<any>, private vc: ViewContainerRef) { }


  // as we have input and using the input we should listen to ngOnChanges
  // which is triggered everytime there is change in input

  ngOnChanges() {

    // we can only use host elememt template and customize it with context but 
    // cannot create a new template
    // so in simple terms structral directives can use same host element and create 
    // multiple templates but not create something completely new

    for(let i=1; i<= this.views; i++){
      // the second argument is context which can be used in the template
      this.vc.createEmbeddedView(this.tr, { number: i });
    }

  }

}
