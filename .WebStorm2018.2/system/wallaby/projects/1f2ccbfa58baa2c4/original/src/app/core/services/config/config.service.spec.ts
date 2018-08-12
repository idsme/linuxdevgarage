import { TestBed } from '@angular/core/testing';
import { AppModule } from '../../../app.module';
import { ConfigCollector } from './config.collector';
import { ConfigService } from './config.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConfigCollectorMock } from './config.collector.mock';
import { ConfigMapper } from './config.mapper';
import { Config } from './config.model';

class ConfigMock extends Config {
	bar: string;
}

describe('ConfigService', () => {

	let configService: ConfigService;
	let configMapper: ConfigMapper;

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
		configService = TestBed.get(ConfigService);
		configMapper = TestBed.get(ConfigMapper);
	});

	describe('initialization', () => {
		it('should initialize when constructed as service and override of tray api', () => {
			expect(configService[ 'defaultConfig' ]).toEqual({
				api: {
					endpoints: {
						tray: '/api/new-tray',
						dossier: '/api/dossier',
						product: '/api/product',
						account: '/api/account'
					},
					maxRetries: 80,
					interval: 250,
					warningTime: 8
				}
			});
		});
	});

	describe('initializeDefaultConfig()', () => {
		it('should create a simple default config', () => {
			configService[ 'defaultConfig' ] = {};

			configService[ 'initializeDefaultConfig' ]({foo: 'bar'}, {});

			expect(configService[ 'defaultConfig' ]).toEqual({foo: 'bar'});
		});

		it('should create a simple default config with a one-length array', () => {
			configService[ 'defaultConfig' ] = {};

			configService[ 'initializeDefaultConfig' ]({foo: [ 'bar' ]}, {});

			expect(configService[ 'defaultConfig' ]).toEqual({foo: 'bar'});
		});

		it('should create a simple default config and deep path override with a two-length array', () => {
			configService[ 'defaultConfig' ] = {};

			configService[ 'initializeDefaultConfig' ]({foo: [ 'bar', {case1: 'baz'} ]}, {});

			expect(configService[ 'defaultContextToDeepPaths' ]).toEqual({'case1': {'foo': 'baz'}});
		});

		it('should create a simple default config, deep path override and server deep path overrides with a three-length array', () => {
			configService[ 'keysToDeepPaths' ] = {};

			configService[ 'initializeDefaultConfig' ]({foo: [ 'bar', {case1: 'baz'}, 'FOO-BAR' ]}, {});

			expect(configService[ 'keysToDeepPaths' ]).toEqual({'FOO-BAR': 'foo'});
		});

		it('should create a simple default config, with a three-length array with server override', () => {
			configService[ 'defaultConfig' ] = {};

			configService[ 'initializeDefaultConfig' ]({foo: [ 'bar', {case1: 'baz'}, 'FOO-BAR' ]}, {'FOO-BAR': 'other'});

			expect(configService[ 'defaultConfig' ]).toEqual({foo: 'other'});
		});

		it('should create a config with context = null in three-length array with server override', () => {
			configService[ 'defaultConfig' ] = {};

			configService[ 'initializeDefaultConfig' ]({foo: [ 'bar', null, 'FOO-BAR' ]}, {'FOO-BAR': 'other'});

			expect(configService[ 'defaultConfig' ]).toEqual({foo: 'other'});
		});

		it('should handle an elaborated example correctly', () => {
			configService[ 'defaultConfig' ] = {};
			configService[ 'keysToDeepPaths' ] = {};
			configService[ 'defaultContextToDeepPaths' ] = {};

			configService[ 'initializeDefaultConfig' ]({foo: {bar: [ 'origValue', {baz: 'exceptValue'}, 'FOO-BAR' ]}}, {'FOO-BAR': 'serverValue'});

			expect(configService[ 'defaultConfig' ]).toEqual({foo: {bar: 'serverValue'}});
			expect(configService[ 'keysToDeepPaths' ]).toEqual({'FOO-BAR': 'foo.bar'});
			expect(configService[ 'defaultContextToDeepPaths' ]).toEqual({baz: {'foo.bar': 'exceptValue'}});
		});
	});

	describe('get()', () => {
		it('should return a typed value of the config', () => {
			spyOn(configMapper, 'get').and.returnValue('foo1');
			configService[ 'initializeDefaultConfig' ]({foo1: {bar: [ 'origValue', {baz: 'exceptValue'}, 'FOO-BAR' ]}}, {});

			const configMock = configService.get(ConfigMock);

			expect (configMock.bar).toBe('origValue');
			expect(configMock.constructor.name).toBe('ConfigMock');
		});

		it('should return a typed value of the config with a given context name', () => {
			spyOn(configMapper, 'get').and.returnValue('foo1');
			configService[ 'initializeDefaultConfig' ]({foo1: {bar: [ 'origValue', {baz: 'exceptValue'}, 'FOO-BAR' ]}}, {});

			const configMock = configService.get(ConfigMock, 'baz');

			expect (configMock.bar).toBe('exceptValue');
		});

		it('should return null when no mapping is found', () => {
			spyOn(configMapper, 'get').and.returnValue(undefined);
			configService[ 'initializeDefaultConfig' ]({foo1: {bar: [ 'origValue', {baz: 'exceptValue'}, 'FOO-BAR' ]}}, {});

			const configMock = configService.get(ConfigMock);

			expect (configMock).toBeNull();
		});
	});

	describe('getSnapshot()', () => {
		it('should return a hierarchical snapshot of the the path', () => {
			configService[ 'initializeDefaultConfig' ]({foo: {bar: [ 'origValue', {baz: 'exceptValue'}, 'FOO-BAR' ]}}, {});

			expect(configService[ 'getSnapshot' ]('foo')).toEqual({bar: 'origValue'});
		});

		it('should return value when path match is made partially', () => {
			configService[ 'initializeDefaultConfig' ]({
				foo: {
					bar: [ 'origValue', {baz: 'exceptValue'}, 'FOO-BAR' ],
					o1: {o2: 'o3'}
				}
			}, {});

			expect(configService[ 'getSnapshot' ]('foo.some.other')).toEqual({bar: 'origValue'});
			expect(configService[ 'getSnapshot' ]('foo.o1')).toEqual({bar: 'origValue', o2: 'o3'});
		});

		it('should return an empty object when no match is made', () => {
			configService[ 'initializeDefaultConfig' ]({
				foo: {
					bar: [ 'origValue', {baz: 'exceptValue'}, 'FOO-BAR' ],
					o1: {o2: 'o3'}
				}
			}, {});

			expect(configService[ 'getSnapshot' ]('bar')).toEqual({});
			expect(configService[ 'getSnapshot' ]('')).toEqual({});
		});

		it('should do context name overrides on multiple levels', () => {
			configService[ 'initializeDefaultConfig' ](
				{
					foo: {
						bar: [ 'origValue', {baz: 'exceptValue'}, 'FOO-BAR' ],
						o1: {o2: [ 'o3', {baz: 'o4'} ]}
					}
				}, {});

			expect(configService[ 'getSnapshot' ]('foo.o1')).toEqual({bar: 'origValue', o2: 'o3'});
			expect(configService[ 'getSnapshot' ]('foo.o1', 'baz')).toEqual({bar: 'exceptValue', o2: 'o4'});
		});

		it('should return a primitive value when targetted directly with simple path', () => {
			configService[ 'initializeDefaultConfig' ]({foo: 'bar'}, {});

			expect(configService[ 'getSnapshot' ]('foo')).toEqual({foo: 'bar'});
		});

		it('should return a primitive value when targetted directly with deep path', () => {
			configService[ 'initializeDefaultConfig' ]({foo: {bar: 'baz'}}, {});

			expect(configService[ 'getSnapshot' ]('foo.bar')).toEqual({bar: 'baz'});
		});

		it('should return an array value ', () => {
			configService[ 'initializeDefaultConfig' ]({foo: {bar: [[{oth: 'baz'}]]}}, {});

			expect(configService[ 'getSnapshot' ]('foo.bar')).toEqual({bar: [{oth: 'baz'}]});
		});
	});

	describe('testing private helper functions', () => {
		describe('getDeepPaths()', () => {
			it('returns all possible direct deep paths to all values inside an object', () => {
				expect(configService[ 'getDeepPaths' ]({
					foo: {
						bar: 11,
						baz: {hello: 'world'}
					}
				})).toEqual([ 'foo.bar', 'foo.baz.hello' ]);
			});
		});

		describe('getHierarchicalPaths()', () => {
			it('returns all hierarchical paths from one deep path, like foo.bar.baz', () => {
				expect(configService[ 'getHierarchicalPaths' ]('foo.bar.baz')).toEqual([ 'foo', 'foo.bar', 'foo.bar.baz' ]);
			});
		});

		describe('getDeepValue()', () => {
			it('get primitive value of shallow path of an object', () => {
				expect(configService[ 'getDeepValue' ]({foo: 'bar'}, 'foo')).toBe('bar');
			});

			it('get primitive value of deep path of an object', () => {
				expect(configService[ 'getDeepValue' ]({foo: {bar: 'baz'}}, 'foo.bar')).toBe('baz');
			});

			it('get object value of deep path of an object', () => {
				expect(configService[ 'getDeepValue' ]({foo: {bar: {baz: 'value'}}}, 'foo.bar')).toEqual({baz: 'value'});
			});

			it('get object value of deep path of an object', () => {
				expect(configService[ 'getDeepValue' ]({foo: {bar: {baz: 'value'}}}, 'foo.other')).toBeUndefined();
			});
			it('should return an array as value', () => {
				expect(configService[ 'getDeepValue' ]({foo: {bar: [[{d: 'baz'}]]}}, 'foo.bar')).toEqual([[{d: 'baz'}]]);
			});
		});

		describe('setDeepValue()', () => {
			it('set value on unknown property (shallow path)', () => {
				expect(configService[ 'setDeepValue' ]({}, 'foo', 'bar')).toEqual({foo: 'bar'});
			});

			it('set array value on unknown property (shallow path)', () => {
				expect(configService[ 'setDeepValue' ]({}, 'foo', ['bar'])).toEqual({foo: ['bar']});
			});

			it('set value on unknown property (deep path)', () => {
				expect(configService[ 'setDeepValue' ]({}, 'foo.bar.baz', 'sample')).toEqual({foo: {bar: {baz: 'sample'}}});
			});

			it('overwrite value of known property', () => {
				expect(configService[ 'setDeepValue' ]({foo: {bar: 'baz'}}, 'foo.bar', 'new value')).toEqual({foo: {bar: 'new value'}});
			});
		});
	});

});
