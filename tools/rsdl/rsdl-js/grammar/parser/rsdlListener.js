// Generated from c:\git\odata-rapid\tools\rsdl\rsdl-js\grammar\rsdl.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by rsdlParser.
function rsdlListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

rsdlListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
rsdlListener.prototype.constructor = rsdlListener;

// Enter a parse tree produced by rsdlParser#model.
rsdlListener.prototype.enterModel = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#model.
rsdlListener.prototype.exitModel = function(ctx) {
};


// Enter a parse tree produced by rsdlParser#namespace.
rsdlListener.prototype.enterNamespace = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#namespace.
rsdlListener.prototype.exitNamespace = function(ctx) {
};


// Enter a parse tree produced by rsdlParser#qualifiedName.
rsdlListener.prototype.enterQualifiedName = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#qualifiedName.
rsdlListener.prototype.exitQualifiedName = function(ctx) {
};


// Enter a parse tree produced by rsdlParser#include.
rsdlListener.prototype.enterInclude = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#include.
rsdlListener.prototype.exitInclude = function(ctx) {
};


// Enter a parse tree produced by rsdlParser#modelElement.
rsdlListener.prototype.enterModelElement = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#modelElement.
rsdlListener.prototype.exitModelElement = function(ctx) {
};


// Enter a parse tree produced by rsdlParser#structuredType.
rsdlListener.prototype.enterStructuredType = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#structuredType.
rsdlListener.prototype.exitStructuredType = function(ctx) {
};


// Enter a parse tree produced by rsdlParser#typeMember.
rsdlListener.prototype.enterTypeMember = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#typeMember.
rsdlListener.prototype.exitTypeMember = function(ctx) {
};


// Enter a parse tree produced by rsdlParser#property.
rsdlListener.prototype.enterProperty = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#property.
rsdlListener.prototype.exitProperty = function(ctx) {
};


// Enter a parse tree produced by rsdlParser#single.
rsdlListener.prototype.enterSingle = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#single.
rsdlListener.prototype.exitSingle = function(ctx) {
};


// Enter a parse tree produced by rsdlParser#array.
rsdlListener.prototype.enterArray = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#array.
rsdlListener.prototype.exitArray = function(ctx) {
};


// Enter a parse tree produced by rsdlParser#typeName.
rsdlListener.prototype.enterTypeName = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#typeName.
rsdlListener.prototype.exitTypeName = function(ctx) {
};


// Enter a parse tree produced by rsdlParser#builtInType.
rsdlListener.prototype.enterBuiltInType = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#builtInType.
rsdlListener.prototype.exitBuiltInType = function(ctx) {
};


// Enter a parse tree produced by rsdlParser#operation.
rsdlListener.prototype.enterOperation = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#operation.
rsdlListener.prototype.exitOperation = function(ctx) {
};


// Enter a parse tree produced by rsdlParser#parameter.
rsdlListener.prototype.enterParameter = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#parameter.
rsdlListener.prototype.exitParameter = function(ctx) {
};


// Enter a parse tree produced by rsdlParser#returnType.
rsdlListener.prototype.enterReturnType = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#returnType.
rsdlListener.prototype.exitReturnType = function(ctx) {
};


// Enter a parse tree produced by rsdlParser#enumType.
rsdlListener.prototype.enterEnumType = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#enumType.
rsdlListener.prototype.exitEnumType = function(ctx) {
};


// Enter a parse tree produced by rsdlParser#enumMember.
rsdlListener.prototype.enterEnumMember = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#enumMember.
rsdlListener.prototype.exitEnumMember = function(ctx) {
};


// Enter a parse tree produced by rsdlParser#service.
rsdlListener.prototype.enterService = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#service.
rsdlListener.prototype.exitService = function(ctx) {
};


// Enter a parse tree produced by rsdlParser#serviceMember.
rsdlListener.prototype.enterServiceMember = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#serviceMember.
rsdlListener.prototype.exitServiceMember = function(ctx) {
};


// Enter a parse tree produced by rsdlParser#entitySet.
rsdlListener.prototype.enterEntitySet = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#entitySet.
rsdlListener.prototype.exitEntitySet = function(ctx) {
};


// Enter a parse tree produced by rsdlParser#singleton.
rsdlListener.prototype.enterSingleton = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#singleton.
rsdlListener.prototype.exitSingleton = function(ctx) {
};


// Enter a parse tree produced by rsdlParser#serviceOperation.
rsdlListener.prototype.enterServiceOperation = function(ctx) {
};

// Exit a parse tree produced by rsdlParser#serviceOperation.
rsdlListener.prototype.exitServiceOperation = function(ctx) {
};



exports.rsdlListener = rsdlListener;