import {
  LRLanguage,
  indentNodeProp,
  delimitedIndent,
  foldNodeProp,
  foldInside,
  LanguageSupport,
} from "@codemirror/language";
import { styleTags, tags } from "@lezer/highlight";
import { ifNotIn, completeFromList } from "@codemirror/autocomplete";
import { snippets } from "./snippets";
import { parser } from "./parser";

const rsdlLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        Application: delimitedIndent({ closing: ")", align: false }),
      }),
      foldNodeProp.add({
        Application: foldInside,
      }),
      styleTags({
        Identifier: tags.variableName,
        CapitalIdentifier: tags.typeName,
        Boolean: tags.bool,
        String: tags.string,
        VariableName: tags.lineComment,
        LineComment: tags.lineComment,
        "type service enum flags": tags.definitionKeyword,
        key: [tags.emphasis, tags.atom],
        "( )": tags.paren,
        "{ }": tags.brace,
      }),
    ],
  }),
  languageData: {
    commentTokens: { line: "#" },
  },
});

function rsdl() {
  return new LanguageSupport(
    rsdlLanguage,
    rsdlLanguage.data.of({
      autocomplete: ifNotIn(
        ["LineComment", "StringLiteral"],
        completeFromList(snippets)
      ),
    })
  );
}

export { rsdl, rsdlLanguage };
