import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[my-error]'
})
export class ErrorDirective {

  constructor(elr:ElementRef) {
    elr.nativeElement.style.background = 'red';
   }

}
