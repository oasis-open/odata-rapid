import { basicSetup, EditorState, EditorView } from "@codemirror/basic-setup";
import { autocompletion, CompletionSource } from '@codemirror/autocomplete';
import { linter, Diagnostic } from '@codemirror/lint';
// import { AutoCompleteManager } from "odata-uri";
import { AutoCompleteManager } from "../../odataUri/src/autocomplete-manager";
import { getDocContent, convertToCsdl } from "./utils";

type UrlUpdatedCallback = (url: string) => any;


function initUrlEditor(domElement: HTMLElement, onUrlUpdated: UrlUpdatedCallback) {
    const manager = new AutoCompleteManager(null);

    const completionSource: CompletionSource = (context) => {
        const content = context.state.doc.line(1).text;
        const pos = context.pos - 1;

        let suggestions: string[];
        try {
            suggestions = manager.getCompletions(content, pos);
        }
        catch (e) {
            console.error(e);
            suggestions = [];
        }
        
        const result = {
            from: context.pos,
            options: suggestions.map(sugg => ({
                label: sugg
            }))
        };

        return result;
    };

    const linterSource = (view: EditorView): Diagnostic[] => {
        const content = view.state.doc.line(1).text;
        const errors = manager.getErrors(content);

        return errors.map((error) => ({
            from: error.range.start,
            to: error.range.stop + 1,
            severity: 'error',
            message: error.message
        }));
    }

    const initialState = EditorState.create({
        doc: '',
        extensions: [
            basicSetup,
            // oneDark,
            autocompletion({
                activateOnTyping: true,
                override: [
                    completionSource
                ]
            }),
            linter(linterSource),
            EditorView.updateListener.of((v) => {
                if (v.docChanged) {
                    const text = getDocContent(v.state.doc);
                    if (onUrlUpdated) {
                        onUrlUpdated(text);
                    }
                }
            }),
        ],
    });

    const editor = new EditorView({
        parent: domElement,
        state: initialState,
    });

    const updateSchema = (rsdl: string) => {
        const jsonCsdl = convertToCsdl(rsdl);
        manager.updateSchema(jsonCsdl);
    };

    function getUrl() {
        return getDocContent(editor.state.doc);
    }

    function setUrl(url: string) {
        const transaction = editor.state.update({ changes: { from: 0, to: editor.state.doc.length, insert: url }});
        editor.dispatch(transaction);
    }

    return { updateSchema, getUrl, setUrl };
}

export { initUrlEditor };
