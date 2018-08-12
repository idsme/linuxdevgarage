'use strict';
$_$wp(75);
var __decorate = ($_$w(75, 0), ($_$w(75, 1), ($_$w(75, 3), this) && ($_$w(75, 4), this.__decorate)) || ($_$w(75, 2), function (decorators, target, key, desc) {
    $_$wf(75);
    var c = ($_$w(75, 5), arguments.length), r = c < 3 ? ($_$w(75, 6), target) : ($_$w(75, 7), desc === null ? ($_$w(75, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(75, 9), desc)), d;
    if ($_$w(75, 10), ($_$w(75, 11), typeof Reflect === 'object') && ($_$w(75, 12), typeof Reflect.decorate === 'function')) {
        $_$w(75, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(75, 14), i >= 0; i--) {
            if ($_$w(75, 15), d = decorators[i]) {
                $_$w(75, 16), r = ($_$w(75, 17), c < 3 ? ($_$w(75, 19), d(r)) : ($_$w(75, 20), c > 3 ? ($_$w(75, 21), d(target, key, r)) : ($_$w(75, 22), d(target, key)))) || ($_$w(75, 18), r);
            }
        }
    }
    return $_$w(75, 23), (($_$w(75, 24), ($_$w(75, 26), c > 3) && ($_$w(75, 27), r)) && ($_$w(75, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(75, 28), ($_$w(75, 29), ($_$w(75, 31), this) && ($_$w(75, 32), this.__metadata)) || ($_$w(75, 30), function (k, v) {
    $_$wf(75);
    if ($_$w(75, 33), ($_$w(75, 34), typeof Reflect === 'object') && ($_$w(75, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(75, 36), Reflect.metadata(k, v);
    }
}));
$_$w(75, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(75, 38), require('@angular/core'));
var store_1 = ($_$w(75, 39), require('@angular-redux/store'));
var SnippetActions = ($_$w(75, 40), function () {
    $_$wf(75);
    function SnippetActions() {
        $_$wf(75);
    }
    $_$w(75, 41), SnippetActions_1 = SnippetActions;
    $_$w(75, 42), SnippetActions.prototype.loadStarted = function () {
        $_$wf(75);
        return $_$w(75, 43), { type: SnippetActions_1.SNIPPET_LOAD_STARTED };
    };
    $_$w(75, 44), SnippetActions.prototype.loadSucceeded = function (payload) {
        $_$wf(75);
        return $_$w(75, 45), {
            type: SnippetActions_1.SNIPPET_LOAD_SUCCEEDED,
            payload: payload
        };
    };
    $_$w(75, 46), SnippetActions.prototype.loadFailed = function (error) {
        $_$wf(75);
        return $_$w(75, 47), {
            type: SnippetActions_1.SNIPPET_LOAD_FAILED,
            error: error
        };
    };
    $_$w(75, 48), SnippetActions.SNIPPET_LOAD_STARTED = 'SNIPPET_LOAD_STARTED';
    $_$w(75, 49), SnippetActions.SNIPPET_LOAD_SUCCEEDED = 'SNIPPET_LOAD_SUCCEEDED';
    $_$w(75, 50), SnippetActions.SNIPPET_LOAD_FAILED = 'SNIPPET_LOAD_FAILED';
    $_$w(75, 51), __decorate([
        store_1.dispatch(),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', Object)
    ], SnippetActions.prototype, 'loadStarted', null);
    $_$w(75, 52), __decorate([
        store_1.dispatch(),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [Array]),
        __metadata('design:returntype', Object)
    ], SnippetActions.prototype, 'loadSucceeded', null);
    $_$w(75, 53), __decorate([
        store_1.dispatch(),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [String]),
        __metadata('design:returntype', Object)
    ], SnippetActions.prototype, 'loadFailed', null);
    $_$w(75, 54), SnippetActions = SnippetActions_1 = __decorate([core_1.Injectable()], SnippetActions);
    return $_$w(75, 55), SnippetActions;
    var SnippetActions_1 = SnippetActions_1 || $_$w(75, 56);
}());
$_$w(75, 57), exports.SnippetActions = SnippetActions;
$_$wpe(75);