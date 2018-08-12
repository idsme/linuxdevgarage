import { SelectedStatesActions } from './../actions/selected-states.action';

const INITIAL_STATE = {
	selectedTray: null,
	selectedSnippet:  null,
	selectedMenuItem: null,
};

export function selectedStates(state = INITIAL_STATE, action) {

	switch (action.type) {
		case SelectedStatesActions.SET_SELECTED_TRAY:
			return {...state, ...{selectedTray: action.payload}};

		case SelectedStatesActions.SET_SELECTED_SNIPPET:
			return {...state, ...{selectedSnippet: action.payload}};

		case SelectedStatesActions.SET_SELECTED_MENU_ITEM:
			return {...state, ...{selectedMenuItem: action.payload}};
	}
	return state;
}
