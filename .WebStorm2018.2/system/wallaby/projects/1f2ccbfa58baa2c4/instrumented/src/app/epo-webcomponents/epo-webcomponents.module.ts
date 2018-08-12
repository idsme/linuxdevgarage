import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EpoFocusDirective } from './shared/focus.directive';
import { EpoMainMenuComponent } from './mainmenu/main-menu.component';
import { EpoMainMenuItemComponent } from './mainmenu/main-menu-item.component';
import { EpoAccordionComponent } from './accordion/accordion.component';
import { EpoAccordionPanelComponent } from './accordion/accordion-panel.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
	],
	declarations: [
		EpoMainMenuComponent,
		EpoMainMenuItemComponent,
		EpoFocusDirective,
		EpoAccordionComponent,
		EpoAccordionPanelComponent,
	],
	providers: [],
	exports: [
		EpoMainMenuComponent,
		EpoMainMenuItemComponent,
		EpoFocusDirective,
		EpoAccordionComponent,
		EpoAccordionPanelComponent,
	]
})
export class EpoWebcomponentsModule {
	constructor() {
	}
}
