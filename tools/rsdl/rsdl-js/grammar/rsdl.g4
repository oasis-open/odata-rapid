//TODO
// comments, doc comments, type definitions

grammar rsdl;

model: namespace? include* modelElement* EOF;

namespace: 'namespace' qualifiedName;

qualifiedName: ID ('.' ID)*;

include: 'include' FILENAME 'as' ID;

modelElement: structuredType | enumType | service;

structuredType: 'type' ID '{' typeMember* '}';
typeMember: property | operation;
property: KEY? ID ':' typeReference;

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
	| 'Integer'
	| 'String';

//TODO: Require comma, or make it (in general) optional "whitespace"?
operation:
	ACTION? ID '(' (parameter (',' parameter)*)? ')' returnType?;
//TODO: optional parameters
parameter: ID ':' typeReference;
returnType: ':' typeReference;

enumType: 'enum' ID '{' enumMember+ '}';
enumMember: ID;

service: 'service' '{' serviceMember+ '}';
serviceMember: entitySet | singleton | serviceOperation;
entitySet: ID ':' '[' qualifiedName ']';
singleton: ID ':' qualifiedName;
serviceOperation:
	ACTION? ID '(' (parameter (',' parameter)*)? ')' returnType?;

//TODO: JavaScript identifier pattern, or do we intentionally restrict allowed characters?
ID: [a-zA-Z_][a-zA-Z_0-9]*;

ACTION: 'action' WS;
KEY: 'key' WS;
NULLABLE: '?';

FILENAME: '"' (ESC | .)+? '"';
fragment ESC: '\\"' | '\\\\';

LINE_COMMENT: '//' .*? '\r'? '\n' -> skip;
COMMENT: '/*' .*? '*/' -> skip;

//TODO: include comma here?
WS: [ \t\n\r]+ -> skip;
