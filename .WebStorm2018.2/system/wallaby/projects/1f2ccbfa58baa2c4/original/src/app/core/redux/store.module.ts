import { NgModule } from '@angular/core';

// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

// Redux ecosystem stuff.
import { createLogger } from 'redux-logger';

// The top-level reducers and epics that make up our app's logic.
import { AppState } from './store.model';
import { RootReducer } from './reducers/root.reducer';

@NgModule({
	imports: [
		NgReduxModule
	],
	providers: [],
})
export class StoreModule {
	constructor(
		public store: NgRedux<AppState>,
		public devTools: DevToolsExtension
	) {
		// Tell Redux about our reducers and epics. If the Redux DevTools
		// chrome extension is available in the browser, tell Redux about
		// it too.
		store.configureStore(
			RootReducer,
			{} as AppState,
			[createLogger()],
			devTools.isEnabled() ? [devTools.enhancer()] : []
		);
	}
}
