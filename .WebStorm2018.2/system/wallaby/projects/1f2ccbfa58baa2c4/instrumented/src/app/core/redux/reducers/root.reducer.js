'use strict';
$_$wp(78);
$_$w(78, 0), Object.defineProperty(exports, '__esModule', { value: true });
var redux_1 = ($_$w(78, 1), require('redux'));
var menu_reducer_1 = ($_$w(78, 2), require('./menu.reducer'));
var selected_states_reducer_1 = ($_$w(78, 3), require('./selected-states.reducer'));
var tray_tree_reducer_1 = ($_$w(78, 4), require('./tray-tree.reducer'));
var snippets_reducer_1 = ($_$w(78, 5), require('./snippets.reducer'));
$_$w(78, 6), exports.RootReducer = redux_1.combineReducers({
    menu: menu_reducer_1.menu,
    trayTree: tray_tree_reducer_1.trayTree,
    snippets: snippets_reducer_1.snippets,
    selectedStates: selected_states_reducer_1.selectedStates
});
$_$wpe(78);