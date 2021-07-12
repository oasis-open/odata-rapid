grammar rsdl;

// Model

model: namespace? include* modelElement* EOF;

namespace: 'namespace' qualifiedName;

include: 'include' STRING 'as' ID;

modelElement:
	structuredType
	| enumType
	| typeDefinition
	| service;

// Structured Type

structuredType:
	annotation* ABSTRACT? 'type' ID baseType? '{' typeMember* '}';

baseType: 'extends' ID;

typeMember: property | operation;

property: annotation* KEY? propertyName ':' typeReference;

propertyName: ID | KEY; // "key" is also a valid property name

typeReference:
	typeName NULLABLE?				# single
	| '[' typeName NULLABLE? ']'	# array;

typeName: builtInType | edmType | qualifiedName;

builtInType:
	'Boolean'
	| 'Date'
	| 'DateTime'
	| 'Decimal' ('(' NUMBER ',' NUMBER ')')?
	| 'Double'
	| 'Duration'
	| 'Integer'
	| 'String' ('(' NUMBER ')')?
	| 'TimeOfDay';

edmType: EDM;

operation:
	annotation* ACTION ID '(' (parameter (',' parameter)*)? ')' returnType?
	| annotation* FUNCTION ID '(' (parameter (',' parameter)*)? ')' returnType;

parameter: annotation* ID ':' typeReference;

returnType: ':' annotation* typeReference;

// Enumeration Type

enumType: annotation* enumKind ID '{' enumMember+ '}';

enumKind: 'enum' | 'flags';

enumMember: annotation* ID;

// Type Definition

typeDefinition:
	annotation* 'typedef' ID ':' typeName; //TODO: (builtInType|edmType);

// Service

service: annotation* 'service' ID? '{' serviceMember* '}';

serviceMember: entitySet | singleton | serviceOperation;

entitySet: annotation* ID ':' '[' qualifiedName ']';

singleton: annotation* ID ':' qualifiedName;

serviceOperation:
	annotation* ACTION ID '(' (parameter (',' parameter)*)? ')' returnType?
	| annotation* FUNCTION ID '(' (parameter (',' parameter)*)? ')' returnType;

// Annotations

annotation: TID ':' value | DOC_COMMENT;

value:
	'true'
	| 'false'
	| 'null'
	| NUMBER
	| STRING
	| arr
	| obj
	| path;

arr: '[' item (',' item)* ']' | '[' ']';
item: value;

obj: '{' pair (',' pair)* '}' | '{' '}';
pair: name ':' value;
name: ID | STRING | TID;

path: '.' ('/' ID)+;

// Core Syntax Elements

qualifiedName: QID | ID;

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

EDM: 'Edm.' SIMPLE;
ID: SIMPLE;
QID: SIMPLE ('.' SIMPLE)+;
TID: '@' SIMPLE ('.' SIMPLE)+ ('#' SIMPLE)?;
//TODO: JavaScript identifier pattern, or do we intentionally restrict allowed characters?
fragment SIMPLE: [a-zA-Z_][a-zA-Z_0-9]*;

DOC_COMMENT: '##' .*? '\r'? '\n';
LINE_COMMENT: '#' .*? '\r'? '\n' -> skip;

//TODO: include comma here?
WS: [ \t\n\r]+ -> skip;
