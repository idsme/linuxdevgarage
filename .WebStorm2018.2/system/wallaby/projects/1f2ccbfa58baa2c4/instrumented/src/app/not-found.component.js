'use strict';
$_$wp(17);
var __decorate = ($_$w(17, 0), ($_$w(17, 1), ($_$w(17, 3), this) && ($_$w(17, 4), this.__decorate)) || ($_$w(17, 2), function (decorators, target, key, desc) {
    $_$wf(17);
    var c = ($_$w(17, 5), arguments.length), r = c < 3 ? ($_$w(17, 6), target) : ($_$w(17, 7), desc === null ? ($_$w(17, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(17, 9), desc)), d;
    if ($_$w(17, 10), ($_$w(17, 11), typeof Reflect === 'object') && ($_$w(17, 12), typeof Reflect.decorate === 'function')) {
        $_$w(17, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(17, 14), i >= 0; i--) {
            if ($_$w(17, 15), d = decorators[i]) {
                $_$w(17, 16), r = ($_$w(17, 17), c < 3 ? ($_$w(17, 19), d(r)) : ($_$w(17, 20), c > 3 ? ($_$w(17, 21), d(target, key, r)) : ($_$w(17, 22), d(target, key)))) || ($_$w(17, 18), r);
            }
        }
    }
    return $_$w(17, 23), (($_$w(17, 24), ($_$w(17, 26), c > 3) && ($_$w(17, 27), r)) && ($_$w(17, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(17, 28), ($_$w(17, 29), ($_$w(17, 31), this) && ($_$w(17, 32), this.__metadata)) || ($_$w(17, 30), function (k, v) {
    $_$wf(17);
    if ($_$w(17, 33), ($_$w(17, 34), typeof Reflect === 'object') && ($_$w(17, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(17, 36), Reflect.metadata(k, v);
    }
}));
$_$w(17, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(17, 38), require('@angular/core'));
var NotFoundComponent = ($_$w(17, 39), function () {
    $_$wf(17);
    function NotFoundComponent() {
        $_$wf(17);
    }
    $_$w(17, 40), NotFoundComponent = __decorate([
        core_1.Component({
            selector: 'eds-not-found',
            templateUrl: './not-found.component.html'
        }),
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return $_$w(17, 41), NotFoundComponent;
}());
$_$w(17, 42), exports.NotFoundComponent = NotFoundComponent;
$_$wpe(17);