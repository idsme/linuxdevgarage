import { TrayActions } from './../actions/tray.action';

const INITIAL_STATE = {
	tabs: [],
	modules: [],
	etag: '',
	loading: false
};

export function trayTree(state = INITIAL_STATE, action) {

	switch (action.type) {
		case TrayActions.TRAY_LOAD_STARTED:
			return {
				loading: true,
			};

		case TrayActions.TRAY_LOAD_SUCCEEDED:
			return action.payload;

		case TrayActions.TRAY_LOAD_FAILED:
			return {
				loading: false,
				error: action.error,
			};
	}


	return state;
}
