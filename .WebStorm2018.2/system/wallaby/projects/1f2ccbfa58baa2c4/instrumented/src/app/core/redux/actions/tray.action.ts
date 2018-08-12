import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { TrayTree  } from '../../model';

export interface TrayAction {
	type: string;
	payload?: TrayTree;
	error?: string;
}

@Injectable()
export class TrayActions {
	static readonly TRAY_LOAD_STARTED = 'TRAY_LOAD_STARTED';
	static readonly TRAY_LOAD_SUCCEEDED = 'TRAY_LOAD_SUCCEEDED';
	static readonly TRAY_LOAD_FAILED = 'TRAY_LOAD_FAILED';

	@dispatch()
	public loadStarted(): TrayAction {
		return {
			type: TrayActions.TRAY_LOAD_STARTED
		};
	}

	@dispatch()
	public loadSucceeded(payload: TrayTree): TrayAction {
		return {
			type: TrayActions.TRAY_LOAD_SUCCEEDED,
			payload
		};
	}

	@dispatch()
	public loadFailed(error: string): TrayAction {
		return {
			type: TrayActions.TRAY_LOAD_FAILED,
			error: error
		};
	}
}
