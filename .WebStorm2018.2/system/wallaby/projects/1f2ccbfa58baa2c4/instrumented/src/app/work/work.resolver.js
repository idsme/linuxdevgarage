'use strict';
$_$wp(29);
var __decorate = ($_$w(29, 0), ($_$w(29, 1), ($_$w(29, 3), this) && ($_$w(29, 4), this.__decorate)) || ($_$w(29, 2), function (decorators, target, key, desc) {
    $_$wf(29);
    var c = ($_$w(29, 5), arguments.length), r = c < 3 ? ($_$w(29, 6), target) : ($_$w(29, 7), desc === null ? ($_$w(29, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(29, 9), desc)), d;
    if ($_$w(29, 10), ($_$w(29, 11), typeof Reflect === 'object') && ($_$w(29, 12), typeof Reflect.decorate === 'function')) {
        $_$w(29, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(29, 14), i >= 0; i--) {
            if ($_$w(29, 15), d = decorators[i]) {
                $_$w(29, 16), r = ($_$w(29, 17), c < 3 ? ($_$w(29, 19), d(r)) : ($_$w(29, 20), c > 3 ? ($_$w(29, 21), d(target, key, r)) : ($_$w(29, 22), d(target, key)))) || ($_$w(29, 18), r);
            }
        }
    }
    return $_$w(29, 23), (($_$w(29, 24), ($_$w(29, 26), c > 3) && ($_$w(29, 27), r)) && ($_$w(29, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(29, 28), ($_$w(29, 29), ($_$w(29, 31), this) && ($_$w(29, 32), this.__metadata)) || ($_$w(29, 30), function (k, v) {
    $_$wf(29);
    if ($_$w(29, 33), ($_$w(29, 34), typeof Reflect === 'object') && ($_$w(29, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(29, 36), Reflect.metadata(k, v);
    }
}));
$_$w(29, 37), Object.defineProperty(exports, '__esModule', { value: true });
var logger_service_1 = ($_$w(29, 38), require('../core/services/logger/logger.service'));
var router_1 = ($_$w(29, 39), require('@angular/router'));
var store_1 = ($_$w(29, 40), require('@angular-redux/store'));
var tray_service_1 = ($_$w(29, 41), require('../core/services/tray/tray.service'));
var config_model_1 = ($_$w(29, 42), require('../core/services/config/config.model'));
var authentication_1 = ($_$w(29, 43), require('../core/services/authentication/authentication'));
var index_1 = ($_$w(29, 44), require('rxjs/index'));
var menu_action_1 = ($_$w(29, 45), require('../core/redux/actions/menu.action'));
var snippet_service_1 = ($_$w(29, 46), require('../core/services/snippet/snippet.service'));
var operators_1 = ($_$w(29, 47), require('rxjs/internal/operators'));
var config_service_1 = ($_$w(29, 48), require('../core/services/config/config.service'));
var selected_states_action_1 = ($_$w(29, 49), require('../core/redux/actions/selected-states.action'));
var core_1 = ($_$w(29, 50), require('@angular/core'));
var WorkResolver = ($_$w(29, 51), function () {
    $_$wf(29);
    function WorkResolver(router, ngRedux, configService, logger, authentication, selectedStateActions, menuActions, trayService, snippetService) {
        $_$wf(29);
        $_$w(29, 52), this.router = router;
        $_$w(29, 53), this.ngRedux = ngRedux;
        $_$w(29, 54), this.configService = configService;
        $_$w(29, 55), this.logger = logger;
        $_$w(29, 56), this.authentication = authentication;
        $_$w(29, 57), this.selectedStateActions = selectedStateActions;
        $_$w(29, 58), this.menuActions = menuActions;
        $_$w(29, 59), this.trayService = trayService;
        $_$w(29, 60), this.snippetService = snippetService;
    }
    $_$w(29, 61), WorkResolver.prototype.resolve = function (route, state) {
        $_$wf(29);
        var _this = ($_$w(29, 62), this);
        var started = ($_$w(29, 63), Date.now());
        var observables = ($_$w(29, 64), []);
        var resolved = ($_$w(29, 65), true);
        var trayId = ($_$w(29, 66), route.paramMap.get('trayId'));
        var taskId = ($_$w(29, 67), route.paramMap.get('taskId'));
        $_$w(29, 68), observables.push(this.resolveTreeTray());
        if ($_$w(29, 69), trayId) {
        }
        var menuItems = ($_$w(29, 70), this.configService.get(config_model_1.TrayMenuConfig).items);
        $_$w(29, 71), this.menuActions.setMenu(menuItems);
        $_$w(29, 72), this.selectedStateActions.setSelectedMenuItem(menuItems.find(function (item) {
            $_$wf(29);
            return $_$w(29, 73), item.label === 'Work';
        }));
        return $_$w(29, 74), index_1.Observable.create(function (observer) {
            $_$wf(29);
            $_$w(29, 75), index_1.forkJoin.apply(void 0, observables).pipe(operators_1.map(function (results) {
                $_$wf(29);
                if ($_$w(29, 76), !trayId) {
                    $_$w(29, 77), _this.router.navigate(['/wm/tray/' + results[0].tabs[0].panels[0].id]);
                    $_$w(29, 78), resolved = false;
                } else {
                    if ($_$w(29, 79), !taskId) {
                        $_$w(29, 80), _this.resolveSnippets(trayId);
                    }
                    $_$w(29, 81), _this.selectedStateActions.setSelectedTray(trayId);
                    if ($_$w(29, 82), taskId) {
                        $_$w(29, 83), _this.selectedStateActions.setSelectedSnippet(taskId);
                    }
                }
                $_$w(29, 84), _this.logger.info('Resolver took ' + (Date.now() - started) + ' ms.');
                $_$w(29, 85), observer.next(resolved);
                $_$w(29, 86), observer.complete();
            }));
        }).subscribe();
    };
    $_$w(29, 87), WorkResolver.prototype.resolveTreeTray = function () {
        $_$wf(29);
        return $_$w(29, 88), this.trayService.getTrays();
    };
    $_$w(29, 89), WorkResolver.prototype.resolveSnippets = function (trayId) {
        $_$wf(29);
        return $_$w(29, 90), this.snippetService.getSnippets(trayId);
    };
    $_$w(29, 91), WorkResolver.prototype.resolveTransactions = function (taskId) {
        $_$wf(29);
    };
    $_$w(29, 92), WorkResolver = __decorate([
        core_1.Injectable(),
        __metadata('design:paramtypes', [
            ($_$w(29, 93), ($_$w(29, 95), typeof (_a = ($_$w(29, 97), typeof router_1.Router !== 'undefined') && ($_$w(29, 98), router_1.Router)) === 'function') && ($_$w(29, 96), _a)) || ($_$w(29, 94), Object),
            ($_$w(29, 99), ($_$w(29, 101), typeof (_b = ($_$w(29, 103), typeof store_1.NgRedux !== 'undefined') && ($_$w(29, 104), store_1.NgRedux)) === 'function') && ($_$w(29, 102), _b)) || ($_$w(29, 100), Object),
            config_service_1.ConfigService,
            logger_service_1.LoggerService,
            authentication_1.Authentication,
            selected_states_action_1.SelectedStatesActions,
            menu_action_1.MenuActions,
            tray_service_1.TrayService,
            snippet_service_1.SnippetService
        ])
    ], WorkResolver);
    return $_$w(29, 105), WorkResolver;
    var _a = _a || $_$w(29, 106), _b;
}());
$_$w(29, 107), exports.WorkResolver = WorkResolver;
$_$wpe(29);