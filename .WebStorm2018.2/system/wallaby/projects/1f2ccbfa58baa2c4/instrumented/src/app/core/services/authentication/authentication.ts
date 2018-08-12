import { Injectable } from '@angular/core';
import { User } from '../../model/user.model';

@Injectable()
export class Authentication {

	private user;

	constructor() {}

	// TODO IDSME=>WALTER this method is unused, Discussed with Barry usage will be implemented shortly.
	public getUser() {
		return this.user;
	}

	public setData(data: any): void {
		this.user = data.data.attributes as User;
	}

	public isAuthenticated(): boolean {
	  // TODO IDSME=>WALTER !! is not used frequently enough try to avoid
		return !!this.user;
	}

	public hasPermission(permissionName: string): boolean {
		if (!this.user) {
			return false;
		}

		return this.user
			.rolePermissions
			.some(role => role.permissions
				.some(permission => permission === permissionName));
	}
}
