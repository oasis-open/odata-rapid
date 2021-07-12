// Generated from c:\Users\clhabins\source\repos\rapid-rocks-editor\src\js\odata-uri\parsers\ODataUriQuery.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ODataUriQueryLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		FILTER=1, OR=2, AND=3, EQ=4, NEQ=5, GT=6, GTE=7, LT=8, LTE=9, AMP=10, 
		ASSIGN=11, LPAREN=12, RPAREN=13, ID=14, NUMBER=15, WS=16;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"FILTER", "OR", "AND", "EQ", "NEQ", "GT", "GTE", "LT", "LTE", "AMP", 
			"ASSIGN", "LPAREN", "RPAREN", "ID", "NUMBER", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'$filter'", "'or'", "'and'", "'eq'", "'neq'", "'gt'", "'gte'", 
			"'lt'", "'lte'", "'&'", "'='", "'('", "')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "FILTER", "OR", "AND", "EQ", "NEQ", "GT", "GTE", "LT", "LTE", "AMP", 
			"ASSIGN", "LPAREN", "RPAREN", "ID", "NUMBER", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public ODataUriQueryLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "ODataUriQuery.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\22]\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\3\2\3\2\3"+
		"\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\6\3\6"+
		"\3\6\3\6\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\13"+
		"\3\13\3\f\3\f\3\r\3\r\3\16\3\16\3\17\6\17Q\n\17\r\17\16\17R\3\20\6\20"+
		"V\n\20\r\20\16\20W\3\21\3\21\3\21\3\21\2\2\22\3\3\5\4\7\5\t\6\13\7\r\b"+
		"\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22\3\2\5\4\2C\\c|"+
		"\3\2\62;\3\2\"\"\2^\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2"+
		"\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3"+
		"\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2"+
		"\2\2!\3\2\2\2\3#\3\2\2\2\5+\3\2\2\2\7.\3\2\2\2\t\62\3\2\2\2\13\65\3\2"+
		"\2\2\r9\3\2\2\2\17<\3\2\2\2\21@\3\2\2\2\23C\3\2\2\2\25G\3\2\2\2\27I\3"+
		"\2\2\2\31K\3\2\2\2\33M\3\2\2\2\35P\3\2\2\2\37U\3\2\2\2!Y\3\2\2\2#$\7&"+
		"\2\2$%\7h\2\2%&\7k\2\2&\'\7n\2\2\'(\7v\2\2()\7g\2\2)*\7t\2\2*\4\3\2\2"+
		"\2+,\7q\2\2,-\7t\2\2-\6\3\2\2\2./\7c\2\2/\60\7p\2\2\60\61\7f\2\2\61\b"+
		"\3\2\2\2\62\63\7g\2\2\63\64\7s\2\2\64\n\3\2\2\2\65\66\7p\2\2\66\67\7g"+
		"\2\2\678\7s\2\28\f\3\2\2\29:\7i\2\2:;\7v\2\2;\16\3\2\2\2<=\7i\2\2=>\7"+
		"v\2\2>?\7g\2\2?\20\3\2\2\2@A\7n\2\2AB\7v\2\2B\22\3\2\2\2CD\7n\2\2DE\7"+
		"v\2\2EF\7g\2\2F\24\3\2\2\2GH\7(\2\2H\26\3\2\2\2IJ\7?\2\2J\30\3\2\2\2K"+
		"L\7*\2\2L\32\3\2\2\2MN\7+\2\2N\34\3\2\2\2OQ\t\2\2\2PO\3\2\2\2QR\3\2\2"+
		"\2RP\3\2\2\2RS\3\2\2\2S\36\3\2\2\2TV\t\3\2\2UT\3\2\2\2VW\3\2\2\2WU\3\2"+
		"\2\2WX\3\2\2\2X \3\2\2\2YZ\t\4\2\2Z[\3\2\2\2[\\\b\21\2\2\\\"\3\2\2\2\5"+
		"\2RW\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}