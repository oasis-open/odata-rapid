// Generated from c:\git\odata-rapid\tools\rsdl\rsdl-js\grammar\rsdl.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var rsdlListener = require('./rsdlListener').rsdlListener;
var grammarFileName = "rsdl.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003/\u01bf\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0003\u0002",
    "\u0005\u0002H\n\u0002\u0003\u0002\u0007\u0002K\n\u0002\f\u0002\u000e",
    "\u0002N\u000b\u0002\u0003\u0002\u0007\u0002Q\n\u0002\f\u0002\u000e\u0002",
    "T\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005d\n\u0005\u0003",
    "\u0006\u0007\u0006g\n\u0006\f\u0006\u000e\u0006j\u000b\u0006\u0003\u0006",
    "\u0005\u0006m\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "r\n\u0006\u0003\u0006\u0003\u0006\u0007\u0006v\n\u0006\f\u0006\u000e",
    "\u0006y\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0005\b\u0082\n\b\u0003\t\u0007\t\u0085",
    "\n\t\f\t\u000e\t\u0088\u000b\t\u0003\t\u0005\t\u008b\n\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0005\u000b",
    "\u0095\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u009a",
    "\n\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u009e\n\u000b\u0003\f\u0003",
    "\f\u0003\f\u0005\f\u00a3\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00ae\n\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00b7\n\r\u0003\r\u0005\r",
    "\u00ba\n\r\u0003\u000e\u0003\u000e\u0003\u000f\u0007\u000f\u00bf\n\u000f",
    "\f\u000f\u000e\u000f\u00c2\u000b\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00ca\n\u000f",
    "\f\u000f\u000e\u000f\u00cd\u000b\u000f\u0005\u000f\u00cf\n\u000f\u0003",
    "\u000f\u0003\u000f\u0005\u000f\u00d3\n\u000f\u0003\u000f\u0007\u000f",
    "\u00d6\n\u000f\f\u000f\u000e\u000f\u00d9\u000b\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00e1",
    "\n\u000f\f\u000f\u000e\u000f\u00e4\u000b\u000f\u0005\u000f\u00e6\n\u000f",
    "\u0003\u000f\u0003\u000f\u0005\u000f\u00ea\n\u000f\u0003\u0010\u0007",
    "\u0010\u00ed\n\u0010\f\u0010\u000e\u0010\u00f0\u000b\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0007\u0011",
    "\u00f8\n\u0011\f\u0011\u000e\u0011\u00fb\u000b\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0007\u0012\u0100\n\u0012\f\u0012\u000e\u0012\u0103",
    "\u000b\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0006\u0012",
    "\u0109\n\u0012\r\u0012\u000e\u0012\u010a\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0014\u0007\u0014\u0112\n\u0014\f\u0014\u000e",
    "\u0014\u0115\u000b\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0007\u0015",
    "\u011a\n\u0015\f\u0015\u000e\u0015\u011d\u000b\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0007\u0016\u0125",
    "\n\u0016\f\u0016\u000e\u0016\u0128\u000b\u0016\u0003\u0016\u0003\u0016",
    "\u0005\u0016\u012c\n\u0016\u0003\u0016\u0003\u0016\u0007\u0016\u0130",
    "\n\u0016\f\u0016\u000e\u0016\u0133\u000b\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u013a\n\u0017\u0003",
    "\u0018\u0007\u0018\u013d\n\u0018\f\u0018\u000e\u0018\u0140\u000b\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0019\u0007\u0019\u0149\n\u0019\f\u0019\u000e\u0019\u014c\u000b",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0007",
    "\u001a\u0153\n\u001a\f\u001a\u000e\u001a\u0156\u000b\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0007\u001a",
    "\u015e\n\u001a\f\u001a\u000e\u001a\u0161\u000b\u001a\u0005\u001a\u0163",
    "\n\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u0167\n\u001a\u0003\u001a",
    "\u0007\u001a\u016a\n\u001a\f\u001a\u000e\u001a\u016d\u000b\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0007",
    "\u001a\u0175\n\u001a\f\u001a\u000e\u001a\u0178\u000b\u001a\u0005\u001a",
    "\u017a\n\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u017e\n\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u0184\n\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0005\u001c\u018e\n\u001c\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0007\u001d\u0194\n\u001d\f\u001d\u000e",
    "\u001d\u0197\u000b\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0005\u001d\u019d\n\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0007\u001f\u01a5\n\u001f\f\u001f\u000e",
    "\u001f\u01a8\u000b\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0005\u001f\u01ae\n\u001f\u0003 \u0003 \u0003 \u0003 \u0003!\u0003",
    "!\u0003\"\u0003\"\u0003\"\u0006\"\u01b9\n\"\r\"\u000e\"\u01ba\u0003",
    "#\u0003#\u0003#\u0002\u0002$\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BD\u0002\u0006",
    "\u0004\u0002%%**\u0003\u0002\u0019\u001a\u0005\u0002((**,,\u0003\u0002",
    "*+\u0002\u01e2\u0002G\u0003\u0002\u0002\u0002\u0004W\u0003\u0002\u0002",
    "\u0002\u0006Z\u0003\u0002\u0002\u0002\bc\u0003\u0002\u0002\u0002\nh",
    "\u0003\u0002\u0002\u0002\f|\u0003\u0002\u0002\u0002\u000e\u0081\u0003",
    "\u0002\u0002\u0002\u0010\u0086\u0003\u0002\u0002\u0002\u0012\u0090\u0003",
    "\u0002\u0002\u0002\u0014\u009d\u0003\u0002\u0002\u0002\u0016\u00a2\u0003",
    "\u0002\u0002\u0002\u0018\u00b9\u0003\u0002\u0002\u0002\u001a\u00bb\u0003",
    "\u0002\u0002\u0002\u001c\u00e9\u0003\u0002\u0002\u0002\u001e\u00ee\u0003",
    "\u0002\u0002\u0002 \u00f5\u0003\u0002\u0002\u0002\"\u0101\u0003\u0002",
    "\u0002\u0002$\u010e\u0003\u0002\u0002\u0002&\u0113\u0003\u0002\u0002",
    "\u0002(\u011b\u0003\u0002\u0002\u0002*\u0126\u0003\u0002\u0002\u0002",
    ",\u0139\u0003\u0002\u0002\u0002.\u013e\u0003\u0002\u0002\u00020\u014a",
    "\u0003\u0002\u0002\u00022\u017d\u0003\u0002\u0002\u00024\u0183\u0003",
    "\u0002\u0002\u00026\u018d\u0003\u0002\u0002\u00028\u019c\u0003\u0002",
    "\u0002\u0002:\u019e\u0003\u0002\u0002\u0002<\u01ad\u0003\u0002\u0002",
    "\u0002>\u01af\u0003\u0002\u0002\u0002@\u01b3\u0003\u0002\u0002\u0002",
    "B\u01b5\u0003\u0002\u0002\u0002D\u01bc\u0003\u0002\u0002\u0002FH\u0005",
    "\u0004\u0003\u0002GF\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002",
    "HL\u0003\u0002\u0002\u0002IK\u0005\u0006\u0004\u0002JI\u0003\u0002\u0002",
    "\u0002KN\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002LM\u0003\u0002",
    "\u0002\u0002MR\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002OQ\u0005",
    "\b\u0005\u0002PO\u0003\u0002\u0002\u0002QT\u0003\u0002\u0002\u0002R",
    "P\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002SU\u0003\u0002\u0002",
    "\u0002TR\u0003\u0002\u0002\u0002UV\u0007\u0002\u0002\u0003V\u0003\u0003",
    "\u0002\u0002\u0002WX\u0007\u0003\u0002\u0002XY\u0005D#\u0002Y\u0005",
    "\u0003\u0002\u0002\u0002Z[\u0007\u0004\u0002\u0002[\\\u0007(\u0002\u0002",
    "\\]\u0007\u0005\u0002\u0002]^\u0007*\u0002\u0002^\u0007\u0003\u0002",
    "\u0002\u0002_d\u0005\n\u0006\u0002`d\u0005\"\u0012\u0002ad\u0005(\u0015",
    "\u0002bd\u0005*\u0016\u0002c_\u0003\u0002\u0002\u0002c`\u0003\u0002",
    "\u0002\u0002ca\u0003\u0002\u0002\u0002cb\u0003\u0002\u0002\u0002d\t",
    "\u0003\u0002\u0002\u0002eg\u00054\u001b\u0002fe\u0003\u0002\u0002\u0002",
    "gj\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002",
    "\u0002il\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002\u0002km\u0007\"",
    "\u0002\u0002lk\u0003\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002mn\u0003",
    "\u0002\u0002\u0002no\u0007\u0006\u0002\u0002oq\u0007*\u0002\u0002pr",
    "\u0005\f\u0007\u0002qp\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002",
    "rs\u0003\u0002\u0002\u0002sw\u0007\u0007\u0002\u0002tv\u0005\u000e\b",
    "\u0002ut\u0003\u0002\u0002\u0002vy\u0003\u0002\u0002\u0002wu\u0003\u0002",
    "\u0002\u0002wx\u0003\u0002\u0002\u0002xz\u0003\u0002\u0002\u0002yw\u0003",
    "\u0002\u0002\u0002z{\u0007\b\u0002\u0002{\u000b\u0003\u0002\u0002\u0002",
    "|}\u0007\t\u0002\u0002}~\u0007*\u0002\u0002~\r\u0003\u0002\u0002\u0002",
    "\u007f\u0082\u0005\u0010\t\u0002\u0080\u0082\u0005\u001c\u000f\u0002",
    "\u0081\u007f\u0003\u0002\u0002\u0002\u0081\u0080\u0003\u0002\u0002\u0002",
    "\u0082\u000f\u0003\u0002\u0002\u0002\u0083\u0085\u00054\u001b\u0002",
    "\u0084\u0083\u0003\u0002\u0002\u0002\u0085\u0088\u0003\u0002\u0002\u0002",
    "\u0086\u0084\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002",
    "\u0087\u008a\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002",
    "\u0089\u008b\u0007%\u0002\u0002\u008a\u0089\u0003\u0002\u0002\u0002",
    "\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002",
    "\u008c\u008d\u0005\u0012\n\u0002\u008d\u008e\u0007\n\u0002\u0002\u008e",
    "\u008f\u0005\u0014\u000b\u0002\u008f\u0011\u0003\u0002\u0002\u0002\u0090",
    "\u0091\t\u0002\u0002\u0002\u0091\u0013\u0003\u0002\u0002\u0002\u0092",
    "\u0094\u0005\u0016\f\u0002\u0093\u0095\u0007&\u0002\u0002\u0094\u0093",
    "\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u009e",
    "\u0003\u0002\u0002\u0002\u0096\u0097\u0007\u000b\u0002\u0002\u0097\u0099",
    "\u0005\u0016\f\u0002\u0098\u009a\u0007&\u0002\u0002\u0099\u0098\u0003",
    "\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002\u0002\u009a\u009b\u0003",
    "\u0002\u0002\u0002\u009b\u009c\u0007\f\u0002\u0002\u009c\u009e\u0003",
    "\u0002\u0002\u0002\u009d\u0092\u0003\u0002\u0002\u0002\u009d\u0096\u0003",
    "\u0002\u0002\u0002\u009e\u0015\u0003\u0002\u0002\u0002\u009f\u00a3\u0005",
    "\u0018\r\u0002\u00a0\u00a3\u0005\u001a\u000e\u0002\u00a1\u00a3\u0005",
    "D#\u0002\u00a2\u009f\u0003\u0002\u0002\u0002\u00a2\u00a0\u0003\u0002",
    "\u0002\u0002\u00a2\u00a1\u0003\u0002\u0002\u0002\u00a3\u0017\u0003\u0002",
    "\u0002\u0002\u00a4\u00ba\u0007\r\u0002\u0002\u00a5\u00ba\u0007\u000e",
    "\u0002\u0002\u00a6\u00ba\u0007\u000f\u0002\u0002\u00a7\u00ad\u0007\u0010",
    "\u0002\u0002\u00a8\u00a9\u0007\u0011\u0002\u0002\u00a9\u00aa\u0007\'",
    "\u0002\u0002\u00aa\u00ab\u0007\u0012\u0002\u0002\u00ab\u00ac\u0007\'",
    "\u0002\u0002\u00ac\u00ae\u0007\u0013\u0002\u0002\u00ad\u00a8\u0003\u0002",
    "\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u00ba\u0003\u0002",
    "\u0002\u0002\u00af\u00ba\u0007\u0014\u0002\u0002\u00b0\u00ba\u0007\u0015",
    "\u0002\u0002\u00b1\u00ba\u0007\u0016\u0002\u0002\u00b2\u00b6\u0007\u0017",
    "\u0002\u0002\u00b3\u00b4\u0007\u0011\u0002\u0002\u00b4\u00b5\u0007\'",
    "\u0002\u0002\u00b5\u00b7\u0007\u0013\u0002\u0002\u00b6\u00b3\u0003\u0002",
    "\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002\u00b7\u00ba\u0003\u0002",
    "\u0002\u0002\u00b8\u00ba\u0007\u0018\u0002\u0002\u00b9\u00a4\u0003\u0002",
    "\u0002\u0002\u00b9\u00a5\u0003\u0002\u0002\u0002\u00b9\u00a6\u0003\u0002",
    "\u0002\u0002\u00b9\u00a7\u0003\u0002\u0002\u0002\u00b9\u00af\u0003\u0002",
    "\u0002\u0002\u00b9\u00b0\u0003\u0002\u0002\u0002\u00b9\u00b1\u0003\u0002",
    "\u0002\u0002\u00b9\u00b2\u0003\u0002\u0002\u0002\u00b9\u00b8\u0003\u0002",
    "\u0002\u0002\u00ba\u0019\u0003\u0002\u0002\u0002\u00bb\u00bc\u0007)",
    "\u0002\u0002\u00bc\u001b\u0003\u0002\u0002\u0002\u00bd\u00bf\u00054",
    "\u001b\u0002\u00be\u00bd\u0003\u0002\u0002\u0002\u00bf\u00c2\u0003\u0002",
    "\u0002\u0002\u00c0\u00be\u0003\u0002\u0002\u0002\u00c0\u00c1\u0003\u0002",
    "\u0002\u0002\u00c1\u00c3\u0003\u0002\u0002\u0002\u00c2\u00c0\u0003\u0002",
    "\u0002\u0002\u00c3\u00c4\u0007#\u0002\u0002\u00c4\u00c5\u0007*\u0002",
    "\u0002\u00c5\u00ce\u0007\u0011\u0002\u0002\u00c6\u00cb\u0005\u001e\u0010",
    "\u0002\u00c7\u00c8\u0007\u0012\u0002\u0002\u00c8\u00ca\u0005\u001e\u0010",
    "\u0002\u00c9\u00c7\u0003\u0002\u0002\u0002\u00ca\u00cd\u0003\u0002\u0002",
    "\u0002\u00cb\u00c9\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002",
    "\u0002\u00cc\u00cf\u0003\u0002\u0002\u0002\u00cd\u00cb\u0003\u0002\u0002",
    "\u0002\u00ce\u00c6\u0003\u0002\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002",
    "\u0002\u00cf\u00d0\u0003\u0002\u0002\u0002\u00d0\u00d2\u0007\u0013\u0002",
    "\u0002\u00d1\u00d3\u0005 \u0011\u0002\u00d2\u00d1\u0003\u0002\u0002",
    "\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002\u00d3\u00ea\u0003\u0002\u0002",
    "\u0002\u00d4\u00d6\u00054\u001b\u0002\u00d5\u00d4\u0003\u0002\u0002",
    "\u0002\u00d6\u00d9\u0003\u0002\u0002\u0002\u00d7\u00d5\u0003\u0002\u0002",
    "\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002\u00d8\u00da\u0003\u0002\u0002",
    "\u0002\u00d9\u00d7\u0003\u0002\u0002\u0002\u00da\u00db\u0007$\u0002",
    "\u0002\u00db\u00dc\u0007*\u0002\u0002\u00dc\u00e5\u0007\u0011\u0002",
    "\u0002\u00dd\u00e2\u0005\u001e\u0010\u0002\u00de\u00df\u0007\u0012\u0002",
    "\u0002\u00df\u00e1\u0005\u001e\u0010\u0002\u00e0\u00de\u0003\u0002\u0002",
    "\u0002\u00e1\u00e4\u0003\u0002\u0002\u0002\u00e2\u00e0\u0003\u0002\u0002",
    "\u0002\u00e2\u00e3\u0003\u0002\u0002\u0002\u00e3\u00e6\u0003\u0002\u0002",
    "\u0002\u00e4\u00e2\u0003\u0002\u0002\u0002\u00e5\u00dd\u0003\u0002\u0002",
    "\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6\u00e7\u0003\u0002\u0002",
    "\u0002\u00e7\u00e8\u0007\u0013\u0002\u0002\u00e8\u00ea\u0005 \u0011",
    "\u0002\u00e9\u00c0\u0003\u0002\u0002\u0002\u00e9\u00d7\u0003\u0002\u0002",
    "\u0002\u00ea\u001d\u0003\u0002\u0002\u0002\u00eb\u00ed\u00054\u001b",
    "\u0002\u00ec\u00eb\u0003\u0002\u0002\u0002\u00ed\u00f0\u0003\u0002\u0002",
    "\u0002\u00ee\u00ec\u0003\u0002\u0002\u0002\u00ee\u00ef\u0003\u0002\u0002",
    "\u0002\u00ef\u00f1\u0003\u0002\u0002\u0002\u00f0\u00ee\u0003\u0002\u0002",
    "\u0002\u00f1\u00f2\u0007*\u0002\u0002\u00f2\u00f3\u0007\n\u0002\u0002",
    "\u00f3\u00f4\u0005\u0014\u000b\u0002\u00f4\u001f\u0003\u0002\u0002\u0002",
    "\u00f5\u00f9\u0007\n\u0002\u0002\u00f6\u00f8\u00054\u001b\u0002\u00f7",
    "\u00f6\u0003\u0002\u0002\u0002\u00f8\u00fb\u0003\u0002\u0002\u0002\u00f9",
    "\u00f7\u0003\u0002\u0002\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002\u00fa",
    "\u00fc\u0003\u0002\u0002\u0002\u00fb\u00f9\u0003\u0002\u0002\u0002\u00fc",
    "\u00fd\u0005\u0014\u000b\u0002\u00fd!\u0003\u0002\u0002\u0002\u00fe",
    "\u0100\u00054\u001b\u0002\u00ff\u00fe\u0003\u0002\u0002\u0002\u0100",
    "\u0103\u0003\u0002\u0002\u0002\u0101\u00ff\u0003\u0002\u0002\u0002\u0101",
    "\u0102\u0003\u0002\u0002\u0002\u0102\u0104\u0003\u0002\u0002\u0002\u0103",
    "\u0101\u0003\u0002\u0002\u0002\u0104\u0105\u0005$\u0013\u0002\u0105",
    "\u0106\u0007*\u0002\u0002\u0106\u0108\u0007\u0007\u0002\u0002\u0107",
    "\u0109\u0005&\u0014\u0002\u0108\u0107\u0003\u0002\u0002\u0002\u0109",
    "\u010a\u0003\u0002\u0002\u0002\u010a\u0108\u0003\u0002\u0002\u0002\u010a",
    "\u010b\u0003\u0002\u0002\u0002\u010b\u010c\u0003\u0002\u0002\u0002\u010c",
    "\u010d\u0007\b\u0002\u0002\u010d#\u0003\u0002\u0002\u0002\u010e\u010f",
    "\t\u0003\u0002\u0002\u010f%\u0003\u0002\u0002\u0002\u0110\u0112\u0005",
    "4\u001b\u0002\u0111\u0110\u0003\u0002\u0002\u0002\u0112\u0115\u0003",
    "\u0002\u0002\u0002\u0113\u0111\u0003\u0002\u0002\u0002\u0113\u0114\u0003",
    "\u0002\u0002\u0002\u0114\u0116\u0003\u0002\u0002\u0002\u0115\u0113\u0003",
    "\u0002\u0002\u0002\u0116\u0117\u0007*\u0002\u0002\u0117\'\u0003\u0002",
    "\u0002\u0002\u0118\u011a\u00054\u001b\u0002\u0119\u0118\u0003\u0002",
    "\u0002\u0002\u011a\u011d\u0003\u0002\u0002\u0002\u011b\u0119\u0003\u0002",
    "\u0002\u0002\u011b\u011c\u0003\u0002\u0002\u0002\u011c\u011e\u0003\u0002",
    "\u0002\u0002\u011d\u011b\u0003\u0002\u0002\u0002\u011e\u011f\u0007\u001b",
    "\u0002\u0002\u011f\u0120\u0007*\u0002\u0002\u0120\u0121\u0007\n\u0002",
    "\u0002\u0121\u0122\u0005\u0016\f\u0002\u0122)\u0003\u0002\u0002\u0002",
    "\u0123\u0125\u00054\u001b\u0002\u0124\u0123\u0003\u0002\u0002\u0002",
    "\u0125\u0128\u0003\u0002\u0002\u0002\u0126\u0124\u0003\u0002\u0002\u0002",
    "\u0126\u0127\u0003\u0002\u0002\u0002\u0127\u0129\u0003\u0002\u0002\u0002",
    "\u0128\u0126\u0003\u0002\u0002\u0002\u0129\u012b\u0007\u001c\u0002\u0002",
    "\u012a\u012c\u0007*\u0002\u0002\u012b\u012a\u0003\u0002\u0002\u0002",
    "\u012b\u012c\u0003\u0002\u0002\u0002\u012c\u012d\u0003\u0002\u0002\u0002",
    "\u012d\u0131\u0007\u0007\u0002\u0002\u012e\u0130\u0005,\u0017\u0002",
    "\u012f\u012e\u0003\u0002\u0002\u0002\u0130\u0133\u0003\u0002\u0002\u0002",
    "\u0131\u012f\u0003\u0002\u0002\u0002\u0131\u0132\u0003\u0002\u0002\u0002",
    "\u0132\u0134\u0003\u0002\u0002\u0002\u0133\u0131\u0003\u0002\u0002\u0002",
    "\u0134\u0135\u0007\b\u0002\u0002\u0135+\u0003\u0002\u0002\u0002\u0136",
    "\u013a\u0005.\u0018\u0002\u0137\u013a\u00050\u0019\u0002\u0138\u013a",
    "\u00052\u001a\u0002\u0139\u0136\u0003\u0002\u0002\u0002\u0139\u0137",
    "\u0003\u0002\u0002\u0002\u0139\u0138\u0003\u0002\u0002\u0002\u013a-",
    "\u0003\u0002\u0002\u0002\u013b\u013d\u00054\u001b\u0002\u013c\u013b",
    "\u0003\u0002\u0002\u0002\u013d\u0140\u0003\u0002\u0002\u0002\u013e\u013c",
    "\u0003\u0002\u0002\u0002\u013e\u013f\u0003\u0002\u0002\u0002\u013f\u0141",
    "\u0003\u0002\u0002\u0002\u0140\u013e\u0003\u0002\u0002\u0002\u0141\u0142",
    "\u0007*\u0002\u0002\u0142\u0143\u0007\n\u0002\u0002\u0143\u0144\u0007",
    "\u000b\u0002\u0002\u0144\u0145\u0005D#\u0002\u0145\u0146\u0007\f\u0002",
    "\u0002\u0146/\u0003\u0002\u0002\u0002\u0147\u0149\u00054\u001b\u0002",
    "\u0148\u0147\u0003\u0002\u0002\u0002\u0149\u014c\u0003\u0002\u0002\u0002",
    "\u014a\u0148\u0003\u0002\u0002\u0002\u014a\u014b\u0003\u0002\u0002\u0002",
    "\u014b\u014d\u0003\u0002\u0002\u0002\u014c\u014a\u0003\u0002\u0002\u0002",
    "\u014d\u014e\u0007*\u0002\u0002\u014e\u014f\u0007\n\u0002\u0002\u014f",
    "\u0150\u0005D#\u0002\u01501\u0003\u0002\u0002\u0002\u0151\u0153\u0005",
    "4\u001b\u0002\u0152\u0151\u0003\u0002\u0002\u0002\u0153\u0156\u0003",
    "\u0002\u0002\u0002\u0154\u0152\u0003\u0002\u0002\u0002\u0154\u0155\u0003",
    "\u0002\u0002\u0002\u0155\u0157\u0003\u0002\u0002\u0002\u0156\u0154\u0003",
    "\u0002\u0002\u0002\u0157\u0158\u0007#\u0002\u0002\u0158\u0159\u0007",
    "*\u0002\u0002\u0159\u0162\u0007\u0011\u0002\u0002\u015a\u015f\u0005",
    "\u001e\u0010\u0002\u015b\u015c\u0007\u0012\u0002\u0002\u015c\u015e\u0005",
    "\u001e\u0010\u0002\u015d\u015b\u0003\u0002\u0002\u0002\u015e\u0161\u0003",
    "\u0002\u0002\u0002\u015f\u015d\u0003\u0002\u0002\u0002\u015f\u0160\u0003",
    "\u0002\u0002\u0002\u0160\u0163\u0003\u0002\u0002\u0002\u0161\u015f\u0003",
    "\u0002\u0002\u0002\u0162\u015a\u0003\u0002\u0002\u0002\u0162\u0163\u0003",
    "\u0002\u0002\u0002\u0163\u0164\u0003\u0002\u0002\u0002\u0164\u0166\u0007",
    "\u0013\u0002\u0002\u0165\u0167\u0005 \u0011\u0002\u0166\u0165\u0003",
    "\u0002\u0002\u0002\u0166\u0167\u0003\u0002\u0002\u0002\u0167\u017e\u0003",
    "\u0002\u0002\u0002\u0168\u016a\u00054\u001b\u0002\u0169\u0168\u0003",
    "\u0002\u0002\u0002\u016a\u016d\u0003\u0002\u0002\u0002\u016b\u0169\u0003",
    "\u0002\u0002\u0002\u016b\u016c\u0003\u0002\u0002\u0002\u016c\u016e\u0003",
    "\u0002\u0002\u0002\u016d\u016b\u0003\u0002\u0002\u0002\u016e\u016f\u0007",
    "$\u0002\u0002\u016f\u0170\u0007*\u0002\u0002\u0170\u0179\u0007\u0011",
    "\u0002\u0002\u0171\u0176\u0005\u001e\u0010\u0002\u0172\u0173\u0007\u0012",
    "\u0002\u0002\u0173\u0175\u0005\u001e\u0010\u0002\u0174\u0172\u0003\u0002",
    "\u0002\u0002\u0175\u0178\u0003\u0002\u0002\u0002\u0176\u0174\u0003\u0002",
    "\u0002\u0002\u0176\u0177\u0003\u0002\u0002\u0002\u0177\u017a\u0003\u0002",
    "\u0002\u0002\u0178\u0176\u0003\u0002\u0002\u0002\u0179\u0171\u0003\u0002",
    "\u0002\u0002\u0179\u017a\u0003\u0002\u0002\u0002\u017a\u017b\u0003\u0002",
    "\u0002\u0002\u017b\u017c\u0007\u0013\u0002\u0002\u017c\u017e\u0005 ",
    "\u0011\u0002\u017d\u0154\u0003\u0002\u0002\u0002\u017d\u016b\u0003\u0002",
    "\u0002\u0002\u017e3\u0003\u0002\u0002\u0002\u017f\u0180\u0007,\u0002",
    "\u0002\u0180\u0181\u0007\n\u0002\u0002\u0181\u0184\u00056\u001c\u0002",
    "\u0182\u0184\u0007-\u0002\u0002\u0183\u017f\u0003\u0002\u0002\u0002",
    "\u0183\u0182\u0003\u0002\u0002\u0002\u01845\u0003\u0002\u0002\u0002",
    "\u0185\u018e\u0007\u001d\u0002\u0002\u0186\u018e\u0007\u001e\u0002\u0002",
    "\u0187\u018e\u0007\u001f\u0002\u0002\u0188\u018e\u0007\'\u0002\u0002",
    "\u0189\u018e\u0007(\u0002\u0002\u018a\u018e\u00058\u001d\u0002\u018b",
    "\u018e\u0005<\u001f\u0002\u018c\u018e\u0005B\"\u0002\u018d\u0185\u0003",
    "\u0002\u0002\u0002\u018d\u0186\u0003\u0002\u0002\u0002\u018d\u0187\u0003",
    "\u0002\u0002\u0002\u018d\u0188\u0003\u0002\u0002\u0002\u018d\u0189\u0003",
    "\u0002\u0002\u0002\u018d\u018a\u0003\u0002\u0002\u0002\u018d\u018b\u0003",
    "\u0002\u0002\u0002\u018d\u018c\u0003\u0002\u0002\u0002\u018e7\u0003",
    "\u0002\u0002\u0002\u018f\u0190\u0007\u000b\u0002\u0002\u0190\u0195\u0005",
    ":\u001e\u0002\u0191\u0192\u0007\u0012\u0002\u0002\u0192\u0194\u0005",
    ":\u001e\u0002\u0193\u0191\u0003\u0002\u0002\u0002\u0194\u0197\u0003",
    "\u0002\u0002\u0002\u0195\u0193\u0003\u0002\u0002\u0002\u0195\u0196\u0003",
    "\u0002\u0002\u0002\u0196\u0198\u0003\u0002\u0002\u0002\u0197\u0195\u0003",
    "\u0002\u0002\u0002\u0198\u0199\u0007\f\u0002\u0002\u0199\u019d\u0003",
    "\u0002\u0002\u0002\u019a\u019b\u0007\u000b\u0002\u0002\u019b\u019d\u0007",
    "\f\u0002\u0002\u019c\u018f\u0003\u0002\u0002\u0002\u019c\u019a\u0003",
    "\u0002\u0002\u0002\u019d9\u0003\u0002\u0002\u0002\u019e\u019f\u0005",
    "6\u001c\u0002\u019f;\u0003\u0002\u0002\u0002\u01a0\u01a1\u0007\u0007",
    "\u0002\u0002\u01a1\u01a6\u0005> \u0002\u01a2\u01a3\u0007\u0012\u0002",
    "\u0002\u01a3\u01a5\u0005> \u0002\u01a4\u01a2\u0003\u0002\u0002\u0002",
    "\u01a5\u01a8\u0003\u0002\u0002\u0002\u01a6\u01a4\u0003\u0002\u0002\u0002",
    "\u01a6\u01a7\u0003\u0002\u0002\u0002\u01a7\u01a9\u0003\u0002\u0002\u0002",
    "\u01a8\u01a6\u0003\u0002\u0002\u0002\u01a9\u01aa\u0007\b\u0002\u0002",
    "\u01aa\u01ae\u0003\u0002\u0002\u0002\u01ab\u01ac\u0007\u0007\u0002\u0002",
    "\u01ac\u01ae\u0007\b\u0002\u0002\u01ad\u01a0\u0003\u0002\u0002\u0002",
    "\u01ad\u01ab\u0003\u0002\u0002\u0002\u01ae=\u0003\u0002\u0002\u0002",
    "\u01af\u01b0\u0005@!\u0002\u01b0\u01b1\u0007\n\u0002\u0002\u01b1\u01b2",
    "\u00056\u001c\u0002\u01b2?\u0003\u0002\u0002\u0002\u01b3\u01b4\t\u0004",
    "\u0002\u0002\u01b4A\u0003\u0002\u0002\u0002\u01b5\u01b8\u0007 \u0002",
    "\u0002\u01b6\u01b7\u0007!\u0002\u0002\u01b7\u01b9\u0007*\u0002\u0002",
    "\u01b8\u01b6\u0003\u0002\u0002\u0002\u01b9\u01ba\u0003\u0002\u0002\u0002",
    "\u01ba\u01b8\u0003\u0002\u0002\u0002\u01ba\u01bb\u0003\u0002\u0002\u0002",
    "\u01bbC\u0003\u0002\u0002\u0002\u01bc\u01bd\t\u0005\u0002\u0002\u01bd",
    "E\u0003\u0002\u0002\u00027GLRchlqw\u0081\u0086\u008a\u0094\u0099\u009d",
    "\u00a2\u00ad\u00b6\u00b9\u00c0\u00cb\u00ce\u00d2\u00d7\u00e2\u00e5\u00e9",
    "\u00ee\u00f9\u0101\u010a\u0113\u011b\u0126\u012b\u0131\u0139\u013e\u014a",
    "\u0154\u015f\u0162\u0166\u016b\u0176\u0179\u017d\u0183\u018d\u0195\u019c",
    "\u01a6\u01ad\u01ba"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'namespace'", "'include'", "'as'", "'type'", 
                     "'{'", "'}'", "'extends'", "':'", "'['", "']'", "'Boolean'", 
                     "'Date'", "'DateTime'", "'Decimal'", "'('", "','", 
                     "')'", "'Double'", "'Duration'", "'Integer'", "'String'", 
                     "'TimeOfDay'", "'enum'", "'flags'", "'typedef'", "'service'", 
                     "'true'", "'false'", "'null'", "'.'", "'/'", "'abstract'", 
                     "'action'", "'function'", "'key'", "'?'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, "ABSTRACT", "ACTION", 
                      "FUNCTION", "KEY", "NULLABLE", "NUMBER", "STRING", 
                      "EDM", "ID", "QID", "TID", "DOC_COMMENT", "LINE_COMMENT", 
                      "WS" ];

var ruleNames =  [ "model", "namespace", "include", "modelElement", "structuredType", 
                   "baseType", "typeMember", "property", "propertyName", 
                   "typeReference", "typeName", "builtInType", "edmType", 
                   "operation", "parameter", "returnType", "enumType", "enumKind", 
                   "enumMember", "typeDefinition", "service", "serviceMember", 
                   "entitySet", "singleton", "serviceOperation", "annotation", 
                   "value", "arr", "item", "obj", "pair", "name", "path", 
                   "qualifiedName" ];

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
rsdlParser.T__22 = 23;
rsdlParser.T__23 = 24;
rsdlParser.T__24 = 25;
rsdlParser.T__25 = 26;
rsdlParser.T__26 = 27;
rsdlParser.T__27 = 28;
rsdlParser.T__28 = 29;
rsdlParser.T__29 = 30;
rsdlParser.T__30 = 31;
rsdlParser.ABSTRACT = 32;
rsdlParser.ACTION = 33;
rsdlParser.FUNCTION = 34;
rsdlParser.KEY = 35;
rsdlParser.NULLABLE = 36;
rsdlParser.NUMBER = 37;
rsdlParser.STRING = 38;
rsdlParser.EDM = 39;
rsdlParser.ID = 40;
rsdlParser.QID = 41;
rsdlParser.TID = 42;
rsdlParser.DOC_COMMENT = 43;
rsdlParser.LINE_COMMENT = 44;
rsdlParser.WS = 45;

rsdlParser.RULE_model = 0;
rsdlParser.RULE_namespace = 1;
rsdlParser.RULE_include = 2;
rsdlParser.RULE_modelElement = 3;
rsdlParser.RULE_structuredType = 4;
rsdlParser.RULE_baseType = 5;
rsdlParser.RULE_typeMember = 6;
rsdlParser.RULE_property = 7;
rsdlParser.RULE_propertyName = 8;
rsdlParser.RULE_typeReference = 9;
rsdlParser.RULE_typeName = 10;
rsdlParser.RULE_builtInType = 11;
rsdlParser.RULE_edmType = 12;
rsdlParser.RULE_operation = 13;
rsdlParser.RULE_parameter = 14;
rsdlParser.RULE_returnType = 15;
rsdlParser.RULE_enumType = 16;
rsdlParser.RULE_enumKind = 17;
rsdlParser.RULE_enumMember = 18;
rsdlParser.RULE_typeDefinition = 19;
rsdlParser.RULE_service = 20;
rsdlParser.RULE_serviceMember = 21;
rsdlParser.RULE_entitySet = 22;
rsdlParser.RULE_singleton = 23;
rsdlParser.RULE_serviceOperation = 24;
rsdlParser.RULE_annotation = 25;
rsdlParser.RULE_value = 26;
rsdlParser.RULE_arr = 27;
rsdlParser.RULE_item = 28;
rsdlParser.RULE_obj = 29;
rsdlParser.RULE_pair = 30;
rsdlParser.RULE_name = 31;
rsdlParser.RULE_path = 32;
rsdlParser.RULE_qualifiedName = 33;


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
        this.state = 69;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.T__0) {
            this.state = 68;
            this.namespace();
        }

        this.state = 74;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__1) {
            this.state = 71;
            this.include();
            this.state = 76;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 80;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rsdlParser.T__3) | (1 << rsdlParser.T__22) | (1 << rsdlParser.T__23) | (1 << rsdlParser.T__24) | (1 << rsdlParser.T__25))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (rsdlParser.ABSTRACT - 32)) | (1 << (rsdlParser.TID - 32)) | (1 << (rsdlParser.DOC_COMMENT - 32)))) !== 0)) {
            this.state = 77;
            this.modelElement();
            this.state = 82;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 83;
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
        this.state = 85;
        this.match(rsdlParser.T__0);
        this.state = 86;
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

IncludeContext.prototype.STRING = function() {
    return this.getToken(rsdlParser.STRING, 0);
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
    this.enterRule(localctx, 4, rsdlParser.RULE_include);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        this.match(rsdlParser.T__1);
        this.state = 89;
        this.match(rsdlParser.STRING);
        this.state = 90;
        this.match(rsdlParser.T__2);
        this.state = 91;
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

ModelElementContext.prototype.typeDefinition = function() {
    return this.getTypedRuleContext(TypeDefinitionContext,0);
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
    this.enterRule(localctx, 6, rsdlParser.RULE_modelElement);
    try {
        this.state = 97;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 93;
            this.structuredType();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 94;
            this.enumType();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 95;
            this.typeDefinition();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 96;
            this.service();
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

StructuredTypeContext.prototype.annotation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnnotationContext);
    } else {
        return this.getTypedRuleContext(AnnotationContext,i);
    }
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
    this.enterRule(localctx, 8, rsdlParser.RULE_structuredType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.TID || _la===rsdlParser.DOC_COMMENT) {
            this.state = 99;
            this.annotation();
            this.state = 104;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 106;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.ABSTRACT) {
            this.state = 105;
            this.match(rsdlParser.ABSTRACT);
        }

        this.state = 108;
        this.match(rsdlParser.T__3);
        this.state = 109;
        this.match(rsdlParser.ID);
        this.state = 111;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.T__6) {
            this.state = 110;
            this.baseType();
        }

        this.state = 113;
        this.match(rsdlParser.T__4);
        this.state = 117;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (rsdlParser.ACTION - 33)) | (1 << (rsdlParser.FUNCTION - 33)) | (1 << (rsdlParser.KEY - 33)) | (1 << (rsdlParser.ID - 33)) | (1 << (rsdlParser.TID - 33)) | (1 << (rsdlParser.DOC_COMMENT - 33)))) !== 0)) {
            this.state = 114;
            this.typeMember();
            this.state = 119;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 120;
        this.match(rsdlParser.T__5);
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
    this.enterRule(localctx, 10, rsdlParser.RULE_baseType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.match(rsdlParser.T__6);
        this.state = 123;
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
        this.state = 127;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 125;
            this.property();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 126;
            this.operation();
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

PropertyContext.prototype.propertyName = function() {
    return this.getTypedRuleContext(PropertyNameContext,0);
};

PropertyContext.prototype.typeReference = function() {
    return this.getTypedRuleContext(TypeReferenceContext,0);
};

PropertyContext.prototype.annotation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnnotationContext);
    } else {
        return this.getTypedRuleContext(AnnotationContext,i);
    }
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
        this.state = 132;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.TID || _la===rsdlParser.DOC_COMMENT) {
            this.state = 129;
            this.annotation();
            this.state = 134;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 136;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        if(la_===1) {
            this.state = 135;
            this.match(rsdlParser.KEY);

        }
        this.state = 138;
        this.propertyName();
        this.state = 139;
        this.match(rsdlParser.T__7);
        this.state = 140;
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


function PropertyNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_propertyName;
    return this;
}

PropertyNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyNameContext.prototype.constructor = PropertyNameContext;

PropertyNameContext.prototype.ID = function() {
    return this.getToken(rsdlParser.ID, 0);
};

PropertyNameContext.prototype.KEY = function() {
    return this.getToken(rsdlParser.KEY, 0);
};

PropertyNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterPropertyName(this);
	}
};

PropertyNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitPropertyName(this);
	}
};




rsdlParser.PropertyNameContext = PropertyNameContext;

rsdlParser.prototype.propertyName = function() {

    var localctx = new PropertyNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, rsdlParser.RULE_propertyName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        _la = this._input.LA(1);
        if(!(_la===rsdlParser.KEY || _la===rsdlParser.ID)) {
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
        this.state = 155;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rsdlParser.T__10:
        case rsdlParser.T__11:
        case rsdlParser.T__12:
        case rsdlParser.T__13:
        case rsdlParser.T__17:
        case rsdlParser.T__18:
        case rsdlParser.T__19:
        case rsdlParser.T__20:
        case rsdlParser.T__21:
        case rsdlParser.EDM:
        case rsdlParser.ID:
        case rsdlParser.QID:
            localctx = new SingleContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 144;
            this.typeName();
            this.state = 146;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.NULLABLE) {
                this.state = 145;
                this.match(rsdlParser.NULLABLE);
            }

            break;
        case rsdlParser.T__8:
            localctx = new ArrayContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 148;
            this.match(rsdlParser.T__8);
            this.state = 149;
            this.typeName();
            this.state = 151;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.NULLABLE) {
                this.state = 150;
                this.match(rsdlParser.NULLABLE);
            }

            this.state = 153;
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

TypeNameContext.prototype.edmType = function() {
    return this.getTypedRuleContext(EdmTypeContext,0);
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
        this.state = 160;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rsdlParser.T__10:
        case rsdlParser.T__11:
        case rsdlParser.T__12:
        case rsdlParser.T__13:
        case rsdlParser.T__17:
        case rsdlParser.T__18:
        case rsdlParser.T__19:
        case rsdlParser.T__20:
        case rsdlParser.T__21:
            this.enterOuterAlt(localctx, 1);
            this.state = 157;
            this.builtInType();
            break;
        case rsdlParser.EDM:
            this.enterOuterAlt(localctx, 2);
            this.state = 158;
            this.edmType();
            break;
        case rsdlParser.ID:
        case rsdlParser.QID:
            this.enterOuterAlt(localctx, 3);
            this.state = 159;
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

BuiltInTypeContext.prototype.NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(rsdlParser.NUMBER);
    } else {
        return this.getToken(rsdlParser.NUMBER, i);
    }
};


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
        this.state = 183;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rsdlParser.T__10:
            this.enterOuterAlt(localctx, 1);
            this.state = 162;
            this.match(rsdlParser.T__10);
            break;
        case rsdlParser.T__11:
            this.enterOuterAlt(localctx, 2);
            this.state = 163;
            this.match(rsdlParser.T__11);
            break;
        case rsdlParser.T__12:
            this.enterOuterAlt(localctx, 3);
            this.state = 164;
            this.match(rsdlParser.T__12);
            break;
        case rsdlParser.T__13:
            this.enterOuterAlt(localctx, 4);
            this.state = 165;
            this.match(rsdlParser.T__13);
            this.state = 171;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.T__14) {
                this.state = 166;
                this.match(rsdlParser.T__14);
                this.state = 167;
                this.match(rsdlParser.NUMBER);
                this.state = 168;
                this.match(rsdlParser.T__15);
                this.state = 169;
                this.match(rsdlParser.NUMBER);
                this.state = 170;
                this.match(rsdlParser.T__16);
            }

            break;
        case rsdlParser.T__17:
            this.enterOuterAlt(localctx, 5);
            this.state = 173;
            this.match(rsdlParser.T__17);
            break;
        case rsdlParser.T__18:
            this.enterOuterAlt(localctx, 6);
            this.state = 174;
            this.match(rsdlParser.T__18);
            break;
        case rsdlParser.T__19:
            this.enterOuterAlt(localctx, 7);
            this.state = 175;
            this.match(rsdlParser.T__19);
            break;
        case rsdlParser.T__20:
            this.enterOuterAlt(localctx, 8);
            this.state = 176;
            this.match(rsdlParser.T__20);
            this.state = 180;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.T__14) {
                this.state = 177;
                this.match(rsdlParser.T__14);
                this.state = 178;
                this.match(rsdlParser.NUMBER);
                this.state = 179;
                this.match(rsdlParser.T__16);
            }

            break;
        case rsdlParser.T__21:
            this.enterOuterAlt(localctx, 9);
            this.state = 182;
            this.match(rsdlParser.T__21);
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


function EdmTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_edmType;
    return this;
}

EdmTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EdmTypeContext.prototype.constructor = EdmTypeContext;

EdmTypeContext.prototype.EDM = function() {
    return this.getToken(rsdlParser.EDM, 0);
};

EdmTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterEdmType(this);
	}
};

EdmTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitEdmType(this);
	}
};




rsdlParser.EdmTypeContext = EdmTypeContext;

rsdlParser.prototype.edmType = function() {

    var localctx = new EdmTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, rsdlParser.RULE_edmType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 185;
        this.match(rsdlParser.EDM);
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

OperationContext.prototype.annotation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnnotationContext);
    } else {
        return this.getTypedRuleContext(AnnotationContext,i);
    }
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
    this.enterRule(localctx, 26, rsdlParser.RULE_operation);
    var _la = 0; // Token type
    try {
        this.state = 231;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 190;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rsdlParser.TID || _la===rsdlParser.DOC_COMMENT) {
                this.state = 187;
                this.annotation();
                this.state = 192;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 193;
            this.match(rsdlParser.ACTION);
            this.state = 194;
            this.match(rsdlParser.ID);
            this.state = 195;
            this.match(rsdlParser.T__14);
            this.state = 204;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (rsdlParser.ID - 40)) | (1 << (rsdlParser.TID - 40)) | (1 << (rsdlParser.DOC_COMMENT - 40)))) !== 0)) {
                this.state = 196;
                this.parameter();
                this.state = 201;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===rsdlParser.T__15) {
                    this.state = 197;
                    this.match(rsdlParser.T__15);
                    this.state = 198;
                    this.parameter();
                    this.state = 203;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }

            this.state = 206;
            this.match(rsdlParser.T__16);
            this.state = 208;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.T__7) {
                this.state = 207;
                this.returnType();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 213;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rsdlParser.TID || _la===rsdlParser.DOC_COMMENT) {
                this.state = 210;
                this.annotation();
                this.state = 215;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 216;
            this.match(rsdlParser.FUNCTION);
            this.state = 217;
            this.match(rsdlParser.ID);
            this.state = 218;
            this.match(rsdlParser.T__14);
            this.state = 227;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (rsdlParser.ID - 40)) | (1 << (rsdlParser.TID - 40)) | (1 << (rsdlParser.DOC_COMMENT - 40)))) !== 0)) {
                this.state = 219;
                this.parameter();
                this.state = 224;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===rsdlParser.T__15) {
                    this.state = 220;
                    this.match(rsdlParser.T__15);
                    this.state = 221;
                    this.parameter();
                    this.state = 226;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }

            this.state = 229;
            this.match(rsdlParser.T__16);
            this.state = 230;
            this.returnType();
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

ParameterContext.prototype.annotation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnnotationContext);
    } else {
        return this.getTypedRuleContext(AnnotationContext,i);
    }
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
    this.enterRule(localctx, 28, rsdlParser.RULE_parameter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.TID || _la===rsdlParser.DOC_COMMENT) {
            this.state = 233;
            this.annotation();
            this.state = 238;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 239;
        this.match(rsdlParser.ID);
        this.state = 240;
        this.match(rsdlParser.T__7);
        this.state = 241;
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

ReturnTypeContext.prototype.annotation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnnotationContext);
    } else {
        return this.getTypedRuleContext(AnnotationContext,i);
    }
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
    this.enterRule(localctx, 30, rsdlParser.RULE_returnType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        this.match(rsdlParser.T__7);
        this.state = 247;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.TID || _la===rsdlParser.DOC_COMMENT) {
            this.state = 244;
            this.annotation();
            this.state = 249;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 250;
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

EnumTypeContext.prototype.enumKind = function() {
    return this.getTypedRuleContext(EnumKindContext,0);
};

EnumTypeContext.prototype.ID = function() {
    return this.getToken(rsdlParser.ID, 0);
};

EnumTypeContext.prototype.annotation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnnotationContext);
    } else {
        return this.getTypedRuleContext(AnnotationContext,i);
    }
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
    this.enterRule(localctx, 32, rsdlParser.RULE_enumType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.TID || _la===rsdlParser.DOC_COMMENT) {
            this.state = 252;
            this.annotation();
            this.state = 257;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 258;
        this.enumKind();
        this.state = 259;
        this.match(rsdlParser.ID);
        this.state = 260;
        this.match(rsdlParser.T__4);
        this.state = 262; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 261;
            this.enumMember();
            this.state = 264; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (rsdlParser.ID - 40)) | (1 << (rsdlParser.TID - 40)) | (1 << (rsdlParser.DOC_COMMENT - 40)))) !== 0));
        this.state = 266;
        this.match(rsdlParser.T__5);
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


function EnumKindContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_enumKind;
    return this;
}

EnumKindContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumKindContext.prototype.constructor = EnumKindContext;


EnumKindContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterEnumKind(this);
	}
};

EnumKindContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitEnumKind(this);
	}
};




rsdlParser.EnumKindContext = EnumKindContext;

rsdlParser.prototype.enumKind = function() {

    var localctx = new EnumKindContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, rsdlParser.RULE_enumKind);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 268;
        _la = this._input.LA(1);
        if(!(_la===rsdlParser.T__22 || _la===rsdlParser.T__23)) {
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

EnumMemberContext.prototype.annotation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnnotationContext);
    } else {
        return this.getTypedRuleContext(AnnotationContext,i);
    }
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
    this.enterRule(localctx, 36, rsdlParser.RULE_enumMember);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.TID || _la===rsdlParser.DOC_COMMENT) {
            this.state = 270;
            this.annotation();
            this.state = 275;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 276;
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


function TypeDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_typeDefinition;
    return this;
}

TypeDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeDefinitionContext.prototype.constructor = TypeDefinitionContext;

TypeDefinitionContext.prototype.ID = function() {
    return this.getToken(rsdlParser.ID, 0);
};

TypeDefinitionContext.prototype.typeName = function() {
    return this.getTypedRuleContext(TypeNameContext,0);
};

TypeDefinitionContext.prototype.annotation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnnotationContext);
    } else {
        return this.getTypedRuleContext(AnnotationContext,i);
    }
};

TypeDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterTypeDefinition(this);
	}
};

TypeDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitTypeDefinition(this);
	}
};




rsdlParser.TypeDefinitionContext = TypeDefinitionContext;

rsdlParser.prototype.typeDefinition = function() {

    var localctx = new TypeDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, rsdlParser.RULE_typeDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 281;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.TID || _la===rsdlParser.DOC_COMMENT) {
            this.state = 278;
            this.annotation();
            this.state = 283;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 284;
        this.match(rsdlParser.T__24);
        this.state = 285;
        this.match(rsdlParser.ID);
        this.state = 286;
        this.match(rsdlParser.T__7);
        this.state = 287;
        this.typeName();
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

ServiceContext.prototype.annotation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnnotationContext);
    } else {
        return this.getTypedRuleContext(AnnotationContext,i);
    }
};

ServiceContext.prototype.ID = function() {
    return this.getToken(rsdlParser.ID, 0);
};

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
    this.enterRule(localctx, 40, rsdlParser.RULE_service);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 292;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.TID || _la===rsdlParser.DOC_COMMENT) {
            this.state = 289;
            this.annotation();
            this.state = 294;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 295;
        this.match(rsdlParser.T__25);
        this.state = 297;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.ID) {
            this.state = 296;
            this.match(rsdlParser.ID);
        }

        this.state = 299;
        this.match(rsdlParser.T__4);
        this.state = 303;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (rsdlParser.ACTION - 33)) | (1 << (rsdlParser.FUNCTION - 33)) | (1 << (rsdlParser.ID - 33)) | (1 << (rsdlParser.TID - 33)) | (1 << (rsdlParser.DOC_COMMENT - 33)))) !== 0)) {
            this.state = 300;
            this.serviceMember();
            this.state = 305;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 306;
        this.match(rsdlParser.T__5);
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
    this.enterRule(localctx, 42, rsdlParser.RULE_serviceMember);
    try {
        this.state = 311;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 308;
            this.entitySet();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 309;
            this.singleton();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 310;
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

EntitySetContext.prototype.annotation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnnotationContext);
    } else {
        return this.getTypedRuleContext(AnnotationContext,i);
    }
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
    this.enterRule(localctx, 44, rsdlParser.RULE_entitySet);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 316;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.TID || _la===rsdlParser.DOC_COMMENT) {
            this.state = 313;
            this.annotation();
            this.state = 318;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 319;
        this.match(rsdlParser.ID);
        this.state = 320;
        this.match(rsdlParser.T__7);
        this.state = 321;
        this.match(rsdlParser.T__8);
        this.state = 322;
        this.qualifiedName();
        this.state = 323;
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

SingletonContext.prototype.annotation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnnotationContext);
    } else {
        return this.getTypedRuleContext(AnnotationContext,i);
    }
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
    this.enterRule(localctx, 46, rsdlParser.RULE_singleton);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 328;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.TID || _la===rsdlParser.DOC_COMMENT) {
            this.state = 325;
            this.annotation();
            this.state = 330;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 331;
        this.match(rsdlParser.ID);
        this.state = 332;
        this.match(rsdlParser.T__7);
        this.state = 333;
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

ServiceOperationContext.prototype.ACTION = function() {
    return this.getToken(rsdlParser.ACTION, 0);
};

ServiceOperationContext.prototype.ID = function() {
    return this.getToken(rsdlParser.ID, 0);
};

ServiceOperationContext.prototype.annotation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnnotationContext);
    } else {
        return this.getTypedRuleContext(AnnotationContext,i);
    }
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

ServiceOperationContext.prototype.FUNCTION = function() {
    return this.getToken(rsdlParser.FUNCTION, 0);
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
    this.enterRule(localctx, 48, rsdlParser.RULE_serviceOperation);
    var _la = 0; // Token type
    try {
        this.state = 379;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 338;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rsdlParser.TID || _la===rsdlParser.DOC_COMMENT) {
                this.state = 335;
                this.annotation();
                this.state = 340;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 341;
            this.match(rsdlParser.ACTION);
            this.state = 342;
            this.match(rsdlParser.ID);
            this.state = 343;
            this.match(rsdlParser.T__14);
            this.state = 352;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (rsdlParser.ID - 40)) | (1 << (rsdlParser.TID - 40)) | (1 << (rsdlParser.DOC_COMMENT - 40)))) !== 0)) {
                this.state = 344;
                this.parameter();
                this.state = 349;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===rsdlParser.T__15) {
                    this.state = 345;
                    this.match(rsdlParser.T__15);
                    this.state = 346;
                    this.parameter();
                    this.state = 351;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }

            this.state = 354;
            this.match(rsdlParser.T__16);
            this.state = 356;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.T__7) {
                this.state = 355;
                this.returnType();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 361;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rsdlParser.TID || _la===rsdlParser.DOC_COMMENT) {
                this.state = 358;
                this.annotation();
                this.state = 363;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 364;
            this.match(rsdlParser.FUNCTION);
            this.state = 365;
            this.match(rsdlParser.ID);
            this.state = 366;
            this.match(rsdlParser.T__14);
            this.state = 375;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (rsdlParser.ID - 40)) | (1 << (rsdlParser.TID - 40)) | (1 << (rsdlParser.DOC_COMMENT - 40)))) !== 0)) {
                this.state = 367;
                this.parameter();
                this.state = 372;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===rsdlParser.T__15) {
                    this.state = 368;
                    this.match(rsdlParser.T__15);
                    this.state = 369;
                    this.parameter();
                    this.state = 374;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }

            this.state = 377;
            this.match(rsdlParser.T__16);
            this.state = 378;
            this.returnType();
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


function AnnotationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_annotation;
    return this;
}

AnnotationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnnotationContext.prototype.constructor = AnnotationContext;

AnnotationContext.prototype.TID = function() {
    return this.getToken(rsdlParser.TID, 0);
};

AnnotationContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

AnnotationContext.prototype.DOC_COMMENT = function() {
    return this.getToken(rsdlParser.DOC_COMMENT, 0);
};

AnnotationContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterAnnotation(this);
	}
};

AnnotationContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitAnnotation(this);
	}
};




rsdlParser.AnnotationContext = AnnotationContext;

rsdlParser.prototype.annotation = function() {

    var localctx = new AnnotationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, rsdlParser.RULE_annotation);
    try {
        this.state = 385;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rsdlParser.TID:
            this.enterOuterAlt(localctx, 1);
            this.state = 381;
            this.match(rsdlParser.TID);
            this.state = 382;
            this.match(rsdlParser.T__7);
            this.state = 383;
            this.value();
            break;
        case rsdlParser.DOC_COMMENT:
            this.enterOuterAlt(localctx, 2);
            this.state = 384;
            this.match(rsdlParser.DOC_COMMENT);
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


function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.NUMBER = function() {
    return this.getToken(rsdlParser.NUMBER, 0);
};

ValueContext.prototype.STRING = function() {
    return this.getToken(rsdlParser.STRING, 0);
};

ValueContext.prototype.arr = function() {
    return this.getTypedRuleContext(ArrContext,0);
};

ValueContext.prototype.obj = function() {
    return this.getTypedRuleContext(ObjContext,0);
};

ValueContext.prototype.path = function() {
    return this.getTypedRuleContext(PathContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitValue(this);
	}
};




rsdlParser.ValueContext = ValueContext;

rsdlParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, rsdlParser.RULE_value);
    try {
        this.state = 395;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rsdlParser.T__26:
            this.enterOuterAlt(localctx, 1);
            this.state = 387;
            this.match(rsdlParser.T__26);
            break;
        case rsdlParser.T__27:
            this.enterOuterAlt(localctx, 2);
            this.state = 388;
            this.match(rsdlParser.T__27);
            break;
        case rsdlParser.T__28:
            this.enterOuterAlt(localctx, 3);
            this.state = 389;
            this.match(rsdlParser.T__28);
            break;
        case rsdlParser.NUMBER:
            this.enterOuterAlt(localctx, 4);
            this.state = 390;
            this.match(rsdlParser.NUMBER);
            break;
        case rsdlParser.STRING:
            this.enterOuterAlt(localctx, 5);
            this.state = 391;
            this.match(rsdlParser.STRING);
            break;
        case rsdlParser.T__8:
            this.enterOuterAlt(localctx, 6);
            this.state = 392;
            this.arr();
            break;
        case rsdlParser.T__4:
            this.enterOuterAlt(localctx, 7);
            this.state = 393;
            this.obj();
            break;
        case rsdlParser.T__29:
            this.enterOuterAlt(localctx, 8);
            this.state = 394;
            this.path();
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


function ArrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_arr;
    return this;
}

ArrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrContext.prototype.constructor = ArrContext;

ArrContext.prototype.item = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ItemContext);
    } else {
        return this.getTypedRuleContext(ItemContext,i);
    }
};

ArrContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterArr(this);
	}
};

ArrContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitArr(this);
	}
};




rsdlParser.ArrContext = ArrContext;

rsdlParser.prototype.arr = function() {

    var localctx = new ArrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, rsdlParser.RULE_arr);
    var _la = 0; // Token type
    try {
        this.state = 410;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 397;
            this.match(rsdlParser.T__8);
            this.state = 398;
            this.item();
            this.state = 403;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rsdlParser.T__15) {
                this.state = 399;
                this.match(rsdlParser.T__15);
                this.state = 400;
                this.item();
                this.state = 405;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 406;
            this.match(rsdlParser.T__9);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 408;
            this.match(rsdlParser.T__8);
            this.state = 409;
            this.match(rsdlParser.T__9);
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


function ItemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_item;
    return this;
}

ItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ItemContext.prototype.constructor = ItemContext;

ItemContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

ItemContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterItem(this);
	}
};

ItemContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitItem(this);
	}
};




rsdlParser.ItemContext = ItemContext;

rsdlParser.prototype.item = function() {

    var localctx = new ItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, rsdlParser.RULE_item);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 412;
        this.value();
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


function ObjContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_obj;
    return this;
}

ObjContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjContext.prototype.constructor = ObjContext;

ObjContext.prototype.pair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PairContext);
    } else {
        return this.getTypedRuleContext(PairContext,i);
    }
};

ObjContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterObj(this);
	}
};

ObjContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitObj(this);
	}
};




rsdlParser.ObjContext = ObjContext;

rsdlParser.prototype.obj = function() {

    var localctx = new ObjContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, rsdlParser.RULE_obj);
    var _la = 0; // Token type
    try {
        this.state = 427;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 414;
            this.match(rsdlParser.T__4);
            this.state = 415;
            this.pair();
            this.state = 420;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rsdlParser.T__15) {
                this.state = 416;
                this.match(rsdlParser.T__15);
                this.state = 417;
                this.pair();
                this.state = 422;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 423;
            this.match(rsdlParser.T__5);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 425;
            this.match(rsdlParser.T__4);
            this.state = 426;
            this.match(rsdlParser.T__5);
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


function PairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_pair;
    return this;
}

PairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PairContext.prototype.constructor = PairContext;

PairContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

PairContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

PairContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterPair(this);
	}
};

PairContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitPair(this);
	}
};




rsdlParser.PairContext = PairContext;

rsdlParser.prototype.pair = function() {

    var localctx = new PairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, rsdlParser.RULE_pair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 429;
        this.name();
        this.state = 430;
        this.match(rsdlParser.T__7);
        this.state = 431;
        this.value();
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


function NameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_name;
    return this;
}

NameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameContext.prototype.constructor = NameContext;

NameContext.prototype.ID = function() {
    return this.getToken(rsdlParser.ID, 0);
};

NameContext.prototype.STRING = function() {
    return this.getToken(rsdlParser.STRING, 0);
};

NameContext.prototype.TID = function() {
    return this.getToken(rsdlParser.TID, 0);
};

NameContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterName(this);
	}
};

NameContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitName(this);
	}
};




rsdlParser.NameContext = NameContext;

rsdlParser.prototype.name = function() {

    var localctx = new NameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, rsdlParser.RULE_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 433;
        _la = this._input.LA(1);
        if(!(((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (rsdlParser.STRING - 38)) | (1 << (rsdlParser.ID - 38)) | (1 << (rsdlParser.TID - 38)))) !== 0))) {
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


function PathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rsdlParser.RULE_path;
    return this;
}

PathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PathContext.prototype.constructor = PathContext;

PathContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(rsdlParser.ID);
    } else {
        return this.getToken(rsdlParser.ID, i);
    }
};


PathContext.prototype.enterRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.enterPath(this);
	}
};

PathContext.prototype.exitRule = function(listener) {
    if(listener instanceof rsdlListener ) {
        listener.exitPath(this);
	}
};




rsdlParser.PathContext = PathContext;

rsdlParser.prototype.path = function() {

    var localctx = new PathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, rsdlParser.RULE_path);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 435;
        this.match(rsdlParser.T__29);
        this.state = 438; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 436;
            this.match(rsdlParser.T__30);
            this.state = 437;
            this.match(rsdlParser.ID);
            this.state = 440; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===rsdlParser.T__30);
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

QualifiedNameContext.prototype.QID = function() {
    return this.getToken(rsdlParser.QID, 0);
};

QualifiedNameContext.prototype.ID = function() {
    return this.getToken(rsdlParser.ID, 0);
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
    this.enterRule(localctx, 66, rsdlParser.RULE_qualifiedName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 442;
        _la = this._input.LA(1);
        if(!(_la===rsdlParser.ID || _la===rsdlParser.QID)) {
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


exports.rsdlParser = rsdlParser;
