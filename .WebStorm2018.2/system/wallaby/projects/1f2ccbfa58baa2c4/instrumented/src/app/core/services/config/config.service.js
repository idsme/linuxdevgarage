'use strict';
$_$wp(87);
var __decorate = ($_$w(87, 0), ($_$w(87, 1), ($_$w(87, 3), this) && ($_$w(87, 4), this.__decorate)) || ($_$w(87, 2), function (decorators, target, key, desc) {
    $_$wf(87);
    var c = ($_$w(87, 5), arguments.length), r = c < 3 ? ($_$w(87, 6), target) : ($_$w(87, 7), desc === null ? ($_$w(87, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(87, 9), desc)), d;
    if ($_$w(87, 10), ($_$w(87, 11), typeof Reflect === 'object') && ($_$w(87, 12), typeof Reflect.decorate === 'function')) {
        $_$w(87, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(87, 14), i >= 0; i--) {
            if ($_$w(87, 15), d = decorators[i]) {
                $_$w(87, 16), r = ($_$w(87, 17), c < 3 ? ($_$w(87, 19), d(r)) : ($_$w(87, 20), c > 3 ? ($_$w(87, 21), d(target, key, r)) : ($_$w(87, 22), d(target, key)))) || ($_$w(87, 18), r);
            }
        }
    }
    return $_$w(87, 23), (($_$w(87, 24), ($_$w(87, 26), c > 3) && ($_$w(87, 27), r)) && ($_$w(87, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(87, 28), ($_$w(87, 29), ($_$w(87, 31), this) && ($_$w(87, 32), this.__metadata)) || ($_$w(87, 30), function (k, v) {
    $_$wf(87);
    if ($_$w(87, 33), ($_$w(87, 34), typeof Reflect === 'object') && ($_$w(87, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(87, 36), Reflect.metadata(k, v);
    }
}));
$_$w(87, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(87, 38), require('@angular/core'));
var config_collector_1 = ($_$w(87, 39), require('./config.collector'));
var config_mapper_1 = ($_$w(87, 40), require('./config.mapper'));
var ConfigService = ($_$w(87, 41), function () {
    $_$wf(87);
    function ConfigService(configCollector, configMapper) {
        $_$wf(87);
        $_$w(87, 42), this.configCollector = configCollector;
        $_$w(87, 43), this.configMapper = configMapper;
        $_$w(87, 44), this.defaultConfig = {};
        $_$w(87, 45), this.keysToDeepPaths = {};
        $_$w(87, 46), this.defaultContextToDeepPaths = {};
        $_$w(87, 47), this.initializeDefaultConfig(configCollector.getConfig(), configCollector.getOverrides());
    }
    $_$w(87, 48), ConfigService.prototype.get = function (config, contextName) {
        $_$wf(87);
        var rootPath = ($_$w(87, 49), this.configMapper.get(new config()));
        var c = ($_$w(87, 50), new config());
        if ($_$w(87, 51), !rootPath) {
            $_$w(87, 52), console.warn('No rootPath found in ConfigMapper for class ' + c.constructor.name);
            return $_$w(87, 53), null;
        }
        return $_$w(87, 54), Object.assign(c, this.getSnapshot(rootPath, contextName));
    };
    $_$w(87, 55), ConfigService.prototype.getSnapshot = function (rootPath, contextName) {
        $_$wf(87);
        var _this = ($_$w(87, 56), this);
        var config = ($_$w(87, 57), JSON.parse(JSON.stringify(this.defaultConfig)));
        var hierarchicalPaths = ($_$w(87, 58), this.getHierarchicalPaths(rootPath));
        var contextValues = ($_$w(87, 59), ($_$w(87, 60), this.defaultContextToDeepPaths[contextName]) || ($_$w(87, 61), {}));
        $_$w(87, 62), Object.keys(contextValues).forEach(function (path) {
            $_$wf(87);
            $_$w(87, 63), _this.setDeepValue(config, path, contextValues[path]);
        });
        var deepestValue = ($_$w(87, 64), this.getDeepValue(config, hierarchicalPaths[hierarchicalPaths.length - 1]));
        if ($_$w(87, 65), ($_$w(87, 66), deepestValue !== undefined) && ($_$w(87, 67), ($_$w(87, 68), typeof deepestValue !== 'object') || ($_$w(87, 69), Array.isArray(deepestValue)))) {
            var deepestPathPart = ($_$w(87, 70), rootPath.split('.').slice(-1)[0]);
            var out = ($_$w(87, 71), {});
            $_$w(87, 72), out[deepestPathPart] = deepestValue;
            return $_$w(87, 73), out;
        }
        var hierarchicalValues = ($_$w(87, 74), Object.assign.apply(null, hierarchicalPaths.map(function (path) {
            $_$wf(87);
            return $_$w(87, 75), ($_$w(87, 76), _this.getDeepValue(config, path)) || ($_$w(87, 77), {});
        })));
        return $_$w(87, 78), Object.keys(hierarchicalValues).reduce(function (values, key) {
            $_$wf(87);
            if ($_$w(87, 79), ($_$w(87, 80), !Array.isArray(hierarchicalValues[key])) && ($_$w(87, 81), !(typeof hierarchicalValues[key] === 'object'))) {
                $_$w(87, 82), values[key] = hierarchicalValues[key];
            }
            return $_$w(87, 83), values;
        }, {});
    };
    $_$w(87, 84), ConfigService.prototype.initializeDefaultConfig = function (data, serverOverrides) {
        $_$wf(87);
        var _this = ($_$w(87, 85), this);
        var deepPaths = ($_$w(87, 86), this.getDeepPaths(data));
        $_$w(87, 87), deepPaths.forEach(function (path) {
            $_$wf(87);
            var deepValue = ($_$w(87, 88), _this.getDeepValue(data, path));
            if ($_$w(87, 89), Array.isArray(deepValue)) {
                $_$w(87, 90), _this.setDeepValue(_this.defaultConfig, path, deepValue[0]);
                if ($_$w(87, 91), deepValue.length > 2) {
                    $_$w(87, 92), _this.keysToDeepPaths[deepValue[2]] = path;
                }
                if ($_$w(87, 93), deepValue.length > 1) {
                    $_$w(87, 94), Object.keys(($_$w(87, 95), deepValue[1]) || ($_$w(87, 96), {})).forEach(function (contextName) {
                        $_$wf(87);
                        if ($_$w(87, 97), !_this.defaultContextToDeepPaths[contextName]) {
                            $_$w(87, 98), _this.defaultContextToDeepPaths[contextName] = {};
                        }
                        $_$w(87, 99), _this.defaultContextToDeepPaths[contextName][path] = deepValue[1][contextName];
                    });
                }
            } else {
                $_$w(87, 100), _this.setDeepValue(_this.defaultConfig, path, deepValue);
            }
        });
        $_$w(87, 101), Object.keys(serverOverrides).forEach(function (override) {
            $_$wf(87);
            var deepPath = ($_$w(87, 102), _this.keysToDeepPaths[override]);
            if ($_$w(87, 103), deepPath) {
                $_$w(87, 104), _this.setDeepValue(_this.defaultConfig, deepPath, serverOverrides[override]);
            }
        });
    };
    $_$w(87, 105), ConfigService.prototype.getDeepPaths = function (objRef) {
        $_$wf(87);
        function keyify(obj, prefix) {
            $_$wf(87);
            if ($_$w(87, 106), prefix === void 0) {
                $_$w(87, 107), prefix = '';
            }
            return $_$w(87, 108), Object.keys(obj).reduce(function (res, el) {
                $_$wf(87);
                if ($_$w(87, 109), Array.isArray(obj[el])) {
                    return $_$w(87, 110), res.concat([prefix + el]);
                } else if ($_$w(87, 111), ($_$w(87, 112), obj[el] !== null) && ($_$w(87, 113), typeof obj[el] === 'object')) {
                    return $_$w(87, 114), res.concat(keyify(obj[el], prefix + el + '.'));
                } else {
                    return $_$w(87, 115), res.concat([prefix + el]);
                }
            }, []);
        }
        return $_$w(87, 116), keyify(objRef);
    };
    $_$w(87, 117), ConfigService.prototype.getHierarchicalPaths = function (rootPath) {
        $_$wf(87);
        var rootPathParts = ($_$w(87, 118), rootPath.split('.'));
        return $_$w(87, 119), rootPathParts.reduce(function (paths, pathPart) {
            $_$wf(87);
            var path = ($_$w(87, 120), paths.length === 0 ? ($_$w(87, 121), pathPart) : ($_$w(87, 122), paths[paths.length - 1] + '.' + pathPart));
            $_$w(87, 123), paths.push(path);
            return $_$w(87, 124), paths;
        }, []);
    };
    $_$w(87, 125), ConfigService.prototype.getDeepValue = function (obj, path) {
        $_$wf(87);
        var pList = ($_$w(87, 126), path.split('.'));
        var key = ($_$w(87, 127), pList.pop());
        var pointer = ($_$w(87, 128), pList.reduce(function (accumulator, currentValue) {
            $_$wf(87);
            if ($_$w(87, 129), accumulator[currentValue] === undefined) {
                $_$w(87, 130), accumulator[currentValue] = {};
            }
            return $_$w(87, 131), accumulator[currentValue];
        }, obj));
        return $_$w(87, 132), pointer[key];
    };
    $_$w(87, 133), ConfigService.prototype.setDeepValue = function (obj, path, value) {
        $_$wf(87);
        var pList = ($_$w(87, 134), path.split('.'));
        var key = ($_$w(87, 135), pList.pop());
        var pointer = ($_$w(87, 136), pList.reduce(function (accumulator, currentValue) {
            $_$wf(87);
            if ($_$w(87, 137), accumulator[currentValue] === undefined) {
                $_$w(87, 138), accumulator[currentValue] = {};
            }
            return $_$w(87, 139), accumulator[currentValue];
        }, obj));
        $_$w(87, 140), pointer[key] = value;
        return $_$w(87, 141), obj;
    };
    $_$w(87, 142), ConfigService = __decorate([
        core_1.Injectable(),
        __metadata('design:paramtypes', [
            config_collector_1.ConfigCollector,
            config_mapper_1.ConfigMapper
        ])
    ], ConfigService);
    return $_$w(87, 143), ConfigService;
}());
$_$w(87, 144), exports.ConfigService = ConfigService;
$_$wpe(87);