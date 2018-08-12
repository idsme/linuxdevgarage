import { MenuActions } from '../actions/menu.action';

const INITIAL_STATE = {
	items: [],
};

export function menu(state = INITIAL_STATE, action) {

	switch (action.type) {
		case MenuActions.SET_MENU:
			return {
				items: action.payload,
			};
	}
	return state;
}
