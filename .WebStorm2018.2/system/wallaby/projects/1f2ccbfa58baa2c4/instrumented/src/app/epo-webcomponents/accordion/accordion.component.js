'use strict';
$_$wp(66);
var __decorate = ($_$w(66, 0), ($_$w(66, 1), ($_$w(66, 3), this) && ($_$w(66, 4), this.__decorate)) || ($_$w(66, 2), function (decorators, target, key, desc) {
    $_$wf(66);
    var c = ($_$w(66, 5), arguments.length), r = c < 3 ? ($_$w(66, 6), target) : ($_$w(66, 7), desc === null ? ($_$w(66, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(66, 9), desc)), d;
    if ($_$w(66, 10), ($_$w(66, 11), typeof Reflect === 'object') && ($_$w(66, 12), typeof Reflect.decorate === 'function')) {
        $_$w(66, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(66, 14), i >= 0; i--) {
            if ($_$w(66, 15), d = decorators[i]) {
                $_$w(66, 16), r = ($_$w(66, 17), c < 3 ? ($_$w(66, 19), d(r)) : ($_$w(66, 20), c > 3 ? ($_$w(66, 21), d(target, key, r)) : ($_$w(66, 22), d(target, key)))) || ($_$w(66, 18), r);
            }
        }
    }
    return $_$w(66, 23), (($_$w(66, 24), ($_$w(66, 26), c > 3) && ($_$w(66, 27), r)) && ($_$w(66, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(66, 28), ($_$w(66, 29), ($_$w(66, 31), this) && ($_$w(66, 32), this.__metadata)) || ($_$w(66, 30), function (k, v) {
    $_$wf(66);
    if ($_$w(66, 33), ($_$w(66, 34), typeof Reflect === 'object') && ($_$w(66, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(66, 36), Reflect.metadata(k, v);
    }
}));
$_$w(66, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(66, 38), require('@angular/core'));
var accordion_panel_component_1 = ($_$w(66, 39), require('./accordion-panel.component'));
var core_2 = ($_$w(66, 40), require('@angular/core'));
var keycodes_1 = ($_$w(66, 41), require('../utils/keycodes'));
var EpoAccordionComponent = ($_$w(66, 42), function () {
    $_$wf(66);
    function EpoAccordionComponent() {
        $_$wf(66);
        $_$w(66, 43), this.selectPanel = 0;
        $_$w(66, 44), this.focusedIndex = 0;
    }
    $_$w(66, 45), EpoAccordionComponent.prototype.ngAfterContentInit = function () {
        $_$wf(66);
        var _this = ($_$w(66, 46), this);
        $_$w(66, 47), this.panels.toArray()[this.selectPanel].active = true;
        $_$w(66, 48), this.panels.toArray().map(function (panel) {
            $_$wf(66);
            $_$w(66, 49), panel.toggleChange.subscribe(function () {
                $_$wf(66);
                $_$w(66, 50), _this.openPanel(panel);
            });
        });
    };
    $_$w(66, 51), EpoAccordionComponent.prototype.openPanel = function (panel) {
        $_$wf(66);
        var samePanel = ($_$w(66, 52), false);
        if ($_$w(66, 53), panel.active) {
            $_$w(66, 54), samePanel = true;
        }
        $_$w(66, 55), this.panels.toArray().map(function (p) {
            $_$wf(66);
            return $_$w(66, 56), p.active = false;
        });
        if ($_$w(66, 57), !samePanel) {
            $_$w(66, 58), panel.active = true;
        }
    };
    $_$w(66, 59), EpoAccordionComponent.prototype.keyboardInput = function (event) {
        $_$wf(66);
        var UP = ($_$w(66, 60), keycodes_1.KEYS.UP), DOWN = keycodes_1.KEYS.DOWN, LEFT = keycodes_1.KEYS.LEFT, RIGHT = keycodes_1.KEYS.RIGHT;
        var focusedChild = ($_$w(66, 61), []);
        var focusIndex = focusIndex || $_$w(66, 62);
        $_$w(66, 63), focusedChild = this.panels.filter(function (child) {
            $_$wf(66);
            return $_$w(66, 64), child.focused;
        });
        $_$w(66, 65), focusIndex = this.panels.toArray().indexOf(focusedChild[0]);
        switch ($_$w(66, 66), event.keyCode) {
        case ($_$w(66, 70), UP) || ($_$w(66, 71), LEFT): {
                $_$w(66, 67), event.preventDefault();
                $_$w(66, 68), this.setFocus(focusIndex - 1);
                {
                    $_$w(66, 69);
                    break;
                }
            }
        case ($_$w(66, 75), DOWN) || ($_$w(66, 76), RIGHT): {
                $_$w(66, 72), event.preventDefault();
                $_$w(66, 73), this.setFocus(focusIndex + 1);
                {
                    $_$w(66, 74);
                    break;
                }
            }
        default: {
                {
                    $_$w(66, 77);
                    break;
                }
            }
        }
    };
    $_$w(66, 78), EpoAccordionComponent.prototype.setFocus = function (panelIndex) {
        $_$wf(66);
        var _this = ($_$w(66, 79), this);
        $_$w(66, 80), this.focusedIndex = panelIndex < 0 ? ($_$w(66, 81), 0) : ($_$w(66, 82), panelIndex);
        $_$w(66, 83), this.focusedIndex = panelIndex >= this.panels.length ? ($_$w(66, 84), this.panels.length - 1) : ($_$w(66, 85), this.focusedIndex);
        $_$w(66, 86), this.panels.toArray().forEach(function (panel, index) {
            $_$wf(66);
            if ($_$w(66, 87), index === _this.focusedIndex) {
                $_$w(66, 88), panel.focused = true;
                $_$w(66, 89), panel.tabIndex = 0;
            } else {
                $_$w(66, 90), panel.focused = false;
                $_$w(66, 91), panel.tabIndex = -1;
            }
        });
    };
    $_$w(66, 92), __decorate([
        core_1.Input(),
        __metadata('design:type', Object)
    ], EpoAccordionComponent.prototype, 'selectPanel', void 0);
    $_$w(66, 93), __decorate([
        core_1.HostListener('document:keydown', ['$event']),
        core_1.ContentChildren(accordion_panel_component_1.EpoAccordionPanelComponent),
        __metadata('design:type', ($_$w(66, 94), ($_$w(66, 96), typeof (_a = ($_$w(66, 98), typeof core_2.QueryList !== 'undefined') && ($_$w(66, 99), core_2.QueryList)) === 'function') && ($_$w(66, 97), _a)) || ($_$w(66, 95), Object))
    ], EpoAccordionComponent.prototype, 'panels', void 0);
    $_$w(66, 100), EpoAccordionComponent = __decorate([
        core_1.Component({
            selector: 'epo-accordion',
            templateUrl: './accordion.component.html',
            styleUrls: ['./accordion.component.scss']
        }),
        __metadata('design:paramtypes', [])
    ], EpoAccordionComponent);
    return $_$w(66, 101), EpoAccordionComponent;
    var _a = _a || $_$w(66, 102);
}());
$_$w(66, 103), exports.EpoAccordionComponent = EpoAccordionComponent;
$_$wpe(66);