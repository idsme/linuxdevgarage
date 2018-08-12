'use strict';
$_$wp(100);
var __decorate = ($_$w(100, 0), ($_$w(100, 1), ($_$w(100, 3), this) && ($_$w(100, 4), this.__decorate)) || ($_$w(100, 2), function (decorators, target, key, desc) {
    $_$wf(100);
    var c = ($_$w(100, 5), arguments.length), r = c < 3 ? ($_$w(100, 6), target) : ($_$w(100, 7), desc === null ? ($_$w(100, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(100, 9), desc)), d;
    if ($_$w(100, 10), ($_$w(100, 11), typeof Reflect === 'object') && ($_$w(100, 12), typeof Reflect.decorate === 'function')) {
        $_$w(100, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(100, 14), i >= 0; i--) {
            if ($_$w(100, 15), d = decorators[i]) {
                $_$w(100, 16), r = ($_$w(100, 17), c < 3 ? ($_$w(100, 19), d(r)) : ($_$w(100, 20), c > 3 ? ($_$w(100, 21), d(target, key, r)) : ($_$w(100, 22), d(target, key)))) || ($_$w(100, 18), r);
            }
        }
    }
    return $_$w(100, 23), (($_$w(100, 24), ($_$w(100, 26), c > 3) && ($_$w(100, 27), r)) && ($_$w(100, 25), Object.defineProperty(target, key, r)), r);
}));
$_$w(100, 28), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(100, 29), require('@angular/core'));
var FiltersComponent = ($_$w(100, 30), function () {
    $_$wf(100);
    function FiltersComponent() {
        $_$wf(100);
    }
    $_$w(100, 31), FiltersComponent = __decorate([core_1.Component({
            selector: 'eds-filters',
            templateUrl: './filters.component.html'
        })], FiltersComponent);
    return $_$w(100, 32), FiltersComponent;
}());
$_$w(100, 33), exports.FiltersComponent = FiltersComponent;
$_$wpe(100);