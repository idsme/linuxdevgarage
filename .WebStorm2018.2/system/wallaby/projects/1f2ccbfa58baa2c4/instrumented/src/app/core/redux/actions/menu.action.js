'use strict';
$_$wp(73);
var __decorate = ($_$w(73, 0), ($_$w(73, 1), ($_$w(73, 3), this) && ($_$w(73, 4), this.__decorate)) || ($_$w(73, 2), function (decorators, target, key, desc) {
    $_$wf(73);
    var c = ($_$w(73, 5), arguments.length), r = c < 3 ? ($_$w(73, 6), target) : ($_$w(73, 7), desc === null ? ($_$w(73, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(73, 9), desc)), d;
    if ($_$w(73, 10), ($_$w(73, 11), typeof Reflect === 'object') && ($_$w(73, 12), typeof Reflect.decorate === 'function')) {
        $_$w(73, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(73, 14), i >= 0; i--) {
            if ($_$w(73, 15), d = decorators[i]) {
                $_$w(73, 16), r = ($_$w(73, 17), c < 3 ? ($_$w(73, 19), d(r)) : ($_$w(73, 20), c > 3 ? ($_$w(73, 21), d(target, key, r)) : ($_$w(73, 22), d(target, key)))) || ($_$w(73, 18), r);
            }
        }
    }
    return $_$w(73, 23), (($_$w(73, 24), ($_$w(73, 26), c > 3) && ($_$w(73, 27), r)) && ($_$w(73, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(73, 28), ($_$w(73, 29), ($_$w(73, 31), this) && ($_$w(73, 32), this.__metadata)) || ($_$w(73, 30), function (k, v) {
    $_$wf(73);
    if ($_$w(73, 33), ($_$w(73, 34), typeof Reflect === 'object') && ($_$w(73, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(73, 36), Reflect.metadata(k, v);
    }
}));
$_$w(73, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(73, 38), require('@angular/core'));
var store_1 = ($_$w(73, 39), require('@angular-redux/store'));
var MenuActions = ($_$w(73, 40), function () {
    $_$wf(73);
    function MenuActions() {
        $_$wf(73);
    }
    $_$w(73, 41), MenuActions_1 = MenuActions;
    $_$w(73, 42), MenuActions.prototype.setMenu = function (payload) {
        $_$wf(73);
        return $_$w(73, 43), {
            type: MenuActions_1.SET_MENU,
            payload: payload
        };
    };
    $_$w(73, 44), MenuActions.SET_MENU = 'SET_MENU';
    $_$w(73, 45), __decorate([
        store_1.dispatch(),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [Array]),
        __metadata('design:returntype', Object)
    ], MenuActions.prototype, 'setMenu', null);
    $_$w(73, 46), MenuActions = MenuActions_1 = __decorate([core_1.Injectable()], MenuActions);
    return $_$w(73, 47), MenuActions;
    var MenuActions_1 = MenuActions_1 || $_$w(73, 48);
}());
$_$w(73, 49), exports.MenuActions = MenuActions;
$_$wpe(73);