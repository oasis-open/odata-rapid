Prism.languages.rsdl = {

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
    'description': {
        pattern: /(?:##).*/,
        greedy: true,
        alias: 'comment'
    },
    'comment':  {        
        pattern: /(?:\/\/|#).*/,
        greedy: true
    },
    'annotation': {
        pattern: /@\w+(.\w+)*:/,
        greedy: true,
        alias: 'comment'
    },
    'path': {
        pattern: /(?:\/\w+)/,
        greedy: true,
        alias: 'className'
    },
    'number': /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,
    'boolean': /\b(?:true|false)\b/i,
    'punctuation': /[\[\]{}:]/,
    'symbol': /[=]/,
};