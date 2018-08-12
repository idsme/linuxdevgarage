'use strict';
$_$wp(79);
$_$w(79, 0), Object.defineProperty(exports, '__esModule', { value: true });
var snippet_action_1 = ($_$w(79, 1), require('./../actions/snippet.action'));
function snippets(state, action) {
    $_$wf(79);
    if ($_$w(79, 2), state === void 0) {
        $_$w(79, 3), state = [];
    }
    switch ($_$w(79, 4), action.type) {
    case snippet_action_1.SnippetActions.SNIPPET_LOAD_STARTED: {
            return $_$w(79, 5), { loading: true };
        }
    case snippet_action_1.SnippetActions.SNIPPET_LOAD_SUCCEEDED: {
            return $_$w(79, 6), action.payload;
        }
    case snippet_action_1.SnippetActions.SNIPPET_LOAD_FAILED: {
            return $_$w(79, 7), {
                loading: false,
                error: action.error
            };
        }
    }
    return $_$w(79, 8), state;
}
$_$w(79, 9), exports.snippets = snippets;
$_$wpe(79);