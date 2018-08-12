import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { EpoMainMenuItem } from '../../../epo-webcomponents/mainmenu/main-menu-item.model';

export interface MenuAction {
	type: string;
	payload?: EpoMainMenuItem[];
}

@Injectable()
export class MenuActions {
	static readonly SET_MENU = 'SET_MENU';

	@dispatch()
	public setMenu(payload: EpoMainMenuItem[]): MenuAction {
		return {
			type: MenuActions.SET_MENU,
			payload
		};
	}
}
