Prism.languages.rsdl = {

    'keyword': [
        {
            pattern: /\b(?:type|enum|service|abstract|open|key|extends|path|capability)\b/
        },
        {
            pattern: /\b(?:GET|POST|PATCH|DELETE|expand|filter|paging|count|select|readonly|writeonly|traits)\b/
        },
        {
            pattern: /\b(?:except|eq|range|ranges|prefix|text|any)\b/
        },
        {
            pattern: /\b(?:selectoptions)\b/
        }
    ],
    
    'string': [
        {
            // pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
            pattern: /(?:"(?:[^"\\]|\\["\\\/bfnrt]|\\u[0-9A-Fa-f]{4})*")/, // javascript strings https://www.json.org/json-en.html
            greedy: true
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
    'punctuation': /[\[\]{}():]/,
    'symbol': /[=]/,
};