'use strict';
$_$wp(11);
var __decorate = ($_$w(11, 0), ($_$w(11, 1), ($_$w(11, 3), this) && ($_$w(11, 4), this.__decorate)) || ($_$w(11, 2), function (decorators, target, key, desc) {
    $_$wf(11);
    var c = ($_$w(11, 5), arguments.length), r = c < 3 ? ($_$w(11, 6), target) : ($_$w(11, 7), desc === null ? ($_$w(11, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(11, 9), desc)), d;
    if ($_$w(11, 10), ($_$w(11, 11), typeof Reflect === 'object') && ($_$w(11, 12), typeof Reflect.decorate === 'function')) {
        $_$w(11, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(11, 14), i >= 0; i--) {
            if ($_$w(11, 15), d = decorators[i]) {
                $_$w(11, 16), r = ($_$w(11, 17), c < 3 ? ($_$w(11, 19), d(r)) : ($_$w(11, 20), c > 3 ? ($_$w(11, 21), d(target, key, r)) : ($_$w(11, 22), d(target, key)))) || ($_$w(11, 18), r);
            }
        }
    }
    return $_$w(11, 23), (($_$w(11, 24), ($_$w(11, 26), c > 3) && ($_$w(11, 27), r)) && ($_$w(11, 25), Object.defineProperty(target, key, r)), r);
}));
$_$w(11, 28), Object.defineProperty(exports, '__esModule', { value: true });
var platform_browser_1 = ($_$w(11, 29), require('@angular/platform-browser'));
var core_1 = ($_$w(11, 30), require('@angular/core'));
var http_1 = ($_$w(11, 31), require('@angular/common/http'));
var flex_layout_1 = ($_$w(11, 32), require('@angular/flex-layout'));
var custom_breakpoints_1 = ($_$w(11, 33), require('./core/flexlayout/custom-breakpoints'));
var store_module_1 = ($_$w(11, 34), require('./core/redux/store.module'));
var auth_interceptor_1 = ($_$w(11, 35), require('./core/interceptors/auth.interceptor'));
var logging_interceptor_1 = ($_$w(11, 36), require('./core/interceptors/logging.interceptor'));
var app_initializer_1 = ($_$w(11, 37), require('./app.initializer'));
var app_route_module_1 = ($_$w(11, 38), require('./app-route.module'));
var activate_guard_1 = ($_$w(11, 39), require('./core/services/guard/activate.guard'));
var app_component_1 = ($_$w(11, 40), require('./app.component'));
var not_found_component_1 = ($_$w(11, 41), require('./not-found.component'));
var epo_webcomponents_module_1 = ($_$w(11, 42), require('./epo-webcomponents/epo-webcomponents.module'));
var account_service_1 = ($_$w(11, 43), require('./core/services/account/account.service'));
var authentication_1 = ($_$w(11, 44), require('./core/services/authentication/authentication'));
var config_service_1 = ($_$w(11, 45), require('./core/services/config/config.service'));
var config_mapper_1 = ($_$w(11, 46), require('./core/services/config/config.mapper'));
var config_collector_1 = ($_$w(11, 47), require('./core/services/config/config.collector'));
var logger_service_1 = ($_$w(11, 48), require('./core/services/logger/logger.service'));
var console_logger_service_1 = ($_$w(11, 49), require('./core/services/logger/console-logger.service'));
var selected_states_action_1 = ($_$w(11, 50), require('./core/redux/actions/selected-states.action'));
var tray_action_1 = ($_$w(11, 51), require('./core/redux/actions/tray.action'));
var tray_service_1 = ($_$w(11, 52), require('./core/services/tray/tray.service'));
var snippet_action_1 = ($_$w(11, 53), require('./core/redux/actions/snippet.action'));
var snippet_service_1 = ($_$w(11, 54), require('./core/services/snippet/snippet.service'));
var menu_action_1 = ($_$w(11, 55), require('./core/redux/actions/menu.action'));
function appInitializerFactory(appInitializer) {
    $_$wf(11);
    return $_$w(11, 56), function () {
        $_$wf(11);
        return $_$w(11, 57), appInitializer.init();
    };
}
$_$w(11, 58), exports.appInitializerFactory = appInitializerFactory;
var AppModule = ($_$w(11, 59), function () {
    $_$wf(11);
    function AppModule() {
        $_$wf(11);
    }
    $_$w(11, 60), AppModule = __decorate([core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                not_found_component_1.NotFoundComponent
            ],
            imports: [
                app_route_module_1.AppRouteModule,
                platform_browser_1.BrowserModule,
                flex_layout_1.FlexLayoutModule,
                http_1.HttpClientModule,
                store_module_1.StoreModule,
                epo_webcomponents_module_1.EpoWebcomponentsModule
            ],
            providers: [
                account_service_1.AccountService,
                activate_guard_1.ActivateGuard,
                authentication_1.Authentication,
                app_initializer_1.AppInitializer,
                config_service_1.ConfigService,
                config_collector_1.ConfigCollector,
                config_mapper_1.ConfigMapper,
                menu_action_1.MenuActions,
                selected_states_action_1.SelectedStatesActions,
                snippet_action_1.SnippetActions,
                snippet_service_1.SnippetService,
                tray_action_1.TrayActions,
                tray_service_1.TrayService,
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: appInitializerFactory,
                    deps: [app_initializer_1.AppInitializer],
                    multi: true
                },
                {
                    provide: flex_layout_1.BREAKPOINT,
                    useValue: custom_breakpoints_1.CUSTOM_BREAKPOINTS,
                    multi: true
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: auth_interceptor_1.AuthInterceptor,
                    multi: true
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: logging_interceptor_1.LoggingInterceptor,
                    multi: true
                },
                {
                    provide: logger_service_1.LoggerService,
                    useClass: console_logger_service_1.ConsoleLoggerService
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })], AppModule);
    return $_$w(11, 61), AppModule;
}());
$_$w(11, 62), exports.AppModule = AppModule;
$_$wpe(11);