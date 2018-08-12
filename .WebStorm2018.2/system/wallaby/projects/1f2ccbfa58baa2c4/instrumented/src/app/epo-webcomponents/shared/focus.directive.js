'use strict';
$_$wp(54);
var __decorate = ($_$w(54, 0), ($_$w(54, 1), ($_$w(54, 3), this) && ($_$w(54, 4), this.__decorate)) || ($_$w(54, 2), function (decorators, target, key, desc) {
    $_$wf(54);
    var c = ($_$w(54, 5), arguments.length), r = c < 3 ? ($_$w(54, 6), target) : ($_$w(54, 7), desc === null ? ($_$w(54, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(54, 9), desc)), d;
    if ($_$w(54, 10), ($_$w(54, 11), typeof Reflect === 'object') && ($_$w(54, 12), typeof Reflect.decorate === 'function')) {
        $_$w(54, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(54, 14), i >= 0; i--) {
            if ($_$w(54, 15), d = decorators[i]) {
                $_$w(54, 16), r = ($_$w(54, 17), c < 3 ? ($_$w(54, 19), d(r)) : ($_$w(54, 20), c > 3 ? ($_$w(54, 21), d(target, key, r)) : ($_$w(54, 22), d(target, key)))) || ($_$w(54, 18), r);
            }
        }
    }
    return $_$w(54, 23), (($_$w(54, 24), ($_$w(54, 26), c > 3) && ($_$w(54, 27), r)) && ($_$w(54, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(54, 28), ($_$w(54, 29), ($_$w(54, 31), this) && ($_$w(54, 32), this.__metadata)) || ($_$w(54, 30), function (k, v) {
    $_$wf(54);
    if ($_$w(54, 33), ($_$w(54, 34), typeof Reflect === 'object') && ($_$w(54, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(54, 36), Reflect.metadata(k, v);
    }
}));
$_$w(54, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(54, 38), require('@angular/core'));
var EpoFocusDirective = ($_$w(54, 39), function () {
    $_$wf(54);
    function EpoFocusDirective(element) {
        $_$wf(54);
        $_$w(54, 40), this.element = element;
    }
    $_$w(54, 41), EpoFocusDirective.prototype.ngOnChanges = function () {
        $_$wf(54);
        if ($_$w(54, 42), this.focused) {
            $_$w(54, 43), this.element.nativeElement.focus();
        } else {
            $_$w(54, 44), this.element.nativeElement.blur();
        }
    };
    $_$w(54, 45), __decorate([
        core_1.Input(),
        __metadata('design:type', Boolean)
    ], EpoFocusDirective.prototype, 'focused', void 0);
    $_$w(54, 46), EpoFocusDirective = __decorate([
        core_1.Directive({ selector: '[focused]' }),
        __metadata('design:paramtypes', [($_$w(54, 47), ($_$w(54, 49), typeof (_a = ($_$w(54, 51), typeof core_1.ElementRef !== 'undefined') && ($_$w(54, 52), core_1.ElementRef)) === 'function') && ($_$w(54, 50), _a)) || ($_$w(54, 48), Object)])
    ], EpoFocusDirective);
    return $_$w(54, 53), EpoFocusDirective;
    var _a = _a || $_$w(54, 54);
}());
$_$w(54, 55), exports.EpoFocusDirective = EpoFocusDirective;
$_$wpe(54);