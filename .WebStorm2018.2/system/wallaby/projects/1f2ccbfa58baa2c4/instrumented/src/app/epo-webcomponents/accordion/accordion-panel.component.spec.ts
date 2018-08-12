import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpoAccordionPanelComponent } from './accordion-panel.component';

describe('AccordionPanelComponent', () => {
	let component: EpoAccordionPanelComponent;
	let fixture: ComponentFixture<EpoAccordionPanelComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [EpoAccordionPanelComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EpoAccordionPanelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

});
