'use strict';
$_$wp(95);
var __decorate = ($_$w(95, 0), ($_$w(95, 1), ($_$w(95, 3), this) && ($_$w(95, 4), this.__decorate)) || ($_$w(95, 2), function (decorators, target, key, desc) {
    $_$wf(95);
    var c = ($_$w(95, 5), arguments.length), r = c < 3 ? ($_$w(95, 6), target) : ($_$w(95, 7), desc === null ? ($_$w(95, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(95, 9), desc)), d;
    if ($_$w(95, 10), ($_$w(95, 11), typeof Reflect === 'object') && ($_$w(95, 12), typeof Reflect.decorate === 'function')) {
        $_$w(95, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(95, 14), i >= 0; i--) {
            if ($_$w(95, 15), d = decorators[i]) {
                $_$w(95, 16), r = ($_$w(95, 17), c < 3 ? ($_$w(95, 19), d(r)) : ($_$w(95, 20), c > 3 ? ($_$w(95, 21), d(target, key, r)) : ($_$w(95, 22), d(target, key)))) || ($_$w(95, 18), r);
            }
        }
    }
    return $_$w(95, 23), (($_$w(95, 24), ($_$w(95, 26), c > 3) && ($_$w(95, 27), r)) && ($_$w(95, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(95, 28), ($_$w(95, 29), ($_$w(95, 31), this) && ($_$w(95, 32), this.__metadata)) || ($_$w(95, 30), function (k, v) {
    $_$wf(95);
    if ($_$w(95, 33), ($_$w(95, 34), typeof Reflect === 'object') && ($_$w(95, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(95, 36), Reflect.metadata(k, v);
    }
}));
$_$w(95, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(95, 38), require('@angular/core'));
var Authentication = ($_$w(95, 39), function () {
    $_$wf(95);
    function Authentication() {
        $_$wf(95);
    }
    $_$w(95, 40), Authentication.prototype.getUser = function () {
        $_$wf(95);
        return $_$w(95, 41), this.user;
    };
    $_$w(95, 42), Authentication.prototype.setData = function (data) {
        $_$wf(95);
        $_$w(95, 43), this.user = data.data.attributes;
    };
    $_$w(95, 44), Authentication.prototype.isAuthenticated = function () {
        $_$wf(95);
        return $_$w(95, 45), !!this.user;
    };
    $_$w(95, 46), Authentication.prototype.hasPermission = function (permissionName) {
        $_$wf(95);
        if ($_$w(95, 47), !this.user) {
            return $_$w(95, 48), false;
        }
        return $_$w(95, 49), this.user.rolePermissions.some(function (role) {
            $_$wf(95);
            return $_$w(95, 50), role.permissions.some(function (permission) {
                $_$wf(95);
                return $_$w(95, 51), permission === permissionName;
            });
        });
    };
    $_$w(95, 52), Authentication = __decorate([
        core_1.Injectable(),
        __metadata('design:paramtypes', [])
    ], Authentication);
    return $_$w(95, 53), Authentication;
}());
$_$w(95, 54), exports.Authentication = Authentication;
$_$wpe(95);