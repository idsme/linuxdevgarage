import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor() { }

	intercept(req: HttpRequest<any>, next: HttpHandler) {

		// Clone the request and replace the original headers with
		// cloned headers, updated with the authorization.
		const authReq = req.clone({ withCredentials: true });

		// send cloned request with header to the next handler.
		return next.handle(authReq);
	}
}
