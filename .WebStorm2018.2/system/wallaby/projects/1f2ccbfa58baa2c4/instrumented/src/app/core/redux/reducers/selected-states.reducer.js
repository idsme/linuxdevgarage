'use strict';
$_$wp(81);
var __assign = ($_$w(81, 0), ($_$w(81, 1), ($_$w(81, 3), ($_$w(81, 5), this) && ($_$w(81, 6), this.__assign)) || ($_$w(81, 4), Object.assign)) || ($_$w(81, 2), function (t) {
    $_$wf(81);
    for (var s, i = 1, n = arguments.length; $_$w(81, 7), i < n; i++) {
        $_$w(81, 8), s = arguments[i];
        for (var p in $_$w(81, 9), s) {
            if ($_$w(81, 10), Object.prototype.hasOwnProperty.call(s, p)) {
                $_$w(81, 11), t[p] = s[p];
            }
        }
    }
    return $_$w(81, 12), t;
}));
$_$w(81, 13), Object.defineProperty(exports, '__esModule', { value: true });
var selected_states_action_1 = ($_$w(81, 14), require('./../actions/selected-states.action'));
var INITIAL_STATE = ($_$w(81, 15), {
    selectedTray: null,
    selectedSnippet: null,
    selectedMenuItem: null
});
function selectedStates(state, action) {
    $_$wf(81);
    if ($_$w(81, 16), state === void 0) {
        $_$w(81, 17), state = INITIAL_STATE;
    }
    switch ($_$w(81, 18), action.type) {
    case selected_states_action_1.SelectedStatesActions.SET_SELECTED_TRAY: {
            return $_$w(81, 19), __assign({}, state, { selectedTray: action.payload });
        }
    case selected_states_action_1.SelectedStatesActions.SET_SELECTED_SNIPPET: {
            return $_$w(81, 20), __assign({}, state, { selectedSnippet: action.payload });
        }
    case selected_states_action_1.SelectedStatesActions.SET_SELECTED_MENU_ITEM: {
            return $_$w(81, 21), __assign({}, state, { selectedMenuItem: action.payload });
        }
    }
    return $_$w(81, 22), state;
}
$_$w(81, 23), exports.selectedStates = selectedStates;
$_$wpe(81);