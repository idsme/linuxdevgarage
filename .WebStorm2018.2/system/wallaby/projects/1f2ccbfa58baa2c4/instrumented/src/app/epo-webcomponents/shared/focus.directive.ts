import { Directive, OnChanges, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[focused]'
})
export class EpoFocusDirective implements OnChanges {
  @Input() focused: boolean;

  constructor(private element: ElementRef) { }

  ngOnChanges() {
    if (this.focused) {
      this.element.nativeElement.focus()
    } else {
      this.element.nativeElement.blur()
    }
  }

}
