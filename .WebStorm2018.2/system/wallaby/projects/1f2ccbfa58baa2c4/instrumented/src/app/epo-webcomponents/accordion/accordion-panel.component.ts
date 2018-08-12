import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'epo-panel',
	templateUrl: './accordion-panel.component.html'
})
export class EpoAccordionPanelComponent {
	@Input() ID: number;
	@Input() label: string;
	@Input() count: number;
	@Input() priorityCount: number;
	@Input() active = false;
	@Input() focused = false;
	@Input() tabIndex = 0;

	@Output() toggleChange: EventEmitter<any> = new EventEmitter<any>();

	constructor() { }

	blur() {
		this.focused = false;
	}

	focus() {
		this.focused = true;
	}

}
