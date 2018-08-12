import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

export interface SelectedStatesAction {
	type: string;
	payload?: string;
}

@Injectable()
export class SelectedStatesActions {
	static readonly SET_SELECTED_TRAY = 'SET_SELECTED_TRAY';
	static readonly SET_SELECTED_SNIPPET = 'SET_SELECTED_SNIPPET';
	static readonly SET_SELECTED_MENU_ITEM = 'SET_SELECTED_MENU_ITEM';

	@dispatch()
	public setSelectedTray(trayId: string): SelectedStatesAction {
		return {
			type: SelectedStatesActions.SET_SELECTED_TRAY,
			payload: trayId
		};
	}

	@dispatch()
	public setSelectedSnippet(taskId: string): SelectedStatesAction {
		return {
			type: SelectedStatesActions.SET_SELECTED_SNIPPET,
			payload: taskId
		};
	}

	@dispatch()
	public setSelectedMenuItem(menuItem: any): SelectedStatesAction {
		return {
			type: SelectedStatesActions.SET_SELECTED_MENU_ITEM,
			payload: menuItem
		};
	}
}
