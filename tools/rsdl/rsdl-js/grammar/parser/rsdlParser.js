// Generated from c:\git\odata-rapid\tools\rsdl\rsdl-js\grammar\rsdl.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var rsdlListener = require('./rsdlListener').rsdlListener;
var grammarFileName = "rsdl.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003.\u01bb\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0003\u0002\u0005\u0002",
    "F\n\u0002\u0003\u0002\u0007\u0002I\n\u0002\f\u0002\u000e\u0002L\u000b",
    "\u0002\u0003\u0002\u0007\u0002O\n\u0002\f\u0002\u000e\u0002R\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005b\n\u0005\u0003\u0006\u0007\u0006",
    "e\n\u0006\f\u0006\u000e\u0006h\u000b\u0006\u0003\u0006\u0005\u0006k",
    "\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006p\n\u0006\u0003",
    "\u0006\u0003\u0006\u0007\u0006t\n\u0006\f\u0006\u000e\u0006w\u000b\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0005\b\u0080\n\b\u0003\t\u0007\t\u0083\n\t\f\t\u000e\t\u0086",
    "\u000b\t\u0003\t\u0005\t\u0089\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0005\u000b\u0093\n\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0005\u000b\u0098\n\u000b\u0003\u000b\u0003",
    "\u000b\u0005\u000b\u009c\n\u000b\u0003\f\u0003\f\u0003\f\u0005\f\u00a1",
    "\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0005\r\u00ac\n\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0005\r\u00b5\n\r\u0003\r\u0005\r\u00b8\n\r\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0007\u000f\u00bd\n\u000f\f\u000f\u000e\u000f\u00c0",
    "\u000b\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0007\u000f\u00c8\n\u000f\f\u000f\u000e\u000f\u00cb\u000b",
    "\u000f\u0005\u000f\u00cd\n\u000f\u0003\u000f\u0003\u000f\u0005\u000f",
    "\u00d1\n\u000f\u0003\u000f\u0007\u000f\u00d4\n\u000f\f\u000f\u000e\u000f",
    "\u00d7\u000b\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0007\u000f\u00df\n\u000f\f\u000f\u000e\u000f\u00e2",
    "\u000b\u000f\u0005\u000f\u00e4\n\u000f\u0003\u000f\u0003\u000f\u0005",
    "\u000f\u00e8\n\u000f\u0003\u0010\u0007\u0010\u00eb\n\u0010\f\u0010\u000e",
    "\u0010\u00ee\u000b\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0007\u0011\u00f6\n\u0011\f\u0011\u000e\u0011",
    "\u00f9\u000b\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0007\u0012\u00fe",
    "\n\u0012\f\u0012\u000e\u0012\u0101\u000b\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0007\u0012\u0107\n\u0012\f\u0012\u000e\u0012",
    "\u010a\u000b\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0007\u0014\u0111\n\u0014\f\u0014\u000e\u0014\u0114\u000b\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0007\u0015\u0119\n\u0015\f\u0015",
    "\u000e\u0015\u011c\u000b\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0007\u0016\u0124\n\u0016\f\u0016\u000e",
    "\u0016\u0127\u000b\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u012b\n",
    "\u0016\u0003\u0016\u0003\u0016\u0007\u0016\u012f\n\u0016\f\u0016\u000e",
    "\u0016\u0132\u000b\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0005\u0017\u0139\n\u0017\u0003\u0018\u0007\u0018\u013c",
    "\n\u0018\f\u0018\u000e\u0018\u013f\u000b\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0007\u0019",
    "\u0148\n\u0019\f\u0019\u000e\u0019\u014b\u000b\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0007\u001a\u0152\n\u001a",
    "\f\u001a\u000e\u001a\u0155\u000b\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0007\u001a\u015d\n\u001a",
    "\f\u001a\u000e\u001a\u0160\u000b\u001a\u0005\u001a\u0162\n\u001a\u0003",
    "\u001a\u0003\u001a\u0005\u001a\u0166\n\u001a\u0003\u001a\u0007\u001a",
    "\u0169\n\u001a\f\u001a\u000e\u001a\u016c\u000b\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0007\u001a\u0174",
    "\n\u001a\f\u001a\u000e\u001a\u0177\u000b\u001a\u0005\u001a\u0179\n\u001a",
    "\u0003\u001a\u0003\u001a\u0005\u001a\u017d\n\u001a\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0005",
    "\u001c\u018c\n\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0007\u001d\u0192\n\u001d\f\u001d\u000e\u001d\u0195\u000b\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u019b\n\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0007\u001f\u01a3\n\u001f\f\u001f\u000e\u001f\u01a6\u000b\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u01ac\n\u001f",
    "\u0003 \u0003 \u0003 \u0003 \u0003!\u0003!\u0003!\u0006!\u01b5\n!\r",
    "!\u000e!\u01b6\u0003\"\u0003\"\u0003\"\u0002\u0002#\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*",
    ",.02468:<>@B\u0002\u0005\u0004\u0002&&++\u0003\u0002\u0019\u001a\u0003",
    "\u0002+,\u0002\u01de\u0002E\u0003\u0002\u0002\u0002\u0004U\u0003\u0002",
    "\u0002\u0002\u0006X\u0003\u0002\u0002\u0002\ba\u0003\u0002\u0002\u0002",
    "\nf\u0003\u0002\u0002\u0002\fz\u0003\u0002\u0002\u0002\u000e\u007f\u0003",
    "\u0002\u0002\u0002\u0010\u0084\u0003\u0002\u0002\u0002\u0012\u008e\u0003",
    "\u0002\u0002\u0002\u0014\u009b\u0003\u0002\u0002\u0002\u0016\u00a0\u0003",
    "\u0002\u0002\u0002\u0018\u00b7\u0003\u0002\u0002\u0002\u001a\u00b9\u0003",
    "\u0002\u0002\u0002\u001c\u00e7\u0003\u0002\u0002\u0002\u001e\u00ec\u0003",
    "\u0002\u0002\u0002 \u00f3\u0003\u0002\u0002\u0002\"\u00ff\u0003\u0002",
    "\u0002\u0002$\u010d\u0003\u0002\u0002\u0002&\u0112\u0003\u0002\u0002",
    "\u0002(\u011a\u0003\u0002\u0002\u0002*\u0125\u0003\u0002\u0002\u0002",
    ",\u0138\u0003\u0002\u0002\u0002.\u013d\u0003\u0002\u0002\u00020\u0149",
    "\u0003\u0002\u0002\u00022\u017c\u0003\u0002\u0002\u00024\u017e\u0003",
    "\u0002\u0002\u00026\u018b\u0003\u0002\u0002\u00028\u019a\u0003\u0002",
    "\u0002\u0002:\u019c\u0003\u0002\u0002\u0002<\u01ab\u0003\u0002\u0002",
    "\u0002>\u01ad\u0003\u0002\u0002\u0002@\u01b1\u0003\u0002\u0002\u0002",
    "B\u01b8\u0003\u0002\u0002\u0002DF\u0005\u0004\u0003\u0002ED\u0003\u0002",
    "\u0002\u0002EF\u0003\u0002\u0002\u0002FJ\u0003\u0002\u0002\u0002GI\u0005",
    "\u0006\u0004\u0002HG\u0003\u0002\u0002\u0002IL\u0003\u0002\u0002\u0002",
    "JH\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002KP\u0003\u0002\u0002",
    "\u0002LJ\u0003\u0002\u0002\u0002MO\u0005\b\u0005\u0002NM\u0003\u0002",
    "\u0002\u0002OR\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002PQ\u0003",
    "\u0002\u0002\u0002QS\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002",
    "ST\u0007\u0002\u0002\u0003T\u0003\u0003\u0002\u0002\u0002UV\u0007\u0003",
    "\u0002\u0002VW\u0005B\"\u0002W\u0005\u0003\u0002\u0002\u0002XY\u0007",
    "\u0004\u0002\u0002YZ\u0007)\u0002\u0002Z[\u0007\u0005\u0002\u0002[\\",
    "\u0007+\u0002\u0002\\\u0007\u0003\u0002\u0002\u0002]b\u0005\n\u0006",
    "\u0002^b\u0005\"\u0012\u0002_b\u0005(\u0015\u0002`b\u0005*\u0016\u0002",
    "a]\u0003\u0002\u0002\u0002a^\u0003\u0002\u0002\u0002a_\u0003\u0002\u0002",
    "\u0002a`\u0003\u0002\u0002\u0002b\t\u0003\u0002\u0002\u0002ce\u0005",
    "4\u001b\u0002dc\u0003\u0002\u0002\u0002eh\u0003\u0002\u0002\u0002fd",
    "\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002gj\u0003\u0002\u0002",
    "\u0002hf\u0003\u0002\u0002\u0002ik\u0007#\u0002\u0002ji\u0003\u0002",
    "\u0002\u0002jk\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002lm\u0007",
    "\u0006\u0002\u0002mo\u0007+\u0002\u0002np\u0005\f\u0007\u0002on\u0003",
    "\u0002\u0002\u0002op\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002",
    "qu\u0007\u0007\u0002\u0002rt\u0005\u000e\b\u0002sr\u0003\u0002\u0002",
    "\u0002tw\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002uv\u0003\u0002",
    "\u0002\u0002vx\u0003\u0002\u0002\u0002wu\u0003\u0002\u0002\u0002xy\u0007",
    "\b\u0002\u0002y\u000b\u0003\u0002\u0002\u0002z{\u0007\t\u0002\u0002",
    "{|\u0007+\u0002\u0002|\r\u0003\u0002\u0002\u0002}\u0080\u0005\u0010",
    "\t\u0002~\u0080\u0005\u001c\u000f\u0002\u007f}\u0003\u0002\u0002\u0002",
    "\u007f~\u0003\u0002\u0002\u0002\u0080\u000f\u0003\u0002\u0002\u0002",
    "\u0081\u0083\u00054\u001b\u0002\u0082\u0081\u0003\u0002\u0002\u0002",
    "\u0083\u0086\u0003\u0002\u0002\u0002\u0084\u0082\u0003\u0002\u0002\u0002",
    "\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0088\u0003\u0002\u0002\u0002",
    "\u0086\u0084\u0003\u0002\u0002\u0002\u0087\u0089\u0007&\u0002\u0002",
    "\u0088\u0087\u0003\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002\u0002",
    "\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u008b\u0005\u0012\n\u0002",
    "\u008b\u008c\u0007\n\u0002\u0002\u008c\u008d\u0005\u0014\u000b\u0002",
    "\u008d\u0011\u0003\u0002\u0002\u0002\u008e\u008f\t\u0002\u0002\u0002",
    "\u008f\u0013\u0003\u0002\u0002\u0002\u0090\u0092\u0005\u0016\f\u0002",
    "\u0091\u0093\u0007\'\u0002\u0002\u0092\u0091\u0003\u0002\u0002\u0002",
    "\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u009c\u0003\u0002\u0002\u0002",
    "\u0094\u0095\u0007\u000b\u0002\u0002\u0095\u0097\u0005\u0016\f\u0002",
    "\u0096\u0098\u0007\'\u0002\u0002\u0097\u0096\u0003\u0002\u0002\u0002",
    "\u0097\u0098\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002",
    "\u0099\u009a\u0007\f\u0002\u0002\u009a\u009c\u0003\u0002\u0002\u0002",
    "\u009b\u0090\u0003\u0002\u0002\u0002\u009b\u0094\u0003\u0002\u0002\u0002",
    "\u009c\u0015\u0003\u0002\u0002\u0002\u009d\u00a1\u0005\u0018\r\u0002",
    "\u009e\u00a1\u0005\u001a\u000e\u0002\u009f\u00a1\u0005B\"\u0002\u00a0",
    "\u009d\u0003\u0002\u0002\u0002\u00a0\u009e\u0003\u0002\u0002\u0002\u00a0",
    "\u009f\u0003\u0002\u0002\u0002\u00a1\u0017\u0003\u0002\u0002\u0002\u00a2",
    "\u00b8\u0007\r\u0002\u0002\u00a3\u00b8\u0007\u000e\u0002\u0002\u00a4",
    "\u00b8\u0007\u000f\u0002\u0002\u00a5\u00ab\u0007\u0010\u0002\u0002\u00a6",
    "\u00a7\u0007\u0011\u0002\u0002\u00a7\u00a8\u0007(\u0002\u0002\u00a8",
    "\u00a9\u0007\u0012\u0002\u0002\u00a9\u00aa\u0007(\u0002\u0002\u00aa",
    "\u00ac\u0007\u0013\u0002\u0002\u00ab\u00a6\u0003\u0002\u0002\u0002\u00ab",
    "\u00ac\u0003\u0002\u0002\u0002\u00ac\u00b8\u0003\u0002\u0002\u0002\u00ad",
    "\u00b8\u0007\u0014\u0002\u0002\u00ae\u00b8\u0007\u0015\u0002\u0002\u00af",
    "\u00b8\u0007\u0016\u0002\u0002\u00b0\u00b4\u0007\u0017\u0002\u0002\u00b1",
    "\u00b2\u0007\u0011\u0002\u0002\u00b2\u00b3\u0007(\u0002\u0002\u00b3",
    "\u00b5\u0007\u0013\u0002\u0002\u00b4\u00b1\u0003\u0002\u0002\u0002\u00b4",
    "\u00b5\u0003\u0002\u0002\u0002\u00b5\u00b8\u0003\u0002\u0002\u0002\u00b6",
    "\u00b8\u0007\u0018\u0002\u0002\u00b7\u00a2\u0003\u0002\u0002\u0002\u00b7",
    "\u00a3\u0003\u0002\u0002\u0002\u00b7\u00a4\u0003\u0002\u0002\u0002\u00b7",
    "\u00a5\u0003\u0002\u0002\u0002\u00b7\u00ad\u0003\u0002\u0002\u0002\u00b7",
    "\u00ae\u0003\u0002\u0002\u0002\u00b7\u00af\u0003\u0002\u0002\u0002\u00b7",
    "\u00b0\u0003\u0002\u0002\u0002\u00b7\u00b6\u0003\u0002\u0002\u0002\u00b8",
    "\u0019\u0003\u0002\u0002\u0002\u00b9\u00ba\u0007*\u0002\u0002\u00ba",
    "\u001b\u0003\u0002\u0002\u0002\u00bb\u00bd\u00054\u001b\u0002\u00bc",
    "\u00bb\u0003\u0002\u0002\u0002\u00bd\u00c0\u0003\u0002\u0002\u0002\u00be",
    "\u00bc\u0003\u0002\u0002\u0002\u00be\u00bf\u0003\u0002\u0002\u0002\u00bf",
    "\u00c1\u0003\u0002\u0002\u0002\u00c0\u00be\u0003\u0002\u0002\u0002\u00c1",
    "\u00c2\u0007$\u0002\u0002\u00c2\u00c3\u0007+\u0002\u0002\u00c3\u00cc",
    "\u0007\u0011\u0002\u0002\u00c4\u00c9\u0005\u001e\u0010\u0002\u00c5\u00c6",
    "\u0007\u0012\u0002\u0002\u00c6\u00c8\u0005\u001e\u0010\u0002\u00c7\u00c5",
    "\u0003\u0002\u0002\u0002\u00c8\u00cb\u0003\u0002\u0002\u0002\u00c9\u00c7",
    "\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00cd",
    "\u0003\u0002\u0002\u0002\u00cb\u00c9\u0003\u0002\u0002\u0002\u00cc\u00c4",
    "\u0003\u0002\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd\u00ce",
    "\u0003\u0002\u0002\u0002\u00ce\u00d0\u0007\u0013\u0002\u0002\u00cf\u00d1",
    "\u0005 \u0011\u0002\u00d0\u00cf\u0003\u0002\u0002\u0002\u00d0\u00d1",
    "\u0003\u0002\u0002\u0002\u00d1\u00e8\u0003\u0002\u0002\u0002\u00d2\u00d4",
    "\u00054\u001b\u0002\u00d3\u00d2\u0003\u0002\u0002\u0002\u00d4\u00d7",
    "\u0003\u0002\u0002\u0002\u00d5\u00d3\u0003\u0002\u0002\u0002\u00d5\u00d6",
    "\u0003\u0002\u0002\u0002\u00d6\u00d8\u0003\u0002\u0002\u0002\u00d7\u00d5",
    "\u0003\u0002\u0002\u0002\u00d8\u00d9\u0007%\u0002\u0002\u00d9\u00da",
    "\u0007+\u0002\u0002\u00da\u00e3\u0007\u0011\u0002\u0002\u00db\u00e0",
    "\u0005\u001e\u0010\u0002\u00dc\u00dd\u0007\u0012\u0002\u0002\u00dd\u00df",
    "\u0005\u001e\u0010\u0002\u00de\u00dc\u0003\u0002\u0002\u0002\u00df\u00e2",
    "\u0003\u0002\u0002\u0002\u00e0\u00de\u0003\u0002\u0002\u0002\u00e0\u00e1",
    "\u0003\u0002\u0002\u0002\u00e1\u00e4\u0003\u0002\u0002\u0002\u00e2\u00e0",
    "\u0003\u0002\u0002\u0002\u00e3\u00db\u0003\u0002\u0002\u0002\u00e3\u00e4",
    "\u0003\u0002\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e5\u00e6",
    "\u0007\u0013\u0002\u0002\u00e6\u00e8\u0005 \u0011\u0002\u00e7\u00be",
    "\u0003\u0002\u0002\u0002\u00e7\u00d5\u0003\u0002\u0002\u0002\u00e8\u001d",
    "\u0003\u0002\u0002\u0002\u00e9\u00eb\u00054\u001b\u0002\u00ea\u00e9",
    "\u0003\u0002\u0002\u0002\u00eb\u00ee\u0003\u0002\u0002\u0002\u00ec\u00ea",
    "\u0003\u0002\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed\u00ef",
    "\u0003\u0002\u0002\u0002\u00ee\u00ec\u0003\u0002\u0002\u0002\u00ef\u00f0",
    "\u0007+\u0002\u0002\u00f0\u00f1\u0007\n\u0002\u0002\u00f1\u00f2\u0005",
    "\u0014\u000b\u0002\u00f2\u001f\u0003\u0002\u0002\u0002\u00f3\u00f7\u0007",
    "\n\u0002\u0002\u00f4\u00f6\u00054\u001b\u0002\u00f5\u00f4\u0003\u0002",
    "\u0002\u0002\u00f6\u00f9\u0003\u0002\u0002\u0002\u00f7\u00f5\u0003\u0002",
    "\u0002\u0002\u00f7\u00f8\u0003\u0002\u0002\u0002\u00f8\u00fa\u0003\u0002",
    "\u0002\u0002\u00f9\u00f7\u0003\u0002\u0002\u0002\u00fa\u00fb\u0005\u0014",
    "\u000b\u0002\u00fb!\u0003\u0002\u0002\u0002\u00fc\u00fe\u00054\u001b",
    "\u0002\u00fd\u00fc\u0003\u0002\u0002\u0002\u00fe\u0101\u0003\u0002\u0002",
    "\u0002\u00ff\u00fd\u0003\u0002\u0002\u0002\u00ff\u0100\u0003\u0002\u0002",
    "\u0002\u0100\u0102\u0003\u0002\u0002\u0002\u0101\u00ff\u0003\u0002\u0002",
    "\u0002\u0102\u0103\u0005$\u0013\u0002\u0103\u0104\u0007+\u0002\u0002",
    "\u0104\u0108\u0007\u0007\u0002\u0002\u0105\u0107\u0005&\u0014\u0002",
    "\u0106\u0105\u0003\u0002\u0002\u0002\u0107\u010a\u0003\u0002\u0002\u0002",
    "\u0108\u0106\u0003\u0002\u0002\u0002\u0108\u0109\u0003\u0002\u0002\u0002",
    "\u0109\u010b\u0003\u0002\u0002\u0002\u010a\u0108\u0003\u0002\u0002\u0002",
    "\u010b\u010c\u0007\b\u0002\u0002\u010c#\u0003\u0002\u0002\u0002\u010d",
    "\u010e\t\u0003\u0002\u0002\u010e%\u0003\u0002\u0002\u0002\u010f\u0111",
    "\u00054\u001b\u0002\u0110\u010f\u0003\u0002\u0002\u0002\u0111\u0114",
    "\u0003\u0002\u0002\u0002\u0112\u0110\u0003\u0002\u0002\u0002\u0112\u0113",
    "\u0003\u0002\u0002\u0002\u0113\u0115\u0003\u0002\u0002\u0002\u0114\u0112",
    "\u0003\u0002\u0002\u0002\u0115\u0116\u0007+\u0002\u0002\u0116\'\u0003",
    "\u0002\u0002\u0002\u0117\u0119\u00054\u001b\u0002\u0118\u0117\u0003",
    "\u0002\u0002\u0002\u0119\u011c\u0003\u0002\u0002\u0002\u011a\u0118\u0003",
    "\u0002\u0002\u0002\u011a\u011b\u0003\u0002\u0002\u0002\u011b\u011d\u0003",
    "\u0002\u0002\u0002\u011c\u011a\u0003\u0002\u0002\u0002\u011d\u011e\u0007",
    "\u001b\u0002\u0002\u011e\u011f\u0007+\u0002\u0002\u011f\u0120\u0007",
    "\n\u0002\u0002\u0120\u0121\u0005\u0016\f\u0002\u0121)\u0003\u0002\u0002",
    "\u0002\u0122\u0124\u00054\u001b\u0002\u0123\u0122\u0003\u0002\u0002",
    "\u0002\u0124\u0127\u0003\u0002\u0002\u0002\u0125\u0123\u0003\u0002\u0002",
    "\u0002\u0125\u0126\u0003\u0002\u0002\u0002\u0126\u0128\u0003\u0002\u0002",
    "\u0002\u0127\u0125\u0003\u0002\u0002\u0002\u0128\u012a\u0007\u001c\u0002",
    "\u0002\u0129\u012b\u0007+\u0002\u0002\u012a\u0129\u0003\u0002\u0002",
    "\u0002\u012a\u012b\u0003\u0002\u0002\u0002\u012b\u012c\u0003\u0002\u0002",
    "\u0002\u012c\u0130\u0007\u0007\u0002\u0002\u012d\u012f\u0005,\u0017",
    "\u0002\u012e\u012d\u0003\u0002\u0002\u0002\u012f\u0132\u0003\u0002\u0002",
    "\u0002\u0130\u012e\u0003\u0002\u0002\u0002\u0130\u0131\u0003\u0002\u0002",
    "\u0002\u0131\u0133\u0003\u0002\u0002\u0002\u0132\u0130\u0003\u0002\u0002",
    "\u0002\u0133\u0134\u0007\b\u0002\u0002\u0134+\u0003\u0002\u0002\u0002",
    "\u0135\u0139\u0005.\u0018\u0002\u0136\u0139\u00050\u0019\u0002\u0137",
    "\u0139\u00052\u001a\u0002\u0138\u0135\u0003\u0002\u0002\u0002\u0138",
    "\u0136\u0003\u0002\u0002\u0002\u0138\u0137\u0003\u0002\u0002\u0002\u0139",
    "-\u0003\u0002\u0002\u0002\u013a\u013c\u00054\u001b\u0002\u013b\u013a",
    "\u0003\u0002\u0002\u0002\u013c\u013f\u0003\u0002\u0002\u0002\u013d\u013b",
    "\u0003\u0002\u0002\u0002\u013d\u013e\u0003\u0002\u0002\u0002\u013e\u0140",
    "\u0003\u0002\u0002\u0002\u013f\u013d\u0003\u0002\u0002\u0002\u0140\u0141",
    "\u0007+\u0002\u0002\u0141\u0142\u0007\n\u0002\u0002\u0142\u0143\u0007",
    "\u000b\u0002\u0002\u0143\u0144\u0005B\"\u0002\u0144\u0145\u0007\f\u0002",
    "\u0002\u0145/\u0003\u0002\u0002\u0002\u0146\u0148\u00054\u001b\u0002",
    "\u0147\u0146\u0003\u0002\u0002\u0002\u0148\u014b\u0003\u0002\u0002\u0002",
    "\u0149\u0147\u0003\u0002\u0002\u0002\u0149\u014a\u0003\u0002\u0002\u0002",
    "\u014a\u014c\u0003\u0002\u0002\u0002\u014b\u0149\u0003\u0002\u0002\u0002",
    "\u014c\u014d\u0007+\u0002\u0002\u014d\u014e\u0007\n\u0002\u0002\u014e",
    "\u014f\u0005B\"\u0002\u014f1\u0003\u0002\u0002\u0002\u0150\u0152\u0005",
    "4\u001b\u0002\u0151\u0150\u0003\u0002\u0002\u0002\u0152\u0155\u0003",
    "\u0002\u0002\u0002\u0153\u0151\u0003\u0002\u0002\u0002\u0153\u0154\u0003",
    "\u0002\u0002\u0002\u0154\u0156\u0003\u0002\u0002\u0002\u0155\u0153\u0003",
    "\u0002\u0002\u0002\u0156\u0157\u0007$\u0002\u0002\u0157\u0158\u0007",
    "+\u0002\u0002\u0158\u0161\u0007\u0011\u0002\u0002\u0159\u015e\u0005",
    "\u001e\u0010\u0002\u015a\u015b\u0007\u0012\u0002\u0002\u015b\u015d\u0005",
    "\u001e\u0010\u0002\u015c\u015a\u0003\u0002\u0002\u0002\u015d\u0160\u0003",
    "\u0002\u0002\u0002\u015e\u015c\u0003\u0002\u0002\u0002\u015e\u015f\u0003",
    "\u0002\u0002\u0002\u015f\u0162\u0003\u0002\u0002\u0002\u0160\u015e\u0003",
    "\u0002\u0002\u0002\u0161\u0159\u0003\u0002\u0002\u0002\u0161\u0162\u0003",
    "\u0002\u0002\u0002\u0162\u0163\u0003\u0002\u0002\u0002\u0163\u0165\u0007",
    "\u0013\u0002\u0002\u0164\u0166\u0005 \u0011\u0002\u0165\u0164\u0003",
    "\u0002\u0002\u0002\u0165\u0166\u0003\u0002\u0002\u0002\u0166\u017d\u0003",
    "\u0002\u0002\u0002\u0167\u0169\u00054\u001b\u0002\u0168\u0167\u0003",
    "\u0002\u0002\u0002\u0169\u016c\u0003\u0002\u0002\u0002\u016a\u0168\u0003",
    "\u0002\u0002\u0002\u016a\u016b\u0003\u0002\u0002\u0002\u016b\u016d\u0003",
    "\u0002\u0002\u0002\u016c\u016a\u0003\u0002\u0002\u0002\u016d\u016e\u0007",
    "%\u0002\u0002\u016e\u016f\u0007+\u0002\u0002\u016f\u0178\u0007\u0011",
    "\u0002\u0002\u0170\u0175\u0005\u001e\u0010\u0002\u0171\u0172\u0007\u0012",
    "\u0002\u0002\u0172\u0174\u0005\u001e\u0010\u0002\u0173\u0171\u0003\u0002",
    "\u0002\u0002\u0174\u0177\u0003\u0002\u0002\u0002\u0175\u0173\u0003\u0002",
    "\u0002\u0002\u0175\u0176\u0003\u0002\u0002\u0002\u0176\u0179\u0003\u0002",
    "\u0002\u0002\u0177\u0175\u0003\u0002\u0002\u0002\u0178\u0170\u0003\u0002",
    "\u0002\u0002\u0178\u0179\u0003\u0002\u0002\u0002\u0179\u017a\u0003\u0002",
    "\u0002\u0002\u017a\u017b\u0007\u0013\u0002\u0002\u017b\u017d\u0005 ",
    "\u0011\u0002\u017c\u0153\u0003\u0002\u0002\u0002\u017c\u016a\u0003\u0002",
    "\u0002\u0002\u017d3\u0003\u0002\u0002\u0002\u017e\u017f\u0007\u001d",
    "\u0002\u0002\u017f\u0180\u0005B\"\u0002\u0180\u0181\u0007\n\u0002\u0002",
    "\u0181\u0182\u00056\u001c\u0002\u01825\u0003\u0002\u0002\u0002\u0183",
    "\u018c\u0007\u001e\u0002\u0002\u0184\u018c\u0007\u001f\u0002\u0002\u0185",
    "\u018c\u0007 \u0002\u0002\u0186\u018c\u0007(\u0002\u0002\u0187\u018c",
    "\u0007)\u0002\u0002\u0188\u018c\u00058\u001d\u0002\u0189\u018c\u0005",
    "<\u001f\u0002\u018a\u018c\u0005@!\u0002\u018b\u0183\u0003\u0002\u0002",
    "\u0002\u018b\u0184\u0003\u0002\u0002\u0002\u018b\u0185\u0003\u0002\u0002",
    "\u0002\u018b\u0186\u0003\u0002\u0002\u0002\u018b\u0187\u0003\u0002\u0002",
    "\u0002\u018b\u0188\u0003\u0002\u0002\u0002\u018b\u0189\u0003\u0002\u0002",
    "\u0002\u018b\u018a\u0003\u0002\u0002\u0002\u018c7\u0003\u0002\u0002",
    "\u0002\u018d\u018e\u0007\u000b\u0002\u0002\u018e\u0193\u0005:\u001e",
    "\u0002\u018f\u0190\u0007\u0012\u0002\u0002\u0190\u0192\u0005:\u001e",
    "\u0002\u0191\u018f\u0003\u0002\u0002\u0002\u0192\u0195\u0003\u0002\u0002",
    "\u0002\u0193\u0191\u0003\u0002\u0002\u0002\u0193\u0194\u0003\u0002\u0002",
    "\u0002\u0194\u0196\u0003\u0002\u0002\u0002\u0195\u0193\u0003\u0002\u0002",
    "\u0002\u0196\u0197\u0007\f\u0002\u0002\u0197\u019b\u0003\u0002\u0002",
    "\u0002\u0198\u0199\u0007\u000b\u0002\u0002\u0199\u019b\u0007\f\u0002",
    "\u0002\u019a\u018d\u0003\u0002\u0002\u0002\u019a\u0198\u0003\u0002\u0002",
    "\u0002\u019b9\u0003\u0002\u0002\u0002\u019c\u019d\u00056\u001c\u0002",
    "\u019d;\u0003\u0002\u0002\u0002\u019e\u019f\u0007\u0007\u0002\u0002",
    "\u019f\u01a4\u0005> \u0002\u01a0\u01a1\u0007\u0012\u0002\u0002\u01a1",
    "\u01a3\u0005> \u0002\u01a2\u01a0\u0003\u0002\u0002\u0002\u01a3\u01a6",
    "\u0003\u0002\u0002\u0002\u01a4\u01a2\u0003\u0002\u0002\u0002\u01a4\u01a5",
    "\u0003\u0002\u0002\u0002\u01a5\u01a7\u0003\u0002\u0002\u0002\u01a6\u01a4",
    "\u0003\u0002\u0002\u0002\u01a7\u01a8\u0007\b\u0002\u0002\u01a8\u01ac",
    "\u0003\u0002\u0002\u0002\u01a9\u01aa\u0007\u0007\u0002\u0002\u01aa\u01ac",
    "\u0007\b\u0002\u0002\u01ab\u019e\u0003\u0002\u0002\u0002\u01ab\u01a9",
    "\u0003\u0002\u0002\u0002\u01ac=\u0003\u0002\u0002\u0002\u01ad\u01ae",
    "\u0007+\u0002\u0002\u01ae\u01af\u0007\n\u0002\u0002\u01af\u01b0\u0005",
    "6\u001c\u0002\u01b0?\u0003\u0002\u0002\u0002\u01b1\u01b4\u0007!\u0002",
    "\u0002\u01b2\u01b3\u0007\"\u0002\u0002\u01b3\u01b5\u0007+\u0002\u0002",
    "\u01b4\u01b2\u0003\u0002\u0002\u0002\u01b5\u01b6\u0003\u0002\u0002\u0002",
    "\u01b6\u01b4\u0003\u0002\u0002\u0002\u01b6\u01b7\u0003\u0002\u0002\u0002",
    "\u01b7A\u0003\u0002\u0002\u0002\u01b8\u01b9\t\u0004\u0002\u0002\u01b9",
    "C\u0003\u0002\u0002\u00026EJPafjou\u007f\u0084\u0088\u0092\u0097\u009b",
    "\u00a0\u00ab\u00b4\u00b7\u00be\u00c9\u00cc\u00d0\u00d5\u00e0\u00e3\u00e7",
    "\u00ec\u00f7\u00ff\u0108\u0112\u011a\u0125\u012a\u0130\u0138\u013d\u0149",
    "\u0153\u015e\u0161\u0165\u016a\u0175\u0178\u017c\u018b\u0193\u019a\u01a4",
    "\u01ab\u01b6"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'namespace'", "'include'", "'as'", "'type'", 
                     "'{'", "'}'", "'extends'", "':'", "'['", "']'", "'Boolean'", 
                     "'Date'", "'DateTime'", "'Decimal'", "'('", "','", 
                     "')'", "'Double'", "'Duration'", "'Integer'", "'String'", 
                     "'TimeOfDay'", "'enum'", "'flags'", "'typedef'", "'service'", 
                     "'@'", "'true'", "'false'", "'null'", "'.'", "'/'", 
                     "'abstract'", "'action'", "'function'", "'key'", "'?'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, "ABSTRACT", "ACTION", 
                      "FUNCTION", "KEY", "NULLABLE", "NUMBER", "STRING", 
                      "EDM", "ID", "QID", "LINE_COMMENT", "WS" ];

var ruleNames =  [ "model", "namespace", "include", "modelElement", "structuredType", 
                   "baseType", "typeMember", "property", "propertyName", 
                   "typeReference", "typeName", "builtInType", "edmType", 
                   "operation", "parameter", "returnType", "enumType", "enumKind", 
                   "enumMember", "typeDefinition", "service", "serviceMember", 
                   "entitySet", "singleton", "serviceOperation", "annotation", 
                   "value", "arr", "item", "obj", "pair", "path", "qualifiedName" ];

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
rsdlParser.T__31 = 32;
rsdlParser.ABSTRACT = 33;
rsdlParser.ACTION = 34;
rsdlParser.FUNCTION = 35;
rsdlParser.KEY = 36;
rsdlParser.NULLABLE = 37;
rsdlParser.NUMBER = 38;
rsdlParser.STRING = 39;
rsdlParser.EDM = 40;
rsdlParser.ID = 41;
rsdlParser.QID = 42;
rsdlParser.LINE_COMMENT = 43;
rsdlParser.WS = 44;

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
rsdlParser.RULE_path = 31;
rsdlParser.RULE_qualifiedName = 32;


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
        this.state = 67;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.T__0) {
            this.state = 66;
            this.namespace();
        }

        this.state = 72;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__1) {
            this.state = 69;
            this.include();
            this.state = 74;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 78;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 4)) & ~0x1f) == 0 && ((1 << (_la - 4)) & ((1 << (rsdlParser.T__3 - 4)) | (1 << (rsdlParser.T__22 - 4)) | (1 << (rsdlParser.T__23 - 4)) | (1 << (rsdlParser.T__24 - 4)) | (1 << (rsdlParser.T__25 - 4)) | (1 << (rsdlParser.T__26 - 4)) | (1 << (rsdlParser.ABSTRACT - 4)))) !== 0)) {
            this.state = 75;
            this.modelElement();
            this.state = 80;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 81;
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
        this.state = 83;
        this.match(rsdlParser.T__0);
        this.state = 84;
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
        this.state = 86;
        this.match(rsdlParser.T__1);
        this.state = 87;
        this.match(rsdlParser.STRING);
        this.state = 88;
        this.match(rsdlParser.T__2);
        this.state = 89;
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
        this.state = 95;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 91;
            this.structuredType();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 92;
            this.enumType();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 93;
            this.typeDefinition();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 94;
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
        this.state = 100;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__26) {
            this.state = 97;
            this.annotation();
            this.state = 102;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 104;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.ABSTRACT) {
            this.state = 103;
            this.match(rsdlParser.ABSTRACT);
        }

        this.state = 106;
        this.match(rsdlParser.T__3);
        this.state = 107;
        this.match(rsdlParser.ID);
        this.state = 109;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.T__6) {
            this.state = 108;
            this.baseType();
        }

        this.state = 111;
        this.match(rsdlParser.T__4);
        this.state = 115;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (rsdlParser.T__26 - 27)) | (1 << (rsdlParser.ACTION - 27)) | (1 << (rsdlParser.FUNCTION - 27)) | (1 << (rsdlParser.KEY - 27)) | (1 << (rsdlParser.ID - 27)))) !== 0)) {
            this.state = 112;
            this.typeMember();
            this.state = 117;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 118;
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
        this.state = 120;
        this.match(rsdlParser.T__6);
        this.state = 121;
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
        this.state = 125;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 123;
            this.property();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 124;
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
        this.state = 130;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__26) {
            this.state = 127;
            this.annotation();
            this.state = 132;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 134;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        if(la_===1) {
            this.state = 133;
            this.match(rsdlParser.KEY);

        }
        this.state = 136;
        this.propertyName();
        this.state = 137;
        this.match(rsdlParser.T__7);
        this.state = 138;
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
        this.state = 140;
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
        this.state = 153;
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
            this.state = 142;
            this.typeName();
            this.state = 144;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.NULLABLE) {
                this.state = 143;
                this.match(rsdlParser.NULLABLE);
            }

            break;
        case rsdlParser.T__8:
            localctx = new ArrayContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 146;
            this.match(rsdlParser.T__8);
            this.state = 147;
            this.typeName();
            this.state = 149;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.NULLABLE) {
                this.state = 148;
                this.match(rsdlParser.NULLABLE);
            }

            this.state = 151;
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
        this.state = 158;
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
            this.state = 155;
            this.builtInType();
            break;
        case rsdlParser.EDM:
            this.enterOuterAlt(localctx, 2);
            this.state = 156;
            this.edmType();
            break;
        case rsdlParser.ID:
        case rsdlParser.QID:
            this.enterOuterAlt(localctx, 3);
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
        this.state = 181;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rsdlParser.T__10:
            this.enterOuterAlt(localctx, 1);
            this.state = 160;
            this.match(rsdlParser.T__10);
            break;
        case rsdlParser.T__11:
            this.enterOuterAlt(localctx, 2);
            this.state = 161;
            this.match(rsdlParser.T__11);
            break;
        case rsdlParser.T__12:
            this.enterOuterAlt(localctx, 3);
            this.state = 162;
            this.match(rsdlParser.T__12);
            break;
        case rsdlParser.T__13:
            this.enterOuterAlt(localctx, 4);
            this.state = 163;
            this.match(rsdlParser.T__13);
            this.state = 169;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.T__14) {
                this.state = 164;
                this.match(rsdlParser.T__14);
                this.state = 165;
                this.match(rsdlParser.NUMBER);
                this.state = 166;
                this.match(rsdlParser.T__15);
                this.state = 167;
                this.match(rsdlParser.NUMBER);
                this.state = 168;
                this.match(rsdlParser.T__16);
            }

            break;
        case rsdlParser.T__17:
            this.enterOuterAlt(localctx, 5);
            this.state = 171;
            this.match(rsdlParser.T__17);
            break;
        case rsdlParser.T__18:
            this.enterOuterAlt(localctx, 6);
            this.state = 172;
            this.match(rsdlParser.T__18);
            break;
        case rsdlParser.T__19:
            this.enterOuterAlt(localctx, 7);
            this.state = 173;
            this.match(rsdlParser.T__19);
            break;
        case rsdlParser.T__20:
            this.enterOuterAlt(localctx, 8);
            this.state = 174;
            this.match(rsdlParser.T__20);
            this.state = 178;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.T__14) {
                this.state = 175;
                this.match(rsdlParser.T__14);
                this.state = 176;
                this.match(rsdlParser.NUMBER);
                this.state = 177;
                this.match(rsdlParser.T__16);
            }

            break;
        case rsdlParser.T__21:
            this.enterOuterAlt(localctx, 9);
            this.state = 180;
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
        this.state = 183;
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
        this.state = 229;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 188;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rsdlParser.T__26) {
                this.state = 185;
                this.annotation();
                this.state = 190;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 191;
            this.match(rsdlParser.ACTION);
            this.state = 192;
            this.match(rsdlParser.ID);
            this.state = 193;
            this.match(rsdlParser.T__14);
            this.state = 202;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.T__26 || _la===rsdlParser.ID) {
                this.state = 194;
                this.parameter();
                this.state = 199;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===rsdlParser.T__15) {
                    this.state = 195;
                    this.match(rsdlParser.T__15);
                    this.state = 196;
                    this.parameter();
                    this.state = 201;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }

            this.state = 204;
            this.match(rsdlParser.T__16);
            this.state = 206;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.T__7) {
                this.state = 205;
                this.returnType();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 211;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rsdlParser.T__26) {
                this.state = 208;
                this.annotation();
                this.state = 213;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 214;
            this.match(rsdlParser.FUNCTION);
            this.state = 215;
            this.match(rsdlParser.ID);
            this.state = 216;
            this.match(rsdlParser.T__14);
            this.state = 225;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.T__26 || _la===rsdlParser.ID) {
                this.state = 217;
                this.parameter();
                this.state = 222;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===rsdlParser.T__15) {
                    this.state = 218;
                    this.match(rsdlParser.T__15);
                    this.state = 219;
                    this.parameter();
                    this.state = 224;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }

            this.state = 227;
            this.match(rsdlParser.T__16);
            this.state = 228;
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
        this.state = 234;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__26) {
            this.state = 231;
            this.annotation();
            this.state = 236;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 237;
        this.match(rsdlParser.ID);
        this.state = 238;
        this.match(rsdlParser.T__7);
        this.state = 239;
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
        this.state = 241;
        this.match(rsdlParser.T__7);
        this.state = 245;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__26) {
            this.state = 242;
            this.annotation();
            this.state = 247;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 248;
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
        this.state = 253;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__26) {
            this.state = 250;
            this.annotation();
            this.state = 255;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 256;
        this.enumKind();
        this.state = 257;
        this.match(rsdlParser.ID);
        this.state = 258;
        this.match(rsdlParser.T__4);
        this.state = 262;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__26 || _la===rsdlParser.ID) {
            this.state = 259;
            this.enumMember();
            this.state = 264;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 265;
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
        this.state = 267;
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
        this.state = 272;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__26) {
            this.state = 269;
            this.annotation();
            this.state = 274;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 275;
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
        this.state = 280;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__26) {
            this.state = 277;
            this.annotation();
            this.state = 282;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 283;
        this.match(rsdlParser.T__24);
        this.state = 284;
        this.match(rsdlParser.ID);
        this.state = 285;
        this.match(rsdlParser.T__7);
        this.state = 286;
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
        this.state = 291;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__26) {
            this.state = 288;
            this.annotation();
            this.state = 293;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 294;
        this.match(rsdlParser.T__25);
        this.state = 296;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rsdlParser.ID) {
            this.state = 295;
            this.match(rsdlParser.ID);
        }

        this.state = 298;
        this.match(rsdlParser.T__4);
        this.state = 302;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (rsdlParser.T__26 - 27)) | (1 << (rsdlParser.ACTION - 27)) | (1 << (rsdlParser.FUNCTION - 27)) | (1 << (rsdlParser.ID - 27)))) !== 0)) {
            this.state = 299;
            this.serviceMember();
            this.state = 304;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 305;
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
        this.state = 310;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 307;
            this.entitySet();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 308;
            this.singleton();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 309;
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
        this.state = 315;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__26) {
            this.state = 312;
            this.annotation();
            this.state = 317;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 318;
        this.match(rsdlParser.ID);
        this.state = 319;
        this.match(rsdlParser.T__7);
        this.state = 320;
        this.match(rsdlParser.T__8);
        this.state = 321;
        this.qualifiedName();
        this.state = 322;
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
        this.state = 327;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rsdlParser.T__26) {
            this.state = 324;
            this.annotation();
            this.state = 329;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 330;
        this.match(rsdlParser.ID);
        this.state = 331;
        this.match(rsdlParser.T__7);
        this.state = 332;
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
        this.state = 378;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 337;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rsdlParser.T__26) {
                this.state = 334;
                this.annotation();
                this.state = 339;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 340;
            this.match(rsdlParser.ACTION);
            this.state = 341;
            this.match(rsdlParser.ID);
            this.state = 342;
            this.match(rsdlParser.T__14);
            this.state = 351;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.T__26 || _la===rsdlParser.ID) {
                this.state = 343;
                this.parameter();
                this.state = 348;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===rsdlParser.T__15) {
                    this.state = 344;
                    this.match(rsdlParser.T__15);
                    this.state = 345;
                    this.parameter();
                    this.state = 350;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }

            this.state = 353;
            this.match(rsdlParser.T__16);
            this.state = 355;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.T__7) {
                this.state = 354;
                this.returnType();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 360;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rsdlParser.T__26) {
                this.state = 357;
                this.annotation();
                this.state = 362;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 363;
            this.match(rsdlParser.FUNCTION);
            this.state = 364;
            this.match(rsdlParser.ID);
            this.state = 365;
            this.match(rsdlParser.T__14);
            this.state = 374;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===rsdlParser.T__26 || _la===rsdlParser.ID) {
                this.state = 366;
                this.parameter();
                this.state = 371;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===rsdlParser.T__15) {
                    this.state = 367;
                    this.match(rsdlParser.T__15);
                    this.state = 368;
                    this.parameter();
                    this.state = 373;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }

            this.state = 376;
            this.match(rsdlParser.T__16);
            this.state = 377;
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
    this.enterRule(localctx, 50, rsdlParser.RULE_annotation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 380;
        this.match(rsdlParser.T__26);
        this.state = 381;
        this.qualifiedName();
        this.state = 382;
        this.match(rsdlParser.T__7);
        this.state = 383;
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
        this.state = 393;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rsdlParser.T__27:
            this.enterOuterAlt(localctx, 1);
            this.state = 385;
            this.match(rsdlParser.T__27);
            break;
        case rsdlParser.T__28:
            this.enterOuterAlt(localctx, 2);
            this.state = 386;
            this.match(rsdlParser.T__28);
            break;
        case rsdlParser.T__29:
            this.enterOuterAlt(localctx, 3);
            this.state = 387;
            this.match(rsdlParser.T__29);
            break;
        case rsdlParser.NUMBER:
            this.enterOuterAlt(localctx, 4);
            this.state = 388;
            this.match(rsdlParser.NUMBER);
            break;
        case rsdlParser.STRING:
            this.enterOuterAlt(localctx, 5);
            this.state = 389;
            this.match(rsdlParser.STRING);
            break;
        case rsdlParser.T__8:
            this.enterOuterAlt(localctx, 6);
            this.state = 390;
            this.arr();
            break;
        case rsdlParser.T__4:
            this.enterOuterAlt(localctx, 7);
            this.state = 391;
            this.obj();
            break;
        case rsdlParser.T__30:
            this.enterOuterAlt(localctx, 8);
            this.state = 392;
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
        this.state = 408;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 395;
            this.match(rsdlParser.T__8);
            this.state = 396;
            this.item();
            this.state = 401;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rsdlParser.T__15) {
                this.state = 397;
                this.match(rsdlParser.T__15);
                this.state = 398;
                this.item();
                this.state = 403;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 404;
            this.match(rsdlParser.T__9);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 406;
            this.match(rsdlParser.T__8);
            this.state = 407;
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
        this.state = 410;
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
        this.state = 425;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 412;
            this.match(rsdlParser.T__4);
            this.state = 413;
            this.pair();
            this.state = 418;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rsdlParser.T__15) {
                this.state = 414;
                this.match(rsdlParser.T__15);
                this.state = 415;
                this.pair();
                this.state = 420;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 421;
            this.match(rsdlParser.T__5);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 423;
            this.match(rsdlParser.T__4);
            this.state = 424;
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
    this.enterRule(localctx, 60, rsdlParser.RULE_pair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 427;
        this.match(rsdlParser.ID);
        this.state = 428;
        this.match(rsdlParser.T__7);
        this.state = 429;
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
    this.enterRule(localctx, 62, rsdlParser.RULE_path);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 431;
        this.match(rsdlParser.T__30);
        this.state = 434; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 432;
            this.match(rsdlParser.T__31);
            this.state = 433;
            this.match(rsdlParser.ID);
            this.state = 436; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===rsdlParser.T__31);
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
    this.enterRule(localctx, 64, rsdlParser.RULE_qualifiedName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 438;
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
