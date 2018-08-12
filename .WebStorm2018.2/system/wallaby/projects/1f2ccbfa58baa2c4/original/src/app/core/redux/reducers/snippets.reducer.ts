import { SnippetActions } from './../actions/snippet.action';

export function snippets(state = [], action) {

	switch (action.type) {
		case SnippetActions.SNIPPET_LOAD_STARTED:
			return {
				loading: true,
			};

		case SnippetActions.SNIPPET_LOAD_SUCCEEDED:
			return action.payload;

		case SnippetActions.SNIPPET_LOAD_FAILED:
			return {
				loading: false,
				error: action.error,
			};
	}


	return state;
}
