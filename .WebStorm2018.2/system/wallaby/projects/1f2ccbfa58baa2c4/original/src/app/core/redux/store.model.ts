import { TrayTree, Snippet, SelectedStates } from '../model';

export interface AppState {
	menuItems: any[];
	trayTree: TrayTree;
	snippets: Snippet[];
	transaction: any;
	selectedStates: SelectedStates;
}
