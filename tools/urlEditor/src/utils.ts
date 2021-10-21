import { Text } from '@codemirror/text';
import { parse } from "rsdl-js";

export function getDocContent(doc: Text): string {
    const lines = [];
    for (let i = 1; i <= doc.lines; i++) {
        lines.push(doc.line(i).text);
    }

    const text = lines.join('\n');
    return text;
}

export function includeReader(source) {
    return () => {
        return source;
    };
}

export function convertToCsdl(rsdl: string): any {
    const json = parse(rsdl, includeReader(rsdl));

    // TODO: proper error handling
    if (json.$$errors) {
        json.$$errors.map((error) =>
            console.error(`source:${error.target} ${error.message}`)
        );
    }

    return json;
}