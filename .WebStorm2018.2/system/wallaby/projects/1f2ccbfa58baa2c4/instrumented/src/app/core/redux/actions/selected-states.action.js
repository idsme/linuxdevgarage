'use strict';
$_$wp(76);
var __decorate = ($_$w(76, 0), ($_$w(76, 1), ($_$w(76, 3), this) && ($_$w(76, 4), this.__decorate)) || ($_$w(76, 2), function (decorators, target, key, desc) {
    $_$wf(76);
    var c = ($_$w(76, 5), arguments.length), r = c < 3 ? ($_$w(76, 6), target) : ($_$w(76, 7), desc === null ? ($_$w(76, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(76, 9), desc)), d;
    if ($_$w(76, 10), ($_$w(76, 11), typeof Reflect === 'object') && ($_$w(76, 12), typeof Reflect.decorate === 'function')) {
        $_$w(76, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(76, 14), i >= 0; i--) {
            if ($_$w(76, 15), d = decorators[i]) {
                $_$w(76, 16), r = ($_$w(76, 17), c < 3 ? ($_$w(76, 19), d(r)) : ($_$w(76, 20), c > 3 ? ($_$w(76, 21), d(target, key, r)) : ($_$w(76, 22), d(target, key)))) || ($_$w(76, 18), r);
            }
        }
    }
    return $_$w(76, 23), (($_$w(76, 24), ($_$w(76, 26), c > 3) && ($_$w(76, 27), r)) && ($_$w(76, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(76, 28), ($_$w(76, 29), ($_$w(76, 31), this) && ($_$w(76, 32), this.__metadata)) || ($_$w(76, 30), function (k, v) {
    $_$wf(76);
    if ($_$w(76, 33), ($_$w(76, 34), typeof Reflect === 'object') && ($_$w(76, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(76, 36), Reflect.metadata(k, v);
    }
}));
$_$w(76, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(76, 38), require('@angular/core'));
var store_1 = ($_$w(76, 39), require('@angular-redux/store'));
var SelectedStatesActions = ($_$w(76, 40), function () {
    $_$wf(76);
    function SelectedStatesActions() {
        $_$wf(76);
    }
    $_$w(76, 41), SelectedStatesActions_1 = SelectedStatesActions;
    $_$w(76, 42), SelectedStatesActions.prototype.setSelectedTray = function (trayId) {
        $_$wf(76);
        return $_$w(76, 43), {
            type: SelectedStatesActions_1.SET_SELECTED_TRAY,
            payload: trayId
        };
    };
    $_$w(76, 44), SelectedStatesActions.prototype.setSelectedSnippet = function (taskId) {
        $_$wf(76);
        return $_$w(76, 45), {
            type: SelectedStatesActions_1.SET_SELECTED_SNIPPET,
            payload: taskId
        };
    };
    $_$w(76, 46), SelectedStatesActions.prototype.setSelectedMenuItem = function (menuItem) {
        $_$wf(76);
        return $_$w(76, 47), {
            type: SelectedStatesActions_1.SET_SELECTED_MENU_ITEM,
            payload: menuItem
        };
    };
    $_$w(76, 48), SelectedStatesActions.SET_SELECTED_TRAY = 'SET_SELECTED_TRAY';
    $_$w(76, 49), SelectedStatesActions.SET_SELECTED_SNIPPET = 'SET_SELECTED_SNIPPET';
    $_$w(76, 50), SelectedStatesActions.SET_SELECTED_MENU_ITEM = 'SET_SELECTED_MENU_ITEM';
    $_$w(76, 51), __decorate([
        store_1.dispatch(),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [String]),
        __metadata('design:returntype', Object)
    ], SelectedStatesActions.prototype, 'setSelectedTray', null);
    $_$w(76, 52), __decorate([
        store_1.dispatch(),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [String]),
        __metadata('design:returntype', Object)
    ], SelectedStatesActions.prototype, 'setSelectedSnippet', null);
    $_$w(76, 53), __decorate([
        store_1.dispatch(),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [Object]),
        __metadata('design:returntype', Object)
    ], SelectedStatesActions.prototype, 'setSelectedMenuItem', null);
    $_$w(76, 54), SelectedStatesActions = SelectedStatesActions_1 = __decorate([core_1.Injectable()], SelectedStatesActions);
    return $_$w(76, 55), SelectedStatesActions;
    var SelectedStatesActions_1 = SelectedStatesActions_1 || $_$w(76, 56);
}());
$_$w(76, 57), exports.SelectedStatesActions = SelectedStatesActions;
$_$wpe(76);