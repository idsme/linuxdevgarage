import { Component, ElementRef, Input, OnChanges } from '@angular/core';
import { EpoMainMenuItem } from './main-menu-item.model';

@Component({
	selector: 'epo-main-menu-item',
	templateUrl: './main-menu-item.component.html',
	styleUrls: ['./main-menu-item.component.scss']
})
export class EpoMainMenuItemComponent implements OnChanges {
	@Input() item: EpoMainMenuItem;
	@Input() hasFocus: false;

	constructor(private elem: ElementRef) {}

	ngOnChanges() {
		if (this.hasFocus) {
			this.elem.nativeElement.querySelector('div').focus();
		}
	}
}
