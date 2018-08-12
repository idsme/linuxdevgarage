export abstract class Config {
	constructor(init?: Partial<Config>) {
		Object.assign(this, init);
	}
}

export abstract class EndpointConfig extends Config {
	url: string;
}

// TODO IDSME=>WALTER probably for a reson but...  only the Author knows this.
export class AccountEndpointConfig extends EndpointConfig {}

export class TrayEndpointConfig extends EndpointConfig {}

export class TrayTreeConfig extends Config {
	permissions: any[];
}

export class TrayMenuConfig extends Config {
	items: MenuItem[];
}

interface MenuItem {
	id: number;
	label: string;
	url: string;
	type: number;
	sequence: number;
	color: string;
	acronym: string;
	external: boolean;
}

interface TreePermission {
	label: string;
	permission: string;
	permissionDenied: string;
	moduleIds: string[];
}

export class TaskEndpointConfig extends EndpointConfig {}

export class TransactionsConfig extends Config {}

export class TabsConfig extends Config {
	tabs: TabConfig[];
}

export interface TabConfig {
	label: string;
	permission: string;
	permissionDenied: string;
	moduleIds: string[];
}
