'use strict';
$_$wp(69);
$_$w(69, 0), Object.defineProperty(exports, '__esModule', { value: true });
var testing_1 = ($_$w(69, 1), require('@angular/core/testing'));
var accordion_component_1 = ($_$w(69, 2), require('./accordion.component'));
$_$w(69, 3), describe('AccordionComponent', function () {
    $_$wf(69);
    var component = component || $_$w(69, 4);
    var fixture = fixture || $_$w(69, 5);
    $_$w(69, 6), beforeEach(testing_1.async(function () {
        $_$wf(69);
        $_$w(69, 7), testing_1.TestBed.configureTestingModule({ declarations: [accordion_component_1.EpoAccordionComponent] }).compileComponents();
    }));
    $_$w(69, 8), beforeEach(function () {
        $_$wf(69);
        $_$w(69, 9), fixture = testing_1.TestBed.createComponent(accordion_component_1.EpoAccordionComponent);
        $_$w(69, 10), component = fixture.componentInstance;
        $_$w(69, 11), fixture.detectChanges();
    });
});
$_$wpe(69);