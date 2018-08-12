import { Directive, Input, OnChanges, ElementRef, SimpleChange } from '@angular/core';

@Directive({
	selector: '[epo-focused]'
})
export class EpoFocusDirective implements OnChanges {
	@Input() focused: boolean;

	constructor(private element: ElementRef) {}

	ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
		if (this.focused) {
			this.element.nativeElement.focus();
		} else {
			this.element.nativeElement.blur();
		}
	}
}
