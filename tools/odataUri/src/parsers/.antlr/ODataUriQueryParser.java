// Generated from c:\Users\clhabins\source\repos\rapid-rocks-editor\src\js\odata-uri\parsers\ODataUriQuery.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ODataUriQueryParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		FILTER=1, OR=2, AND=3, EQ=4, NEQ=5, GT=6, GTE=7, LT=8, LTE=9, AMP=10, 
		ASSIGN=11, LPAREN=12, RPAREN=13, ID=14, NUMBER=15, WS=16;
	public static final int
		RULE_queryOptions = 0, RULE_queryOptionsList = 1, RULE_queryOption = 2, 
		RULE_filterOption = 3, RULE_expression = 4, RULE_orExpression = 5, RULE_andExpression = 6, 
		RULE_compExpression = 7, RULE_basicExpression = 8, RULE_parenExpression = 9, 
		RULE_compOperator = 10, RULE_identifier = 11;
	private static String[] makeRuleNames() {
		return new String[] {
			"queryOptions", "queryOptionsList", "queryOption", "filterOption", "expression", 
			"orExpression", "andExpression", "compExpression", "basicExpression", 
			"parenExpression", "compOperator", "identifier"
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

	@Override
	public String getGrammarFileName() { return "ODataUriQuery.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ODataUriQueryParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class QueryOptionsContext extends ParserRuleContext {
		public QueryOptionContext queryOption() {
			return getRuleContext(QueryOptionContext.class,0);
		}
		public QueryOptionsListContext queryOptionsList() {
			return getRuleContext(QueryOptionsListContext.class,0);
		}
		public QueryOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryOptions; }
	}

	public final QueryOptionsContext queryOptions() throws RecognitionException {
		QueryOptionsContext _localctx = new QueryOptionsContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_queryOptions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(24);
			queryOption();
			setState(25);
			queryOptionsList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QueryOptionsListContext extends ParserRuleContext {
		public TerminalNode AMP() { return getToken(ODataUriQueryParser.AMP, 0); }
		public QueryOptionsListContext queryOptionsList() {
			return getRuleContext(QueryOptionsListContext.class,0);
		}
		public QueryOptionsListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryOptionsList; }
	}

	public final QueryOptionsListContext queryOptionsList() throws RecognitionException {
		QueryOptionsListContext _localctx = new QueryOptionsListContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_queryOptionsList);
		try {
			setState(30);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case AMP:
				enterOuterAlt(_localctx, 1);
				{
				setState(27);
				match(AMP);
				setState(28);
				queryOptionsList();
				}
				break;
			case EOF:
				enterOuterAlt(_localctx, 2);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QueryOptionContext extends ParserRuleContext {
		public FilterOptionContext filterOption() {
			return getRuleContext(FilterOptionContext.class,0);
		}
		public QueryOptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryOption; }
	}

	public final QueryOptionContext queryOption() throws RecognitionException {
		QueryOptionContext _localctx = new QueryOptionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_queryOption);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(32);
			filterOption();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FilterOptionContext extends ParserRuleContext {
		public TerminalNode FILTER() { return getToken(ODataUriQueryParser.FILTER, 0); }
		public TerminalNode ASSIGN() { return getToken(ODataUriQueryParser.ASSIGN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public FilterOptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_filterOption; }
	}

	public final FilterOptionContext filterOption() throws RecognitionException {
		FilterOptionContext _localctx = new FilterOptionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_filterOption);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(34);
			match(FILTER);
			setState(35);
			match(ASSIGN);
			setState(36);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public OrExpressionContext orExpression() {
			return getRuleContext(OrExpressionContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_expression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			orExpression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OrExpressionContext extends ParserRuleContext {
		public AndExpressionContext andExpression() {
			return getRuleContext(AndExpressionContext.class,0);
		}
		public OrExpressionContext orExpression() {
			return getRuleContext(OrExpressionContext.class,0);
		}
		public TerminalNode OR() { return getToken(ODataUriQueryParser.OR, 0); }
		public OrExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_orExpression; }
	}

	public final OrExpressionContext orExpression() throws RecognitionException {
		return orExpression(0);
	}

	private OrExpressionContext orExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		OrExpressionContext _localctx = new OrExpressionContext(_ctx, _parentState);
		OrExpressionContext _prevctx = _localctx;
		int _startState = 10;
		enterRecursionRule(_localctx, 10, RULE_orExpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(41);
			andExpression(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(48);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new OrExpressionContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_orExpression);
					setState(43);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(44);
					match(OR);
					setState(45);
					andExpression(0);
					}
					} 
				}
				setState(50);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class AndExpressionContext extends ParserRuleContext {
		public CompExpressionContext compExpression() {
			return getRuleContext(CompExpressionContext.class,0);
		}
		public AndExpressionContext andExpression() {
			return getRuleContext(AndExpressionContext.class,0);
		}
		public TerminalNode AND() { return getToken(ODataUriQueryParser.AND, 0); }
		public AndExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_andExpression; }
	}

	public final AndExpressionContext andExpression() throws RecognitionException {
		return andExpression(0);
	}

	private AndExpressionContext andExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		AndExpressionContext _localctx = new AndExpressionContext(_ctx, _parentState);
		AndExpressionContext _prevctx = _localctx;
		int _startState = 12;
		enterRecursionRule(_localctx, 12, RULE_andExpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(52);
			compExpression(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(59);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new AndExpressionContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_andExpression);
					setState(54);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(55);
					match(AND);
					setState(56);
					compExpression(0);
					}
					} 
				}
				setState(61);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class CompExpressionContext extends ParserRuleContext {
		public BasicExpressionContext basicExpression() {
			return getRuleContext(BasicExpressionContext.class,0);
		}
		public CompExpressionContext compExpression() {
			return getRuleContext(CompExpressionContext.class,0);
		}
		public CompOperatorContext compOperator() {
			return getRuleContext(CompOperatorContext.class,0);
		}
		public CompExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compExpression; }
	}

	public final CompExpressionContext compExpression() throws RecognitionException {
		return compExpression(0);
	}

	private CompExpressionContext compExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		CompExpressionContext _localctx = new CompExpressionContext(_ctx, _parentState);
		CompExpressionContext _prevctx = _localctx;
		int _startState = 14;
		enterRecursionRule(_localctx, 14, RULE_compExpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(63);
			basicExpression();
			}
			_ctx.stop = _input.LT(-1);
			setState(71);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new CompExpressionContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_compExpression);
					setState(65);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(66);
					compOperator();
					setState(67);
					basicExpression();
					}
					} 
				}
				setState(73);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class BasicExpressionContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(ODataUriQueryParser.NUMBER, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ParenExpressionContext parenExpression() {
			return getRuleContext(ParenExpressionContext.class,0);
		}
		public BasicExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_basicExpression; }
	}

	public final BasicExpressionContext basicExpression() throws RecognitionException {
		BasicExpressionContext _localctx = new BasicExpressionContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_basicExpression);
		try {
			setState(77);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMBER:
				enterOuterAlt(_localctx, 1);
				{
				setState(74);
				match(NUMBER);
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 2);
				{
				setState(75);
				identifier();
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 3);
				{
				setState(76);
				parenExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParenExpressionContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(ODataUriQueryParser.LPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(ODataUriQueryParser.RPAREN, 0); }
		public ParenExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parenExpression; }
	}

	public final ParenExpressionContext parenExpression() throws RecognitionException {
		ParenExpressionContext _localctx = new ParenExpressionContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_parenExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			match(LPAREN);
			setState(80);
			expression();
			setState(81);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CompOperatorContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(ODataUriQueryParser.EQ, 0); }
		public TerminalNode NEQ() { return getToken(ODataUriQueryParser.NEQ, 0); }
		public TerminalNode GTE() { return getToken(ODataUriQueryParser.GTE, 0); }
		public TerminalNode GT() { return getToken(ODataUriQueryParser.GT, 0); }
		public TerminalNode LTE() { return getToken(ODataUriQueryParser.LTE, 0); }
		public TerminalNode LT() { return getToken(ODataUriQueryParser.LT, 0); }
		public CompOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compOperator; }
	}

	public final CompOperatorContext compOperator() throws RecognitionException {
		CompOperatorContext _localctx = new CompOperatorContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_compOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(83);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << EQ) | (1L << NEQ) | (1L << GT) | (1L << GTE) | (1L << LT) | (1L << LTE))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(ODataUriQueryParser.ID, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 5:
			return orExpression_sempred((OrExpressionContext)_localctx, predIndex);
		case 6:
			return andExpression_sempred((AndExpressionContext)_localctx, predIndex);
		case 7:
			return compExpression_sempred((CompExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean orExpression_sempred(OrExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean andExpression_sempred(AndExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean compExpression_sempred(CompExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 2:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\22Z\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t\13\4"+
		"\f\t\f\4\r\t\r\3\2\3\2\3\2\3\3\3\3\3\3\5\3!\n\3\3\4\3\4\3\5\3\5\3\5\3"+
		"\5\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\7\7\61\n\7\f\7\16\7\64\13\7\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\7\b<\n\b\f\b\16\b?\13\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\7"+
		"\tH\n\t\f\t\16\tK\13\t\3\n\3\n\3\n\5\nP\n\n\3\13\3\13\3\13\3\13\3\f\3"+
		"\f\3\r\3\r\3\r\2\5\f\16\20\16\2\4\6\b\n\f\16\20\22\24\26\30\2\3\3\2\6"+
		"\13\2S\2\32\3\2\2\2\4 \3\2\2\2\6\"\3\2\2\2\b$\3\2\2\2\n(\3\2\2\2\f*\3"+
		"\2\2\2\16\65\3\2\2\2\20@\3\2\2\2\22O\3\2\2\2\24Q\3\2\2\2\26U\3\2\2\2\30"+
		"W\3\2\2\2\32\33\5\6\4\2\33\34\5\4\3\2\34\3\3\2\2\2\35\36\7\f\2\2\36!\5"+
		"\4\3\2\37!\3\2\2\2 \35\3\2\2\2 \37\3\2\2\2!\5\3\2\2\2\"#\5\b\5\2#\7\3"+
		"\2\2\2$%\7\3\2\2%&\7\r\2\2&\'\5\n\6\2\'\t\3\2\2\2()\5\f\7\2)\13\3\2\2"+
		"\2*+\b\7\1\2+,\5\16\b\2,\62\3\2\2\2-.\f\3\2\2./\7\4\2\2/\61\5\16\b\2\60"+
		"-\3\2\2\2\61\64\3\2\2\2\62\60\3\2\2\2\62\63\3\2\2\2\63\r\3\2\2\2\64\62"+
		"\3\2\2\2\65\66\b\b\1\2\66\67\5\20\t\2\67=\3\2\2\289\f\3\2\29:\7\5\2\2"+
		":<\5\20\t\2;8\3\2\2\2<?\3\2\2\2=;\3\2\2\2=>\3\2\2\2>\17\3\2\2\2?=\3\2"+
		"\2\2@A\b\t\1\2AB\5\22\n\2BI\3\2\2\2CD\f\3\2\2DE\5\26\f\2EF\5\22\n\2FH"+
		"\3\2\2\2GC\3\2\2\2HK\3\2\2\2IG\3\2\2\2IJ\3\2\2\2J\21\3\2\2\2KI\3\2\2\2"+
		"LP\7\21\2\2MP\5\30\r\2NP\5\24\13\2OL\3\2\2\2OM\3\2\2\2ON\3\2\2\2P\23\3"+
		"\2\2\2QR\7\16\2\2RS\5\n\6\2ST\7\17\2\2T\25\3\2\2\2UV\t\2\2\2V\27\3\2\2"+
		"\2WX\7\20\2\2X\31\3\2\2\2\7 \62=IO";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}