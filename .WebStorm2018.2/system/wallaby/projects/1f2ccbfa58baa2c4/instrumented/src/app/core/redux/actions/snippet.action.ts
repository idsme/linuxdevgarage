import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Snippet  } from '../../model';

export interface SnippetAction {
	type: string;
	payload?: Snippet[];
	error?: string;
}

@Injectable()
export class SnippetActions {
	static readonly SNIPPET_LOAD_STARTED = 'SNIPPET_LOAD_STARTED';
	static readonly SNIPPET_LOAD_SUCCEEDED = 'SNIPPET_LOAD_SUCCEEDED';
	static readonly SNIPPET_LOAD_FAILED = 'SNIPPET_LOAD_FAILED';

	@dispatch()
	public loadStarted(): SnippetAction {
		return {
			type: SnippetActions.SNIPPET_LOAD_STARTED
		};
	}

	@dispatch()
	public loadSucceeded(payload: Snippet[]): SnippetAction {
		return {
			type: SnippetActions.SNIPPET_LOAD_SUCCEEDED,
			payload
		};
	}

	@dispatch()
	public loadFailed(error: string): SnippetAction {
		return {
			type: SnippetActions.SNIPPET_LOAD_FAILED,
			error: error
		};
	}
}
