import { snippetCompletion } from '@codemirror/autocomplete';

const snippets = [
    snippetCompletion("function ${name}(${paramName : ParamType}) : ${ReturnType}", {
        label: "function",
        detail: "definition",
        type: "keyword"
    }),
    snippetCompletion("action ${name}(${paramName : ParamType})", {
        label: "action",
        detail: "definition",
        type: "keyword"
    }),
    snippetCompletion("type ${name} {\n\t\t${# body}\n}", {
        label: "type",
        detail: "definition",
        type: "keyword"
    }),
    snippetCompletion("service {\n\t\t${# body}\n}", {
        label: "service",
        detail: "definition",
        type: "keyword"
    }),
    snippetCompletion("enum ${name} { ${value1 value2} }", {
        label: "enum",
        detail: "definition",
        type: "keyword"
    }),
    snippetCompletion("flags ${name} { ${value1 value2} }", {
        label: "flags",
        detail: "definition",
        type: "keyword"
    }),
    snippetCompletion("@${name} : ${value}", {
        label: "annotation",
        detail: "definition",
        type: "keyword"
    }),
];

export { snippets };