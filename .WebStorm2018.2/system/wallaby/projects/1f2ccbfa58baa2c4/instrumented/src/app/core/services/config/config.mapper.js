'use strict';
$_$wp(86);
var __decorate = ($_$w(86, 0), ($_$w(86, 1), ($_$w(86, 3), this) && ($_$w(86, 4), this.__decorate)) || ($_$w(86, 2), function (decorators, target, key, desc) {
    $_$wf(86);
    var c = ($_$w(86, 5), arguments.length), r = c < 3 ? ($_$w(86, 6), target) : ($_$w(86, 7), desc === null ? ($_$w(86, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(86, 9), desc)), d;
    if ($_$w(86, 10), ($_$w(86, 11), typeof Reflect === 'object') && ($_$w(86, 12), typeof Reflect.decorate === 'function')) {
        $_$w(86, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(86, 14), i >= 0; i--) {
            if ($_$w(86, 15), d = decorators[i]) {
                $_$w(86, 16), r = ($_$w(86, 17), c < 3 ? ($_$w(86, 19), d(r)) : ($_$w(86, 20), c > 3 ? ($_$w(86, 21), d(target, key, r)) : ($_$w(86, 22), d(target, key)))) || ($_$w(86, 18), r);
            }
        }
    }
    return $_$w(86, 23), (($_$w(86, 24), ($_$w(86, 26), c > 3) && ($_$w(86, 27), r)) && ($_$w(86, 25), Object.defineProperty(target, key, r)), r);
}));
$_$w(86, 28), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(86, 29), require('@angular/core'));
var ConfigMapper = ($_$w(86, 30), function () {
    $_$wf(86);
    function ConfigMapper() {
        $_$wf(86);
        $_$w(86, 31), this.map = {
            AccountEndpointConfig: 'api.endpoints.account',
            TrayEndpointConfig: 'api.endpoints.tray',
            TabsConfig: 'tabs',
            TrayMenuConfig: 'items',
            TaskEndpointConfig: 'api.endpoints.task',
            TransactionsConfig: 'transactions'
        };
    }
    $_$w(86, 32), ConfigMapper.prototype.get = function (configClass) {
        $_$wf(86);
        return $_$w(86, 33), this.map[configClass.constructor.name];
    };
    $_$w(86, 34), ConfigMapper = __decorate([core_1.Injectable()], ConfigMapper);
    return $_$w(86, 35), ConfigMapper;
}());
$_$w(86, 36), exports.ConfigMapper = ConfigMapper;
$_$wpe(86);