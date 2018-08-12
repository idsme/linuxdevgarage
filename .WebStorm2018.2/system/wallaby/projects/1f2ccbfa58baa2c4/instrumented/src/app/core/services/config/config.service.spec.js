'use strict';
$_$wp(89);
var __extends = ($_$w(89, 0), ($_$w(89, 1), ($_$w(89, 3), this) && ($_$w(89, 4), this.__extends)) || ($_$w(89, 2), function () {
    $_$wf(89);
    var extendStatics = ($_$w(89, 5), ($_$w(89, 6), ($_$w(89, 8), Object.setPrototypeOf) || ($_$w(89, 9), ($_$w(89, 10), { __proto__: [] } instanceof Array) && ($_$w(89, 11), function (d, b) {
        $_$wf(89);
        $_$w(89, 12), d.__proto__ = b;
    }))) || ($_$w(89, 7), function (d, b) {
        $_$wf(89);
        for (var p in $_$w(89, 13), b) {
            if ($_$w(89, 14), b.hasOwnProperty(p)) {
                $_$w(89, 15), d[p] = b[p];
            }
        }
    }));
    return $_$w(89, 16), function (d, b) {
        $_$wf(89);
        $_$w(89, 17), extendStatics(d, b);
        function __() {
            $_$wf(89);
            $_$w(89, 18), this.constructor = d;
        }
        $_$w(89, 19), d.prototype = b === null ? ($_$w(89, 20), Object.create(b)) : ($_$w(89, 21), (__.prototype = b.prototype, new __()));
    };
}()));
$_$w(89, 22), Object.defineProperty(exports, '__esModule', { value: true });
var testing_1 = ($_$w(89, 23), require('@angular/core/testing'));
var app_module_1 = ($_$w(89, 24), require('../../../app.module'));
var config_collector_1 = ($_$w(89, 25), require('./config.collector'));
var config_service_1 = ($_$w(89, 26), require('./config.service'));
var testing_2 = ($_$w(89, 27), require('@angular/common/http/testing'));
var config_collector_mock_1 = ($_$w(89, 28), require('./config.collector.mock'));
var config_mapper_1 = ($_$w(89, 29), require('./config.mapper'));
var config_model_1 = ($_$w(89, 30), require('./config.model'));
var ConfigMock = ($_$w(89, 31), function (_super) {
    $_$wf(89);
    $_$w(89, 32), __extends(ConfigMock, _super);
    function ConfigMock() {
        $_$wf(89);
        return $_$w(89, 33), ($_$w(89, 34), ($_$w(89, 36), _super !== null) && ($_$w(89, 37), _super.apply(this, arguments))) || ($_$w(89, 35), this);
    }
    return $_$w(89, 38), ConfigMock;
}(config_model_1.Config));
$_$w(89, 39), describe('ConfigService', function () {
    $_$wf(89);
    var configService = configService || $_$w(89, 40);
    var configMapper = configMapper || $_$w(89, 41);
    $_$w(89, 42), beforeEach(function () {
        $_$wf(89);
        $_$w(89, 43), testing_1.TestBed.configureTestingModule({
            imports: [
                app_module_1.AppModule,
                testing_2.HttpClientTestingModule
            ],
            providers: [{
                    provide: config_collector_1.ConfigCollector,
                    useClass: config_collector_mock_1.ConfigCollectorMock
                }]
        });
        $_$w(89, 44), configService = testing_1.TestBed.get(config_service_1.ConfigService);
        $_$w(89, 45), configMapper = testing_1.TestBed.get(config_mapper_1.ConfigMapper);
    });
    $_$w(89, 46), describe('initialization', function () {
        $_$wf(89);
        $_$w(89, 47), it('should initialize when constructed as service and override of tray api', function () {
            $_$wf(89);
            $_$w(89, 48), expect(configService['defaultConfig']).toEqual({
                api: {
                    endpoints: {
                        tray: '/api/new-tray',
                        dossier: '/api/dossier',
                        product: '/api/product',
                        account: '/api/account'
                    },
                    maxRetries: 80,
                    interval: 250,
                    warningTime: 8
                }
            });
        });
    });
    $_$w(89, 49), describe('initializeDefaultConfig()', function () {
        $_$wf(89);
        $_$w(89, 50), it('should create a simple default config', function () {
            $_$wf(89);
            $_$w(89, 51), configService['defaultConfig'] = {};
            $_$w(89, 52), configService['initializeDefaultConfig']({ foo: 'bar' }, {});
            $_$w(89, 53), expect(configService['defaultConfig']).toEqual({ foo: 'bar' });
        });
        $_$w(89, 54), it('should create a simple default config with a one-length array', function () {
            $_$wf(89);
            $_$w(89, 55), configService['defaultConfig'] = {};
            $_$w(89, 56), configService['initializeDefaultConfig']({ foo: ['bar'] }, {});
            $_$w(89, 57), expect(configService['defaultConfig']).toEqual({ foo: 'bar' });
        });
        $_$w(89, 58), it('should create a simple default config and deep path override with a two-length array', function () {
            $_$wf(89);
            $_$w(89, 59), configService['defaultConfig'] = {};
            $_$w(89, 60), configService['initializeDefaultConfig']({
                foo: [
                    'bar',
                    { case1: 'baz' }
                ]
            }, {});
            $_$w(89, 61), expect(configService['defaultContextToDeepPaths']).toEqual({ 'case1': { 'foo': 'baz' } });
        });
        $_$w(89, 62), it('should create a simple default config, deep path override and server deep path overrides with a three-length array', function () {
            $_$wf(89);
            $_$w(89, 63), configService['keysToDeepPaths'] = {};
            $_$w(89, 64), configService['initializeDefaultConfig']({
                foo: [
                    'bar',
                    { case1: 'baz' },
                    'FOO-BAR'
                ]
            }, {});
            $_$w(89, 65), expect(configService['keysToDeepPaths']).toEqual({ 'FOO-BAR': 'foo' });
        });
        $_$w(89, 66), it('should create a simple default config, with a three-length array with server override', function () {
            $_$wf(89);
            $_$w(89, 67), configService['defaultConfig'] = {};
            $_$w(89, 68), configService['initializeDefaultConfig']({
                foo: [
                    'bar',
                    { case1: 'baz' },
                    'FOO-BAR'
                ]
            }, { 'FOO-BAR': 'other' });
            $_$w(89, 69), expect(configService['defaultConfig']).toEqual({ foo: 'other' });
        });
        $_$w(89, 70), it('should create a config with context = null in three-length array with server override', function () {
            $_$wf(89);
            $_$w(89, 71), configService['defaultConfig'] = {};
            $_$w(89, 72), configService['initializeDefaultConfig']({
                foo: [
                    'bar',
                    null,
                    'FOO-BAR'
                ]
            }, { 'FOO-BAR': 'other' });
            $_$w(89, 73), expect(configService['defaultConfig']).toEqual({ foo: 'other' });
        });
        $_$w(89, 74), it('should handle an elaborated example correctly', function () {
            $_$wf(89);
            $_$w(89, 75), configService['defaultConfig'] = {};
            $_$w(89, 76), configService['keysToDeepPaths'] = {};
            $_$w(89, 77), configService['defaultContextToDeepPaths'] = {};
            $_$w(89, 78), configService['initializeDefaultConfig']({
                foo: {
                    bar: [
                        'origValue',
                        { baz: 'exceptValue' },
                        'FOO-BAR'
                    ]
                }
            }, { 'FOO-BAR': 'serverValue' });
            $_$w(89, 79), expect(configService['defaultConfig']).toEqual({ foo: { bar: 'serverValue' } });
            $_$w(89, 80), expect(configService['keysToDeepPaths']).toEqual({ 'FOO-BAR': 'foo.bar' });
            $_$w(89, 81), expect(configService['defaultContextToDeepPaths']).toEqual({ baz: { 'foo.bar': 'exceptValue' } });
        });
    });
    $_$w(89, 82), describe('get()', function () {
        $_$wf(89);
        $_$w(89, 83), it('should return a typed value of the config', function () {
            $_$wf(89);
            $_$w(89, 84), spyOn(configMapper, 'get').and.returnValue('foo1');
            $_$w(89, 85), configService['initializeDefaultConfig']({
                foo1: {
                    bar: [
                        'origValue',
                        { baz: 'exceptValue' },
                        'FOO-BAR'
                    ]
                }
            }, {});
            var configMock = ($_$w(89, 86), configService.get(ConfigMock));
            $_$w(89, 87), expect(configMock.bar).toBe('origValue');
            $_$w(89, 88), expect(configMock.constructor.name).toBe('ConfigMock');
        });
        $_$w(89, 89), it('should return a typed value of the config with a given context name', function () {
            $_$wf(89);
            $_$w(89, 90), spyOn(configMapper, 'get').and.returnValue('foo1');
            $_$w(89, 91), configService['initializeDefaultConfig']({
                foo1: {
                    bar: [
                        'origValue',
                        { baz: 'exceptValue' },
                        'FOO-BAR'
                    ]
                }
            }, {});
            var configMock = ($_$w(89, 92), configService.get(ConfigMock, 'baz'));
            $_$w(89, 93), expect(configMock.bar).toBe('exceptValue');
        });
        $_$w(89, 94), it('should return null when no mapping is found', function () {
            $_$wf(89);
            $_$w(89, 95), spyOn(configMapper, 'get').and.returnValue(undefined);
            $_$w(89, 96), configService['initializeDefaultConfig']({
                foo1: {
                    bar: [
                        'origValue',
                        { baz: 'exceptValue' },
                        'FOO-BAR'
                    ]
                }
            }, {});
            var configMock = ($_$w(89, 97), configService.get(ConfigMock));
            $_$w(89, 98), expect(configMock).toBeNull();
        });
    });
    $_$w(89, 99), describe('getSnapshot()', function () {
        $_$wf(89);
        $_$w(89, 100), it('should return a hierarchical snapshot of the the path', function () {
            $_$wf(89);
            $_$w(89, 101), configService['initializeDefaultConfig']({
                foo: {
                    bar: [
                        'origValue',
                        { baz: 'exceptValue' },
                        'FOO-BAR'
                    ]
                }
            }, {});
            $_$w(89, 102), expect(configService['getSnapshot']('foo')).toEqual({ bar: 'origValue' });
        });
        $_$w(89, 103), it('should return value when path match is made partially', function () {
            $_$wf(89);
            $_$w(89, 104), configService['initializeDefaultConfig']({
                foo: {
                    bar: [
                        'origValue',
                        { baz: 'exceptValue' },
                        'FOO-BAR'
                    ],
                    o1: { o2: 'o3' }
                }
            }, {});
            $_$w(89, 105), expect(configService['getSnapshot']('foo.some.other')).toEqual({ bar: 'origValue' });
            $_$w(89, 106), expect(configService['getSnapshot']('foo.o1')).toEqual({
                bar: 'origValue',
                o2: 'o3'
            });
        });
        $_$w(89, 107), it('should return an empty object when no match is made', function () {
            $_$wf(89);
            $_$w(89, 108), configService['initializeDefaultConfig']({
                foo: {
                    bar: [
                        'origValue',
                        { baz: 'exceptValue' },
                        'FOO-BAR'
                    ],
                    o1: { o2: 'o3' }
                }
            }, {});
            $_$w(89, 109), expect(configService['getSnapshot']('bar')).toEqual({});
            $_$w(89, 110), expect(configService['getSnapshot']('')).toEqual({});
        });
        $_$w(89, 111), it('should do context name overrides on multiple levels', function () {
            $_$wf(89);
            $_$w(89, 112), configService['initializeDefaultConfig']({
                foo: {
                    bar: [
                        'origValue',
                        { baz: 'exceptValue' },
                        'FOO-BAR'
                    ],
                    o1: {
                        o2: [
                            'o3',
                            { baz: 'o4' }
                        ]
                    }
                }
            }, {});
            $_$w(89, 113), expect(configService['getSnapshot']('foo.o1')).toEqual({
                bar: 'origValue',
                o2: 'o3'
            });
            $_$w(89, 114), expect(configService['getSnapshot']('foo.o1', 'baz')).toEqual({
                bar: 'exceptValue',
                o2: 'o4'
            });
        });
        $_$w(89, 115), it('should return a primitive value when targetted directly with simple path', function () {
            $_$wf(89);
            $_$w(89, 116), configService['initializeDefaultConfig']({ foo: 'bar' }, {});
            $_$w(89, 117), expect(configService['getSnapshot']('foo')).toEqual({ foo: 'bar' });
        });
        $_$w(89, 118), it('should return a primitive value when targetted directly with deep path', function () {
            $_$wf(89);
            $_$w(89, 119), configService['initializeDefaultConfig']({ foo: { bar: 'baz' } }, {});
            $_$w(89, 120), expect(configService['getSnapshot']('foo.bar')).toEqual({ bar: 'baz' });
        });
        $_$w(89, 121), it('should return an array value ', function () {
            $_$wf(89);
            $_$w(89, 122), configService['initializeDefaultConfig']({ foo: { bar: [[{ oth: 'baz' }]] } }, {});
            $_$w(89, 123), expect(configService['getSnapshot']('foo.bar')).toEqual({ bar: [{ oth: 'baz' }] });
        });
    });
    $_$w(89, 124), describe('testing private helper functions', function () {
        $_$wf(89);
        $_$w(89, 125), describe('getDeepPaths()', function () {
            $_$wf(89);
            $_$w(89, 126), it('returns all possible direct deep paths to all values inside an object', function () {
                $_$wf(89);
                $_$w(89, 127), expect(configService['getDeepPaths']({
                    foo: {
                        bar: 11,
                        baz: { hello: 'world' }
                    }
                })).toEqual([
                    'foo.bar',
                    'foo.baz.hello'
                ]);
            });
        });
        $_$w(89, 128), describe('getHierarchicalPaths()', function () {
            $_$wf(89);
            $_$w(89, 129), it('returns all hierarchical paths from one deep path, like foo.bar.baz', function () {
                $_$wf(89);
                $_$w(89, 130), expect(configService['getHierarchicalPaths']('foo.bar.baz')).toEqual([
                    'foo',
                    'foo.bar',
                    'foo.bar.baz'
                ]);
            });
        });
        $_$w(89, 131), describe('getDeepValue()', function () {
            $_$wf(89);
            $_$w(89, 132), it('get primitive value of shallow path of an object', function () {
                $_$wf(89);
                $_$w(89, 133), expect(configService['getDeepValue']({ foo: 'bar' }, 'foo')).toBe('bar');
            });
            $_$w(89, 134), it('get primitive value of deep path of an object', function () {
                $_$wf(89);
                $_$w(89, 135), expect(configService['getDeepValue']({ foo: { bar: 'baz' } }, 'foo.bar')).toBe('baz');
            });
            $_$w(89, 136), it('get object value of deep path of an object', function () {
                $_$wf(89);
                $_$w(89, 137), expect(configService['getDeepValue']({ foo: { bar: { baz: 'value' } } }, 'foo.bar')).toEqual({ baz: 'value' });
            });
            $_$w(89, 138), it('get object value of deep path of an object', function () {
                $_$wf(89);
                $_$w(89, 139), expect(configService['getDeepValue']({ foo: { bar: { baz: 'value' } } }, 'foo.other')).toBeUndefined();
            });
            $_$w(89, 140), it('should return an array as value', function () {
                $_$wf(89);
                $_$w(89, 141), expect(configService['getDeepValue']({ foo: { bar: [[{ d: 'baz' }]] } }, 'foo.bar')).toEqual([[{ d: 'baz' }]]);
            });
        });
        $_$w(89, 142), describe('setDeepValue()', function () {
            $_$wf(89);
            $_$w(89, 143), it('set value on unknown property (shallow path)', function () {
                $_$wf(89);
                $_$w(89, 144), expect(configService['setDeepValue']({}, 'foo', 'bar')).toEqual({ foo: 'bar' });
            });
            $_$w(89, 145), it('set array value on unknown property (shallow path)', function () {
                $_$wf(89);
                $_$w(89, 146), expect(configService['setDeepValue']({}, 'foo', ['bar'])).toEqual({ foo: ['bar'] });
            });
            $_$w(89, 147), it('set value on unknown property (deep path)', function () {
                $_$wf(89);
                $_$w(89, 148), expect(configService['setDeepValue']({}, 'foo.bar.baz', 'sample')).toEqual({ foo: { bar: { baz: 'sample' } } });
            });
            $_$w(89, 149), it('overwrite value of known property', function () {
                $_$wf(89);
                $_$w(89, 150), expect(configService['setDeepValue']({ foo: { bar: 'baz' } }, 'foo.bar', 'new value')).toEqual({ foo: { bar: 'new value' } });
            });
        });
    });
});
$_$wpe(89);