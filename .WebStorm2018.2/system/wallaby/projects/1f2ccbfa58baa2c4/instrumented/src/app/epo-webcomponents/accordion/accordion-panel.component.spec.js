'use strict';
$_$wp(72);
$_$w(72, 0), Object.defineProperty(exports, '__esModule', { value: true });
var testing_1 = ($_$w(72, 1), require('@angular/core/testing'));
var accordion_panel_component_1 = ($_$w(72, 2), require('./accordion-panel.component'));
$_$w(72, 3), describe('AccordionPanelComponent', function () {
    $_$wf(72);
    var component = component || $_$w(72, 4);
    var fixture = fixture || $_$w(72, 5);
    $_$w(72, 6), beforeEach(testing_1.async(function () {
        $_$wf(72);
        $_$w(72, 7), testing_1.TestBed.configureTestingModule({ declarations: [accordion_panel_component_1.EpoAccordionPanelComponent] }).compileComponents();
    }));
    $_$w(72, 8), beforeEach(function () {
        $_$wf(72);
        $_$w(72, 9), fixture = testing_1.TestBed.createComponent(accordion_panel_component_1.EpoAccordionPanelComponent);
        $_$w(72, 10), component = fixture.componentInstance;
        $_$w(72, 11), fixture.detectChanges();
    });
});
$_$wpe(72);