import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[myCustomIf]'
})
export class StructuralDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

    @Input() set myCustomIf(condition:boolean){
      if(condition){
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
      else{
        this.viewContainer.clear();
      }
    }

}
