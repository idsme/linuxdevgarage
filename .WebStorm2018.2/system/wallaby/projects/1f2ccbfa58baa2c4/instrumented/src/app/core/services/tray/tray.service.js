'use strict';
$_$wp(82);
var __decorate = ($_$w(82, 0), ($_$w(82, 1), ($_$w(82, 3), this) && ($_$w(82, 4), this.__decorate)) || ($_$w(82, 2), function (decorators, target, key, desc) {
    $_$wf(82);
    var c = ($_$w(82, 5), arguments.length), r = c < 3 ? ($_$w(82, 6), target) : ($_$w(82, 7), desc === null ? ($_$w(82, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(82, 9), desc)), d;
    if ($_$w(82, 10), ($_$w(82, 11), typeof Reflect === 'object') && ($_$w(82, 12), typeof Reflect.decorate === 'function')) {
        $_$w(82, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(82, 14), i >= 0; i--) {
            if ($_$w(82, 15), d = decorators[i]) {
                $_$w(82, 16), r = ($_$w(82, 17), c < 3 ? ($_$w(82, 19), d(r)) : ($_$w(82, 20), c > 3 ? ($_$w(82, 21), d(target, key, r)) : ($_$w(82, 22), d(target, key)))) || ($_$w(82, 18), r);
            }
        }
    }
    return $_$w(82, 23), (($_$w(82, 24), ($_$w(82, 26), c > 3) && ($_$w(82, 27), r)) && ($_$w(82, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(82, 28), ($_$w(82, 29), ($_$w(82, 31), this) && ($_$w(82, 32), this.__metadata)) || ($_$w(82, 30), function (k, v) {
    $_$wf(82);
    if ($_$w(82, 33), ($_$w(82, 34), typeof Reflect === 'object') && ($_$w(82, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(82, 36), Reflect.metadata(k, v);
    }
}));
$_$w(82, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(82, 38), require('@angular/core'));
var http_1 = ($_$w(82, 39), require('@angular/common/http'));
var config_service_1 = ($_$w(82, 40), require('../config/config.service'));
var config_model_1 = ($_$w(82, 41), require('../config/config.model'));
var rxjs_1 = ($_$w(82, 42), require('rxjs'));
var operators_1 = ($_$w(82, 43), require('rxjs/operators'));
var tray_action_1 = ($_$w(82, 44), require('./../../../core/redux/actions/tray.action'));
var authentication_1 = ($_$w(82, 45), require('../authentication/authentication'));
var TrayService = ($_$w(82, 46), function () {
    $_$wf(82);
    function TrayService(http, actions, configService, authentication) {
        $_$wf(82);
        var _this = ($_$w(82, 47), this);
        $_$w(82, 48), this.http = http;
        $_$w(82, 49), this.actions = actions;
        $_$w(82, 50), this.configService = configService;
        $_$w(82, 51), this.authentication = authentication;
        $_$w(82, 52), this.endpoint = configService.get(config_model_1.TrayEndpointConfig);
        $_$w(82, 53), this.tabConfigs = configService.get(config_model_1.TabsConfig).tabs.filter(function (tabConfig) {
            $_$wf(82);
            return $_$w(82, 54), ($_$w(82, 55), authentication.hasPermission(tabConfig.permission)) && ($_$w(82, 56), !_this.authentication.hasPermission(tabConfig.permissionDenied));
        });
    }
    $_$w(82, 57), TrayService.prototype.getTrays = function () {
        $_$wf(82);
        var _this = ($_$w(82, 58), this);
        return $_$w(82, 59), rxjs_1.Observable.create(function (observer) {
            $_$wf(82);
            $_$w(82, 60), _this.http.get('' + _this.endpoint.url).pipe(operators_1.map(function (trayModules) {
                $_$wf(82);
                var tabs = ($_$w(82, 61), _this.tabConfigs.reduce(function (result, config) {
                    $_$wf(82);
                    var panels = ($_$w(82, 62), trayModules.filter(function (trayModule) {
                        $_$wf(82);
                        return $_$w(82, 63), config.moduleIds.indexOf(trayModule.name) > -1;
                    }).reduce(function (filteredTrays, trayModule) {
                        $_$wf(82);
                        return $_$w(82, 64), filteredTrays.concat(trayModule.trays.filter(function (tray) {
                            $_$wf(82);
                            return $_$w(82, 65), tray.parentId === null;
                        }));
                    }, []));
                    var trays = ($_$w(82, 66), trayModules.filter(function (trayModule) {
                        $_$wf(82);
                        return $_$w(82, 67), config.moduleIds.indexOf(trayModule.name) > -1;
                    }).reduce(function (filteredTrays, trayModule) {
                        $_$wf(82);
                        return $_$w(82, 68), filteredTrays.concat(trayModule.trays.filter(function (tray) {
                            $_$wf(82);
                            return $_$w(82, 69), tray.parentId !== null;
                        }));
                    }, []));
                    $_$w(82, 70), result.push({
                        label: config.label,
                        panels: panels,
                        trays: trays
                    });
                    return $_$w(82, 71), result;
                }, []));
                var trayTree = ($_$w(82, 72), {
                    tabs: tabs,
                    loading: false
                });
                $_$w(82, 73), _this.actions.loadSucceeded(trayTree);
                $_$w(82, 74), observer.next(trayTree);
                $_$w(82, 75), observer.complete();
            })).pipe(operators_1.catchError(function (response) {
                $_$wf(82);
                return $_$w(82, 76), rxjs_1.of(_this.actions.loadFailed('' + response.status));
            })).pipe(operators_1.startWith(_this.actions.loadStarted())).subscribe();
        });
    };
    $_$w(82, 77), TrayService = __decorate([
        core_1.Injectable(),
        __metadata('design:paramtypes', [
            ($_$w(82, 78), ($_$w(82, 80), typeof (_a = ($_$w(82, 82), typeof http_1.HttpClient !== 'undefined') && ($_$w(82, 83), http_1.HttpClient)) === 'function') && ($_$w(82, 81), _a)) || ($_$w(82, 79), Object),
            tray_action_1.TrayActions,
            config_service_1.ConfigService,
            authentication_1.Authentication
        ])
    ], TrayService);
    return $_$w(82, 84), TrayService;
    var _a = _a || $_$w(82, 85);
}());
$_$w(82, 86), exports.TrayService = TrayService;
$_$wpe(82);