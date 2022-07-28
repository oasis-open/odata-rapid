import { basicSetup, EditorView } from "codemirror";
import { EditorState } from "@codemirror/state";
import { indentWithTab } from "@codemirror/commands";
import { keymap } from "@codemirror/view";
import { oneDark } from "@codemirror/theme-one-dark";
import { syntaxHighlighting } from "@codemirror/language";

import { rsdl } from "./lang-rsdl/lang";
import { rsdlStyle } from "./lang-rsdl/styling";
import { rsdlSample } from "./samples/sample.rsdl";
import { getDocContent } from "./utils";

type RsdlUpdatedCallback = (rsdl: string) => any;

function initRsdlEditor(
  domElement: HTMLElement,
  onRsdlUpdated: RsdlUpdatedCallback
) {
  let timeout;
  // use to debounce updates
  const func = (state) => {
    const text = getDocContent(state.doc);
    if (onRsdlUpdated) {
      onRsdlUpdated(text);
    }
  };

  const initialState = EditorState.create({
    doc: rsdlSample,
    extensions: [
      basicSetup,
      rsdl(),
      oneDark,
      syntaxHighlighting(rsdlStyle),
      keymap.of([indentWithTab]),
      EditorView.updateListener.of((v) => {
        if (v.docChanged) {
          clearTimeout(timeout);
          timeout = setTimeout(func, 1000, v.state);
        }
      }),
    ],
  });

  const view = new EditorView({
    parent: domElement,
    state: initialState,
  });

  const updateContent = (rsdl) => {
    const transaction = view.state.update({
      changes: { from: 0, to: view.state.doc.length, insert: rsdl },
    });
    view.dispatch(transaction);
  };

  const getContent = () => {
    return getDocContent(view.state.doc);
  };

  return {
    updateContent,
    getContent,
  };
}
export { initRsdlEditor, RsdlUpdatedCallback };
