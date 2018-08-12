'use strict';
$_$wp(77);
$_$w(77, 0), Object.defineProperty(exports, '__esModule', { value: true });
var menu_action_1 = ($_$w(77, 1), require('../actions/menu.action'));
var INITIAL_STATE = ($_$w(77, 2), { items: [] });
function menu(state, action) {
    $_$wf(77);
    if ($_$w(77, 3), state === void 0) {
        $_$w(77, 4), state = INITIAL_STATE;
    }
    switch ($_$w(77, 5), action.type) {
    case menu_action_1.MenuActions.SET_MENU: {
            return $_$w(77, 6), { items: action.payload };
        }
    }
    return $_$w(77, 7), state;
}
$_$w(77, 8), exports.menu = menu;
$_$wpe(77);