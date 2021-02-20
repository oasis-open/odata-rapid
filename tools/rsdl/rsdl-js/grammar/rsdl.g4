grammar rsdl;

model: namespace? include* modelElement* EOF;

namespace: 'namespace' qualifiedName;

qualifiedName: ID ('.' ID)*;

include: 'include' STRING 'as' ID;

modelElement: structuredType | enumType | service;

structuredType:
	annotation* ABSTRACT? 'type' ID baseType? '{' typeMember* '}';
typeMember: property | operation;
property: annotation* KEY? propertyName ':' typeReference;
propertyName: ID | KEY;

baseType: 'extends' ID;

typeReference:
	typeName NULLABLE?				# single
	| '[' typeName NULLABLE? ']'	# array;

typeName: builtInType | qualifiedName;

builtInType:
	'Boolean'
	| 'Date'
	| 'Datetime'
	| 'Decimal'
	| 'Double'
	| 'Duration'
	| 'Integer'
	| 'String'
	| 'TimeOfDay';

operation:
	annotation* ACTION ID '(' (parameter (',' parameter)*)? ')' returnType?
	| annotation* FUNCTION ID '(' (parameter (',' parameter)*)? ')' returnType;
//TODO: optional parameters
parameter: annotation* ID ':' typeReference;
returnType: ':' annotation* typeReference;

//TODO: flags
enumType: annotation* enumKind ID '{' enumMember* '}';
enumKind: 'enum' | 'flags';
enumMember: annotation* ID;

//TODO: do we really want to allow service names?
service: annotation* 'service' ID? '{' serviceMember* '}';
serviceMember: entitySet | singleton | serviceOperation;
entitySet: annotation* ID ':' '[' qualifiedName ']';
singleton: annotation* ID ':' qualifiedName;
serviceOperation:
	annotation* ACTION ID '(' (parameter (',' parameter)*)? ')' returnType?
	| annotation* FUNCTION ID '(' (parameter (',' parameter)*)? ')' returnType;

annotation: '@' qualifiedName ':' value;
value:
	path
	| STRING
	| NUMBER
	| obj
	| arr
	| 'true'
	| 'false'
	| 'null';
path: '.' ('/' ID)+;
obj: '{' pair (',' pair)* '}' | '{' '}';
//TODO: pair can also be an annotation
pair: ID ':' value;
arr: '[' item (',' item)* ']' | '[' ']';
item: value;

ABSTRACT: 'abstract';
ACTION: 'action';
FUNCTION: 'function';
KEY: 'key';
NULLABLE: '?';

NUMBER: '-'? INT ('.' [0-9]+)? EXP?;
fragment INT: '0' | [1-9] [0-9]*;
fragment EXP: [Ee] [+\-]? INT;

STRING: '"' (ESC | SAFECODEPOINT)* '"';
fragment ESC: '\\' (["\\/bfnrt] | UNICODE);
fragment UNICODE: 'u' HEX HEX HEX HEX;
fragment HEX: [0-9a-fA-F];
fragment SAFECODEPOINT: ~ ["\\\u0000-\u001F];

//TODO: JavaScript identifier pattern, or do we intentionally restrict allowed characters?
ID: [a-zA-Z_][a-zA-Z_0-9]*;

LINE_COMMENT: '#' .*? '\r'? '\n' -> skip;

//TODO: include comma here?
WS: [ \t\n\r]+ -> skip;
