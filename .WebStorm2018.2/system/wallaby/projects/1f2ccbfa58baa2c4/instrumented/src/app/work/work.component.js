'use strict';
$_$wp(30);
var __decorate = ($_$w(30, 0), ($_$w(30, 1), ($_$w(30, 3), this) && ($_$w(30, 4), this.__decorate)) || ($_$w(30, 2), function (decorators, target, key, desc) {
    $_$wf(30);
    var c = ($_$w(30, 5), arguments.length), r = c < 3 ? ($_$w(30, 6), target) : ($_$w(30, 7), desc === null ? ($_$w(30, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(30, 9), desc)), d;
    if ($_$w(30, 10), ($_$w(30, 11), typeof Reflect === 'object') && ($_$w(30, 12), typeof Reflect.decorate === 'function')) {
        $_$w(30, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(30, 14), i >= 0; i--) {
            if ($_$w(30, 15), d = decorators[i]) {
                $_$w(30, 16), r = ($_$w(30, 17), c < 3 ? ($_$w(30, 19), d(r)) : ($_$w(30, 20), c > 3 ? ($_$w(30, 21), d(target, key, r)) : ($_$w(30, 22), d(target, key)))) || ($_$w(30, 18), r);
            }
        }
    }
    return $_$w(30, 23), (($_$w(30, 24), ($_$w(30, 26), c > 3) && ($_$w(30, 27), r)) && ($_$w(30, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(30, 28), ($_$w(30, 29), ($_$w(30, 31), this) && ($_$w(30, 32), this.__metadata)) || ($_$w(30, 30), function (k, v) {
    $_$wf(30);
    if ($_$w(30, 33), ($_$w(30, 34), typeof Reflect === 'object') && ($_$w(30, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(30, 36), Reflect.metadata(k, v);
    }
}));
$_$w(30, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(30, 38), require('@angular/core'));
var WorkComponent = ($_$w(30, 39), function () {
    $_$wf(30);
    function WorkComponent() {
        $_$wf(30);
    }
    $_$w(30, 40), WorkComponent.prototype.ngOnInit = function () {
        $_$wf(30);
    };
    $_$w(30, 41), WorkComponent = __decorate([
        core_1.Component({
            selector: 'eds-work',
            templateUrl: './work.component.html',
            styleUrls: ['./work.component.scss']
        }),
        __metadata('design:paramtypes', [])
    ], WorkComponent);
    return $_$w(30, 42), WorkComponent;
}());
$_$w(30, 43), exports.WorkComponent = WorkComponent;
$_$wpe(30);