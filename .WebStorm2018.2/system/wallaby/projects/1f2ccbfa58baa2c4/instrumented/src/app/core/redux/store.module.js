'use strict';
$_$wp(46);
var __decorate = ($_$w(46, 0), ($_$w(46, 1), ($_$w(46, 3), this) && ($_$w(46, 4), this.__decorate)) || ($_$w(46, 2), function (decorators, target, key, desc) {
    $_$wf(46);
    var c = ($_$w(46, 5), arguments.length), r = c < 3 ? ($_$w(46, 6), target) : ($_$w(46, 7), desc === null ? ($_$w(46, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(46, 9), desc)), d;
    if ($_$w(46, 10), ($_$w(46, 11), typeof Reflect === 'object') && ($_$w(46, 12), typeof Reflect.decorate === 'function')) {
        $_$w(46, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(46, 14), i >= 0; i--) {
            if ($_$w(46, 15), d = decorators[i]) {
                $_$w(46, 16), r = ($_$w(46, 17), c < 3 ? ($_$w(46, 19), d(r)) : ($_$w(46, 20), c > 3 ? ($_$w(46, 21), d(target, key, r)) : ($_$w(46, 22), d(target, key)))) || ($_$w(46, 18), r);
            }
        }
    }
    return $_$w(46, 23), (($_$w(46, 24), ($_$w(46, 26), c > 3) && ($_$w(46, 27), r)) && ($_$w(46, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(46, 28), ($_$w(46, 29), ($_$w(46, 31), this) && ($_$w(46, 32), this.__metadata)) || ($_$w(46, 30), function (k, v) {
    $_$wf(46);
    if ($_$w(46, 33), ($_$w(46, 34), typeof Reflect === 'object') && ($_$w(46, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(46, 36), Reflect.metadata(k, v);
    }
}));
$_$w(46, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(46, 38), require('@angular/core'));
var store_1 = ($_$w(46, 39), require('@angular-redux/store'));
var redux_logger_1 = ($_$w(46, 40), require('redux-logger'));
var root_reducer_1 = ($_$w(46, 41), require('./reducers/root.reducer'));
var StoreModule = ($_$w(46, 42), function () {
    $_$wf(46);
    function StoreModule(store, devTools) {
        $_$wf(46);
        $_$w(46, 43), this.store = store;
        $_$w(46, 44), this.devTools = devTools;
        $_$w(46, 45), store.configureStore(root_reducer_1.RootReducer, {}, [redux_logger_1.createLogger()], devTools.isEnabled() ? ($_$w(46, 46), [devTools.enhancer()]) : ($_$w(46, 47), []));
    }
    $_$w(46, 48), StoreModule = __decorate([
        core_1.NgModule({
            imports: [store_1.NgReduxModule],
            providers: []
        }),
        __metadata('design:paramtypes', [
            ($_$w(46, 49), ($_$w(46, 51), typeof (_a = ($_$w(46, 53), typeof store_1.NgRedux !== 'undefined') && ($_$w(46, 54), store_1.NgRedux)) === 'function') && ($_$w(46, 52), _a)) || ($_$w(46, 50), Object),
            ($_$w(46, 55), ($_$w(46, 57), typeof (_b = ($_$w(46, 59), typeof store_1.DevToolsExtension !== 'undefined') && ($_$w(46, 60), store_1.DevToolsExtension)) === 'function') && ($_$w(46, 58), _b)) || ($_$w(46, 56), Object)
        ])
    ], StoreModule);
    return $_$w(46, 61), StoreModule;
    var _a = _a || $_$w(46, 62), _b;
}());
$_$w(46, 63), exports.StoreModule = StoreModule;
$_$wpe(46);