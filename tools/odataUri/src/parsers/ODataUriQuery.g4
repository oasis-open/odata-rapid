grammar ODataUriQuery;

queryOption: selectOption | expandOption;
queryOptions: queryOption queryOptionsList;
queryOptionsList: AMP queryOption queryOptionsList |;
collectionQueryOption:
	selectOption
	| expandOption
	| filterOption
	| orderByOption
	| topOption
	| skipOption;
collectionQueryOptions:
	collectionQueryOption collectionQueryOptionsList;
collectionQueryOptionsList:
	AMP collectionQueryOption collectionQueryOptionsList
	|;
filterOption: FILTER ASSIGN expression;
selectOption: SELECT ASSIGN selectFieldList;
expandOption: EXPAND ASSIGN expandFieldList;
orderByOption: ORDERBY ASSIGN orderSpecList;
topOption: TOP ASSIGN NUMBER;
skipOption: SKIPKW ASSIGN NUMBER;
selectFieldList:
	selectField
	| selectField COMMA selectFieldList;
expandFieldList:
	expandField
	| expandField COMMA expandFieldList;
orderSpecList: orderSpec | orderSpec COMMA orderSpecList;
selectField: identifier;
expandField: identifier;
orderSpec: orderField | orderField DESC;
orderField: identifier;
expression: orExpression;
orExpression: andExpression | orExpression OR andExpression;
andExpression:
	compExpression
	| andExpression AND compExpression;
compExpression:
	basicExpression
	| compExpression compOperator basicExpression;
basicExpression:
	NUMBER
	| STRING
	| BOOLEAN
	| identifier
	| parenExpression;
parenExpression: LPAREN expression RPAREN;
compOperator: EQ | NEQ | GTE | GT | LTE | LT;
identifier: ID;

FILTER: '$filter';
SELECT: '$select';
EXPAND: '$expand';
ORDERBY: '$orderby';
TOP: '$top';
SKIPKW: '$skip';
DESC: 'desc';
OR: 'or';
AND: 'and';
EQ: 'eq';
NEQ: 'ne';
GT: 'gt';
GTE: 'ge';
LT: 'lt';
LTE: 'le';
AMP: '&';
ASSIGN: '=';
LPAREN: '(';
RPAREN: ')';
COMMA: ',';
NUMBER: [0-9]+;
WS: [ ] -> skip;
BOOLEAN: 'true' | 'false';
STRING: '\'' .*? '\'';
ID: [a-zA-Z][a-zA-Z0-9_]*;
