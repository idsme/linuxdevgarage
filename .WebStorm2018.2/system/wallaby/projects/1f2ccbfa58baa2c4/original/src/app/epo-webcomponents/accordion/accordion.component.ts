import { Component, AfterContentInit, Input, ContentChildren, HostListener } from '@angular/core';
import { EpoAccordionPanelComponent } from './accordion-panel.component';
import { QueryList } from '@angular/core';
import { KEYS } from '../utils/keycodes';

@Component({
	selector: 'epo-accordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss']
})
export class EpoAccordionComponent implements AfterContentInit {

	@Input() selectPanel = 0;

	@HostListener('document:keydown', ['$event'])
	@ContentChildren(EpoAccordionPanelComponent) panels: QueryList<EpoAccordionPanelComponent>;

	private focusedIndex = 0;

	constructor() { }

	ngAfterContentInit() {
		this.panels.toArray()[this.selectPanel].active = true;

		this.panels.toArray().map(panel => {
			panel.toggleChange.subscribe(() => {
				this.openPanel(panel);
			});
		});
	}

	openPanel(panel: EpoAccordionPanelComponent) {
		let samePanel = false;
		if (panel.active) {
			samePanel = true;
		}

		this.panels.toArray().map(p => p.active = false);

		if (!samePanel) {
			panel.active = true;
		}
	}

	public keyboardInput(event: KeyboardEvent) {
		const { UP, DOWN, LEFT, RIGHT } = KEYS;
		let focusedChild: EpoAccordionPanelComponent[] = [];
		let focusIndex: number;

		focusedChild = this.panels.filter(child => child.focused);
		focusIndex = this.panels.toArray().indexOf(focusedChild[0]);

		switch (event.keyCode) {
			case (UP || LEFT):
				event.preventDefault();
				this.setFocus(focusIndex - 1);
				break;
			case (DOWN || RIGHT):
				event.preventDefault();
				this.setFocus(focusIndex + 1);
				break;
			default:
				break;
		}
	}

	public setFocus(panelIndex: number) {
		this.focusedIndex = panelIndex < 0 ? 0 : panelIndex;
		this.focusedIndex = panelIndex >= this.panels.length ? this.panels.length - 1 : this.focusedIndex;

		this.panels.toArray().forEach((panel, index) => {
			if (index === this.focusedIndex) {
				panel.focused = true;
				panel.tabIndex = 0;
			} else {
				panel.focused = false;
				panel.tabIndex = -1;
			}
		});
	}
}
