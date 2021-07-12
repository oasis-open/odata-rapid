import { Text } from '@codemirror/text';

export function getDocContent(doc: Text): string {
    const lines = [];
    for (let i = 1; i <= doc.lines; i++) {
        lines.push(doc.line(i).text);
    }

    const text = lines.join('\n');
    return text;
}