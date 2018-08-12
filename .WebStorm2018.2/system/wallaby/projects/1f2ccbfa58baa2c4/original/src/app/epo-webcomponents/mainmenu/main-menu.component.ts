import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { KEYS } from '../utils/keycodes';
import { EpoMainMenuItem } from './main-menu-item.model';

@Component({
	selector: 'epo-main-menu',
	templateUrl: './main-menu.component.html',
	styleUrls: [ './main-menu.component.scss' ]
})
export class EpoMainMenuComponent {
	@Input() items: EpoMainMenuItem[];
	@Input() selectedItem: EpoMainMenuItem;
	@Output() selectedItemChange = new EventEmitter();

	focussedItem: EpoMainMenuItem;
	isOpen = false;

	constructor(private elem: ElementRef) {}

	@HostListener('keydown', [ '$event' ])
	setFocus($event) {
		const {ESC, ENTER, UP, DOWN, PAGE_DOWN, PAGE_UP, HOME, END} = KEYS;

		if (this.isOpen) {
			switch ($event.keyCode) {
				case DOWN:
					this.focussedItem = this.items[ this.items.indexOf(this.focussedItem) + 1 ] || this.items[ 0 ];
					break;

				case UP:
					this.focussedItem = this.items[ this.items.indexOf(this.focussedItem) - 1 ] || this.items[ this.items.length - 1 ];
					break;

				case ESC:
					this.isOpen = false;
					break;

				case PAGE_UP:
				case HOME:
					this.focussedItem = this.items[0];
					break;

				case PAGE_DOWN:
				case END:
					this.focussedItem = this.items[this.items.length - 1];
					break;

				case ENTER:
					this.clickItem(this.focussedItem);
					this.isOpen = false;
					break;
			}
		} else if ($event.keyCode === ENTER) {
			this.toggle();
		}
	}

	@HostListener('document:click', ['$event'])
	clickout(event) {
		if (!this.elem.nativeElement.contains(event.target)) {
			this.isOpen = false;
		}
	}

	isFocused(item: EpoMainMenuItem) {
		return item === this.focussedItem;
	}

	toggle() {
		this.isOpen = !this.isOpen;
		if (!this.focussedItem && this.isOpen) {
			this.focussedItem = this.selectedItem;
		}
	}

	clickItem(item: EpoMainMenuItem) {
		this.selectedItemChange.emit(item);
	}
}
