import { Injectable } from '@angular/core';
import {AccountService} from './core/services/account/account.service';
import {Authentication} from './core/services/authentication/authentication';

@Injectable()
export class AppInitializer {

	constructor(private accountService: AccountService,
				private authentication: Authentication) {}

	init() {
		return new Promise((resolve, reject) => {
			this.accountService.getMe().subscribe(response => {
				this.authentication.setData(response);
				resolve();
			}, () => {
				reject();
			});
		});
	}
}
