'use strict';
$_$wp(60);
var __decorate = ($_$w(60, 0), ($_$w(60, 1), ($_$w(60, 3), this) && ($_$w(60, 4), this.__decorate)) || ($_$w(60, 2), function (decorators, target, key, desc) {
    $_$wf(60);
    var c = ($_$w(60, 5), arguments.length), r = c < 3 ? ($_$w(60, 6), target) : ($_$w(60, 7), desc === null ? ($_$w(60, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(60, 9), desc)), d;
    if ($_$w(60, 10), ($_$w(60, 11), typeof Reflect === 'object') && ($_$w(60, 12), typeof Reflect.decorate === 'function')) {
        $_$w(60, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(60, 14), i >= 0; i--) {
            if ($_$w(60, 15), d = decorators[i]) {
                $_$w(60, 16), r = ($_$w(60, 17), c < 3 ? ($_$w(60, 19), d(r)) : ($_$w(60, 20), c > 3 ? ($_$w(60, 21), d(target, key, r)) : ($_$w(60, 22), d(target, key)))) || ($_$w(60, 18), r);
            }
        }
    }
    return $_$w(60, 23), (($_$w(60, 24), ($_$w(60, 26), c > 3) && ($_$w(60, 27), r)) && ($_$w(60, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(60, 28), ($_$w(60, 29), ($_$w(60, 31), this) && ($_$w(60, 32), this.__metadata)) || ($_$w(60, 30), function (k, v) {
    $_$wf(60);
    if ($_$w(60, 33), ($_$w(60, 34), typeof Reflect === 'object') && ($_$w(60, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(60, 36), Reflect.metadata(k, v);
    }
}));
$_$w(60, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(60, 38), require('@angular/core'));
var EpoMainMenuItemComponent = ($_$w(60, 39), function () {
    $_$wf(60);
    function EpoMainMenuItemComponent(elem) {
        $_$wf(60);
        $_$w(60, 40), this.elem = elem;
    }
    $_$w(60, 41), EpoMainMenuItemComponent.prototype.ngOnChanges = function () {
        $_$wf(60);
        if ($_$w(60, 42), this.hasFocus) {
            $_$w(60, 43), this.elem.nativeElement.querySelector('div').focus();
        }
    };
    $_$w(60, 44), __decorate([
        core_1.Input(),
        __metadata('design:type', Object)
    ], EpoMainMenuItemComponent.prototype, 'item', void 0);
    $_$w(60, 45), __decorate([
        core_1.Input(),
        __metadata('design:type', Boolean)
    ], EpoMainMenuItemComponent.prototype, 'hasFocus', void 0);
    $_$w(60, 46), EpoMainMenuItemComponent = __decorate([
        core_1.Component({
            selector: 'epo-main-menu-item',
            templateUrl: './main-menu-item.component.html',
            styleUrls: ['./main-menu-item.component.scss']
        }),
        __metadata('design:paramtypes', [($_$w(60, 47), ($_$w(60, 49), typeof (_a = ($_$w(60, 51), typeof core_1.ElementRef !== 'undefined') && ($_$w(60, 52), core_1.ElementRef)) === 'function') && ($_$w(60, 50), _a)) || ($_$w(60, 48), Object)])
    ], EpoMainMenuItemComponent);
    return $_$w(60, 53), EpoMainMenuItemComponent;
    var _a = _a || $_$w(60, 54);
}());
$_$w(60, 55), exports.EpoMainMenuItemComponent = EpoMainMenuItemComponent;
$_$wpe(60);