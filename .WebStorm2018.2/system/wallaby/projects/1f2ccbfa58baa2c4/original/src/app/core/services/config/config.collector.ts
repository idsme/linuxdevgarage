import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

// import api from '../../../../../config/api.config.json';
// import tabs from '../../../../../config/tab.config.json';
// import items from '../../../../../config/menu.config.json';
// import transactions from '../../../../../config/transactions.config.json';

declare var configData;

@Injectable()
export class ConfigCollector {

	 constructor() {
	// 	Object
	// 		.keys(api.endpoints)
	// 		.forEach(key => {
	// 			api.endpoints[ key ][ 0 ] = environment.apiPrefix + api.endpoints[ key ][ 0 ];
	// 		});

	}

	getConfig() {
		 return {
		// 	api,
		// 	items,
		// 	tabs,
		// 	transactions
		};
	}

	getOverrides() {
		return configData || {};
	}
}
