import { AppModule } from '../../../app.module';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConfigCollectorMock } from '../config/config.collector.mock';
import { ConfigCollector } from '../config/config.collector';
import { Authentication } from '../authentication/authentication';
import { ActivateGuard } from './activate.guard';

describe('ActivateGuard', () => {

	let activateGuard: ActivateGuard;
	let authentication: Authentication;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				AppModule,
				HttpClientTestingModule,
			],
			providers: [
				{provide: ConfigCollector, useClass: ConfigCollectorMock},
				{provide: Authentication, useValue: {
						isAuthenticated: () => {}
					}
				}
			]
		});
		activateGuard = TestBed.get(ActivateGuard);
		authentication = TestBed.get(Authentication);
	});

	fdescribe('canActivate', () => {
		it('should return true when user is authenticated', () => {
			spyOn(authentication, 'isAuthenticated').and.returnValue(true);

			expect(activateGuard.canActivate()).toBeTruthy();
		});

		fit('should return true when user is authenticated', () => {
			spyOn(authentication, 'isAuthenticated').and.returnValue(false);

			expect(activateGuard.canActivate()).toBeFalsy();
			console.log('someshit');
		});
	});
});
