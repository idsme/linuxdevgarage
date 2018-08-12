'use strict';
$_$wp(50);
var __decorate = ($_$w(50, 0), ($_$w(50, 1), ($_$w(50, 3), this) && ($_$w(50, 4), this.__decorate)) || ($_$w(50, 2), function (decorators, target, key, desc) {
    $_$wf(50);
    var c = ($_$w(50, 5), arguments.length), r = c < 3 ? ($_$w(50, 6), target) : ($_$w(50, 7), desc === null ? ($_$w(50, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(50, 9), desc)), d;
    if ($_$w(50, 10), ($_$w(50, 11), typeof Reflect === 'object') && ($_$w(50, 12), typeof Reflect.decorate === 'function')) {
        $_$w(50, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(50, 14), i >= 0; i--) {
            if ($_$w(50, 15), d = decorators[i]) {
                $_$w(50, 16), r = ($_$w(50, 17), c < 3 ? ($_$w(50, 19), d(r)) : ($_$w(50, 20), c > 3 ? ($_$w(50, 21), d(target, key, r)) : ($_$w(50, 22), d(target, key)))) || ($_$w(50, 18), r);
            }
        }
    }
    return $_$w(50, 23), (($_$w(50, 24), ($_$w(50, 26), c > 3) && ($_$w(50, 27), r)) && ($_$w(50, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(50, 28), ($_$w(50, 29), ($_$w(50, 31), this) && ($_$w(50, 32), this.__metadata)) || ($_$w(50, 30), function (k, v) {
    $_$wf(50);
    if ($_$w(50, 33), ($_$w(50, 34), typeof Reflect === 'object') && ($_$w(50, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(50, 36), Reflect.metadata(k, v);
    }
}));
$_$w(50, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(50, 38), require('@angular/core'));
var operators_1 = ($_$w(50, 39), require('rxjs/operators'));
var http_1 = ($_$w(50, 40), require('@angular/common/http'));
var logger_service_1 = ($_$w(50, 41), require('./../services/logger/logger.service'));
var LoggingInterceptor = ($_$w(50, 42), function () {
    $_$wf(50);
    function LoggingInterceptor(loggerService) {
        $_$wf(50);
        $_$w(50, 43), this.loggerService = loggerService;
    }
    $_$w(50, 44), LoggingInterceptor.prototype.intercept = function (req, next) {
        $_$wf(50);
        var _this = ($_$w(50, 45), this);
        var started = ($_$w(50, 46), Date.now());
        var ok = ok || $_$w(50, 47);
        return $_$w(50, 48), next.handle(req).pipe(operators_1.tap(function (event) {
            $_$wf(50);
            return $_$w(50, 49), ok = event instanceof http_1.HttpResponse ? ($_$w(50, 50), ' succeeded') : ($_$w(50, 51), '');
        }, function (error) {
            $_$wf(50);
            return $_$w(50, 52), ok = ' failed';
        }), operators_1.finalize(function () {
            $_$wf(50);
            var elapsed = ($_$w(50, 53), Date.now() - started);
            var msg = ($_$w(50, 54), req.method + ' "' + req.urlWithParams + '"' + ok + ' in ' + elapsed + ' ms.');
            $_$w(50, 55), _this.loggerService.info(msg);
        }));
    };
    $_$w(50, 56), LoggingInterceptor = __decorate([
        core_1.Injectable(),
        __metadata('design:paramtypes', [logger_service_1.LoggerService])
    ], LoggingInterceptor);
    return $_$w(50, 57), LoggingInterceptor;
}());
$_$w(50, 58), exports.LoggingInterceptor = LoggingInterceptor;
$_$wpe(50);