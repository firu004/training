import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHostListenerHostBinding]'
})
export class HostListenerHostBindingDirective {
  @HostBinding('style.backgroundColor') backgroundColor;
  @HostListener('click') clickHandler(event: any) {
    this.backgroundColor = 'red';
  } 

  constructor() { } 

}
