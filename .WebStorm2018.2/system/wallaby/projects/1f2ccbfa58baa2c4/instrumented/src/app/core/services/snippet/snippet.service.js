'use strict';
$_$wp(94);
var __decorate = ($_$w(94, 0), ($_$w(94, 1), ($_$w(94, 3), this) && ($_$w(94, 4), this.__decorate)) || ($_$w(94, 2), function (decorators, target, key, desc) {
    $_$wf(94);
    var c = ($_$w(94, 5), arguments.length), r = c < 3 ? ($_$w(94, 6), target) : ($_$w(94, 7), desc === null ? ($_$w(94, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(94, 9), desc)), d;
    if ($_$w(94, 10), ($_$w(94, 11), typeof Reflect === 'object') && ($_$w(94, 12), typeof Reflect.decorate === 'function')) {
        $_$w(94, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(94, 14), i >= 0; i--) {
            if ($_$w(94, 15), d = decorators[i]) {
                $_$w(94, 16), r = ($_$w(94, 17), c < 3 ? ($_$w(94, 19), d(r)) : ($_$w(94, 20), c > 3 ? ($_$w(94, 21), d(target, key, r)) : ($_$w(94, 22), d(target, key)))) || ($_$w(94, 18), r);
            }
        }
    }
    return $_$w(94, 23), (($_$w(94, 24), ($_$w(94, 26), c > 3) && ($_$w(94, 27), r)) && ($_$w(94, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(94, 28), ($_$w(94, 29), ($_$w(94, 31), this) && ($_$w(94, 32), this.__metadata)) || ($_$w(94, 30), function (k, v) {
    $_$wf(94);
    if ($_$w(94, 33), ($_$w(94, 34), typeof Reflect === 'object') && ($_$w(94, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(94, 36), Reflect.metadata(k, v);
    }
}));
$_$w(94, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(94, 38), require('@angular/core'));
var http_1 = ($_$w(94, 39), require('@angular/common/http'));
var config_service_1 = ($_$w(94, 40), require('../config/config.service'));
var config_model_1 = ($_$w(94, 41), require('../config/config.model'));
var rxjs_1 = ($_$w(94, 42), require('rxjs'));
var operators_1 = ($_$w(94, 43), require('rxjs/operators'));
var snippet_action_1 = ($_$w(94, 44), require('./../../../core/redux/actions/snippet.action'));
var SnippetService = ($_$w(94, 45), function () {
    $_$wf(94);
    function SnippetService(http, actions, configService) {
        $_$wf(94);
        $_$w(94, 46), this.http = http;
        $_$w(94, 47), this.actions = actions;
        $_$w(94, 48), this.configService = configService;
        $_$w(94, 49), this.endpoint = configService.get(config_model_1.TaskEndpointConfig);
    }
    $_$w(94, 50), SnippetService.prototype.getSnippets = function (trayId) {
        $_$wf(94);
        var _this = ($_$w(94, 51), this);
        $_$w(94, 52), this.http.get(this.endpoint.url + '/' + trayId + '/tasks?page[offset]=0&page[limit]=10').pipe(operators_1.map(function (data) {
            $_$wf(94);
            $_$w(94, 53), _this.actions.loadSucceeded(data);
        })).pipe(operators_1.catchError(function (response) {
            $_$wf(94);
            return $_$w(94, 54), rxjs_1.of(_this.actions.loadFailed('' + response.status));
        })).pipe(operators_1.startWith(this.actions.loadStarted())).subscribe();
    };
    $_$w(94, 55), SnippetService = __decorate([
        core_1.Injectable(),
        __metadata('design:paramtypes', [
            ($_$w(94, 56), ($_$w(94, 58), typeof (_a = ($_$w(94, 60), typeof http_1.HttpClient !== 'undefined') && ($_$w(94, 61), http_1.HttpClient)) === 'function') && ($_$w(94, 59), _a)) || ($_$w(94, 57), Object),
            snippet_action_1.SnippetActions,
            config_service_1.ConfigService
        ])
    ], SnippetService);
    return $_$w(94, 62), SnippetService;
    var _a = _a || $_$w(94, 63);
}());
$_$w(94, 64), exports.SnippetService = SnippetService;
$_$wpe(94);