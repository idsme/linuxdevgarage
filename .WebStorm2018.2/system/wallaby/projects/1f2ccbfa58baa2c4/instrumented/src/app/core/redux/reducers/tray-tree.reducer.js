'use strict';
$_$wp(80);
$_$w(80, 0), Object.defineProperty(exports, '__esModule', { value: true });
var tray_action_1 = ($_$w(80, 1), require('./../actions/tray.action'));
var INITIAL_STATE = ($_$w(80, 2), {
    tabs: [],
    modules: [],
    etag: '',
    loading: false
});
function trayTree(state, action) {
    $_$wf(80);
    if ($_$w(80, 3), state === void 0) {
        $_$w(80, 4), state = INITIAL_STATE;
    }
    switch ($_$w(80, 5), action.type) {
    case tray_action_1.TrayActions.TRAY_LOAD_STARTED: {
            return $_$w(80, 6), { loading: true };
        }
    case tray_action_1.TrayActions.TRAY_LOAD_SUCCEEDED: {
            return $_$w(80, 7), action.payload;
        }
    case tray_action_1.TrayActions.TRAY_LOAD_FAILED: {
            return $_$w(80, 8), {
                loading: false,
                error: action.error
            };
        }
    }
    return $_$w(80, 9), state;
}
$_$w(80, 10), exports.trayTree = trayTree;
$_$wpe(80);