import { HighlightStyle } from "@codemirror/language";
import { tags } from "@lezer/highlight";

const rsdlStyle = HighlightStyle.define([
  { tag: tags.keyword, color: "#00F" },
  { tag: tags.comment, color: "#f5d", fontStyle: "italic" },
  { tag: tags.bracket, color: "#F00" },
  { tag: tags.className, color: "#F00" },
]);

export { rsdlStyle };
