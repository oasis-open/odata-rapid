import { basicSetup, EditorState, EditorView } from "@codemirror/basic-setup";
import { autocompletion, CompletionSource } from "@codemirror/autocomplete";
import { linter, Diagnostic } from "@codemirror/lint";
import { ICompletions, AutoCompleteManager } from "odata-uri";
import { getDocContent, convertToCsdl } from "./utils";
import { xml2json } from "odata-csdl";

type UrlUpdatedCallback = (url: string) => any;

export enum schemaFormat {
  rsdl,
  jsonCsdl,
  xmlCsdl,
}

function initUrlEditor(
  domElement: HTMLElement,
  onUrlUpdated: UrlUpdatedCallback
) {
  const manager = new AutoCompleteManager(null);

  const completionSource: CompletionSource = (context) => {
    const content = context.state.doc.line(1).text;

    let completions: ICompletions;

    try {
      completions = manager.getCompletions(content, context.pos);
    } catch (e) {
      console.error(e);
      completions = { from: context.pos, suggestions: [] };
    }

    //TODO: remove
    console.log(content);
    console.dir(completions);

    const result = {
      from: completions.from,
      options: completions.suggestions.map((suggestion) => ({
        label: suggestion,
      })),
    };

    return result;
  };

  const linterSource = (view: EditorView): Diagnostic[] => {
    const content = view.state.doc.line(1).text;
    const errors = manager.getErrors(content);

    return errors.map((error) => ({
      from: error.range.start,
      to: error.range.stop + 1,
      severity: "error",
      message: error.message,
    }));
  };

  const initialState = EditorState.create({
    doc: "",
    extensions: [
      basicSetup,
      // oneDark,
      autocompletion({
        activateOnTyping: true,
        override: [completionSource],
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

  const updateSchema = (
    schema: string,
    inputFormat: schemaFormat = schemaFormat.rsdl
  ) => {
    var jsonCsdl;
    switch (inputFormat) {
      case schemaFormat.rsdl:
        jsonCsdl = convertToCsdl(schema);
        break;
      case schemaFormat.jsonCsdl:
        jsonCsdl = JSON.parse(schema);
        break;
      case schemaFormat.xmlCsdl:
        jsonCsdl = xml2json(schema);
        break;
    }

    manager.updateSchema(jsonCsdl);
  };

  function getUrl() {
    return getDocContent(editor.state.doc);
  }

  function setUrl(url: string) {
    const transaction = editor.state.update({
      changes: { from: 0, to: editor.state.doc.length, insert: url },
    });
    editor.dispatch(transaction);
  }

  return { updateSchema, getUrl, setUrl };
}

export { initUrlEditor };
