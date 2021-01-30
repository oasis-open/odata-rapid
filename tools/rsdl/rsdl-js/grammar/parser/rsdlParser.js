// Generated from c:\git\odata-rapid\tools\rsdl\rsdl-js\grammar\rsdl.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var rsdlListener = require('./rsdlListener').rsdlListener;
var grammarFileName = "rsdl.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003(\u014d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0003\u0002\u0005\u0002@\n\u0002\u0003\u0002\u0007\u0002",
    "C\n\u0002\f\u0002\u000e\u0002F\u000b\u0002\u0003\u0002\u0007\u0002I",
    "\n\u0002\f\u0002\u000e\u0002L\u000b\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0007",
    "\u0004V\n\u0004\f\u0004\u000e\u0004Y\u000b\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006c\n\u0006\u0003\u0007\u0007\u0007f\n\u0007\f\u0007\u000e",
    "\u0007i\u000b\u0007\u0003\u0007\u0005\u0007l\n\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007q\n\u0007\u0003\u0007\u0003\u0007\u0007",
    "\u0007u\n\u0007\f\u0007\u000e\u0007x\u000b\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0005\b~\n\b\u0003\t\u0007\t\u0081\n\t\f\t\u000e\t",
    "\u0084\u000b\t\u0003\t\u0005\t\u0087\n\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0005\f\u0094\n\f\u0003\f\u0003\f\u0003\f\u0005\f\u0099\n\f\u0003",
    "\f\u0003\f\u0005\f\u009d\n\f\u0003\r\u0003\r\u0005\r\u00a1\n\r\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0007\u000f\u00ab\n\u000f\f\u000f\u000e\u000f\u00ae",
    "\u000b\u000f\u0005\u000f\u00b0\n\u000f\u0003\u000f\u0003\u000f\u0005",
    "\u000f\u00b4\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0007\u000f\u00bc\n\u000f\f\u000f\u000e\u000f",
    "\u00bf\u000b\u000f\u0005\u000f\u00c1\n\u000f\u0003\u000f\u0003\u000f",
    "\u0005\u000f\u00c5\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0007\u0012\u00cf",
    "\n\u0012\f\u0012\u000e\u0012\u00d2\u000b\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0007\u0012\u00d8\n\u0012\f\u0012\u000e\u0012",
    "\u00db\u000b\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0007\u0013\u00e0",
    "\n\u0013\f\u0013\u000e\u0013\u00e3\u000b\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0007\u0014\u00ea\n\u0014\f\u0014",
    "\u000e\u0014\u00ed\u000b\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0005\u0015\u00f4\n\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0018\u0005\u0018\u0101\n\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u0108",
    "\n\u0018\f\u0018\u000e\u0018\u010b\u000b\u0018\u0005\u0018\u010d\n\u0018",
    "\u0003\u0018\u0003\u0018\u0005\u0018\u0111\n\u0018\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0005",
    "\u001a\u0120\n\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0006\u001b",
    "\u0125\n\u001b\r\u001b\u000e\u001b\u0126\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0007\u001c\u012d\n\u001c\f\u001c\u000e\u001c\u0130",
    "\u000b\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c",
    "\u0136\n\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0007\u001e\u0140\n\u001e",
    "\f\u001e\u000e\u001e\u0143\u000b\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0005\u001e\u0149\n\u001e\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0002\u0002 \u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<\u0002\u0004\u0004",
    "\u0002\"\"&&\u0003\u0002\u000e\u0014\u0002\u015b\u0002?\u0003\u0002",
    "\u0002\u0002\u0004O\u0003\u0002\u0002\u0002\u0006R\u0003\u0002\u0002",
    "\u0002\bZ\u0003\u0002\u0002\u0002\nb\u0003\u0002\u0002\u0002\fg\u0003",
    "\u0002\u0002\u0002\u000e}\u0003\u0002\u0002\u0002\u0010\u0082\u0003",
    "\u0002\u0002\u0002\u0012\u008c\u0003\u0002\u0002\u0002\u0014\u008e\u0003",
    "\u0002\u0002\u0002\u0016\u009c\u0003\u0002\u0002\u0002\u0018\u00a0\u0003",
    "\u0002\u0002\u0002\u001a\u00a2\u0003\u0002\u0002\u0002\u001c\u00c4\u0003",
    "\u0002\u0002\u0002\u001e\u00c6\u0003\u0002\u0002\u0002 \u00ca\u0003",
    "\u0002\u0002\u0002\"\u00d0\u0003\u0002\u0002\u0002$\u00e1\u0003\u0002",
    "\u0002\u0002&\u00e6\u0003\u0002\u0002\u0002(\u00f3\u0003\u0002\u0002",
    "\u0002*\u00f5\u0003\u0002\u0002\u0002,\u00fb\u0003\u0002\u0002\u0002",
    ".\u0100\u0003\u0002\u0002\u00020\u0112\u0003\u0002\u0002\u00022\u011f",
    "\u0003\u0002\u0002\u00024\u0121\u0003\u0002\u0002\u00026\u0135\u0003",
    "\u0002\u0002\u00028\u0137\u0003\u0002\u0002\u0002:\u0148\u0003\u0002",
    "\u0002\u0002<\u014a\u0003\u0002\u0002\u0002>@\u0005\u0004\u0003\u0002",
    "?>\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@D\u0003\u0002\u0002",
    "\u0002AC\u0005\b\u0005\u0002BA\u0003\u0002\u0002\u0002CF\u0003\u0002",
    "\u0002\u0002DB\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002EJ\u0003",
    "\u0002\u0002\u0002FD\u0003\u0002\u0002\u0002GI\u0005\n\u0006\u0002H",
    "G\u0003\u0002\u0002\u0002IL\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002",
    "\u0002JK\u0003\u0002\u0002\u0002KM\u0003\u0002\u0002\u0002LJ\u0003\u0002",
    "\u0002\u0002MN\u0007\u0002\u0002\u0003N\u0003\u0003\u0002\u0002\u0002",
    "OP\u0007\u0003\u0002\u0002PQ\u0005\u0006\u0004\u0002Q\u0005\u0003\u0002",
    "\u0002\u0002RW\u0007&\u0002\u0002ST\u0007\u0004\u0002\u0002TV\u0007",
    "&\u0002\u0002US\u0003\u0002\u0002\u0002VY\u0003\u0002\u0002\u0002WU",
    "\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002X\u0007\u0003\u0002",
    "\u0002\u0002YW\u0003\u0002\u0002\u0002Z[\u0007\u0005\u0002\u0002[\\",
    "\u0007%\u0002\u0002\\]\u0007\u0006\u0002\u0002]^\u0007&\u0002\u0002",
    "^\t\u0003\u0002\u0002\u0002_c\u0005\f\u0007\u0002`c\u0005\"\u0012\u0002",
    "ac\u0005&\u0014\u0002b_\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002",
    "\u0002ba\u0003\u0002\u0002\u0002c\u000b\u0003\u0002\u0002\u0002df\u0005",
    "0\u0019\u0002ed\u0003\u0002\u0002\u0002fi\u0003\u0002\u0002\u0002ge",
    "\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002\u0002hk\u0003\u0002\u0002",
    "\u0002ig\u0003\u0002\u0002\u0002jl\u0007\u001f\u0002\u0002kj\u0003\u0002",
    "\u0002\u0002kl\u0003\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002mn\u0007",
    "\u0007\u0002\u0002np\u0007&\u0002\u0002oq\u0005\u0014\u000b\u0002po",
    "\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002",
    "\u0002rv\u0007\b\u0002\u0002su\u0005\u000e\b\u0002ts\u0003\u0002\u0002",
    "\u0002ux\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002",
    "\u0002\u0002wy\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002yz\u0007",
    "\t\u0002\u0002z\r\u0003\u0002\u0002\u0002{~\u0005\u0010\t\u0002|~\u0005",
    "\u001c\u000f\u0002}{\u0003\u0002\u0002\u0002}|\u0003\u0002\u0002\u0002",
    "~\u000f\u0003\u0002\u0002\u0002\u007f\u0081\u00050\u0019\u0002\u0080",
    "\u007f\u0003\u0002\u0002\u0002\u0081\u0084\u0003\u0002\u0002\u0002\u0082",
    "\u0080\u0003\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083",
    "\u0086\u0003\u0002\u0002\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0085",
    "\u0087\u0007\"\u0002\u0002\u0086\u0085\u0003\u0002\u0002\u0002\u0086",
    "\u0087\u0003\u0002\u0002\u0002\u0087\u0088\u0003\u0002\u0002\u0002\u0088",
    "\u0089\u0005\u0012\n\u0002\u0089\u008a\u0007\n\u0002\u0002\u008a\u008b",
    "\u0005\u0016\f\u0002\u008b\u0011\u0003\u0002\u0002\u0002\u008c\u008d",
    "\t\u0002\u0002\u0002\u008d\u0013\u0003\u0002\u0002\u0002\u008e\u008f",
    "\u0007\u000b\u0002\u0002\u008f\u0090\u0007&\u0002\u0002\u0090\u0015",
    "\u0003\u0002\u0002\u0002\u0091\u0093\u0005\u0018\r\u0002\u0092\u0094",
    "\u0007#\u0002\u0002\u0093\u0092\u0003\u0002\u0002\u0002\u0093\u0094",
    "\u0003\u0002\u0002\u0002\u0094\u009d\u0003\u0002\u0002\u0002\u0095\u0096",
    "\u0007\f\u0002\u0002\u0096\u0098\u0005\u0018\r\u0002\u0097\u0099\u0007",
    "#\u0002\u0002\u0098\u0097\u0003\u0002\u0002\u0002\u0098\u0099\u0003",
    "\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002\u0002\u009a\u009b\u0007",
    "\r\u0002\u0002\u009b\u009d\u0003\u0002\u0002\u0002\u009c\u0091\u0003",
    "\u0002\u0002\u0002\u009c\u0095\u0003\u0002\u0002\u0002\u009d\u0017\u0003",
    "\u0002\u0002\u0002\u009e\u00a1\u0005\u001a\u000e\u0002\u009f\u00a1\u0005",
    "\u0006\u0004\u0002\u00a0\u009e\u0003\u0002\u0002\u0002\u00a0\u009f\u0003",
    "\u0002\u0002\u0002\u00a1\u0019\u0003\u0002\u0002\u0002\u00a2\u00a3\t",
    "\u0003\u0002\u0002\u00a3\u001b\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007",
    " \u0002\u0002\u00a5\u00a6\u0007&\u0002\u0002\u00a6\u00af\u0007\u0015",
    "\u0002\u0002\u00a7\u00ac\u0005\u001e\u0010\u0002\u00a8\u00a9\u0007\u0016",
    "\u0002\u0002\u00a9\u00ab\u0005\u001e\u0010\u0002\u00aa\u00a8\u0003\u0002",
    "\u0002\u0002\u00ab\u00ae\u0003\u0002\u0002\u0002\u00ac\u00aa\u0003\u0002",
    "\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u00b0\u0003\u0002",
    "\u0002\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002\u00af\u00a7\u0003\u0002",
    "\u0002\u0002\u00af\u00b0\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002",
    "\u0002\u0002\u00b1\u00b3\u0007\u0017\u0002\u0002\u00b2\u00b4\u0005 ",
    "\u0011\u0002\u00b3\u00b2\u0003\u0002\u0002\u0002\u00b3\u00b4\u0003\u0002",
    "\u0002\u0002\u00b4\u00c5\u0003\u0002\u0002\u0002\u00b5\u00b6\u0007!",
    "\u0002\u0002\u00b6\u00b7\u0007&\u0002\u0002\u00b7\u00c0\u0007\u0015",
    "\u0002\u0002\u00b8\u00bd\u0005\u001e\u0010\u0002\u00b9\u00ba\u0007\u0016",
    "\u0002\u0002\u00ba\u00bc\u0005\u001e\u0010\u0002\u00bb\u00b9\u0003\u0002",
    "\u0002\u0002\u00bc\u00bf\u0003\u0002\u0002\u0002\u00bd\u00bb\u0003\u0002",
    "\u0002\u0002\u00bd\u00be\u0003\u0002\u0002\u0002\u00be\u00c1\u0003\u0002",
    "\u0002\u0002\u00bf\u00bd\u0003\u0002\u0002\u0002\u00c0\u00b8\u0003\u0002",
    "\u0002\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002",
    "\u0002\u0002\u00c2\u00c3\u0007\u0017\u0002\u0002\u00c3\u00c5\u0005 ",
    "\u0011\u0002\u00c4\u00a4\u0003\u0002\u0002\u0002\u00c4\u00b5\u0003\u0002",
    "\u0002\u0002\u00c5\u001d\u0003\u0002\u0002\u0002\u00c6\u00c7\u0007&",
    "\u0002\u0002\u00c7\u00c8\u0007\n\u0002\u0002\u00c8\u00c9\u0005\u0016",
    "\f\u0002\u00c9\u001f\u0003\u0002\u0002\u0002\u00ca\u00cb\u0007\n\u0002",
    "\u0002\u00cb\u00cc\u0005\u0016\f\u0002\u00cc!\u0003\u0002\u0002\u0002",
    "\u00cd\u00cf\u00050\u0019\u0002\u00ce\u00cd\u0003\u0002\u0002\u0002",
    "\u00cf\u00d2\u0003\u0002\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002",
    "\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00d3\u0003\u0002\u0002\u0002",
    "\u00d2\u00d0\u0003\u0002\u0002\u0002\u00d3\u00d4\u0007\u0018\u0002\u0002",
    "\u00d4\u00d5\u0007&\u0002\u0002\u00d5\u00d9\u0007\b\u0002\u0002\u00d6",
    "\u00d8\u0005$\u0013\u0002\u00d7\u00d6\u0003\u0002\u0002\u0002\u00d8",
    "\u00db\u0003\u0002\u0002\u0002\u00d9\u00d7\u0003\u0002\u0002\u0002\u00d9",
    "\u00da\u0003\u0002\u0002\u0002\u00da\u00dc\u0003\u0002\u0002\u0002\u00db",
    "\u00d9\u0003\u0002\u0002\u0002\u00dc\u00dd\u0007\t\u0002\u0002\u00dd",
    "#\u0003\u0002\u0002\u0002\u00de\u00e0\u00050\u0019\u0002\u00df\u00de",
    "\u0003\u0002\u0002\u0002\u00e0\u00e3\u0003\u0002\u0002\u0002\u00e1\u00df",
    "\u0003\u0002\u0002\u0002\u00e1\u00e2\u0003\u0002\u0002\u0002\u00e2\u00e4",
    "\u0003\u0002\u0002\u0002\u00e3\u00e1\u0003\u0002\u0002\u0002\u00e4\u00e5",
    "\u0007&\u0002\u0002\u00e5%\u0003\u0002\u0002\u0002\u00e6\u00e7\u0007",
    "\u0019\u0002\u0002\u00e7\u00eb\u0007\b\u0002\u0002\u00e8\u00ea\u0005",
    "(\u0015\u0002\u00e9\u00e8\u0003\u0002\u0002\u0002\u00ea\u00ed\u0003",
    "\u0002\u0002\u0002\u00eb\u00e9\u0003\u0002\u0002\u0002\u00eb\u00ec\u0003",
    "\u0002\u0002\u0002\u00ec\u00ee\u0003\u0002\u0002\u0002\u00ed\u00eb\u0003",
    "\u0002\u0002\u0002\u00ee\u00ef\u0007\t\u0002\u0002\u00ef\'\u0003\u0002",
    "\u0002\u0002\u00f0\u00f4\u0005*\u0016\u0002\u00f1\u00f4\u0005,\u0017",
    "\u0002\u00f2\u00f4\u0005.\u0018\u0002\u00f3\u00f0\u0003\u0002\u0002",
    "\u0002\u00f3\u00f1\u0003\u0002\u0002\u0002\u00f3\u00f2\u0003\u0002\u0002",
    "\u0002\u00f4)\u0003\u0002\u0002\u0002\u00f5\u00f6\u0007&\u0002\u0002",
    "\u00f6\u00f7\u0007\n\u0002\u0002\u00f7\u00f8\u0007\f\u0002\u0002\u00f8",
    "\u00f9\u0005\u0006\u0004\u0002\u00f9\u00fa\u0007\r\u0002\u0002\u00fa",
    "+\u0003\u0002\u0002\u0002\u00fb\u00fc\u0007&\u0002\u0002\u00fc\u00fd",
    "\u0007\n\u0002\u0002\u00fd\u00fe\u0005\u0006\u0004\u0002\u00fe-\u0003",
    "\u0002\u0002\u0002\u00ff\u0101\u0007 \u0002\u0002\u0100\u00ff\u0003",
    "\u0002\u0002\u0002\u0100\u0101\u0003\u0002\u0002\u0002\u0101\u0102\u0003",
    "\u0002\u0002\u0002\u0102\u0103\u0007&\u0002\u0002\u0103\u010c\u0007",
    "\u0015\u0002\u0002\u0104\u0109\u0005\u001e\u0010\u0002\u0105\u0106\u0007",
    "\u0016\u0002\u0002\u0106\u0108\u0005\u001e\u0010\u0002\u0107\u0105\u0003",
    "\u0002\u0002\u0002\u0108\u010b\u0003\u0002\u0002\u0002\u0109\u0107\u0003",
    "\u0002\u0002\u0002\u0109\u010a\u0003\u0002\u0002\u0002\u010a\u010d\u0003",
    "\u0002\u0002\u0002\u010b\u0109\u0003\u0002\u0002\u0002\u010c\u0104\u0003",
    "\u0002\u0002\u0002\u010c\u010d\u0003\u0002\u0002\u0002\u010d\u010e\u0003",
    "\u0002\u0002\u0002\u010e\u0110\u0007\u0017\u0002\u0002\u010f\u0111\u0005",
    " \u0011\u0002\u0110\u010f\u0003\u0002\u0002\u0002\u0110\u0111\u0003",
    "\u0002\u0002\u0002\u0111/\u0003\u0002\u0002\u0002\u0112\u0113\u0007",
    "\u001a\u0002\u0002\u0113\u0114\u0005\u0006\u0004\u0002\u0114\u0115\u0007",
    "\n\u0002\u0002\u0115\u0116\u00052\u001a\u0002\u01161\u0003\u0002\u0002",
    "\u0002\u0117\u0120\u00054\u001b\u0002\u0118\u0120\u0007%\u0002\u0002",
    "\u0119\u0120\u0007$\u0002\u0002\u011a\u0120\u00056\u001c\u0002\u011b",
    "\u0120\u0005:\u001e\u0002\u011c\u0120\u0007\u001b\u0002\u0002\u011d",
    "\u0120\u0007\u001c\u0002\u0002\u011e\u0120\u0007\u001d\u0002\u0002\u011f",
    "\u0117\u0003\u0002\u0002\u0002\u011f\u0118\u0003\u0002\u0002\u0002\u011f",
    "\u0119\u0003\u0002\u0002\u0002\u011f\u011a\u0003\u0002\u0002\u0002\u011f",
    "\u011b\u0003\u0002\u0002\u0002\u011f\u011c\u0003\u0002\u0002\u0002\u011f",
    "\u011d\u0003\u0002\u0002\u0002\u011f\u011e\u0003\u0002\u0002\u0002\u0120",
    "3\u0003\u0002\u0002\u0002\u0121\u0124\u0007\u0004\u0002\u0002\u0122",
    "\u0123\u0007\u001e\u0002\u0002\u0123\u0125\u0007&\u0002\u0002\u0124",
    "\u0122\u0003\u0002\u0002\u0002\u0125\u0126\u0003\u0002\u0002\u0002\u0126",
    "\u0124\u0003\u0002\u0002\u0002\u0126\u0127\u0003\u0002\u0002\u0002\u0127",
    "5\u0003\u0002\u0002\u0002\u0128\u0129\u0007\b\u0002\u0002\u0129\u012e",
    "\u00058\u001d\u0002\u012a\u012b\u0007\u0016\u0002\u0002\u012b\u012d",
    "\u00058\u001d\u0002\u012c\u012a\u0003\u0002\u0002\u0002\u012d\u0130",
    "\u0003\u0002\u0002\u0002\u012e\u012c\u0003\u0002\u0002\u0002\u012e\u012f",
    "\u0003\u0002\u0002\u0002\u012f\u0131\u0003\u0002\u0002\u0002\u0130\u012e",
    "\u0003\u0002\u0002\u0002\u0131\u0132\u0007\t\u0002\u0002\u0132\u0136",
    "\u0003\u0002\u0002\u0002\u0133\u0134\u0007\b\u0002\u0002\u0134\u0136",
    "\u0007\t\u0002\u0002\u0135\u0128\u0003\u0002\u0002\u0002\u0135\u0133",
    "\u0003\u0002\u0002\u0002\u01367\u0003\u0002\u0002\u0002\u0137\u0138",
    "\u0007&\u0002\u0002\u0138\u0139\u0007\n\u0002\u0002\u0139\u013a\u0005",
    "2\u001a\u0002\u013a9\u0003\u0002\u0002\u0002\u013b\u013c\u0007\f\u0002",
    "\u0002\u013c\u0141\u0005<\u001f\u0002\u013d\u013e\u0007\u0016\u0002",
    "\u0002\u013e\u0140\u0005<\u001f\u0002\u013f\u013d\u0003\u0002\u0002",
    "\u0002\u0140\u0143\u0003\u0002\u0002\u0002\u0141\u013f\u0003\u0002\u0002",
    "\u0002\u0141\u0142\u0003\u0002\u0002\u0002\u0142\u0144\u0003\u0002\u0002",
    "\u0002\u0143\u0141\u0003\u0002\u0002\u0002\u0144\u0145\u0007\r\u0002",
    "\u0002\u0145\u0149\u0003\u0002\u0002\u0002\u0146\u0147\u0007\f\u0002",
    "\u0002\u0147\u0149\u0007\r\u0002\u0002\u0148\u013b\u0003\u0002\u0002",
    "\u0002\u0148\u0146\u0003\u0002\u0002\u0002\u0149;\u0003\u0002\u0002",
    "\u0002\u014a\u014b\u00052\u001a\u0002\u014b=\u0003\u0002\u0002\u0002",
    "\'?DJWbgkpv}\u0082\u0086\u0093\u0098\u009c\u00a0\u00ac\u00af\u00b3\u00bd",
    "\u00c0\u00c4\u00d0\u00d9\u00e1\u00eb\u00f3\u0100\u0109\u010c\u0110\u011f",
    "\u0126\u012e\u0135\u0141\u0148"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'namespace'", "'.'", "'include'", "'as'", "'type'", 
                     "'{'", "'}'", "':'", "'extends'", "'['", "']'", "'Boolean'", 
                     "'Date'", "'Datetime'", "'Decimal'", "'Double'", "'Integer'", 
                     "'String'", "'('", "','", "')'", "'enum'", "'service'", 
                     "'@'", "'true'", "'false'", "'null'", "'/'", "'abstract'", 
                     "'action'", "'function'", "'key'", "'?'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, "ABSTRACT", "ACTION", "FUNCTION", "KEY", 
                      "NULLABLE", "NUMBER", "STRING", "ID", "LINE_COMMENT", 
                      "WS" ];

var ruleNames =  [ "model", "namespace", "qualifiedName", "include", "modelElement", 
                   "structuredType", "typeMember", "property", "propertyName", 
                   "baseType", "typeReference", "typeName", "builtInType", 
                   "operation", "parameter", "returnType", "enumType", "enumMember", 
                   "service", "serviceMember", "entitySet", "singleton", 
                   "serviceOperation", "annotation", "value", "path", "obj", 
                   "pair", "arr", "item" ];

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
rsdlParser.ABSTRACT = 29;
rsdlParser.ACTION = 30;
rsdlParser.FUNCTION = 31;
rsdlParser.KEY = 32;
rsdlParser.NULLABLE = 33;
rsdlParser.NUMBER = 34;
rsdlParser.STRING = 35;
rsdlParser.ID = 36;
rsdlParser.LINE_COMMENT = 37;
rsdlParser.WS = 38;

rsdlParser.RULE_model = 0;
rsdlParser.RULE_namespace = 1;
rsdlParser.RULE_qualifiedName = 2;
rsdlParser.RULE_include = 3;
rsdlParser.RULE_modelElement = 4;
rsdlParser.RULE_structuredType = 5;
rsdlParser.RULE_typeMember = 6;
rsdlParser.RULE_property = 7;
rsdlParser.RULE_propertyName = 8;
rsdlParser.RULE_baseType = 9;
rsdlParser.RULE_typeReference = 10;
rsdlParser.RULE_typeName = 11;
rsdlParser.RULE_builtInType = 12;
rsdlParser.RULE_operation = 13;
rsdlParser.RULE_parameter = 14;
rsdlParser.RULE_returnType = 15;
rsdlParser.RULE_enumType = 16;
rsdlParser.RULE_enumMember = 17;
rsdlParser.RULE_service = 18;
rsdlParser.RULE_serviceMember = 19;
rsdlParser.RULE_entitySet = 20;
rsdlParser.RULE_singleton = 21;
rsdlParser.RULE_serviceOperation = 22;
rsdlParser.RULE_annotation = 23;
rsdlParser.RULE_value = 24;
rsdlParser.RULE_path = 25;
rsdlParser.RULE_obj = 26;
rsdlParser.RULE_pair = 27;
rsdlParser.RULE_arr = 28;
rsdlParser.RULE_item = 29;


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
        this.state = 61;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.T__0) {
            this.state = 60;
            this.namespace();
        }

        this.state = 66;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__2) {
            this.state = 63;
            this.include();
            this.state = 68;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 72;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rsdlParser.T__4) | (1 << rsdlParser.T__21) | (1 << rsdlParser.T__22) | (1 << rsdlParser.T__23) | (1 << rsdlParser.ABSTRACT))) !== 0)) {
            this.state = 69;
            this.modelElement();
            this.state = 74;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 75;
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
        this.state = 77;
        this.match(rsdlParser.T__0);
        this.state = 78;
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
        this.state = 80;
        this.match(rsdlParser.ID);
        this.state = 85;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__1) {
            this.state = 81;
            this.match(rsdlParser.T__1);
            this.state = 82;
            this.match(rsdlParser.ID);
            this.state = 87;
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
    this.enterRule(localctx, 6, rsdlParser.RULE_include);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        this.match(rsdlParser.T__2);
        this.state = 89;
        this.match(rsdlParser.STRING);
        this.state = 90;
        this.match(rsdlParser.T__3);
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
        this.state = 96;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
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
    this.enterRule(localctx, 10, rsdlParser.RULE_structuredType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__23) {
            this.state = 98;
            this.annotation();
            this.state = 103;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 105;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.ABSTRACT) {
            this.state = 104;
            this.match(rsdlParser.ABSTRACT);
        }

        this.state = 107;
        this.match(rsdlParser.T__4);
        this.state = 108;
        this.match(rsdlParser.ID);
        this.state = 110;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.T__8) {
            this.state = 109;
            this.baseType();
        }

        this.state = 112;
        this.match(rsdlParser.T__5);
        this.state = 116;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 24)) & ~0x1f) == 0 && ((1 << (_la - 24)) & ((1 << (rsdlParser.T__23 - 24)) | (1 << (rsdlParser.ACTION - 24)) | (1 << (rsdlParser.FUNCTION - 24)) | (1 << (rsdlParser.KEY - 24)) | (1 << (rsdlParser.ID - 24)))) !== 0)) {
            this.state = 113;
            this.typeMember();
            this.state = 118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 119;
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
        this.state = 123;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rsdlParser.T__23:
        case rsdlParser.KEY:
        case rsdlParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 121;
            this.property();
            break;
        case rsdlParser.ACTION:
        case rsdlParser.FUNCTION:
            this.enterOuterAlt(localctx, 2);
            this.state = 122;
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
        this.state = 128;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__23) {
            this.state = 125;
            this.annotation();
            this.state = 130;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 132;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        if(la_===1) {
            this.state = 131;
            this.match(rsdlParser.KEY);

        }
        this.state = 134;
        this.propertyName();
        this.state = 135;
        this.match(rsdlParser.T__7);
        this.state = 136;
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
        this.state = 138;
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
    this.enterRule(localctx, 18, rsdlParser.RULE_baseType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.match(rsdlParser.T__8);
        this.state = 141;
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
    this.enterRule(localctx, 20, rsdlParser.RULE_typeReference);
    var _la = 0; // Token type
    try {
        this.state = 154;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rsdlParser.T__11:
        case rsdlParser.T__12:
        case rsdlParser.T__13:
        case rsdlParser.T__14:
        case rsdlParser.T__15:
        case rsdlParser.T__16:
        case rsdlParser.T__17:
        case rsdlParser.ID:
            localctx = new SingleContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 143;
            this.typeName();
            this.state = 145;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.NULLABLE) {
                this.state = 144;
                this.match(rsdlParser.NULLABLE);
            }

            break;
        case rsdlParser.T__9:
            localctx = new ArrayContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 147;
            this.match(rsdlParser.T__9);
            this.state = 148;
            this.typeName();
            this.state = 150;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.NULLABLE) {
                this.state = 149;
                this.match(rsdlParser.NULLABLE);
            }

            this.state = 152;
            this.match(rsdlParser.T__10);
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
    this.enterRule(localctx, 22, rsdlParser.RULE_typeName);
    try {
        this.state = 158;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rsdlParser.T__11:
        case rsdlParser.T__12:
        case rsdlParser.T__13:
        case rsdlParser.T__14:
        case rsdlParser.T__15:
        case rsdlParser.T__16:
        case rsdlParser.T__17:
            this.enterOuterAlt(localctx, 1);
            this.state = 156;
            this.builtInType();
            break;
        case rsdlParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 157;
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
    this.enterRule(localctx, 24, rsdlParser.RULE_builtInType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rsdlParser.T__11) | (1 << rsdlParser.T__12) | (1 << rsdlParser.T__13) | (1 << rsdlParser.T__14) | (1 << rsdlParser.T__15) | (1 << rsdlParser.T__16) | (1 << rsdlParser.T__17))) !== 0))) {
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
    this.enterRule(localctx, 26, rsdlParser.RULE_operation);
    var _la = 0; // Token type
    try {
        this.state = 194;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rsdlParser.ACTION:
            this.enterOuterAlt(localctx, 1);
            this.state = 162;
            this.match(rsdlParser.ACTION);
            this.state = 163;
            this.match(rsdlParser.ID);
            this.state = 164;
            this.match(rsdlParser.T__18);
            this.state = 173;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.ID) {
                this.state = 165;
                this.parameter();
                this.state = 170;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===rsdlParser.T__19) {
                    this.state = 166;
                    this.match(rsdlParser.T__19);
                    this.state = 167;
                    this.parameter();
                    this.state = 172;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }

            this.state = 175;
            this.match(rsdlParser.T__20);
            this.state = 177;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.T__7) {
                this.state = 176;
                this.returnType();
            }

            break;
        case rsdlParser.FUNCTION:
            this.enterOuterAlt(localctx, 2);
            this.state = 179;
            this.match(rsdlParser.FUNCTION);
            this.state = 180;
            this.match(rsdlParser.ID);
            this.state = 181;
            this.match(rsdlParser.T__18);
            this.state = 190;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.ID) {
                this.state = 182;
                this.parameter();
                this.state = 187;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===rsdlParser.T__19) {
                    this.state = 183;
                    this.match(rsdlParser.T__19);
                    this.state = 184;
                    this.parameter();
                    this.state = 189;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }

            this.state = 192;
            this.match(rsdlParser.T__20);
            this.state = 193;
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
    this.enterRule(localctx, 28, rsdlParser.RULE_parameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196;
        this.match(rsdlParser.ID);
        this.state = 197;
        this.match(rsdlParser.T__7);
        this.state = 198;
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
    this.enterRule(localctx, 30, rsdlParser.RULE_returnType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        this.match(rsdlParser.T__7);
        this.state = 201;
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
        this.state = 206;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__23) {
            this.state = 203;
            this.annotation();
            this.state = 208;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 209;
        this.match(rsdlParser.T__21);
        this.state = 210;
        this.match(rsdlParser.ID);
        this.state = 211;
        this.match(rsdlParser.T__5);
        this.state = 215;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__23 || _la===rsdlParser.ID) {
            this.state = 212;
            this.enumMember();
            this.state = 217;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 218;
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
    this.enterRule(localctx, 34, rsdlParser.RULE_enumMember);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 223;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__23) {
            this.state = 220;
            this.annotation();
            this.state = 225;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 226;
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
    this.enterRule(localctx, 36, rsdlParser.RULE_service);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 228;
        this.match(rsdlParser.T__22);
        this.state = 229;
        this.match(rsdlParser.T__5);
        this.state = 233;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.ACTION || _la===rsdlParser.ID) {
            this.state = 230;
            this.serviceMember();
            this.state = 235;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 236;
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
    this.enterRule(localctx, 38, rsdlParser.RULE_serviceMember);
    try {
        this.state = 241;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 238;
            this.entitySet();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 239;
            this.singleton();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 240;
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
    this.enterRule(localctx, 40, rsdlParser.RULE_entitySet);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        this.match(rsdlParser.ID);
        this.state = 244;
        this.match(rsdlParser.T__7);
        this.state = 245;
        this.match(rsdlParser.T__9);
        this.state = 246;
        this.qualifiedName();
        this.state = 247;
        this.match(rsdlParser.T__10);
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
    this.enterRule(localctx, 42, rsdlParser.RULE_singleton);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this.match(rsdlParser.ID);
        this.state = 250;
        this.match(rsdlParser.T__7);
        this.state = 251;
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
    this.enterRule(localctx, 44, rsdlParser.RULE_serviceOperation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 254;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.ACTION) {
            this.state = 253;
            this.match(rsdlParser.ACTION);
        }

        this.state = 256;
        this.match(rsdlParser.ID);
        this.state = 257;
        this.match(rsdlParser.T__18);
        this.state = 266;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.ID) {
            this.state = 258;
            this.parameter();
            this.state = 263;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rsdlParser.T__19) {
                this.state = 259;
                this.match(rsdlParser.T__19);
                this.state = 260;
                this.parameter();
                this.state = 265;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 268;
        this.match(rsdlParser.T__20);
        this.state = 270;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.T__7) {
            this.state = 269;
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

AnnotationContext.prototype.qualifiedName = function() {
    return this.getTypedRuleContext(QualifiedNameContext,0);
};

AnnotationContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
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
    this.enterRule(localctx, 46, rsdlParser.RULE_annotation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 272;
        this.match(rsdlParser.T__23);
        this.state = 273;
        this.qualifiedName();
        this.state = 274;
        this.match(rsdlParser.T__7);
        this.state = 275;
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

ValueContext.prototype.path = function() {
    return this.getTypedRuleContext(PathContext,0);
};

ValueContext.prototype.STRING = function() {
    return this.getToken(rsdlParser.STRING, 0);
};

ValueContext.prototype.NUMBER = function() {
    return this.getToken(rsdlParser.NUMBER, 0);
};

ValueContext.prototype.obj = function() {
    return this.getTypedRuleContext(ObjContext,0);
};

ValueContext.prototype.arr = function() {
    return this.getTypedRuleContext(ArrContext,0);
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
    this.enterRule(localctx, 48, rsdlParser.RULE_value);
    try {
        this.state = 285;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rsdlParser.T__1:
            this.enterOuterAlt(localctx, 1);
            this.state = 277;
            this.path();
            break;
        case rsdlParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 278;
            this.match(rsdlParser.STRING);
            break;
        case rsdlParser.NUMBER:
            this.enterOuterAlt(localctx, 3);
            this.state = 279;
            this.match(rsdlParser.NUMBER);
            break;
        case rsdlParser.T__5:
            this.enterOuterAlt(localctx, 4);
            this.state = 280;
            this.obj();
            break;
        case rsdlParser.T__9:
            this.enterOuterAlt(localctx, 5);
            this.state = 281;
            this.arr();
            break;
        case rsdlParser.T__24:
            this.enterOuterAlt(localctx, 6);
            this.state = 282;
            this.match(rsdlParser.T__24);
            break;
        case rsdlParser.T__25:
            this.enterOuterAlt(localctx, 7);
            this.state = 283;
            this.match(rsdlParser.T__25);
            break;
        case rsdlParser.T__26:
            this.enterOuterAlt(localctx, 8);
            this.state = 284;
            this.match(rsdlParser.T__26);
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
    this.enterRule(localctx, 50, rsdlParser.RULE_path);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 287;
        this.match(rsdlParser.T__1);
        this.state = 290; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 288;
            this.match(rsdlParser.T__27);
            this.state = 289;
            this.match(rsdlParser.ID);
            this.state = 292; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===rsdlParser.T__27);
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
    this.enterRule(localctx, 52, rsdlParser.RULE_obj);
    var _la = 0; // Token type
    try {
        this.state = 307;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 294;
            this.match(rsdlParser.T__5);
            this.state = 295;
            this.pair();
            this.state = 300;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rsdlParser.T__19) {
                this.state = 296;
                this.match(rsdlParser.T__19);
                this.state = 297;
                this.pair();
                this.state = 302;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 303;
            this.match(rsdlParser.T__6);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 305;
            this.match(rsdlParser.T__5);
            this.state = 306;
            this.match(rsdlParser.T__6);
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

PairContext.prototype.ID = function() {
    return this.getToken(rsdlParser.ID, 0);
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
    this.enterRule(localctx, 54, rsdlParser.RULE_pair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 309;
        this.match(rsdlParser.ID);
        this.state = 310;
        this.match(rsdlParser.T__7);
        this.state = 311;
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
    this.enterRule(localctx, 56, rsdlParser.RULE_arr);
    var _la = 0; // Token type
    try {
        this.state = 326;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 313;
            this.match(rsdlParser.T__9);
            this.state = 314;
            this.item();
            this.state = 319;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rsdlParser.T__19) {
                this.state = 315;
                this.match(rsdlParser.T__19);
                this.state = 316;
                this.item();
                this.state = 321;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 322;
            this.match(rsdlParser.T__10);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 324;
            this.match(rsdlParser.T__9);
            this.state = 325;
            this.match(rsdlParser.T__10);
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
    this.enterRule(localctx, 58, rsdlParser.RULE_item);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 328;
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


exports.rsdlParser = rsdlParser;
