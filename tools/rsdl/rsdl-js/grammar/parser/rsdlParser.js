// Generated from c:\SAPDevelop\odata-rapid\tools\rsdl\rsdl-js\grammar\rsdl.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var rsdlListener = require('./rsdlListener').rsdlListener;
var grammarFileName = "rsdl.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\"\u00e9\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0003",
    "\u0002\u0005\u00020\n\u0002\u0003\u0002\u0007\u00023\n\u0002\f\u0002",
    "\u000e\u00026\u000b\u0002\u0003\u0002\u0007\u00029\n\u0002\f\u0002\u000e",
    "\u0002<\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004F\n\u0004",
    "\f\u0004\u000e\u0004I\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "S\n\u0006\u0003\u0007\u0005\u0007V\n\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007[\n\u0007\u0003\u0007\u0003\u0007\u0007\u0007_\n\u0007",
    "\f\u0007\u000e\u0007b\u000b\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0005\bh\n\b\u0003\t\u0005\tk\n\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0005\u000bv\n\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b{\n\u000b\u0003\u000b",
    "\u0003\u000b\u0005\u000b\u007f\n\u000b\u0003\f\u0003\f\u0005\f\u0083",
    "\n\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0007\u000e\u008d\n\u000e\f\u000e\u000e\u000e",
    "\u0090\u000b\u000e\u0005\u000e\u0092\n\u000e\u0003\u000e\u0003\u000e",
    "\u0005\u000e\u0096\n\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u009e\n\u000e\f\u000e\u000e",
    "\u000e\u00a1\u000b\u000e\u0005\u000e\u00a3\n\u000e\u0003\u000e\u0003",
    "\u000e\u0005\u000e\u00a7\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0007\u0011\u00b4\n\u0011\f\u0011\u000e\u0011",
    "\u00b7\u000b\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u00c0\n\u0013\f\u0013\u000e",
    "\u0013\u00c3\u000b\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0005\u0014\u00ca\n\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0005\u0017\u00d7\n\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0007\u0017\u00de\n",
    "\u0017\f\u0017\u000e\u0017\u00e1\u000b\u0017\u0005\u0017\u00e3\n\u0017",
    "\u0003\u0017\u0003\u0017\u0005\u0017\u00e7\n\u0017\u0003\u0017\u0002",
    "\u0002\u0018\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,\u0002\u0003\u0003\u0002\r\u0013\u0002\u00ef",
    "\u0002/\u0003\u0002\u0002\u0002\u0004?\u0003\u0002\u0002\u0002\u0006",
    "B\u0003\u0002\u0002\u0002\bJ\u0003\u0002\u0002\u0002\nR\u0003\u0002",
    "\u0002\u0002\fU\u0003\u0002\u0002\u0002\u000eg\u0003\u0002\u0002\u0002",
    "\u0010j\u0003\u0002\u0002\u0002\u0012p\u0003\u0002\u0002\u0002\u0014",
    "~\u0003\u0002\u0002\u0002\u0016\u0082\u0003\u0002\u0002\u0002\u0018",
    "\u0084\u0003\u0002\u0002\u0002\u001a\u00a6\u0003\u0002\u0002\u0002\u001c",
    "\u00a8\u0003\u0002\u0002\u0002\u001e\u00ac\u0003\u0002\u0002\u0002 ",
    "\u00af\u0003\u0002\u0002\u0002\"\u00ba\u0003\u0002\u0002\u0002$\u00bc",
    "\u0003\u0002\u0002\u0002&\u00c9\u0003\u0002\u0002\u0002(\u00cb\u0003",
    "\u0002\u0002\u0002*\u00d1\u0003\u0002\u0002\u0002,\u00d6\u0003\u0002",
    "\u0002\u0002.0\u0005\u0004\u0003\u0002/.\u0003\u0002\u0002\u0002/0\u0003",
    "\u0002\u0002\u000204\u0003\u0002\u0002\u000213\u0005\b\u0005\u00022",
    "1\u0003\u0002\u0002\u000236\u0003\u0002\u0002\u000242\u0003\u0002\u0002",
    "\u000245\u0003\u0002\u0002\u00025:\u0003\u0002\u0002\u000264\u0003\u0002",
    "\u0002\u000279\u0005\n\u0006\u000287\u0003\u0002\u0002\u00029<\u0003",
    "\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002",
    ";=\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002=>\u0007\u0002\u0002",
    "\u0003>\u0003\u0003\u0002\u0002\u0002?@\u0007\u0003\u0002\u0002@A\u0005",
    "\u0006\u0004\u0002A\u0005\u0003\u0002\u0002\u0002BG\u0007\u0019\u0002",
    "\u0002CD\u0007\u0004\u0002\u0002DF\u0007\u0019\u0002\u0002EC\u0003\u0002",
    "\u0002\u0002FI\u0003\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002GH\u0003",
    "\u0002\u0002\u0002H\u0007\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002",
    "\u0002JK\u0007\u0005\u0002\u0002KL\u0007 \u0002\u0002LM\u0007\u0006",
    "\u0002\u0002MN\u0007\u0019\u0002\u0002N\t\u0003\u0002\u0002\u0002OS",
    "\u0005\f\u0007\u0002PS\u0005 \u0011\u0002QS\u0005$\u0013\u0002RO\u0003",
    "\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002RQ\u0003\u0002\u0002\u0002",
    "S\u000b\u0003\u0002\u0002\u0002TV\u0007\u001a\u0002\u0002UT\u0003\u0002",
    "\u0002\u0002UV\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002WX\u0007",
    "\u0007\u0002\u0002XZ\u0007\u0019\u0002\u0002Y[\u0005\u0012\n\u0002Z",
    "Y\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002",
    "\u0002\\`\u0007\b\u0002\u0002]_\u0005\u000e\b\u0002^]\u0003\u0002\u0002",
    "\u0002_b\u0003\u0002\u0002\u0002`^\u0003\u0002\u0002\u0002`a\u0003\u0002",
    "\u0002\u0002ac\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002cd\u0007",
    "\t\u0002\u0002d\r\u0003\u0002\u0002\u0002eh\u0005\u0010\t\u0002fh\u0005",
    "\u001a\u000e\u0002ge\u0003\u0002\u0002\u0002gf\u0003\u0002\u0002\u0002",
    "h\u000f\u0003\u0002\u0002\u0002ik\u0007\u001e\u0002\u0002ji\u0003\u0002",
    "\u0002\u0002jk\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002lm\u0007",
    "\u0019\u0002\u0002mn\u0007\n\u0002\u0002no\u0005\u0014\u000b\u0002o",
    "\u0011\u0003\u0002\u0002\u0002pq\u0007\u001c\u0002\u0002qr\u0007\u0019",
    "\u0002\u0002r\u0013\u0003\u0002\u0002\u0002su\u0005\u0016\f\u0002tv",
    "\u0007\u001f\u0002\u0002ut\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002",
    "\u0002v\u007f\u0003\u0002\u0002\u0002wx\u0007\u000b\u0002\u0002xz\u0005",
    "\u0016\f\u0002y{\u0007\u001f\u0002\u0002zy\u0003\u0002\u0002\u0002z",
    "{\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|}\u0007\f\u0002",
    "\u0002}\u007f\u0003\u0002\u0002\u0002~s\u0003\u0002\u0002\u0002~w\u0003",
    "\u0002\u0002\u0002\u007f\u0015\u0003\u0002\u0002\u0002\u0080\u0083\u0005",
    "\u0018\r\u0002\u0081\u0083\u0005\u0006\u0004\u0002\u0082\u0080\u0003",
    "\u0002\u0002\u0002\u0082\u0081\u0003\u0002\u0002\u0002\u0083\u0017\u0003",
    "\u0002\u0002\u0002\u0084\u0085\t\u0002\u0002\u0002\u0085\u0019\u0003",
    "\u0002\u0002\u0002\u0086\u0087\u0007\u001b\u0002\u0002\u0087\u0088\u0007",
    "\u0019\u0002\u0002\u0088\u0091\u0007\u0014\u0002\u0002\u0089\u008e\u0005",
    "\u001c\u000f\u0002\u008a\u008b\u0007\u0015\u0002\u0002\u008b\u008d\u0005",
    "\u001c\u000f\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008d\u0090\u0003",
    "\u0002\u0002\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008e\u008f\u0003",
    "\u0002\u0002\u0002\u008f\u0092\u0003\u0002\u0002\u0002\u0090\u008e\u0003",
    "\u0002\u0002\u0002\u0091\u0089\u0003\u0002\u0002\u0002\u0091\u0092\u0003",
    "\u0002\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0095\u0007",
    "\u0016\u0002\u0002\u0094\u0096\u0005\u001e\u0010\u0002\u0095\u0094\u0003",
    "\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u00a7\u0003",
    "\u0002\u0002\u0002\u0097\u0098\u0007\u001d\u0002\u0002\u0098\u0099\u0007",
    "\u0019\u0002\u0002\u0099\u00a2\u0007\u0014\u0002\u0002\u009a\u009f\u0005",
    "\u001c\u000f\u0002\u009b\u009c\u0007\u0015\u0002\u0002\u009c\u009e\u0005",
    "\u001c\u000f\u0002\u009d\u009b\u0003\u0002\u0002\u0002\u009e\u00a1\u0003",
    "\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u009f\u00a0\u0003",
    "\u0002\u0002\u0002\u00a0\u00a3\u0003\u0002\u0002\u0002\u00a1\u009f\u0003",
    "\u0002\u0002\u0002\u00a2\u009a\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003",
    "\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007",
    "\u0016\u0002\u0002\u00a5\u00a7\u0005\u001e\u0010\u0002\u00a6\u0086\u0003",
    "\u0002\u0002\u0002\u00a6\u0097\u0003\u0002\u0002\u0002\u00a7\u001b\u0003",
    "\u0002\u0002\u0002\u00a8\u00a9\u0007\u0019\u0002\u0002\u00a9\u00aa\u0007",
    "\n\u0002\u0002\u00aa\u00ab\u0005\u0014\u000b\u0002\u00ab\u001d\u0003",
    "\u0002\u0002\u0002\u00ac\u00ad\u0007\n\u0002\u0002\u00ad\u00ae\u0005",
    "\u0014\u000b\u0002\u00ae\u001f\u0003\u0002\u0002\u0002\u00af\u00b0\u0007",
    "\u0017\u0002\u0002\u00b0\u00b1\u0007\u0019\u0002\u0002\u00b1\u00b5\u0007",
    "\b\u0002\u0002\u00b2\u00b4\u0005\"\u0012\u0002\u00b3\u00b2\u0003\u0002",
    "\u0002\u0002\u00b4\u00b7\u0003\u0002\u0002\u0002\u00b5\u00b3\u0003\u0002",
    "\u0002\u0002\u00b5\u00b6\u0003\u0002\u0002\u0002\u00b6\u00b8\u0003\u0002",
    "\u0002\u0002\u00b7\u00b5\u0003\u0002\u0002\u0002\u00b8\u00b9\u0007\t",
    "\u0002\u0002\u00b9!\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007\u0019",
    "\u0002\u0002\u00bb#\u0003\u0002\u0002\u0002\u00bc\u00bd\u0007\u0018",
    "\u0002\u0002\u00bd\u00c1\u0007\b\u0002\u0002\u00be\u00c0\u0005&\u0014",
    "\u0002\u00bf\u00be\u0003\u0002\u0002\u0002\u00c0\u00c3\u0003\u0002\u0002",
    "\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002",
    "\u0002\u00c2\u00c4\u0003\u0002\u0002\u0002\u00c3\u00c1\u0003\u0002\u0002",
    "\u0002\u00c4\u00c5\u0007\t\u0002\u0002\u00c5%\u0003\u0002\u0002\u0002",
    "\u00c6\u00ca\u0005(\u0015\u0002\u00c7\u00ca\u0005*\u0016\u0002\u00c8",
    "\u00ca\u0005,\u0017\u0002\u00c9\u00c6\u0003\u0002\u0002\u0002\u00c9",
    "\u00c7\u0003\u0002\u0002\u0002\u00c9\u00c8\u0003\u0002\u0002\u0002\u00ca",
    "\'\u0003\u0002\u0002\u0002\u00cb\u00cc\u0007\u0019\u0002\u0002\u00cc",
    "\u00cd\u0007\n\u0002\u0002\u00cd\u00ce\u0007\u000b\u0002\u0002\u00ce",
    "\u00cf\u0005\u0006\u0004\u0002\u00cf\u00d0\u0007\f\u0002\u0002\u00d0",
    ")\u0003\u0002\u0002\u0002\u00d1\u00d2\u0007\u0019\u0002\u0002\u00d2",
    "\u00d3\u0007\n\u0002\u0002\u00d3\u00d4\u0005\u0006\u0004\u0002\u00d4",
    "+\u0003\u0002\u0002\u0002\u00d5\u00d7\u0007\u001b\u0002\u0002\u00d6",
    "\u00d5\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7",
    "\u00d8\u0003\u0002\u0002\u0002\u00d8\u00d9\u0007\u0019\u0002\u0002\u00d9",
    "\u00e2\u0007\u0014\u0002\u0002\u00da\u00df\u0005\u001c\u000f\u0002\u00db",
    "\u00dc\u0007\u0015\u0002\u0002\u00dc\u00de\u0005\u001c\u000f\u0002\u00dd",
    "\u00db\u0003\u0002\u0002\u0002\u00de\u00e1\u0003\u0002\u0002\u0002\u00df",
    "\u00dd\u0003\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0",
    "\u00e3\u0003\u0002\u0002\u0002\u00e1\u00df\u0003\u0002\u0002\u0002\u00e2",
    "\u00da\u0003\u0002\u0002\u0002\u00e2\u00e3\u0003\u0002\u0002\u0002\u00e3",
    "\u00e4\u0003\u0002\u0002\u0002\u00e4\u00e6\u0007\u0016\u0002\u0002\u00e5",
    "\u00e7\u0005\u001e\u0010\u0002\u00e6\u00e5\u0003\u0002\u0002\u0002\u00e6",
    "\u00e7\u0003\u0002\u0002\u0002\u00e7-\u0003\u0002\u0002\u0002\u001d",
    "/4:GRUZ`gjuz~\u0082\u008e\u0091\u0095\u009f\u00a2\u00a6\u00b5\u00c1",
    "\u00c9\u00d6\u00df\u00e2\u00e6"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'namespace'", "'.'", "'include'", "'as'", "'type'", 
                     "'{'", "'}'", "':'", "'['", "']'", "'Boolean'", "'Date'", 
                     "'Datetime'", "'Decimal'", "'Double'", "'Integer'", 
                     "'String'", "'('", "','", "')'", "'enum'", "'service'", 
                     null, null, null, null, null, null, "'?'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, "ID", "ABSTRACT", "ACTION", 
                      "EXTENDS", "FUNCTION", "KEY", "NULLABLE", "FILENAME", 
                      "LINE_COMMENT", "WS" ];

var ruleNames =  [ "model", "namespace", "qualifiedName", "include", "modelElement", 
                   "structuredType", "typeMember", "property", "baseType", 
                   "typeReference", "typeName", "builtInType", "operation", 
                   "parameter", "returnType", "enumType", "enumMember", 
                   "service", "serviceMember", "entitySet", "singleton", 
                   "serviceOperation" ];

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
rsdlParser.EXTENDS = 26;
rsdlParser.FUNCTION = 27;
rsdlParser.KEY = 28;
rsdlParser.NULLABLE = 29;
rsdlParser.FILENAME = 30;
rsdlParser.LINE_COMMENT = 31;
rsdlParser.WS = 32;

rsdlParser.RULE_model = 0;
rsdlParser.RULE_namespace = 1;
rsdlParser.RULE_qualifiedName = 2;
rsdlParser.RULE_include = 3;
rsdlParser.RULE_modelElement = 4;
rsdlParser.RULE_structuredType = 5;
rsdlParser.RULE_typeMember = 6;
rsdlParser.RULE_property = 7;
rsdlParser.RULE_baseType = 8;
rsdlParser.RULE_typeReference = 9;
rsdlParser.RULE_typeName = 10;
rsdlParser.RULE_builtInType = 11;
rsdlParser.RULE_operation = 12;
rsdlParser.RULE_parameter = 13;
rsdlParser.RULE_returnType = 14;
rsdlParser.RULE_enumType = 15;
rsdlParser.RULE_enumMember = 16;
rsdlParser.RULE_service = 17;
rsdlParser.RULE_serviceMember = 18;
rsdlParser.RULE_entitySet = 19;
rsdlParser.RULE_singleton = 20;
rsdlParser.RULE_serviceOperation = 21;


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
        this.state = 45;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.T__0) {
            this.state = 44;
            this.namespace();
        }

        this.state = 50;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__2) {
            this.state = 47;
            this.include();
            this.state = 52;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 56;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rsdlParser.T__4) | (1 << rsdlParser.T__20) | (1 << rsdlParser.T__21) | (1 << rsdlParser.ABSTRACT))) !== 0)) {
            this.state = 53;
            this.modelElement();
            this.state = 58;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 59;
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
        this.state = 61;
        this.match(rsdlParser.T__0);
        this.state = 62;
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
        this.state = 64;
        this.match(rsdlParser.ID);
        this.state = 69;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__1) {
            this.state = 65;
            this.match(rsdlParser.T__1);
            this.state = 66;
            this.match(rsdlParser.ID);
            this.state = 71;
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
        this.state = 72;
        this.match(rsdlParser.T__2);
        this.state = 73;
        this.match(rsdlParser.FILENAME);
        this.state = 74;
        this.match(rsdlParser.T__3);
        this.state = 75;
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
        this.state = 80;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rsdlParser.T__4:
        case rsdlParser.ABSTRACT:
            this.enterOuterAlt(localctx, 1);
            this.state = 77;
            this.structuredType();
            break;
        case rsdlParser.T__20:
            this.enterOuterAlt(localctx, 2);
            this.state = 78;
            this.enumType();
            break;
        case rsdlParser.T__21:
            this.enterOuterAlt(localctx, 3);
            this.state = 79;
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

StructuredTypeContext.prototype.baseType = function() {
    return this.getTypedRuleContext(BaseTypeContext,0);
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
        this.state = 83;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.ABSTRACT) {
            this.state = 82;
            this.match(rsdlParser.ABSTRACT);
        }

        this.state = 85;
        this.match(rsdlParser.T__4);
        this.state = 86;
        this.match(rsdlParser.ID);
        this.state = 88;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.EXTENDS) {
            this.state = 87;
            this.baseType();
        }

        this.state = 90;
        this.match(rsdlParser.T__5);
        this.state = 94;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rsdlParser.ID) | (1 << rsdlParser.ACTION) | (1 << rsdlParser.FUNCTION) | (1 << rsdlParser.KEY))) !== 0)) {
            this.state = 91;
            this.typeMember();
            this.state = 96;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 97;
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
        this.state = 101;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rsdlParser.ID:
        case rsdlParser.KEY:
            this.enterOuterAlt(localctx, 1);
            this.state = 99;
            this.property();
            break;
        case rsdlParser.ACTION:
        case rsdlParser.FUNCTION:
            this.enterOuterAlt(localctx, 2);
            this.state = 100;
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
        this.state = 104;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.KEY) {
            this.state = 103;
            this.match(rsdlParser.KEY);
        }

        this.state = 106;
        this.match(rsdlParser.ID);
        this.state = 107;
        this.match(rsdlParser.T__7);
        this.state = 108;
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


function BaseTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_baseType;
    return this;
}

BaseTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BaseTypeContext.prototype.constructor = BaseTypeContext;

BaseTypeContext.prototype.EXTENDS = function() {
    return this.getToken(rsdlParser.EXTENDS, 0);
};

BaseTypeContext.prototype.ID = function() {
    return this.getToken(rsdlParser.ID, 0);
};

BaseTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterBaseType(this);
	}
};

BaseTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitBaseType(this);
	}
};




rsdlParser.BaseTypeContext = BaseTypeContext;

rsdlParser.prototype.baseType = function() {

    var localctx = new BaseTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, rsdlParser.RULE_baseType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        this.match(rsdlParser.EXTENDS);
        this.state = 111;
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
    this.enterRule(localctx, 18, rsdlParser.RULE_typeReference);
    var _la = 0; // Token type
    try {
        this.state = 124;
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
            this.state = 113;
            this.typeName();
            this.state = 115;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.NULLABLE) {
                this.state = 114;
                this.match(rsdlParser.NULLABLE);
            }

            break;
        case rsdlParser.T__8:
            localctx = new ArrayContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 117;
            this.match(rsdlParser.T__8);
            this.state = 118;
            this.typeName();
            this.state = 120;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.NULLABLE) {
                this.state = 119;
                this.match(rsdlParser.NULLABLE);
            }

            this.state = 122;
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
    this.enterRule(localctx, 20, rsdlParser.RULE_typeName);
    try {
        this.state = 128;
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
            this.state = 126;
            this.builtInType();
            break;
        case rsdlParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 127;
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
    this.enterRule(localctx, 22, rsdlParser.RULE_builtInType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
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
    this.enterRule(localctx, 24, rsdlParser.RULE_operation);
    var _la = 0; // Token type
    try {
        this.state = 164;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rsdlParser.ACTION:
            this.enterOuterAlt(localctx, 1);
            this.state = 132;
            this.match(rsdlParser.ACTION);
            this.state = 133;
            this.match(rsdlParser.ID);
            this.state = 134;
            this.match(rsdlParser.T__17);
            this.state = 143;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.ID) {
                this.state = 135;
                this.parameter();
                this.state = 140;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===rsdlParser.T__18) {
                    this.state = 136;
                    this.match(rsdlParser.T__18);
                    this.state = 137;
                    this.parameter();
                    this.state = 142;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }

            this.state = 145;
            this.match(rsdlParser.T__19);
            this.state = 147;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.T__7) {
                this.state = 146;
                this.returnType();
            }

            break;
        case rsdlParser.FUNCTION:
            this.enterOuterAlt(localctx, 2);
            this.state = 149;
            this.match(rsdlParser.FUNCTION);
            this.state = 150;
            this.match(rsdlParser.ID);
            this.state = 151;
            this.match(rsdlParser.T__17);
            this.state = 160;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.ID) {
                this.state = 152;
                this.parameter();
                this.state = 157;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===rsdlParser.T__18) {
                    this.state = 153;
                    this.match(rsdlParser.T__18);
                    this.state = 154;
                    this.parameter();
                    this.state = 159;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }

            this.state = 162;
            this.match(rsdlParser.T__19);
            this.state = 163;
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
    this.enterRule(localctx, 26, rsdlParser.RULE_parameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.match(rsdlParser.ID);
        this.state = 167;
        this.match(rsdlParser.T__7);
        this.state = 168;
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
    this.enterRule(localctx, 28, rsdlParser.RULE_returnType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this.match(rsdlParser.T__7);
        this.state = 171;
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
    this.enterRule(localctx, 30, rsdlParser.RULE_enumType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.match(rsdlParser.T__20);
        this.state = 174;
        this.match(rsdlParser.ID);
        this.state = 175;
        this.match(rsdlParser.T__5);
        this.state = 179;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.ID) {
            this.state = 176;
            this.enumMember();
            this.state = 181;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 182;
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
    this.enterRule(localctx, 32, rsdlParser.RULE_enumMember);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
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
    this.enterRule(localctx, 34, rsdlParser.RULE_service);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.match(rsdlParser.T__21);
        this.state = 187;
        this.match(rsdlParser.T__5);
        this.state = 191;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.ID || _la===rsdlParser.ACTION) {
            this.state = 188;
            this.serviceMember();
            this.state = 193;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 194;
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
    this.enterRule(localctx, 36, rsdlParser.RULE_serviceMember);
    try {
        this.state = 199;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 196;
            this.entitySet();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 197;
            this.singleton();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 198;
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
    this.enterRule(localctx, 38, rsdlParser.RULE_entitySet);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 201;
        this.match(rsdlParser.ID);
        this.state = 202;
        this.match(rsdlParser.T__7);
        this.state = 203;
        this.match(rsdlParser.T__8);
        this.state = 204;
        this.qualifiedName();
        this.state = 205;
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
    this.enterRule(localctx, 40, rsdlParser.RULE_singleton);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 207;
        this.match(rsdlParser.ID);
        this.state = 208;
        this.match(rsdlParser.T__7);
        this.state = 209;
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
    this.enterRule(localctx, 42, rsdlParser.RULE_serviceOperation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.ACTION) {
            this.state = 211;
            this.match(rsdlParser.ACTION);
        }

        this.state = 214;
        this.match(rsdlParser.ID);
        this.state = 215;
        this.match(rsdlParser.T__17);
        this.state = 224;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.ID) {
            this.state = 216;
            this.parameter();
            this.state = 221;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rsdlParser.T__18) {
                this.state = 217;
                this.match(rsdlParser.T__18);
                this.state = 218;
                this.parameter();
                this.state = 223;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 226;
        this.match(rsdlParser.T__19);
        this.state = 228;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.T__7) {
            this.state = 227;
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
