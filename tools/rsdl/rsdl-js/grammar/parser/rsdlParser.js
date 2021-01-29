// Generated from c:\SAPDevelop\odata-rapid\tools\rsdl\rsdl-js\grammar\rsdl.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var rsdlListener = require('./rsdlListener').rsdlListener;
var grammarFileName = "rsdl.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\"\u00df\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0003\u0002\u0005\u0002",
    ".\n\u0002\u0003\u0002\u0007\u00021\n\u0002\f\u0002\u000e\u00024\u000b",
    "\u0002\u0003\u0002\u0007\u00027\n\u0002\f\u0002\u000e\u0002:\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u0004D\n\u0004\f\u0004\u000e\u0004G\u000b",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0005\u0006Q\n\u0006\u0003\u0007\u0005",
    "\u0007T\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007",
    "\u0007Z\n\u0007\f\u0007\u000e\u0007]\u000b\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0005\bc\n\b\u0003\t\u0005\tf\n\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0005\nn\n\n\u0003\n\u0003\n\u0003\n\u0005",
    "\ns\n\n\u0003\n\u0003\n\u0005\nw\n\n\u0003\u000b\u0003\u000b\u0005\u000b",
    "{\n\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0007\r\u0085\n\r\f\r\u000e\r\u0088\u000b\r\u0005\r\u008a\n\r\u0003",
    "\r\u0003\r\u0005\r\u008e\n\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0007\r\u0096\n\r\f\r\u000e\r\u0099\u000b\r\u0005\r\u009b\n",
    "\r\u0003\r\u0003\r\u0005\r\u009f\n\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0006\u0010\u00ac\n\u0010\r\u0010\u000e\u0010",
    "\u00ad\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0006\u0012\u00b7\n\u0012\r\u0012\u000e\u0012\u00b8",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013",
    "\u00c0\n\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0005\u0016\u00cd\n\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0007\u0016\u00d4\n\u0016\f\u0016\u000e\u0016",
    "\u00d7\u000b\u0016\u0005\u0016\u00d9\n\u0016\u0003\u0016\u0003\u0016",
    "\u0005\u0016\u00dd\n\u0016\u0003\u0016\u0002\u0002\u0017\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*\u0002\u0003\u0003\u0002\r\u0013\u0002\u00e5\u0002-\u0003\u0002",
    "\u0002\u0002\u0004=\u0003\u0002\u0002\u0002\u0006@\u0003\u0002\u0002",
    "\u0002\bH\u0003\u0002\u0002\u0002\nP\u0003\u0002\u0002\u0002\fS\u0003",
    "\u0002\u0002\u0002\u000eb\u0003\u0002\u0002\u0002\u0010e\u0003\u0002",
    "\u0002\u0002\u0012v\u0003\u0002\u0002\u0002\u0014z\u0003\u0002\u0002",
    "\u0002\u0016|\u0003\u0002\u0002\u0002\u0018\u009e\u0003\u0002\u0002",
    "\u0002\u001a\u00a0\u0003\u0002\u0002\u0002\u001c\u00a4\u0003\u0002\u0002",
    "\u0002\u001e\u00a7\u0003\u0002\u0002\u0002 \u00b1\u0003\u0002\u0002",
    "\u0002\"\u00b3\u0003\u0002\u0002\u0002$\u00bf\u0003\u0002\u0002\u0002",
    "&\u00c1\u0003\u0002\u0002\u0002(\u00c7\u0003\u0002\u0002\u0002*\u00cc",
    "\u0003\u0002\u0002\u0002,.\u0005\u0004\u0003\u0002-,\u0003\u0002\u0002",
    "\u0002-.\u0003\u0002\u0002\u0002.2\u0003\u0002\u0002\u0002/1\u0005\b",
    "\u0005\u00020/\u0003\u0002\u0002\u000214\u0003\u0002\u0002\u000220\u0003",
    "\u0002\u0002\u000223\u0003\u0002\u0002\u000238\u0003\u0002\u0002\u0002",
    "42\u0003\u0002\u0002\u000257\u0005\n\u0006\u000265\u0003\u0002\u0002",
    "\u00027:\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u000289\u0003\u0002",
    "\u0002\u00029;\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002;<\u0007",
    "\u0002\u0002\u0003<\u0003\u0003\u0002\u0002\u0002=>\u0007\u0003\u0002",
    "\u0002>?\u0005\u0006\u0004\u0002?\u0005\u0003\u0002\u0002\u0002@E\u0007",
    "\u0019\u0002\u0002AB\u0007\u0004\u0002\u0002BD\u0007\u0019\u0002\u0002",
    "CA\u0003\u0002\u0002\u0002DG\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002",
    "\u0002EF\u0003\u0002\u0002\u0002F\u0007\u0003\u0002\u0002\u0002GE\u0003",
    "\u0002\u0002\u0002HI\u0007\u0005\u0002\u0002IJ\u0007\u001f\u0002\u0002",
    "JK\u0007\u0006\u0002\u0002KL\u0007\u0019\u0002\u0002L\t\u0003\u0002",
    "\u0002\u0002MQ\u0005\f\u0007\u0002NQ\u0005\u001e\u0010\u0002OQ\u0005",
    "\"\u0012\u0002PM\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002P",
    "O\u0003\u0002\u0002\u0002Q\u000b\u0003\u0002\u0002\u0002RT\u0007\u001a",
    "\u0002\u0002SR\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002TU\u0003",
    "\u0002\u0002\u0002UV\u0007\u0007\u0002\u0002VW\u0007\u0019\u0002\u0002",
    "W[\u0007\b\u0002\u0002XZ\u0005\u000e\b\u0002YX\u0003\u0002\u0002\u0002",
    "Z]\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002[\\\u0003\u0002",
    "\u0002\u0002\\^\u0003\u0002\u0002\u0002][\u0003\u0002\u0002\u0002^_",
    "\u0007\t\u0002\u0002_\r\u0003\u0002\u0002\u0002`c\u0005\u0010\t\u0002",
    "ac\u0005\u0018\r\u0002b`\u0003\u0002\u0002\u0002ba\u0003\u0002\u0002",
    "\u0002c\u000f\u0003\u0002\u0002\u0002df\u0007\u001d\u0002\u0002ed\u0003",
    "\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002",
    "gh\u0007\u0019\u0002\u0002hi\u0007\n\u0002\u0002ij\u0005\u0012\n\u0002",
    "j\u0011\u0003\u0002\u0002\u0002km\u0005\u0014\u000b\u0002ln\u0007\u001e",
    "\u0002\u0002ml\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002nw\u0003",
    "\u0002\u0002\u0002op\u0007\u000b\u0002\u0002pr\u0005\u0014\u000b\u0002",
    "qs\u0007\u001e\u0002\u0002rq\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002",
    "\u0002st\u0003\u0002\u0002\u0002tu\u0007\f\u0002\u0002uw\u0003\u0002",
    "\u0002\u0002vk\u0003\u0002\u0002\u0002vo\u0003\u0002\u0002\u0002w\u0013",
    "\u0003\u0002\u0002\u0002x{\u0005\u0016\f\u0002y{\u0005\u0006\u0004\u0002",
    "zx\u0003\u0002\u0002\u0002zy\u0003\u0002\u0002\u0002{\u0015\u0003\u0002",
    "\u0002\u0002|}\t\u0002\u0002\u0002}\u0017\u0003\u0002\u0002\u0002~\u007f",
    "\u0007\u001b\u0002\u0002\u007f\u0080\u0007\u0019\u0002\u0002\u0080\u0089",
    "\u0007\u0014\u0002\u0002\u0081\u0086\u0005\u001a\u000e\u0002\u0082\u0083",
    "\u0007\u0015\u0002\u0002\u0083\u0085\u0005\u001a\u000e\u0002\u0084\u0082",
    "\u0003\u0002\u0002\u0002\u0085\u0088\u0003\u0002\u0002\u0002\u0086\u0084",
    "\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u008a",
    "\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0089\u0081",
    "\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u008b",
    "\u0003\u0002\u0002\u0002\u008b\u008d\u0007\u0016\u0002\u0002\u008c\u008e",
    "\u0005\u001c\u000f\u0002\u008d\u008c\u0003\u0002\u0002\u0002\u008d\u008e",
    "\u0003\u0002\u0002\u0002\u008e\u009f\u0003\u0002\u0002\u0002\u008f\u0090",
    "\u0007\u001c\u0002\u0002\u0090\u0091\u0007\u0019\u0002\u0002\u0091\u009a",
    "\u0007\u0014\u0002\u0002\u0092\u0097\u0005\u001a\u000e\u0002\u0093\u0094",
    "\u0007\u0015\u0002\u0002\u0094\u0096\u0005\u001a\u000e\u0002\u0095\u0093",
    "\u0003\u0002\u0002\u0002\u0096\u0099\u0003\u0002\u0002\u0002\u0097\u0095",
    "\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002\u0002\u0098\u009b",
    "\u0003\u0002\u0002\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u009a\u0092",
    "\u0003\u0002\u0002\u0002\u009a\u009b\u0003\u0002\u0002\u0002\u009b\u009c",
    "\u0003\u0002\u0002\u0002\u009c\u009d\u0007\u0016\u0002\u0002\u009d\u009f",
    "\u0005\u001c\u000f\u0002\u009e~\u0003\u0002\u0002\u0002\u009e\u008f",
    "\u0003\u0002\u0002\u0002\u009f\u0019\u0003\u0002\u0002\u0002\u00a0\u00a1",
    "\u0007\u0019\u0002\u0002\u00a1\u00a2\u0007\n\u0002\u0002\u00a2\u00a3",
    "\u0005\u0012\n\u0002\u00a3\u001b\u0003\u0002\u0002\u0002\u00a4\u00a5",
    "\u0007\n\u0002\u0002\u00a5\u00a6\u0005\u0012\n\u0002\u00a6\u001d\u0003",
    "\u0002\u0002\u0002\u00a7\u00a8\u0007\u0017\u0002\u0002\u00a8\u00a9\u0007",
    "\u0019\u0002\u0002\u00a9\u00ab\u0007\b\u0002\u0002\u00aa\u00ac\u0005",
    " \u0011\u0002\u00ab\u00aa\u0003\u0002\u0002\u0002\u00ac\u00ad\u0003",
    "\u0002\u0002\u0002\u00ad\u00ab\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003",
    "\u0002\u0002\u0002\u00ae\u00af\u0003\u0002\u0002\u0002\u00af\u00b0\u0007",
    "\t\u0002\u0002\u00b0\u001f\u0003\u0002\u0002\u0002\u00b1\u00b2\u0007",
    "\u0019\u0002\u0002\u00b2!\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007",
    "\u0018\u0002\u0002\u00b4\u00b6\u0007\b\u0002\u0002\u00b5\u00b7\u0005",
    "$\u0013\u0002\u00b6\u00b5\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003",
    "\u0002\u0002\u0002\u00b8\u00b6\u0003\u0002\u0002\u0002\u00b8\u00b9\u0003",
    "\u0002\u0002\u0002\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007",
    "\t\u0002\u0002\u00bb#\u0003\u0002\u0002\u0002\u00bc\u00c0\u0005&\u0014",
    "\u0002\u00bd\u00c0\u0005(\u0015\u0002\u00be\u00c0\u0005*\u0016\u0002",
    "\u00bf\u00bc\u0003\u0002\u0002\u0002\u00bf\u00bd\u0003\u0002\u0002\u0002",
    "\u00bf\u00be\u0003\u0002\u0002\u0002\u00c0%\u0003\u0002\u0002\u0002",
    "\u00c1\u00c2\u0007\u0019\u0002\u0002\u00c2\u00c3\u0007\n\u0002\u0002",
    "\u00c3\u00c4\u0007\u000b\u0002\u0002\u00c4\u00c5\u0005\u0006\u0004\u0002",
    "\u00c5\u00c6\u0007\f\u0002\u0002\u00c6\'\u0003\u0002\u0002\u0002\u00c7",
    "\u00c8\u0007\u0019\u0002\u0002\u00c8\u00c9\u0007\n\u0002\u0002\u00c9",
    "\u00ca\u0005\u0006\u0004\u0002\u00ca)\u0003\u0002\u0002\u0002\u00cb",
    "\u00cd\u0007\u001b\u0002\u0002\u00cc\u00cb\u0003\u0002\u0002\u0002\u00cc",
    "\u00cd\u0003\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002\u00ce",
    "\u00cf\u0007\u0019\u0002\u0002\u00cf\u00d8\u0007\u0014\u0002\u0002\u00d0",
    "\u00d5\u0005\u001a\u000e\u0002\u00d1\u00d2\u0007\u0015\u0002\u0002\u00d2",
    "\u00d4\u0005\u001a\u000e\u0002\u00d3\u00d1\u0003\u0002\u0002\u0002\u00d4",
    "\u00d7\u0003\u0002\u0002\u0002\u00d5\u00d3\u0003\u0002\u0002\u0002\u00d5",
    "\u00d6\u0003\u0002\u0002\u0002\u00d6\u00d9\u0003\u0002\u0002\u0002\u00d7",
    "\u00d5\u0003\u0002\u0002\u0002\u00d8\u00d0\u0003\u0002\u0002\u0002\u00d8",
    "\u00d9\u0003\u0002\u0002\u0002\u00d9\u00da\u0003\u0002\u0002\u0002\u00da",
    "\u00dc\u0007\u0016\u0002\u0002\u00db\u00dd\u0005\u001c\u000f\u0002\u00dc",
    "\u00db\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd",
    "+\u0003\u0002\u0002\u0002\u001c-28EPS[bemrvz\u0086\u0089\u008d\u0097",
    "\u009a\u009e\u00ad\u00b8\u00bf\u00cc\u00d5\u00d8\u00dc"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'namespace'", "'.'", "'include'", "'as'", "'type'", 
                     "'{'", "'}'", "':'", "'['", "']'", "'Boolean'", "'Date'", 
                     "'Datetime'", "'Decimal'", "'Double'", "'Integer'", 
                     "'String'", "'('", "','", "')'", "'enum'", "'service'", 
                     null, null, null, null, null, "'?'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, "ID", "ABSTRACT", "ACTION", 
                      "FUNCTION", "KEY", "NULLABLE", "FILENAME", "LINE_COMMENT", 
                      "COMMENT", "WS" ];

var ruleNames =  [ "model", "namespace", "qualifiedName", "include", "modelElement", 
                   "structuredType", "typeMember", "property", "typeReference", 
                   "typeName", "builtInType", "operation", "parameter", 
                   "returnType", "enumType", "enumMember", "service", "serviceMember", 
                   "entitySet", "singleton", "serviceOperation" ];

function rsdlParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

rsdlParser.prototype = Object.create(antlr4.Parser.prototype);
rsdlParser.prototype.constructor = rsdlParser;

Object.defineProperty(rsdlParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

rsdlParser.EOF = antlr4.Token.EOF;
rsdlParser.T__0 = 1;
rsdlParser.T__1 = 2;
rsdlParser.T__2 = 3;
rsdlParser.T__3 = 4;
rsdlParser.T__4 = 5;
rsdlParser.T__5 = 6;
rsdlParser.T__6 = 7;
rsdlParser.T__7 = 8;
rsdlParser.T__8 = 9;
rsdlParser.T__9 = 10;
rsdlParser.T__10 = 11;
rsdlParser.T__11 = 12;
rsdlParser.T__12 = 13;
rsdlParser.T__13 = 14;
rsdlParser.T__14 = 15;
rsdlParser.T__15 = 16;
rsdlParser.T__16 = 17;
rsdlParser.T__17 = 18;
rsdlParser.T__18 = 19;
rsdlParser.T__19 = 20;
rsdlParser.T__20 = 21;
rsdlParser.T__21 = 22;
rsdlParser.ID = 23;
rsdlParser.ABSTRACT = 24;
rsdlParser.ACTION = 25;
rsdlParser.FUNCTION = 26;
rsdlParser.KEY = 27;
rsdlParser.NULLABLE = 28;
rsdlParser.FILENAME = 29;
rsdlParser.LINE_COMMENT = 30;
rsdlParser.COMMENT = 31;
rsdlParser.WS = 32;

rsdlParser.RULE_model = 0;
rsdlParser.RULE_namespace = 1;
rsdlParser.RULE_qualifiedName = 2;
rsdlParser.RULE_include = 3;
rsdlParser.RULE_modelElement = 4;
rsdlParser.RULE_structuredType = 5;
rsdlParser.RULE_typeMember = 6;
rsdlParser.RULE_property = 7;
rsdlParser.RULE_typeReference = 8;
rsdlParser.RULE_typeName = 9;
rsdlParser.RULE_builtInType = 10;
rsdlParser.RULE_operation = 11;
rsdlParser.RULE_parameter = 12;
rsdlParser.RULE_returnType = 13;
rsdlParser.RULE_enumType = 14;
rsdlParser.RULE_enumMember = 15;
rsdlParser.RULE_service = 16;
rsdlParser.RULE_serviceMember = 17;
rsdlParser.RULE_entitySet = 18;
rsdlParser.RULE_singleton = 19;
rsdlParser.RULE_serviceOperation = 20;


function ModelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_model;
    return this;
}

ModelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModelContext.prototype.constructor = ModelContext;

ModelContext.prototype.EOF = function() {
    return this.getToken(rsdlParser.EOF, 0);
};

ModelContext.prototype.namespace = function() {
    return this.getTypedRuleContext(NamespaceContext,0);
};

ModelContext.prototype.include = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IncludeContext);
    } else {
        return this.getTypedRuleContext(IncludeContext,i);
    }
};

ModelContext.prototype.modelElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ModelElementContext);
    } else {
        return this.getTypedRuleContext(ModelElementContext,i);
    }
};

ModelContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterModel(this);
	}
};

ModelContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitModel(this);
	}
};




rsdlParser.ModelContext = ModelContext;

rsdlParser.prototype.model = function() {

    var localctx = new ModelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, rsdlParser.RULE_model);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.T__0) {
            this.state = 42;
            this.namespace();
        }

        this.state = 48;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__2) {
            this.state = 45;
            this.include();
            this.state = 50;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 54;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rsdlParser.T__4) | (1 << rsdlParser.T__20) | (1 << rsdlParser.T__21) | (1 << rsdlParser.ABSTRACT))) !== 0)) {
            this.state = 51;
            this.modelElement();
            this.state = 56;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 57;
        this.match(rsdlParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NamespaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_namespace;
    return this;
}

NamespaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceContext.prototype.constructor = NamespaceContext;

NamespaceContext.prototype.qualifiedName = function() {
    return this.getTypedRuleContext(QualifiedNameContext,0);
};

NamespaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterNamespace(this);
	}
};

NamespaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitNamespace(this);
	}
};




rsdlParser.NamespaceContext = NamespaceContext;

rsdlParser.prototype.namespace = function() {

    var localctx = new NamespaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, rsdlParser.RULE_namespace);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.match(rsdlParser.T__0);
        this.state = 60;
        this.qualifiedName();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function QualifiedNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_qualifiedName;
    return this;
}

QualifiedNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QualifiedNameContext.prototype.constructor = QualifiedNameContext;

QualifiedNameContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(rsdlParser.ID);
    } else {
        return this.getToken(rsdlParser.ID, i);
    }
};


QualifiedNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterQualifiedName(this);
	}
};

QualifiedNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitQualifiedName(this);
	}
};




rsdlParser.QualifiedNameContext = QualifiedNameContext;

rsdlParser.prototype.qualifiedName = function() {

    var localctx = new QualifiedNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, rsdlParser.RULE_qualifiedName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.match(rsdlParser.ID);
        this.state = 67;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__1) {
            this.state = 63;
            this.match(rsdlParser.T__1);
            this.state = 64;
            this.match(rsdlParser.ID);
            this.state = 69;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IncludeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_include;
    return this;
}

IncludeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IncludeContext.prototype.constructor = IncludeContext;

IncludeContext.prototype.FILENAME = function() {
    return this.getToken(rsdlParser.FILENAME, 0);
};

IncludeContext.prototype.ID = function() {
    return this.getToken(rsdlParser.ID, 0);
};

IncludeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterInclude(this);
	}
};

IncludeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitInclude(this);
	}
};




rsdlParser.IncludeContext = IncludeContext;

rsdlParser.prototype.include = function() {

    var localctx = new IncludeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, rsdlParser.RULE_include);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.match(rsdlParser.T__2);
        this.state = 71;
        this.match(rsdlParser.FILENAME);
        this.state = 72;
        this.match(rsdlParser.T__3);
        this.state = 73;
        this.match(rsdlParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ModelElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_modelElement;
    return this;
}

ModelElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModelElementContext.prototype.constructor = ModelElementContext;

ModelElementContext.prototype.structuredType = function() {
    return this.getTypedRuleContext(StructuredTypeContext,0);
};

ModelElementContext.prototype.enumType = function() {
    return this.getTypedRuleContext(EnumTypeContext,0);
};

ModelElementContext.prototype.service = function() {
    return this.getTypedRuleContext(ServiceContext,0);
};

ModelElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterModelElement(this);
	}
};

ModelElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitModelElement(this);
	}
};




rsdlParser.ModelElementContext = ModelElementContext;

rsdlParser.prototype.modelElement = function() {

    var localctx = new ModelElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, rsdlParser.RULE_modelElement);
    try {
        this.state = 78;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rsdlParser.T__4:
        case rsdlParser.ABSTRACT:
            this.enterOuterAlt(localctx, 1);
            this.state = 75;
            this.structuredType();
            break;
        case rsdlParser.T__20:
            this.enterOuterAlt(localctx, 2);
            this.state = 76;
            this.enumType();
            break;
        case rsdlParser.T__21:
            this.enterOuterAlt(localctx, 3);
            this.state = 77;
            this.service();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StructuredTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_structuredType;
    return this;
}

StructuredTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StructuredTypeContext.prototype.constructor = StructuredTypeContext;

StructuredTypeContext.prototype.ID = function() {
    return this.getToken(rsdlParser.ID, 0);
};

StructuredTypeContext.prototype.ABSTRACT = function() {
    return this.getToken(rsdlParser.ABSTRACT, 0);
};

StructuredTypeContext.prototype.typeMember = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeMemberContext);
    } else {
        return this.getTypedRuleContext(TypeMemberContext,i);
    }
};

StructuredTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterStructuredType(this);
	}
};

StructuredTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitStructuredType(this);
	}
};




rsdlParser.StructuredTypeContext = StructuredTypeContext;

rsdlParser.prototype.structuredType = function() {

    var localctx = new StructuredTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, rsdlParser.RULE_structuredType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.ABSTRACT) {
            this.state = 80;
            this.match(rsdlParser.ABSTRACT);
        }

        this.state = 83;
        this.match(rsdlParser.T__4);
        this.state = 84;
        this.match(rsdlParser.ID);
        this.state = 85;
        this.match(rsdlParser.T__5);
        this.state = 89;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rsdlParser.ID) | (1 << rsdlParser.ACTION) | (1 << rsdlParser.FUNCTION) | (1 << rsdlParser.KEY))) !== 0)) {
            this.state = 86;
            this.typeMember();
            this.state = 91;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 92;
        this.match(rsdlParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TypeMemberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_typeMember;
    return this;
}

TypeMemberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeMemberContext.prototype.constructor = TypeMemberContext;

TypeMemberContext.prototype.property = function() {
    return this.getTypedRuleContext(PropertyContext,0);
};

TypeMemberContext.prototype.operation = function() {
    return this.getTypedRuleContext(OperationContext,0);
};

TypeMemberContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterTypeMember(this);
	}
};

TypeMemberContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitTypeMember(this);
	}
};




rsdlParser.TypeMemberContext = TypeMemberContext;

rsdlParser.prototype.typeMember = function() {

    var localctx = new TypeMemberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, rsdlParser.RULE_typeMember);
    try {
        this.state = 96;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rsdlParser.ID:
        case rsdlParser.KEY:
            this.enterOuterAlt(localctx, 1);
            this.state = 94;
            this.property();
            break;
        case rsdlParser.ACTION:
        case rsdlParser.FUNCTION:
            this.enterOuterAlt(localctx, 2);
            this.state = 95;
            this.operation();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PropertyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_property;
    return this;
}

PropertyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyContext.prototype.constructor = PropertyContext;

PropertyContext.prototype.ID = function() {
    return this.getToken(rsdlParser.ID, 0);
};

PropertyContext.prototype.typeReference = function() {
    return this.getTypedRuleContext(TypeReferenceContext,0);
};

PropertyContext.prototype.KEY = function() {
    return this.getToken(rsdlParser.KEY, 0);
};

PropertyContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterProperty(this);
	}
};

PropertyContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitProperty(this);
	}
};




rsdlParser.PropertyContext = PropertyContext;

rsdlParser.prototype.property = function() {

    var localctx = new PropertyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, rsdlParser.RULE_property);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.KEY) {
            this.state = 98;
            this.match(rsdlParser.KEY);
        }

        this.state = 101;
        this.match(rsdlParser.ID);
        this.state = 102;
        this.match(rsdlParser.T__7);
        this.state = 103;
        this.typeReference();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TypeReferenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_typeReference;
    return this;
}

TypeReferenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeReferenceContext.prototype.constructor = TypeReferenceContext;


 
TypeReferenceContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function SingleContext(parser, ctx) {
	TypeReferenceContext.call(this, parser);
    TypeReferenceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SingleContext.prototype = Object.create(TypeReferenceContext.prototype);
SingleContext.prototype.constructor = SingleContext;

rsdlParser.SingleContext = SingleContext;

SingleContext.prototype.typeName = function() {
    return this.getTypedRuleContext(TypeNameContext,0);
};

SingleContext.prototype.NULLABLE = function() {
    return this.getToken(rsdlParser.NULLABLE, 0);
};
SingleContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterSingle(this);
	}
};

SingleContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitSingle(this);
	}
};


function ArrayContext(parser, ctx) {
	TypeReferenceContext.call(this, parser);
    TypeReferenceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrayContext.prototype = Object.create(TypeReferenceContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;

rsdlParser.ArrayContext = ArrayContext;

ArrayContext.prototype.typeName = function() {
    return this.getTypedRuleContext(TypeNameContext,0);
};

ArrayContext.prototype.NULLABLE = function() {
    return this.getToken(rsdlParser.NULLABLE, 0);
};
ArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterArray(this);
	}
};

ArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitArray(this);
	}
};



rsdlParser.TypeReferenceContext = TypeReferenceContext;

rsdlParser.prototype.typeReference = function() {

    var localctx = new TypeReferenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, rsdlParser.RULE_typeReference);
    var _la = 0; // Token type
    try {
        this.state = 116;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rsdlParser.T__10:
        case rsdlParser.T__11:
        case rsdlParser.T__12:
        case rsdlParser.T__13:
        case rsdlParser.T__14:
        case rsdlParser.T__15:
        case rsdlParser.T__16:
        case rsdlParser.ID:
            localctx = new SingleContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 105;
            this.typeName();
            this.state = 107;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.NULLABLE) {
                this.state = 106;
                this.match(rsdlParser.NULLABLE);
            }

            break;
        case rsdlParser.T__8:
            localctx = new ArrayContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 109;
            this.match(rsdlParser.T__8);
            this.state = 110;
            this.typeName();
            this.state = 112;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.NULLABLE) {
                this.state = 111;
                this.match(rsdlParser.NULLABLE);
            }

            this.state = 114;
            this.match(rsdlParser.T__9);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TypeNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_typeName;
    return this;
}

TypeNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeNameContext.prototype.constructor = TypeNameContext;

TypeNameContext.prototype.builtInType = function() {
    return this.getTypedRuleContext(BuiltInTypeContext,0);
};

TypeNameContext.prototype.qualifiedName = function() {
    return this.getTypedRuleContext(QualifiedNameContext,0);
};

TypeNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterTypeName(this);
	}
};

TypeNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitTypeName(this);
	}
};




rsdlParser.TypeNameContext = TypeNameContext;

rsdlParser.prototype.typeName = function() {

    var localctx = new TypeNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, rsdlParser.RULE_typeName);
    try {
        this.state = 120;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rsdlParser.T__10:
        case rsdlParser.T__11:
        case rsdlParser.T__12:
        case rsdlParser.T__13:
        case rsdlParser.T__14:
        case rsdlParser.T__15:
        case rsdlParser.T__16:
            this.enterOuterAlt(localctx, 1);
            this.state = 118;
            this.builtInType();
            break;
        case rsdlParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 119;
            this.qualifiedName();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BuiltInTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_builtInType;
    return this;
}

BuiltInTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BuiltInTypeContext.prototype.constructor = BuiltInTypeContext;


BuiltInTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterBuiltInType(this);
	}
};

BuiltInTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitBuiltInType(this);
	}
};




rsdlParser.BuiltInTypeContext = BuiltInTypeContext;

rsdlParser.prototype.builtInType = function() {

    var localctx = new BuiltInTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, rsdlParser.RULE_builtInType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rsdlParser.T__10) | (1 << rsdlParser.T__11) | (1 << rsdlParser.T__12) | (1 << rsdlParser.T__13) | (1 << rsdlParser.T__14) | (1 << rsdlParser.T__15) | (1 << rsdlParser.T__16))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_operation;
    return this;
}

OperationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperationContext.prototype.constructor = OperationContext;

OperationContext.prototype.ACTION = function() {
    return this.getToken(rsdlParser.ACTION, 0);
};

OperationContext.prototype.ID = function() {
    return this.getToken(rsdlParser.ID, 0);
};

OperationContext.prototype.parameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterContext);
    } else {
        return this.getTypedRuleContext(ParameterContext,i);
    }
};

OperationContext.prototype.returnType = function() {
    return this.getTypedRuleContext(ReturnTypeContext,0);
};

OperationContext.prototype.FUNCTION = function() {
    return this.getToken(rsdlParser.FUNCTION, 0);
};

OperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterOperation(this);
	}
};

OperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitOperation(this);
	}
};




rsdlParser.OperationContext = OperationContext;

rsdlParser.prototype.operation = function() {

    var localctx = new OperationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, rsdlParser.RULE_operation);
    var _la = 0; // Token type
    try {
        this.state = 156;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rsdlParser.ACTION:
            this.enterOuterAlt(localctx, 1);
            this.state = 124;
            this.match(rsdlParser.ACTION);
            this.state = 125;
            this.match(rsdlParser.ID);
            this.state = 126;
            this.match(rsdlParser.T__17);
            this.state = 135;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.ID) {
                this.state = 127;
                this.parameter();
                this.state = 132;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===rsdlParser.T__18) {
                    this.state = 128;
                    this.match(rsdlParser.T__18);
                    this.state = 129;
                    this.parameter();
                    this.state = 134;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }

            this.state = 137;
            this.match(rsdlParser.T__19);
            this.state = 139;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.T__7) {
                this.state = 138;
                this.returnType();
            }

            break;
        case rsdlParser.FUNCTION:
            this.enterOuterAlt(localctx, 2);
            this.state = 141;
            this.match(rsdlParser.FUNCTION);
            this.state = 142;
            this.match(rsdlParser.ID);
            this.state = 143;
            this.match(rsdlParser.T__17);
            this.state = 152;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.ID) {
                this.state = 144;
                this.parameter();
                this.state = 149;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===rsdlParser.T__18) {
                    this.state = 145;
                    this.match(rsdlParser.T__18);
                    this.state = 146;
                    this.parameter();
                    this.state = 151;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }

            this.state = 154;
            this.match(rsdlParser.T__19);
            this.state = 155;
            this.returnType();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_parameter;
    return this;
}

ParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterContext.prototype.constructor = ParameterContext;

ParameterContext.prototype.ID = function() {
    return this.getToken(rsdlParser.ID, 0);
};

ParameterContext.prototype.typeReference = function() {
    return this.getTypedRuleContext(TypeReferenceContext,0);
};

ParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterParameter(this);
	}
};

ParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitParameter(this);
	}
};




rsdlParser.ParameterContext = ParameterContext;

rsdlParser.prototype.parameter = function() {

    var localctx = new ParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, rsdlParser.RULE_parameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.match(rsdlParser.ID);
        this.state = 159;
        this.match(rsdlParser.T__7);
        this.state = 160;
        this.typeReference();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ReturnTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_returnType;
    return this;
}

ReturnTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnTypeContext.prototype.constructor = ReturnTypeContext;

ReturnTypeContext.prototype.typeReference = function() {
    return this.getTypedRuleContext(TypeReferenceContext,0);
};

ReturnTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterReturnType(this);
	}
};

ReturnTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitReturnType(this);
	}
};




rsdlParser.ReturnTypeContext = ReturnTypeContext;

rsdlParser.prototype.returnType = function() {

    var localctx = new ReturnTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, rsdlParser.RULE_returnType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.match(rsdlParser.T__7);
        this.state = 163;
        this.typeReference();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EnumTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_enumType;
    return this;
}

EnumTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumTypeContext.prototype.constructor = EnumTypeContext;

EnumTypeContext.prototype.ID = function() {
    return this.getToken(rsdlParser.ID, 0);
};

EnumTypeContext.prototype.enumMember = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EnumMemberContext);
    } else {
        return this.getTypedRuleContext(EnumMemberContext,i);
    }
};

EnumTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterEnumType(this);
	}
};

EnumTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitEnumType(this);
	}
};




rsdlParser.EnumTypeContext = EnumTypeContext;

rsdlParser.prototype.enumType = function() {

    var localctx = new EnumTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, rsdlParser.RULE_enumType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this.match(rsdlParser.T__20);
        this.state = 166;
        this.match(rsdlParser.ID);
        this.state = 167;
        this.match(rsdlParser.T__5);
        this.state = 169; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 168;
            this.enumMember();
            this.state = 171; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===rsdlParser.ID);
        this.state = 173;
        this.match(rsdlParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EnumMemberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_enumMember;
    return this;
}

EnumMemberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumMemberContext.prototype.constructor = EnumMemberContext;

EnumMemberContext.prototype.ID = function() {
    return this.getToken(rsdlParser.ID, 0);
};

EnumMemberContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterEnumMember(this);
	}
};

EnumMemberContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitEnumMember(this);
	}
};




rsdlParser.EnumMemberContext = EnumMemberContext;

rsdlParser.prototype.enumMember = function() {

    var localctx = new EnumMemberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, rsdlParser.RULE_enumMember);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 175;
        this.match(rsdlParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ServiceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_service;
    return this;
}

ServiceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ServiceContext.prototype.constructor = ServiceContext;

ServiceContext.prototype.serviceMember = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ServiceMemberContext);
    } else {
        return this.getTypedRuleContext(ServiceMemberContext,i);
    }
};

ServiceContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterService(this);
	}
};

ServiceContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitService(this);
	}
};




rsdlParser.ServiceContext = ServiceContext;

rsdlParser.prototype.service = function() {

    var localctx = new ServiceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, rsdlParser.RULE_service);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        this.match(rsdlParser.T__21);
        this.state = 178;
        this.match(rsdlParser.T__5);
        this.state = 180; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 179;
            this.serviceMember();
            this.state = 182; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===rsdlParser.ID || _la===rsdlParser.ACTION);
        this.state = 184;
        this.match(rsdlParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ServiceMemberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_serviceMember;
    return this;
}

ServiceMemberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ServiceMemberContext.prototype.constructor = ServiceMemberContext;

ServiceMemberContext.prototype.entitySet = function() {
    return this.getTypedRuleContext(EntitySetContext,0);
};

ServiceMemberContext.prototype.singleton = function() {
    return this.getTypedRuleContext(SingletonContext,0);
};

ServiceMemberContext.prototype.serviceOperation = function() {
    return this.getTypedRuleContext(ServiceOperationContext,0);
};

ServiceMemberContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterServiceMember(this);
	}
};

ServiceMemberContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitServiceMember(this);
	}
};




rsdlParser.ServiceMemberContext = ServiceMemberContext;

rsdlParser.prototype.serviceMember = function() {

    var localctx = new ServiceMemberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, rsdlParser.RULE_serviceMember);
    try {
        this.state = 189;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 186;
            this.entitySet();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 187;
            this.singleton();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 188;
            this.serviceOperation();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EntitySetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_entitySet;
    return this;
}

EntitySetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntitySetContext.prototype.constructor = EntitySetContext;

EntitySetContext.prototype.ID = function() {
    return this.getToken(rsdlParser.ID, 0);
};

EntitySetContext.prototype.qualifiedName = function() {
    return this.getTypedRuleContext(QualifiedNameContext,0);
};

EntitySetContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterEntitySet(this);
	}
};

EntitySetContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitEntitySet(this);
	}
};




rsdlParser.EntitySetContext = EntitySetContext;

rsdlParser.prototype.entitySet = function() {

    var localctx = new EntitySetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, rsdlParser.RULE_entitySet);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(rsdlParser.ID);
        this.state = 192;
        this.match(rsdlParser.T__7);
        this.state = 193;
        this.match(rsdlParser.T__8);
        this.state = 194;
        this.qualifiedName();
        this.state = 195;
        this.match(rsdlParser.T__9);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SingletonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_singleton;
    return this;
}

SingletonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingletonContext.prototype.constructor = SingletonContext;

SingletonContext.prototype.ID = function() {
    return this.getToken(rsdlParser.ID, 0);
};

SingletonContext.prototype.qualifiedName = function() {
    return this.getTypedRuleContext(QualifiedNameContext,0);
};

SingletonContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterSingleton(this);
	}
};

SingletonContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitSingleton(this);
	}
};




rsdlParser.SingletonContext = SingletonContext;

rsdlParser.prototype.singleton = function() {

    var localctx = new SingletonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, rsdlParser.RULE_singleton);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this.match(rsdlParser.ID);
        this.state = 198;
        this.match(rsdlParser.T__7);
        this.state = 199;
        this.qualifiedName();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ServiceOperationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_serviceOperation;
    return this;
}

ServiceOperationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ServiceOperationContext.prototype.constructor = ServiceOperationContext;

ServiceOperationContext.prototype.ID = function() {
    return this.getToken(rsdlParser.ID, 0);
};

ServiceOperationContext.prototype.ACTION = function() {
    return this.getToken(rsdlParser.ACTION, 0);
};

ServiceOperationContext.prototype.parameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterContext);
    } else {
        return this.getTypedRuleContext(ParameterContext,i);
    }
};

ServiceOperationContext.prototype.returnType = function() {
    return this.getTypedRuleContext(ReturnTypeContext,0);
};

ServiceOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterServiceOperation(this);
	}
};

ServiceOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitServiceOperation(this);
	}
};




rsdlParser.ServiceOperationContext = ServiceOperationContext;

rsdlParser.prototype.serviceOperation = function() {

    var localctx = new ServiceOperationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, rsdlParser.RULE_serviceOperation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 202;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.ACTION) {
            this.state = 201;
            this.match(rsdlParser.ACTION);
        }

        this.state = 204;
        this.match(rsdlParser.ID);
        this.state = 205;
        this.match(rsdlParser.T__17);
        this.state = 214;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.ID) {
            this.state = 206;
            this.parameter();
            this.state = 211;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rsdlParser.T__18) {
                this.state = 207;
                this.match(rsdlParser.T__18);
                this.state = 208;
                this.parameter();
                this.state = 213;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 216;
        this.match(rsdlParser.T__19);
        this.state = 218;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.T__7) {
            this.state = 217;
            this.returnType();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.rsdlParser = rsdlParser;
