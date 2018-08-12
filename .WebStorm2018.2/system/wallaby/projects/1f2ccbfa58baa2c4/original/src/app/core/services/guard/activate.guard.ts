import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Authentication } from '../authentication/authentication';

@Injectable()
export class ActivateGuard implements CanActivate {
	constructor(private authentication: Authentication) {
	}

	canActivate(): boolean {
		return this.authentication.isAuthenticated();
	}
}
