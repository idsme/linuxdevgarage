'use strict';
$_$wp(91);
var __decorate = ($_$w(91, 0), ($_$w(91, 1), ($_$w(91, 3), this) && ($_$w(91, 4), this.__decorate)) || ($_$w(91, 2), function (decorators, target, key, desc) {
    $_$wf(91);
    var c = ($_$w(91, 5), arguments.length), r = c < 3 ? ($_$w(91, 6), target) : ($_$w(91, 7), desc === null ? ($_$w(91, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(91, 9), desc)), d;
    if ($_$w(91, 10), ($_$w(91, 11), typeof Reflect === 'object') && ($_$w(91, 12), typeof Reflect.decorate === 'function')) {
        $_$w(91, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(91, 14), i >= 0; i--) {
            if ($_$w(91, 15), d = decorators[i]) {
                $_$w(91, 16), r = ($_$w(91, 17), c < 3 ? ($_$w(91, 19), d(r)) : ($_$w(91, 20), c > 3 ? ($_$w(91, 21), d(target, key, r)) : ($_$w(91, 22), d(target, key)))) || ($_$w(91, 18), r);
            }
        }
    }
    return $_$w(91, 23), (($_$w(91, 24), ($_$w(91, 26), c > 3) && ($_$w(91, 27), r)) && ($_$w(91, 25), Object.defineProperty(target, key, r)), r);
}));
$_$w(91, 28), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(91, 29), require('@angular/core'));
var Logger = ($_$w(91, 30), function () {
    $_$wf(91);
    function Logger() {
        $_$wf(91);
    }
    return $_$w(91, 31), Logger;
}());
$_$w(91, 32), exports.Logger = Logger;
var LoggerService = ($_$w(91, 33), function () {
    $_$wf(91);
    function LoggerService() {
        $_$wf(91);
    }
    $_$w(91, 34), LoggerService.prototype.invokeConsoleMethod = function (type, args) {
        $_$wf(91);
    };
    $_$w(91, 35), LoggerService = __decorate([core_1.Injectable()], LoggerService);
    return $_$w(91, 36), LoggerService;
}());
$_$w(91, 37), exports.LoggerService = LoggerService;
$_$wpe(91);