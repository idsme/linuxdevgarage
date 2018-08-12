import { TestBed } from '@angular/core/testing';
import { AppModule } from '../../../app.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConfigCollectorMock } from '../config/config.collector.mock';
import { ConfigCollector } from '../config/config.collector';
import { Authentication } from './authentication';

const userMock = {
	data: {
		attributes: {
			rolePermissions: [ {
				roleName: 'foo',
				permissions: [ 'bar' ]
			} ]
		}
	}
};

describe('Authentication', () => {

	let authentication: Authentication;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				AppModule,
				HttpClientTestingModule,
			],
			providers: [
				{provide: ConfigCollector, useClass: ConfigCollectorMock}
			]
		});
		authentication = TestBed.get(Authentication);
	});

	describe('setData()', () => {
		it('should set the data', () => {
			expect(authentication[ 'user' ]).toBeUndefined();

			authentication.setData({data: {attributes: {foo: 'bar'}}});

			expect(authentication[ 'user' ]).toEqual({foo: 'bar'});

		});
	});

	describe('hasPermission()', () => {
		it('should return false when data is not set', () => {
			expect(authentication.hasPermission('foo')).toBeFalsy();
		});

		it('should return true when one role is defined and has permission', () => {
			authentication.setData(userMock);

			expect(authentication.hasPermission('bar')).toBeTruthy();
		});

		it('should return true when one role is defined and has NOT permission', () => {
			authentication.setData({
				data: {
					attributes: {
						rolePermissions: [ {
							roleName: 'foo',
							permissions: [ 'bar' ]
						} ]
					}
				}
			});

			expect(authentication.hasPermission('baz')).toBeFalsy();
		});

		it('should return true when more roles are defined and has permission', () => {
			authentication.setData({
				data: {
					attributes: {
						rolePermissions: [ {
							role: 'other',
							permissions: [ 'new-perm' ]
						},
							{
								roleName: 'foo',
								permissions: [ 'bar' ]
							} ]
					}
				}
			});

			expect(authentication.hasPermission('bar')).toBeTruthy();
		});
	});

	describe('isAuthenticated()', () => {
		it('should return false when no user is set', () => {
			expect(authentication.isAuthenticated()).toBeFalsy();
		});

		it('should return true when a user is set', () => {
			authentication.setData(userMock);

			expect(authentication.isAuthenticated()).toBeTruthy();
		});
	});
});
