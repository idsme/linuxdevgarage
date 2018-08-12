import { Injectable } from '@angular/core';

@Injectable()
export class ConfigMapper {
	private map = {
		AccountEndpointConfig : 'api.endpoints.account',
		TrayEndpointConfig : 'api.endpoints.tray',
		TabsConfig : 'tabs',
		TrayMenuConfig : 'items',
		TaskEndpointConfig : 'api.endpoints.task',
		TransactionsConfig : 'transactions'
	};

	get<T>(configClass: T): string {
		return this.map[configClass.constructor.name];
	}
}
