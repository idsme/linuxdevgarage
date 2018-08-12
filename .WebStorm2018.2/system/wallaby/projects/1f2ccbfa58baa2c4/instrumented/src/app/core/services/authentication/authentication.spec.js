'use strict';
$_$wp(96);
$_$w(96, 0), Object.defineProperty(exports, '__esModule', { value: true });
var testing_1 = ($_$w(96, 1), require('@angular/core/testing'));
var app_module_1 = ($_$w(96, 2), require('../../../app.module'));
var testing_2 = ($_$w(96, 3), require('@angular/common/http/testing'));
var config_collector_mock_1 = ($_$w(96, 4), require('../config/config.collector.mock'));
var config_collector_1 = ($_$w(96, 5), require('../config/config.collector'));
var authentication_1 = ($_$w(96, 6), require('./authentication'));
var userMock = ($_$w(96, 7), {
    data: {
        attributes: {
            rolePermissions: [{
                    roleName: 'foo',
                    permissions: ['bar']
                }]
        }
    }
});
$_$w(96, 8), describe('Authentication', function () {
    $_$wf(96);
    var authentication = authentication || $_$w(96, 9);
    $_$w(96, 10), beforeEach(function () {
        $_$wf(96);
        $_$w(96, 11), testing_1.TestBed.configureTestingModule({
            imports: [
                app_module_1.AppModule,
                testing_2.HttpClientTestingModule
            ],
            providers: [{
                    provide: config_collector_1.ConfigCollector,
                    useClass: config_collector_mock_1.ConfigCollectorMock
                }]
        });
        $_$w(96, 12), authentication = testing_1.TestBed.get(authentication_1.Authentication);
    });
    $_$w(96, 13), describe('setData()', function () {
        $_$wf(96);
        $_$w(96, 14), it('should set the data', function () {
            $_$wf(96);
            $_$w(96, 15), expect(authentication['user']).toBeUndefined();
            $_$w(96, 16), authentication.setData({ data: { attributes: { foo: 'bar' } } });
            $_$w(96, 17), expect(authentication['user']).toEqual({ foo: 'bar' });
        });
    });
    $_$w(96, 18), describe('hasPermission()', function () {
        $_$wf(96);
        $_$w(96, 19), it('should return false when data is not set', function () {
            $_$wf(96);
            $_$w(96, 20), expect(authentication.hasPermission('foo')).toBeFalsy();
        });
        $_$w(96, 21), it('should return true when one role is defined and has permission', function () {
            $_$wf(96);
            $_$w(96, 22), authentication.setData(userMock);
            $_$w(96, 23), expect(authentication.hasPermission('bar')).toBeTruthy();
        });
        $_$w(96, 24), it('should return true when one role is defined and has NOT permission', function () {
            $_$wf(96);
            $_$w(96, 25), authentication.setData({
                data: {
                    attributes: {
                        rolePermissions: [{
                                roleName: 'foo',
                                permissions: ['bar']
                            }]
                    }
                }
            });
            $_$w(96, 26), expect(authentication.hasPermission('baz')).toBeFalsy();
        });
        $_$w(96, 27), it('should return true when more roles are defined and has permission', function () {
            $_$wf(96);
            $_$w(96, 28), authentication.setData({
                data: {
                    attributes: {
                        rolePermissions: [
                            {
                                role: 'other',
                                permissions: ['new-perm']
                            },
                            {
                                roleName: 'foo',
                                permissions: ['bar']
                            }
                        ]
                    }
                }
            });
            $_$w(96, 29), expect(authentication.hasPermission('bar')).toBeTruthy();
        });
    });
    $_$w(96, 30), describe('isAuthenticated()', function () {
        $_$wf(96);
        $_$w(96, 31), it('should return false when no user is set', function () {
            $_$wf(96);
            $_$w(96, 32), expect(authentication.isAuthenticated()).toBeFalsy();
        });
        $_$w(96, 33), it('should return true when a user is set', function () {
            $_$wf(96);
            $_$w(96, 34), authentication.setData(userMock);
            $_$w(96, 35), expect(authentication.isAuthenticated()).toBeTruthy();
        });
    });
});
$_$wpe(96);