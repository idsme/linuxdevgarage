import { combineReducers } from 'redux';
import { menu} from './menu.reducer';
import { selectedStates } from './selected-states.reducer';
import { trayTree } from './tray-tree.reducer';
import { snippets } from './snippets.reducer';

// Define the global store shape by combining our application's
// reducers together into a given structure.

export const RootReducer: any = combineReducers({
	menu,
	trayTree,
	snippets,
	selectedStates
});
