Prism.languages.rsdl = {
    'comment': /(?:\/\/|#).*|\/\*[\s\S]*?(?:\*\/|$)/,
    'heredoc': {
        pattern: /@\w+:/,
        greedy: true,
        alias: 'string'
    },
    'keyword': [
        {
            pattern: /\b(?:type|enum|service|abstract|open|key|extends|path)\b/,
        },
        {
            pattern: /\b(?:GET|POST|PATCH|DELETE|expand|filter|paging|count)\b/,
        },
        {
            pattern: /\b(?:eq|range|prefix|text|any)\b/,
        }
    ],
    'property': [
        /[-\w\.]+(?=\s*=(?!=))/,
        /"(?:\\[\s\S]|[^\\"])+"(?=\s*[:=])/,
    ],
    'string': [
        {
            pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
            greedy: true,
        }
    ],
    'number': /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,
    'boolean': /\b(?:true|false)\b/i,
    'punctuation': /[=\[\]{}:]/,
};