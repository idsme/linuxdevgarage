'use strict';
$_$wp(49);
var __decorate = ($_$w(49, 0), ($_$w(49, 1), ($_$w(49, 3), this) && ($_$w(49, 4), this.__decorate)) || ($_$w(49, 2), function (decorators, target, key, desc) {
    $_$wf(49);
    var c = ($_$w(49, 5), arguments.length), r = c < 3 ? ($_$w(49, 6), target) : ($_$w(49, 7), desc === null ? ($_$w(49, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(49, 9), desc)), d;
    if ($_$w(49, 10), ($_$w(49, 11), typeof Reflect === 'object') && ($_$w(49, 12), typeof Reflect.decorate === 'function')) {
        $_$w(49, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(49, 14), i >= 0; i--) {
            if ($_$w(49, 15), d = decorators[i]) {
                $_$w(49, 16), r = ($_$w(49, 17), c < 3 ? ($_$w(49, 19), d(r)) : ($_$w(49, 20), c > 3 ? ($_$w(49, 21), d(target, key, r)) : ($_$w(49, 22), d(target, key)))) || ($_$w(49, 18), r);
            }
        }
    }
    return $_$w(49, 23), (($_$w(49, 24), ($_$w(49, 26), c > 3) && ($_$w(49, 27), r)) && ($_$w(49, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(49, 28), ($_$w(49, 29), ($_$w(49, 31), this) && ($_$w(49, 32), this.__metadata)) || ($_$w(49, 30), function (k, v) {
    $_$wf(49);
    if ($_$w(49, 33), ($_$w(49, 34), typeof Reflect === 'object') && ($_$w(49, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(49, 36), Reflect.metadata(k, v);
    }
}));
$_$w(49, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(49, 38), require('@angular/core'));
var AuthInterceptor = ($_$w(49, 39), function () {
    $_$wf(49);
    function AuthInterceptor() {
        $_$wf(49);
    }
    $_$w(49, 40), AuthInterceptor.prototype.intercept = function (req, next) {
        $_$wf(49);
        var authReq = ($_$w(49, 41), req.clone({ withCredentials: true }));
        return $_$w(49, 42), next.handle(authReq);
    };
    $_$w(49, 43), AuthInterceptor = __decorate([
        core_1.Injectable(),
        __metadata('design:paramtypes', [])
    ], AuthInterceptor);
    return $_$w(49, 44), AuthInterceptor;
}());
$_$w(49, 45), exports.AuthInterceptor = AuthInterceptor;
$_$wpe(49);