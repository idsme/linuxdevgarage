'use strict';
$_$wp(83);
var __decorate = ($_$w(83, 0), ($_$w(83, 1), ($_$w(83, 3), this) && ($_$w(83, 4), this.__decorate)) || ($_$w(83, 2), function (decorators, target, key, desc) {
    $_$wf(83);
    var c = ($_$w(83, 5), arguments.length), r = c < 3 ? ($_$w(83, 6), target) : ($_$w(83, 7), desc === null ? ($_$w(83, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(83, 9), desc)), d;
    if ($_$w(83, 10), ($_$w(83, 11), typeof Reflect === 'object') && ($_$w(83, 12), typeof Reflect.decorate === 'function')) {
        $_$w(83, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(83, 14), i >= 0; i--) {
            if ($_$w(83, 15), d = decorators[i]) {
                $_$w(83, 16), r = ($_$w(83, 17), c < 3 ? ($_$w(83, 19), d(r)) : ($_$w(83, 20), c > 3 ? ($_$w(83, 21), d(target, key, r)) : ($_$w(83, 22), d(target, key)))) || ($_$w(83, 18), r);
            }
        }
    }
    return $_$w(83, 23), (($_$w(83, 24), ($_$w(83, 26), c > 3) && ($_$w(83, 27), r)) && ($_$w(83, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(83, 28), ($_$w(83, 29), ($_$w(83, 31), this) && ($_$w(83, 32), this.__metadata)) || ($_$w(83, 30), function (k, v) {
    $_$wf(83);
    if ($_$w(83, 33), ($_$w(83, 34), typeof Reflect === 'object') && ($_$w(83, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(83, 36), Reflect.metadata(k, v);
    }
}));
$_$w(83, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(83, 38), require('@angular/core'));
var authentication_1 = ($_$w(83, 39), require('../authentication/authentication'));
var ActivateGuard = ($_$w(83, 40), function () {
    $_$wf(83);
    function ActivateGuard(authentication) {
        $_$wf(83);
        $_$w(83, 41), this.authentication = authentication;
    }
    $_$w(83, 42), ActivateGuard.prototype.canActivate = function () {
        $_$wf(83);
        return $_$w(83, 43), this.authentication.isAuthenticated();
    };
    $_$w(83, 44), ActivateGuard = __decorate([
        core_1.Injectable(),
        __metadata('design:paramtypes', [authentication_1.Authentication])
    ], ActivateGuard);
    return $_$w(83, 45), ActivateGuard;
}());
$_$w(83, 46), exports.ActivateGuard = ActivateGuard;
$_$wpe(83);