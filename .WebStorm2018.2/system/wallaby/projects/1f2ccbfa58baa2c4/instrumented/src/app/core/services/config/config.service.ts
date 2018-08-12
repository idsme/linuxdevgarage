import { Injectable } from '@angular/core';
import { ConfigCollector } from './config.collector';
import { ConfigMapper } from './config.mapper';

@Injectable()
export class ConfigService {
	private defaultConfig = {};
	private keysToDeepPaths = {};
	private defaultContextToDeepPaths = {};

	constructor(private configCollector: ConfigCollector,
		private configMapper: ConfigMapper) {
		this.initializeDefaultConfig(configCollector.getConfig(), configCollector.getOverrides());
	}

	// TODO IDSME=>WALTER not maintainable without doc.
	get<T>(config: { new(): T; }, contextName?: string): T {
		const rootPath = this.configMapper.get(new config());
		const c = new config();
		if (!rootPath) {
			console.warn(`No rootPath found in ConfigMapper for class ${c.constructor.name}`);
			return null;
		}
		return Object.assign(c, this.getSnapshot(rootPath, contextName));
	}

	// TODO IDSME=>WALTER unclear what this does exactly and returns any
	getSnapshot(rootPath: string, contextName?: string): any {
		const config = JSON.parse(JSON.stringify(this.defaultConfig));
		const hierarchicalPaths = this.getHierarchicalPaths(rootPath);

		// apply context overrides for values;
		const contextValues = this.defaultContextToDeepPaths[contextName] || {};
		Object.keys(contextValues).forEach(path => {
			this.setDeepValue(config, path, contextValues[path]);
		});

		// get all hierarchical config object including primitive and non-primitive values
		const deepestValue = this.getDeepValue(config, hierarchicalPaths[hierarchicalPaths.length - 1]);

		if (deepestValue !== undefined && (typeof deepestValue !== 'object' || Array.isArray(deepestValue))) {
			const deepestPathPart = rootPath.split('.').slice(-1)[0];
			const out = {};
			out[deepestPathPart] = deepestValue;
			return out;
		}
		const hierarchicalValues =  Object.assign
			.apply(null, hierarchicalPaths
				.map(path => this.getDeepValue(config, path) || {})
			);

		// removing all non-primitive values from config object or return primitive value
		return  Object.keys(hierarchicalValues).reduce((values, key) => {
			if (!Array.isArray(hierarchicalValues[key]) && !(typeof hierarchicalValues[key] === 'object')) {
				values[key] = hierarchicalValues[key];
			}
			return values;
		}, {});
	}

	private initializeDefaultConfig(data, serverOverrides) {
		const deepPaths = this.getDeepPaths(data);

		deepPaths
			.forEach(path => {
				const deepValue = this.getDeepValue(data, path);
				if (Array.isArray(deepValue)) {
					// setting the default config value
					this.setDeepValue(this.defaultConfig, path, deepValue[0]);

					// setting the mapping between backend keys and deep paths of frontend config file
					if (deepValue.length > 2) {
						this.keysToDeepPaths[deepValue[2]] = path;
					}

					//TODO IDSME=>WALTER multiple for's not readable extract this to named
					// setting the mapping between contexts and deep paths
					if (deepValue.length > 1) {
						Object.keys(deepValue[1] || {}).forEach(contextName => {
							if (!this.defaultContextToDeepPaths[contextName]) {
								this.defaultContextToDeepPaths[contextName] = {};
							}
							this.defaultContextToDeepPaths[contextName][path] = deepValue[1][contextName];
						});
					}

				} else {
					this.setDeepValue(this.defaultConfig, path, deepValue);
				}
			});

		Object.keys(serverOverrides).forEach(override => {
			const deepPath = this.keysToDeepPaths[override];
			if (deepPath) {
				this.setDeepValue(this.defaultConfig, deepPath, serverOverrides[override]);
			}
		});
	}

	private getDeepPaths(objRef: any) {
		function keyify(obj, prefix = '') {
			return Object.keys(obj).reduce(function (res, el) {
				if (Array.isArray(obj[el])) {
					return [...res, prefix + el];
				} else if (obj[el] !== null && typeof (obj[el]) === 'object') {
					return [...res, ...keyify(obj[el], prefix + el + '.')];
				} else {
					return [...res, prefix + el];
				}
			}, []);
		}
		return keyify(objRef);
	}

	private getHierarchicalPaths(rootPath: string): string[] {
		const rootPathParts = rootPath.split('.');
		return rootPathParts.reduce((paths, pathPart) => {
			const path = paths.length === 0 ? pathPart : `${paths[paths.length - 1]}.${pathPart}`;

			paths.push(path);
			return paths;
		}, []);
	}

	private getDeepValue(obj, path) {
		const pList = path.split('.');
		const key = pList.pop();
		const pointer = pList.reduce((accumulator, currentValue) => {
			if (accumulator[currentValue] === undefined) { accumulator[currentValue] = {}; }
			return accumulator[currentValue];
		}, obj);
		return pointer[key];
	}

	private setDeepValue(obj, path, value) {
		const pList = path.split('.');
		const key = pList.pop();
		const pointer = pList.reduce((accumulator, currentValue) => {
			if (accumulator[currentValue] === undefined) { accumulator[currentValue] = {}; }
			return accumulator[currentValue];
		}, obj);
		pointer[key] = value;
		return obj;
	}
}
