// TODO IDSME=>WALTER Refactor to different files.
// TODO IDSME=>WALTER if is interface in itray.model.ts and tray in tray.model.ts

export interface TrayTree {
	tabs: TrayTreeTab[];
	loading: boolean;
	error?: string;
}

export interface TrayTreeTab {
	label: string;
	panels: Tray[];
	trays: Tray[];
}

export interface TrayModule {
	name: string;
	trays: Tray[];
	etag: string;
}

export interface Tray {
	name: string;
	id: string;
	type: string;
	templateId: string;
	parentId: string;
	iterated: boolean;
	hasChildren: boolean;
	module: string;
	domain: string;
	bucket: Bucket;
	hideWhenEmpty: boolean;
	viewOnly: boolean;
	taskViewType: string;
	etag: string;
}

export interface Bucket {
	bucketId: string;
	totalCount: number;
	unreadCount: number;
	priorityCount: number;
	handlerId: string;
	module: string;
	unit?: any;
	unitType?: any;
	tag: string;
	lastModificationDateTime: any;
}
