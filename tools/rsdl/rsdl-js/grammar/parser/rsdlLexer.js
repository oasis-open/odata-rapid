// Generated from c:\git\odata-rapid\tools\rsdl\rsdl-js\grammar\rsdl.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002 \u00fa\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0007\u0018\u00b1\n\u0018\f\u0018\u000e\u0018\u00b4\u000b\u0018",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0006\u001c\u00ca\n\u001c\r\u001c\u000e\u001c",
    "\u00cb\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0005\u001d\u00d4\n\u001d\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0007\u001e\u00da\n\u001e\f\u001e\u000e\u001e\u00dd\u000b",
    "\u001e\u0003\u001e\u0005\u001e\u00e0\n\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0007\u001f\u00ea\n\u001f\f\u001f\u000e\u001f\u00ed\u000b\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003 \u0006",
    " \u00f5\n \r \u000e \u00f6\u0003 \u0003 \u0005\u00cb\u00db\u00eb\u0002",
    "!\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d",
    "\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018",
    "/\u00191\u001a3\u001b5\u001c7\u001d9\u0002;\u001e=\u001f? \u0003\u0002",
    "\u0005\u0005\u0002C\\aac|\u0006\u00022;C\\aac|\u0005\u0002\u000b\f\u000f",
    "\u000f\"\"\u0002\u0100\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005",
    "\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t",
    "\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r",
    "\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011",
    "\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015",
    "\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019",
    "\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d",
    "\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!",
    "\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003",
    "\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002",
    "\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002",
    "\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002",
    "\u00023\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u0002",
    "7\u0003\u0002\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003",
    "\u0002\u0002\u0002\u0002?\u0003\u0002\u0002\u0002\u0003A\u0003\u0002",
    "\u0002\u0002\u0005K\u0003\u0002\u0002\u0002\u0007M\u0003\u0002\u0002",
    "\u0002\tU\u0003\u0002\u0002\u0002\u000bX\u0003\u0002\u0002\u0002\r]",
    "\u0003\u0002\u0002\u0002\u000f_\u0003\u0002\u0002\u0002\u0011a\u0003",
    "\u0002\u0002\u0002\u0013c\u0003\u0002\u0002\u0002\u0015e\u0003\u0002",
    "\u0002\u0002\u0017g\u0003\u0002\u0002\u0002\u0019o\u0003\u0002\u0002",
    "\u0002\u001bt\u0003\u0002\u0002\u0002\u001d}\u0003\u0002\u0002\u0002",
    "\u001f\u0085\u0003\u0002\u0002\u0002!\u008c\u0003\u0002\u0002\u0002",
    "#\u0094\u0003\u0002\u0002\u0002%\u009b\u0003\u0002\u0002\u0002\'\u009d",
    "\u0003\u0002\u0002\u0002)\u009f\u0003\u0002\u0002\u0002+\u00a1\u0003",
    "\u0002\u0002\u0002-\u00a6\u0003\u0002\u0002\u0002/\u00ae\u0003\u0002",
    "\u0002\u00021\u00b5\u0003\u0002\u0002\u00023\u00be\u0003\u0002\u0002",
    "\u00025\u00c4\u0003\u0002\u0002\u00027\u00c6\u0003\u0002\u0002\u0002",
    "9\u00d3\u0003\u0002\u0002\u0002;\u00d5\u0003\u0002\u0002\u0002=\u00e5",
    "\u0003\u0002\u0002\u0002?\u00f4\u0003\u0002\u0002\u0002AB\u0007p\u0002",
    "\u0002BC\u0007c\u0002\u0002CD\u0007o\u0002\u0002DE\u0007g\u0002\u0002",
    "EF\u0007u\u0002\u0002FG\u0007r\u0002\u0002GH\u0007c\u0002\u0002HI\u0007",
    "e\u0002\u0002IJ\u0007g\u0002\u0002J\u0004\u0003\u0002\u0002\u0002KL",
    "\u00070\u0002\u0002L\u0006\u0003\u0002\u0002\u0002MN\u0007k\u0002\u0002",
    "NO\u0007p\u0002\u0002OP\u0007e\u0002\u0002PQ\u0007n\u0002\u0002QR\u0007",
    "w\u0002\u0002RS\u0007f\u0002\u0002ST\u0007g\u0002\u0002T\b\u0003\u0002",
    "\u0002\u0002UV\u0007c\u0002\u0002VW\u0007u\u0002\u0002W\n\u0003\u0002",
    "\u0002\u0002XY\u0007v\u0002\u0002YZ\u0007{\u0002\u0002Z[\u0007r\u0002",
    "\u0002[\\\u0007g\u0002\u0002\\\f\u0003\u0002\u0002\u0002]^\u0007}\u0002",
    "\u0002^\u000e\u0003\u0002\u0002\u0002_`\u0007\u007f\u0002\u0002`\u0010",
    "\u0003\u0002\u0002\u0002ab\u0007<\u0002\u0002b\u0012\u0003\u0002\u0002",
    "\u0002cd\u0007]\u0002\u0002d\u0014\u0003\u0002\u0002\u0002ef\u0007_",
    "\u0002\u0002f\u0016\u0003\u0002\u0002\u0002gh\u0007D\u0002\u0002hi\u0007",
    "q\u0002\u0002ij\u0007q\u0002\u0002jk\u0007n\u0002\u0002kl\u0007g\u0002",
    "\u0002lm\u0007c\u0002\u0002mn\u0007p\u0002\u0002n\u0018\u0003\u0002",
    "\u0002\u0002op\u0007F\u0002\u0002pq\u0007c\u0002\u0002qr\u0007v\u0002",
    "\u0002rs\u0007g\u0002\u0002s\u001a\u0003\u0002\u0002\u0002tu\u0007F",
    "\u0002\u0002uv\u0007c\u0002\u0002vw\u0007v\u0002\u0002wx\u0007g\u0002",
    "\u0002xy\u0007v\u0002\u0002yz\u0007k\u0002\u0002z{\u0007o\u0002\u0002",
    "{|\u0007g\u0002\u0002|\u001c\u0003\u0002\u0002\u0002}~\u0007F\u0002",
    "\u0002~\u007f\u0007g\u0002\u0002\u007f\u0080\u0007e\u0002\u0002\u0080",
    "\u0081\u0007k\u0002\u0002\u0081\u0082\u0007o\u0002\u0002\u0082\u0083",
    "\u0007c\u0002\u0002\u0083\u0084\u0007n\u0002\u0002\u0084\u001e\u0003",
    "\u0002\u0002\u0002\u0085\u0086\u0007F\u0002\u0002\u0086\u0087\u0007",
    "q\u0002\u0002\u0087\u0088\u0007w\u0002\u0002\u0088\u0089\u0007d\u0002",
    "\u0002\u0089\u008a\u0007n\u0002\u0002\u008a\u008b\u0007g\u0002\u0002",
    "\u008b \u0003\u0002\u0002\u0002\u008c\u008d\u0007K\u0002\u0002\u008d",
    "\u008e\u0007p\u0002\u0002\u008e\u008f\u0007v\u0002\u0002\u008f\u0090",
    "\u0007g\u0002\u0002\u0090\u0091\u0007i\u0002\u0002\u0091\u0092\u0007",
    "g\u0002\u0002\u0092\u0093\u0007t\u0002\u0002\u0093\"\u0003\u0002\u0002",
    "\u0002\u0094\u0095\u0007U\u0002\u0002\u0095\u0096\u0007v\u0002\u0002",
    "\u0096\u0097\u0007t\u0002\u0002\u0097\u0098\u0007k\u0002\u0002\u0098",
    "\u0099\u0007p\u0002\u0002\u0099\u009a\u0007i\u0002\u0002\u009a$\u0003",
    "\u0002\u0002\u0002\u009b\u009c\u0007*\u0002\u0002\u009c&\u0003\u0002",
    "\u0002\u0002\u009d\u009e\u0007.\u0002\u0002\u009e(\u0003\u0002\u0002",
    "\u0002\u009f\u00a0\u0007+\u0002\u0002\u00a0*\u0003\u0002\u0002\u0002",
    "\u00a1\u00a2\u0007g\u0002\u0002\u00a2\u00a3\u0007p\u0002\u0002\u00a3",
    "\u00a4\u0007w\u0002\u0002\u00a4\u00a5\u0007o\u0002\u0002\u00a5,\u0003",
    "\u0002\u0002\u0002\u00a6\u00a7\u0007u\u0002\u0002\u00a7\u00a8\u0007",
    "g\u0002\u0002\u00a8\u00a9\u0007t\u0002\u0002\u00a9\u00aa\u0007x\u0002",
    "\u0002\u00aa\u00ab\u0007k\u0002\u0002\u00ab\u00ac\u0007e\u0002\u0002",
    "\u00ac\u00ad\u0007g\u0002\u0002\u00ad.\u0003\u0002\u0002\u0002\u00ae",
    "\u00b2\t\u0002\u0002\u0002\u00af\u00b1\t\u0003\u0002\u0002\u00b0\u00af",
    "\u0003\u0002\u0002\u0002\u00b1\u00b4\u0003\u0002\u0002\u0002\u00b2\u00b0",
    "\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b30",
    "\u0003\u0002\u0002\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b5\u00b6",
    "\u0007c\u0002\u0002\u00b6\u00b7\u0007e\u0002\u0002\u00b7\u00b8\u0007",
    "v\u0002\u0002\u00b8\u00b9\u0007k\u0002\u0002\u00b9\u00ba\u0007q\u0002",
    "\u0002\u00ba\u00bb\u0007p\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002",
    "\u0002\u00bc\u00bd\u0005? \u0002\u00bd2\u0003\u0002\u0002\u0002\u00be",
    "\u00bf\u0007m\u0002\u0002\u00bf\u00c0\u0007g\u0002\u0002\u00c0\u00c1",
    "\u0007{\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c3",
    "\u0005? \u0002\u00c34\u0003\u0002\u0002\u0002\u00c4\u00c5\u0007A\u0002",
    "\u0002\u00c56\u0003\u0002\u0002\u0002\u00c6\u00c9\u0007$\u0002\u0002",
    "\u00c7\u00ca\u00059\u001d\u0002\u00c8\u00ca\u000b\u0002\u0002\u0002",
    "\u00c9\u00c7\u0003\u0002\u0002\u0002\u00c9\u00c8\u0003\u0002\u0002\u0002",
    "\u00ca\u00cb\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002",
    "\u00cb\u00c9\u0003\u0002\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002",
    "\u00cd\u00ce\u0007$\u0002\u0002\u00ce8\u0003\u0002\u0002\u0002\u00cf",
    "\u00d0\u0007^\u0002\u0002\u00d0\u00d4\u0007$\u0002\u0002\u00d1\u00d2",
    "\u0007^\u0002\u0002\u00d2\u00d4\u0007^\u0002\u0002\u00d3\u00cf\u0003",
    "\u0002\u0002\u0002\u00d3\u00d1\u0003\u0002\u0002\u0002\u00d4:\u0003",
    "\u0002\u0002\u0002\u00d5\u00d6\u00071\u0002\u0002\u00d6\u00d7\u0007",
    "1\u0002\u0002\u00d7\u00db\u0003\u0002\u0002\u0002\u00d8\u00da\u000b",
    "\u0002\u0002\u0002\u00d9\u00d8\u0003\u0002\u0002\u0002\u00da\u00dd\u0003",
    "\u0002\u0002\u0002\u00db\u00dc\u0003\u0002\u0002\u0002\u00db\u00d9\u0003",
    "\u0002\u0002\u0002\u00dc\u00df\u0003\u0002\u0002\u0002\u00dd\u00db\u0003",
    "\u0002\u0002\u0002\u00de\u00e0\u0007\u000f\u0002\u0002\u00df\u00de\u0003",
    "\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u00e1\u0003",
    "\u0002\u0002\u0002\u00e1\u00e2\u0007\f\u0002\u0002\u00e2\u00e3\u0003",
    "\u0002\u0002\u0002\u00e3\u00e4\b\u001e\u0002\u0002\u00e4<\u0003\u0002",
    "\u0002\u0002\u00e5\u00e6\u00071\u0002\u0002\u00e6\u00e7\u0007,\u0002",
    "\u0002\u00e7\u00eb\u0003\u0002\u0002\u0002\u00e8\u00ea\u000b\u0002\u0002",
    "\u0002\u00e9\u00e8\u0003\u0002\u0002\u0002\u00ea\u00ed\u0003\u0002\u0002",
    "\u0002\u00eb\u00ec\u0003\u0002\u0002\u0002\u00eb\u00e9\u0003\u0002\u0002",
    "\u0002\u00ec\u00ee\u0003\u0002\u0002\u0002\u00ed\u00eb\u0003\u0002\u0002",
    "\u0002\u00ee\u00ef\u0007,\u0002\u0002\u00ef\u00f0\u00071\u0002\u0002",
    "\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f1\u00f2\b\u001f\u0002\u0002",
    "\u00f2>\u0003\u0002\u0002\u0002\u00f3\u00f5\t\u0004\u0002\u0002\u00f4",
    "\u00f3\u0003\u0002\u0002\u0002\u00f5\u00f6\u0003\u0002\u0002\u0002\u00f6",
    "\u00f4\u0003\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7",
    "\u00f8\u0003\u0002\u0002\u0002\u00f8\u00f9\b \u0002\u0002\u00f9@\u0003",
    "\u0002\u0002\u0002\u000b\u0002\u00b2\u00c9\u00cb\u00d3\u00db\u00df\u00eb",
    "\u00f6\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function rsdlLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

rsdlLexer.prototype = Object.create(antlr4.Lexer.prototype);
rsdlLexer.prototype.constructor = rsdlLexer;

Object.defineProperty(rsdlLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

rsdlLexer.EOF = antlr4.Token.EOF;
rsdlLexer.T__0 = 1;
rsdlLexer.T__1 = 2;
rsdlLexer.T__2 = 3;
rsdlLexer.T__3 = 4;
rsdlLexer.T__4 = 5;
rsdlLexer.T__5 = 6;
rsdlLexer.T__6 = 7;
rsdlLexer.T__7 = 8;
rsdlLexer.T__8 = 9;
rsdlLexer.T__9 = 10;
rsdlLexer.T__10 = 11;
rsdlLexer.T__11 = 12;
rsdlLexer.T__12 = 13;
rsdlLexer.T__13 = 14;
rsdlLexer.T__14 = 15;
rsdlLexer.T__15 = 16;
rsdlLexer.T__16 = 17;
rsdlLexer.T__17 = 18;
rsdlLexer.T__18 = 19;
rsdlLexer.T__19 = 20;
rsdlLexer.T__20 = 21;
rsdlLexer.T__21 = 22;
rsdlLexer.ID = 23;
rsdlLexer.ACTION = 24;
rsdlLexer.KEY = 25;
rsdlLexer.NULLABLE = 26;
rsdlLexer.FILENAME = 27;
rsdlLexer.LINE_COMMENT = 28;
rsdlLexer.COMMENT = 29;
rsdlLexer.WS = 30;

rsdlLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

rsdlLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

rsdlLexer.prototype.literalNames = [ null, "'namespace'", "'.'", "'include'", 
                                     "'as'", "'type'", "'{'", "'}'", "':'", 
                                     "'['", "']'", "'Boolean'", "'Date'", 
                                     "'Datetime'", "'Decimal'", "'Double'", 
                                     "'Integer'", "'String'", "'('", "','", 
                                     "')'", "'enum'", "'service'", null, 
                                     null, null, "'?'" ];

rsdlLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                      null, null, null, null, null, null, 
                                      null, null, null, null, null, null, 
                                      null, null, null, null, null, "ID", 
                                      "ACTION", "KEY", "NULLABLE", "FILENAME", 
                                      "LINE_COMMENT", "COMMENT", "WS" ];

rsdlLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                  "T__5", "T__6", "T__7", "T__8", "T__9", 
                                  "T__10", "T__11", "T__12", "T__13", "T__14", 
                                  "T__15", "T__16", "T__17", "T__18", "T__19", 
                                  "T__20", "T__21", "ID", "ACTION", "KEY", 
                                  "NULLABLE", "FILENAME", "ESC", "LINE_COMMENT", 
                                  "COMMENT", "WS" ];

rsdlLexer.prototype.grammarFileName = "rsdl.g4";


exports.rsdlLexer = rsdlLexer;

