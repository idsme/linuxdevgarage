'use strict';
$_$wp(70);
var __decorate = ($_$w(70, 0), ($_$w(70, 1), ($_$w(70, 3), this) && ($_$w(70, 4), this.__decorate)) || ($_$w(70, 2), function (decorators, target, key, desc) {
    $_$wf(70);
    var c = ($_$w(70, 5), arguments.length), r = c < 3 ? ($_$w(70, 6), target) : ($_$w(70, 7), desc === null ? ($_$w(70, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(70, 9), desc)), d;
    if ($_$w(70, 10), ($_$w(70, 11), typeof Reflect === 'object') && ($_$w(70, 12), typeof Reflect.decorate === 'function')) {
        $_$w(70, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(70, 14), i >= 0; i--) {
            if ($_$w(70, 15), d = decorators[i]) {
                $_$w(70, 16), r = ($_$w(70, 17), c < 3 ? ($_$w(70, 19), d(r)) : ($_$w(70, 20), c > 3 ? ($_$w(70, 21), d(target, key, r)) : ($_$w(70, 22), d(target, key)))) || ($_$w(70, 18), r);
            }
        }
    }
    return $_$w(70, 23), (($_$w(70, 24), ($_$w(70, 26), c > 3) && ($_$w(70, 27), r)) && ($_$w(70, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(70, 28), ($_$w(70, 29), ($_$w(70, 31), this) && ($_$w(70, 32), this.__metadata)) || ($_$w(70, 30), function (k, v) {
    $_$wf(70);
    if ($_$w(70, 33), ($_$w(70, 34), typeof Reflect === 'object') && ($_$w(70, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(70, 36), Reflect.metadata(k, v);
    }
}));
$_$w(70, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(70, 38), require('@angular/core'));
var EpoAccordionPanelComponent = ($_$w(70, 39), function () {
    $_$wf(70);
    function EpoAccordionPanelComponent() {
        $_$wf(70);
        $_$w(70, 40), this.active = false;
        $_$w(70, 41), this.focused = false;
        $_$w(70, 42), this.tabIndex = 0;
        $_$w(70, 43), this.toggleChange = new core_1.EventEmitter();
    }
    $_$w(70, 44), EpoAccordionPanelComponent.prototype.blur = function () {
        $_$wf(70);
        $_$w(70, 45), this.focused = false;
    };
    $_$w(70, 46), EpoAccordionPanelComponent.prototype.focus = function () {
        $_$wf(70);
        $_$w(70, 47), this.focused = true;
    };
    $_$w(70, 48), __decorate([
        core_1.Input(),
        __metadata('design:type', Number)
    ], EpoAccordionPanelComponent.prototype, 'ID', void 0);
    $_$w(70, 49), __decorate([
        core_1.Input(),
        __metadata('design:type', String)
    ], EpoAccordionPanelComponent.prototype, 'label', void 0);
    $_$w(70, 50), __decorate([
        core_1.Input(),
        __metadata('design:type', Number)
    ], EpoAccordionPanelComponent.prototype, 'count', void 0);
    $_$w(70, 51), __decorate([
        core_1.Input(),
        __metadata('design:type', Number)
    ], EpoAccordionPanelComponent.prototype, 'priorityCount', void 0);
    $_$w(70, 52), __decorate([
        core_1.Input(),
        __metadata('design:type', Object)
    ], EpoAccordionPanelComponent.prototype, 'active', void 0);
    $_$w(70, 53), __decorate([
        core_1.Input(),
        __metadata('design:type', Object)
    ], EpoAccordionPanelComponent.prototype, 'focused', void 0);
    $_$w(70, 54), __decorate([
        core_1.Input(),
        __metadata('design:type', Object)
    ], EpoAccordionPanelComponent.prototype, 'tabIndex', void 0);
    $_$w(70, 55), __decorate([
        core_1.Output(),
        __metadata('design:type', ($_$w(70, 56), ($_$w(70, 58), typeof (_a = ($_$w(70, 60), typeof core_1.EventEmitter !== 'undefined') && ($_$w(70, 61), core_1.EventEmitter)) === 'function') && ($_$w(70, 59), _a)) || ($_$w(70, 57), Object))
    ], EpoAccordionPanelComponent.prototype, 'toggleChange', void 0);
    $_$w(70, 62), EpoAccordionPanelComponent = __decorate([
        core_1.Component({
            selector: 'epo-panel',
            templateUrl: './accordion-panel.component.html'
        }),
        __metadata('design:paramtypes', [])
    ], EpoAccordionPanelComponent);
    return $_$w(70, 63), EpoAccordionPanelComponent;
    var _a = _a || $_$w(70, 64);
}());
$_$w(70, 65), exports.EpoAccordionPanelComponent = EpoAccordionPanelComponent;
$_$wpe(70);