'use strict';
$_$wp(93);
var __decorate = ($_$w(93, 0), ($_$w(93, 1), ($_$w(93, 3), this) && ($_$w(93, 4), this.__decorate)) || ($_$w(93, 2), function (decorators, target, key, desc) {
    $_$wf(93);
    var c = ($_$w(93, 5), arguments.length), r = c < 3 ? ($_$w(93, 6), target) : ($_$w(93, 7), desc === null ? ($_$w(93, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(93, 9), desc)), d;
    if ($_$w(93, 10), ($_$w(93, 11), typeof Reflect === 'object') && ($_$w(93, 12), typeof Reflect.decorate === 'function')) {
        $_$w(93, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(93, 14), i >= 0; i--) {
            if ($_$w(93, 15), d = decorators[i]) {
                $_$w(93, 16), r = ($_$w(93, 17), c < 3 ? ($_$w(93, 19), d(r)) : ($_$w(93, 20), c > 3 ? ($_$w(93, 21), d(target, key, r)) : ($_$w(93, 22), d(target, key)))) || ($_$w(93, 18), r);
            }
        }
    }
    return $_$w(93, 23), (($_$w(93, 24), ($_$w(93, 26), c > 3) && ($_$w(93, 27), r)) && ($_$w(93, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(93, 28), ($_$w(93, 29), ($_$w(93, 31), this) && ($_$w(93, 32), this.__metadata)) || ($_$w(93, 30), function (k, v) {
    $_$wf(93);
    if ($_$w(93, 33), ($_$w(93, 34), typeof Reflect === 'object') && ($_$w(93, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(93, 36), Reflect.metadata(k, v);
    }
}));
$_$w(93, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(93, 38), require('@angular/core'));
var http_1 = ($_$w(93, 39), require('@angular/common/http'));
var config_service_1 = ($_$w(93, 40), require('../config/config.service'));
var config_model_1 = ($_$w(93, 41), require('../config/config.model'));
var AccountService = ($_$w(93, 42), function () {
    $_$wf(93);
    function AccountService(http, configService) {
        $_$wf(93);
        $_$w(93, 43), this.http = http;
        $_$w(93, 44), this.configService = configService;
        $_$w(93, 45), this.endpoint = this.configService.get(config_model_1.AccountEndpointConfig);
    }
    $_$w(93, 46), AccountService.prototype.getMe = function () {
        $_$wf(93);
        return $_$w(93, 47), this.http.get(this.endpoint.url + '/me');
    };
    $_$w(93, 48), AccountService = __decorate([
        core_1.Injectable(),
        __metadata('design:paramtypes', [
            ($_$w(93, 49), ($_$w(93, 51), typeof (_a = ($_$w(93, 53), typeof http_1.HttpClient !== 'undefined') && ($_$w(93, 54), http_1.HttpClient)) === 'function') && ($_$w(93, 52), _a)) || ($_$w(93, 50), Object),
            config_service_1.ConfigService
        ])
    ], AccountService);
    return $_$w(93, 55), AccountService;
    var _a = _a || $_$w(93, 56);
}());
$_$w(93, 57), exports.AccountService = AccountService;
$_$wpe(93);