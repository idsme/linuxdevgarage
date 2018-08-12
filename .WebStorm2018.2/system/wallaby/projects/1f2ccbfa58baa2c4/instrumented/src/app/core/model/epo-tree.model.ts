import { Tray } from './tray.model';

export interface EpoTree extends Tray {
	title: string;
	url: string;
	children: boolean;
	sequence: number;
	total: number;
	urgent: number;
}
