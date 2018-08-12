'use strict';
$_$wp(12);
var __decorate = ($_$w(12, 0), ($_$w(12, 1), ($_$w(12, 3), this) && ($_$w(12, 4), this.__decorate)) || ($_$w(12, 2), function (decorators, target, key, desc) {
    $_$wf(12);
    var c = ($_$w(12, 5), arguments.length), r = c < 3 ? ($_$w(12, 6), target) : ($_$w(12, 7), desc === null ? ($_$w(12, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(12, 9), desc)), d;
    if ($_$w(12, 10), ($_$w(12, 11), typeof Reflect === 'object') && ($_$w(12, 12), typeof Reflect.decorate === 'function')) {
        $_$w(12, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(12, 14), i >= 0; i--) {
            if ($_$w(12, 15), d = decorators[i]) {
                $_$w(12, 16), r = ($_$w(12, 17), c < 3 ? ($_$w(12, 19), d(r)) : ($_$w(12, 20), c > 3 ? ($_$w(12, 21), d(target, key, r)) : ($_$w(12, 22), d(target, key)))) || ($_$w(12, 18), r);
            }
        }
    }
    return $_$w(12, 23), (($_$w(12, 24), ($_$w(12, 26), c > 3) && ($_$w(12, 27), r)) && ($_$w(12, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(12, 28), ($_$w(12, 29), ($_$w(12, 31), this) && ($_$w(12, 32), this.__metadata)) || ($_$w(12, 30), function (k, v) {
    $_$wf(12);
    if ($_$w(12, 33), ($_$w(12, 34), typeof Reflect === 'object') && ($_$w(12, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(12, 36), Reflect.metadata(k, v);
    }
}));
$_$w(12, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(12, 38), require('@angular/core'));
var config_service_1 = ($_$w(12, 39), require('./core/services/config/config.service'));
var config_model_1 = ($_$w(12, 40), require('./core/services/config/config.model'));
var AppComponent = ($_$w(12, 41), function () {
    $_$wf(12);
    function AppComponent(configService) {
        $_$wf(12);
        $_$w(12, 42), this.configService = configService;
        var endpoint = ($_$w(12, 43), configService.get(config_model_1.AccountEndpointConfig));
    }
    $_$w(12, 44), AppComponent = __decorate([
        core_1.Component({
            selector: 'eds-root',
            templateUrl: './app.component.html'
        }),
        __metadata('design:paramtypes', [config_service_1.ConfigService])
    ], AppComponent);
    return $_$w(12, 45), AppComponent;
}());
$_$w(12, 46), exports.AppComponent = AppComponent;
$_$wpe(12);