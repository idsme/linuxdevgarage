'use strict';
$_$wp(92);
var __decorate = ($_$w(92, 0), ($_$w(92, 1), ($_$w(92, 3), this) && ($_$w(92, 4), this.__decorate)) || ($_$w(92, 2), function (decorators, target, key, desc) {
    $_$wf(92);
    var c = ($_$w(92, 5), arguments.length), r = c < 3 ? ($_$w(92, 6), target) : ($_$w(92, 7), desc === null ? ($_$w(92, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(92, 9), desc)), d;
    if ($_$w(92, 10), ($_$w(92, 11), typeof Reflect === 'object') && ($_$w(92, 12), typeof Reflect.decorate === 'function')) {
        $_$w(92, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(92, 14), i >= 0; i--) {
            if ($_$w(92, 15), d = decorators[i]) {
                $_$w(92, 16), r = ($_$w(92, 17), c < 3 ? ($_$w(92, 19), d(r)) : ($_$w(92, 20), c > 3 ? ($_$w(92, 21), d(target, key, r)) : ($_$w(92, 22), d(target, key)))) || ($_$w(92, 18), r);
            }
        }
    }
    return $_$w(92, 23), (($_$w(92, 24), ($_$w(92, 26), c > 3) && ($_$w(92, 27), r)) && ($_$w(92, 25), Object.defineProperty(target, key, r)), r);
}));
$_$w(92, 28), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(92, 29), require('@angular/core'));
var environment_1 = ($_$w(92, 30), require('../../../../environments/environment'));
$_$w(92, 31), exports.isDebugMode = environment_1.environment.isDebugMode;
var $_$wvd33 = $_$w(92, 32), noop = function () {
        $_$wf(92);
        return $_$w(92, 33), undefined;
    };
var ConsoleLoggerService = ($_$w(92, 34), function () {
    $_$wf(92);
    function ConsoleLoggerService() {
        $_$wf(92);
    }
    $_$w(92, 35), Object.defineProperty(ConsoleLoggerService.prototype, 'info', {
        get: function () {
            $_$wf(92);
            if ($_$w(92, 36), exports.isDebugMode) {
                return $_$w(92, 37), console.info.bind(console);
            } else {
                return $_$w(92, 38), noop;
            }
        },
        enumerable: true,
        configurable: true
    });
    $_$w(92, 39), Object.defineProperty(ConsoleLoggerService.prototype, 'warn', {
        get: function () {
            $_$wf(92);
            if ($_$w(92, 40), exports.isDebugMode) {
                return $_$w(92, 41), console.warn.bind(console);
            } else {
                return $_$w(92, 42), noop;
            }
        },
        enumerable: true,
        configurable: true
    });
    $_$w(92, 43), Object.defineProperty(ConsoleLoggerService.prototype, 'error', {
        get: function () {
            $_$wf(92);
            if ($_$w(92, 44), exports.isDebugMode) {
                return $_$w(92, 45), console.error.bind(console);
            } else {
                return $_$w(92, 46), noop;
            }
        },
        enumerable: true,
        configurable: true
    });
    $_$w(92, 47), ConsoleLoggerService.prototype.invokeConsoleMethod = function (type, args) {
        $_$wf(92);
        var logFn = ($_$w(92, 48), ($_$w(92, 49), ($_$w(92, 51), console[type]) || ($_$w(92, 52), console.log)) || ($_$w(92, 50), noop));
        $_$w(92, 53), logFn.apply(console, [args]);
    };
    $_$w(92, 54), ConsoleLoggerService = __decorate([core_1.Injectable()], ConsoleLoggerService);
    return $_$w(92, 55), ConsoleLoggerService;
}());
$_$w(92, 56), exports.ConsoleLoggerService = ConsoleLoggerService;
$_$wpe(92);