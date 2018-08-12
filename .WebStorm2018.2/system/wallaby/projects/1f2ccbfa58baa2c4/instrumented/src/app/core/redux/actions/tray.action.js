'use strict';
$_$wp(74);
var __decorate = ($_$w(74, 0), ($_$w(74, 1), ($_$w(74, 3), this) && ($_$w(74, 4), this.__decorate)) || ($_$w(74, 2), function (decorators, target, key, desc) {
    $_$wf(74);
    var c = ($_$w(74, 5), arguments.length), r = c < 3 ? ($_$w(74, 6), target) : ($_$w(74, 7), desc === null ? ($_$w(74, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(74, 9), desc)), d;
    if ($_$w(74, 10), ($_$w(74, 11), typeof Reflect === 'object') && ($_$w(74, 12), typeof Reflect.decorate === 'function')) {
        $_$w(74, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(74, 14), i >= 0; i--) {
            if ($_$w(74, 15), d = decorators[i]) {
                $_$w(74, 16), r = ($_$w(74, 17), c < 3 ? ($_$w(74, 19), d(r)) : ($_$w(74, 20), c > 3 ? ($_$w(74, 21), d(target, key, r)) : ($_$w(74, 22), d(target, key)))) || ($_$w(74, 18), r);
            }
        }
    }
    return $_$w(74, 23), (($_$w(74, 24), ($_$w(74, 26), c > 3) && ($_$w(74, 27), r)) && ($_$w(74, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(74, 28), ($_$w(74, 29), ($_$w(74, 31), this) && ($_$w(74, 32), this.__metadata)) || ($_$w(74, 30), function (k, v) {
    $_$wf(74);
    if ($_$w(74, 33), ($_$w(74, 34), typeof Reflect === 'object') && ($_$w(74, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(74, 36), Reflect.metadata(k, v);
    }
}));
$_$w(74, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(74, 38), require('@angular/core'));
var store_1 = ($_$w(74, 39), require('@angular-redux/store'));
var TrayActions = ($_$w(74, 40), function () {
    $_$wf(74);
    function TrayActions() {
        $_$wf(74);
    }
    $_$w(74, 41), TrayActions_1 = TrayActions;
    $_$w(74, 42), TrayActions.prototype.loadStarted = function () {
        $_$wf(74);
        return $_$w(74, 43), { type: TrayActions_1.TRAY_LOAD_STARTED };
    };
    $_$w(74, 44), TrayActions.prototype.loadSucceeded = function (payload) {
        $_$wf(74);
        return $_$w(74, 45), {
            type: TrayActions_1.TRAY_LOAD_SUCCEEDED,
            payload: payload
        };
    };
    $_$w(74, 46), TrayActions.prototype.loadFailed = function (error) {
        $_$wf(74);
        return $_$w(74, 47), {
            type: TrayActions_1.TRAY_LOAD_FAILED,
            error: error
        };
    };
    $_$w(74, 48), TrayActions.TRAY_LOAD_STARTED = 'TRAY_LOAD_STARTED';
    $_$w(74, 49), TrayActions.TRAY_LOAD_SUCCEEDED = 'TRAY_LOAD_SUCCEEDED';
    $_$w(74, 50), TrayActions.TRAY_LOAD_FAILED = 'TRAY_LOAD_FAILED';
    $_$w(74, 51), __decorate([
        store_1.dispatch(),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', Object)
    ], TrayActions.prototype, 'loadStarted', null);
    $_$w(74, 52), __decorate([
        store_1.dispatch(),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [Object]),
        __metadata('design:returntype', Object)
    ], TrayActions.prototype, 'loadSucceeded', null);
    $_$w(74, 53), __decorate([
        store_1.dispatch(),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [String]),
        __metadata('design:returntype', Object)
    ], TrayActions.prototype, 'loadFailed', null);
    $_$w(74, 54), TrayActions = TrayActions_1 = __decorate([core_1.Injectable()], TrayActions);
    return $_$w(74, 55), TrayActions;
    var TrayActions_1 = TrayActions_1 || $_$w(74, 56);
}());
$_$w(74, 57), exports.TrayActions = TrayActions;
$_$wpe(74);