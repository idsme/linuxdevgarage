'use strict';
$_$wp(84);
$_$w(84, 0), Object.defineProperty(exports, '__esModule', { value: true });
var app_module_1 = ($_$w(84, 1), require('../../../app.module'));
var testing_1 = ($_$w(84, 2), require('@angular/core/testing'));
var testing_2 = ($_$w(84, 3), require('@angular/common/http/testing'));
var config_collector_mock_1 = ($_$w(84, 4), require('../config/config.collector.mock'));
var config_collector_1 = ($_$w(84, 5), require('../config/config.collector'));
var authentication_1 = ($_$w(84, 6), require('../authentication/authentication'));
var activate_guard_1 = ($_$w(84, 7), require('./activate.guard'));
$_$w(84, 8), describe('ActivateGuard', function () {
    $_$wf(84);
    var activateGuard = activateGuard || $_$w(84, 9);
    var authentication = authentication || $_$w(84, 10);
    $_$w(84, 11), beforeEach(function () {
        $_$wf(84);
        $_$w(84, 12), testing_1.TestBed.configureTestingModule({
            imports: [
                app_module_1.AppModule,
                testing_2.HttpClientTestingModule
            ],
            providers: [
                {
                    provide: config_collector_1.ConfigCollector,
                    useClass: config_collector_mock_1.ConfigCollectorMock
                },
                {
                    provide: authentication_1.Authentication,
                    useValue: {
                        isAuthenticated: function () {
                            $_$wf(84);
                        }
                    }
                }
            ]
        });
        $_$w(84, 13), activateGuard = testing_1.TestBed.get(activate_guard_1.ActivateGuard);
        $_$w(84, 14), authentication = testing_1.TestBed.get(authentication_1.Authentication);
    });
    $_$w(84, 15), fdescribe('canActivate', function () {
        $_$wf(84);
        $_$w(84, 16), it('should return true when user is authenticated', function () {
            $_$wf(84);
            $_$w(84, 17), spyOn(authentication, 'isAuthenticated').and.returnValue(true);
            $_$w(84, 18), expect(activateGuard.canActivate()).toBeTruthy();
        });
        $_$w(84, 19), fit('should return true when user is authenticated', function () {
            $_$wf(84);
            $_$w(84, 20), spyOn(authentication, 'isAuthenticated').and.returnValue(false);
            $_$w(84, 21), expect(activateGuard.canActivate()).toBeFalsy();
            $_$w(84, 22), $_$tracer.log('someshit', '', 84, 22);
        });
    });
});
$_$wpe(84);