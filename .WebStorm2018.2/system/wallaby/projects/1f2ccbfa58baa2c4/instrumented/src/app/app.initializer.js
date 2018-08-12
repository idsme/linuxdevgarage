'use strict';
$_$wp(14);
var __decorate = ($_$w(14, 0), ($_$w(14, 1), ($_$w(14, 3), this) && ($_$w(14, 4), this.__decorate)) || ($_$w(14, 2), function (decorators, target, key, desc) {
    $_$wf(14);
    var c = ($_$w(14, 5), arguments.length), r = c < 3 ? ($_$w(14, 6), target) : ($_$w(14, 7), desc === null ? ($_$w(14, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(14, 9), desc)), d;
    if ($_$w(14, 10), ($_$w(14, 11), typeof Reflect === 'object') && ($_$w(14, 12), typeof Reflect.decorate === 'function')) {
        $_$w(14, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(14, 14), i >= 0; i--) {
            if ($_$w(14, 15), d = decorators[i]) {
                $_$w(14, 16), r = ($_$w(14, 17), c < 3 ? ($_$w(14, 19), d(r)) : ($_$w(14, 20), c > 3 ? ($_$w(14, 21), d(target, key, r)) : ($_$w(14, 22), d(target, key)))) || ($_$w(14, 18), r);
            }
        }
    }
    return $_$w(14, 23), (($_$w(14, 24), ($_$w(14, 26), c > 3) && ($_$w(14, 27), r)) && ($_$w(14, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(14, 28), ($_$w(14, 29), ($_$w(14, 31), this) && ($_$w(14, 32), this.__metadata)) || ($_$w(14, 30), function (k, v) {
    $_$wf(14);
    if ($_$w(14, 33), ($_$w(14, 34), typeof Reflect === 'object') && ($_$w(14, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(14, 36), Reflect.metadata(k, v);
    }
}));
$_$w(14, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(14, 38), require('@angular/core'));
var account_service_1 = ($_$w(14, 39), require('./core/services/account/account.service'));
var authentication_1 = ($_$w(14, 40), require('./core/services/authentication/authentication'));
var AppInitializer = ($_$w(14, 41), function () {
    $_$wf(14);
    function AppInitializer(accountService, authentication) {
        $_$wf(14);
        $_$w(14, 42), this.accountService = accountService;
        $_$w(14, 43), this.authentication = authentication;
    }
    $_$w(14, 44), AppInitializer.prototype.init = function () {
        $_$wf(14);
        var _this = ($_$w(14, 45), this);
        return $_$w(14, 46), new Promise(function (resolve, reject) {
            $_$wf(14);
            $_$w(14, 47), _this.accountService.getMe().subscribe(function (response) {
                $_$wf(14);
                $_$w(14, 48), _this.authentication.setData(response);
                $_$w(14, 49), resolve();
            }, function () {
                $_$wf(14);
                $_$w(14, 50), reject();
            });
        });
    };
    $_$w(14, 51), AppInitializer = __decorate([
        core_1.Injectable(),
        __metadata('design:paramtypes', [
            account_service_1.AccountService,
            authentication_1.Authentication
        ])
    ], AppInitializer);
    return $_$w(14, 52), AppInitializer;
}());
$_$w(14, 53), exports.AppInitializer = AppInitializer;
$_$wpe(14);