'use strict';
$_$wp(88);
var __decorate = ($_$w(88, 0), ($_$w(88, 1), ($_$w(88, 3), this) && ($_$w(88, 4), this.__decorate)) || ($_$w(88, 2), function (decorators, target, key, desc) {
    $_$wf(88);
    var c = ($_$w(88, 5), arguments.length), r = c < 3 ? ($_$w(88, 6), target) : ($_$w(88, 7), desc === null ? ($_$w(88, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(88, 9), desc)), d;
    if ($_$w(88, 10), ($_$w(88, 11), typeof Reflect === 'object') && ($_$w(88, 12), typeof Reflect.decorate === 'function')) {
        $_$w(88, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(88, 14), i >= 0; i--) {
            if ($_$w(88, 15), d = decorators[i]) {
                $_$w(88, 16), r = ($_$w(88, 17), c < 3 ? ($_$w(88, 19), d(r)) : ($_$w(88, 20), c > 3 ? ($_$w(88, 21), d(target, key, r)) : ($_$w(88, 22), d(target, key)))) || ($_$w(88, 18), r);
            }
        }
    }
    return $_$w(88, 23), (($_$w(88, 24), ($_$w(88, 26), c > 3) && ($_$w(88, 27), r)) && ($_$w(88, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(88, 28), ($_$w(88, 29), ($_$w(88, 31), this) && ($_$w(88, 32), this.__metadata)) || ($_$w(88, 30), function (k, v) {
    $_$wf(88);
    if ($_$w(88, 33), ($_$w(88, 34), typeof Reflect === 'object') && ($_$w(88, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(88, 36), Reflect.metadata(k, v);
    }
}));
$_$w(88, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(88, 38), require('@angular/core'));
var ConfigCollector = ($_$w(88, 39), function () {
    $_$wf(88);
    function ConfigCollector() {
        $_$wf(88);
    }
    $_$w(88, 40), ConfigCollector.prototype.getConfig = function () {
        $_$wf(88);
        return $_$w(88, 41), {};
    };
    $_$w(88, 42), ConfigCollector.prototype.getOverrides = function () {
        $_$wf(88);
        return $_$w(88, 43), ($_$w(88, 44), configData) || ($_$w(88, 45), {});
    };
    $_$w(88, 46), ConfigCollector = __decorate([
        core_1.Injectable(),
        __metadata('design:paramtypes', [])
    ], ConfigCollector);
    return $_$w(88, 47), ConfigCollector;
}());
$_$w(88, 48), exports.ConfigCollector = ConfigCollector;
$_$wpe(88);