// TODO IDSME=>WALTER why is a single service in a directory.. move one dir up.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';
import { AccountEndpointConfig } from '../config/config.model';

@Injectable()
export class AccountService {
	private endpoint: AccountEndpointConfig;

	constructor(private http: HttpClient,
		private configService: ConfigService) {
		this.endpoint = this.configService.get(AccountEndpointConfig);
	}

	public getMe() {
		return this.http.get(`${this.endpoint.url}/me`);
	}
}
