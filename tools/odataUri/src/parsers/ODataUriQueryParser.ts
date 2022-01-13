// Generated from src/parsers/ODataUriQuery.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ODataUriQueryVisitor } from "./ODataUriQueryVisitor";


export class ODataUriQueryParser extends Parser {
	public static readonly FILTER = 1;
	public static readonly SELECT = 2;
	public static readonly EXPAND = 3;
	public static readonly ORDERBY = 4;
	public static readonly TOP = 5;
	public static readonly SKIPKW = 6;
	public static readonly DESC = 7;
	public static readonly OR = 8;
	public static readonly AND = 9;
	public static readonly EQ = 10;
	public static readonly NEQ = 11;
	public static readonly GT = 12;
	public static readonly GTE = 13;
	public static readonly LT = 14;
	public static readonly LTE = 15;
	public static readonly AMP = 16;
	public static readonly ASSIGN = 17;
	public static readonly LPAREN = 18;
	public static readonly RPAREN = 19;
	public static readonly COMMA = 20;
	public static readonly NUMBER = 21;
	public static readonly WS = 22;
	public static readonly BOOLEAN = 23;
	public static readonly STRING = 24;
	public static readonly ID = 25;
	public static readonly RULE_queryOptions = 0;
	public static readonly RULE_queryOptionsList = 1;
	public static readonly RULE_queryOption = 2;
	public static readonly RULE_filterOption = 3;
	public static readonly RULE_selectOption = 4;
	public static readonly RULE_expandOption = 5;
	public static readonly RULE_orderByOption = 6;
	public static readonly RULE_topOption = 7;
	public static readonly RULE_skipOption = 8;
	public static readonly RULE_selectFieldList = 9;
	public static readonly RULE_expandFieldList = 10;
	public static readonly RULE_selectField = 11;
	public static readonly RULE_expandField = 12;
	public static readonly RULE_orderSpec = 13;
	public static readonly RULE_orderField = 14;
	public static readonly RULE_expression = 15;
	public static readonly RULE_orExpression = 16;
	public static readonly RULE_andExpression = 17;
	public static readonly RULE_compExpression = 18;
	public static readonly RULE_basicExpression = 19;
	public static readonly RULE_parenExpression = 20;
	public static readonly RULE_compOperator = 21;
	public static readonly RULE_identifier = 22;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"queryOptions", "queryOptionsList", "queryOption", "filterOption", "selectOption", 
		"expandOption", "orderByOption", "topOption", "skipOption", "selectFieldList", 
		"expandFieldList", "selectField", "expandField", "orderSpec", "orderField", 
		"expression", "orExpression", "andExpression", "compExpression", "basicExpression", 
		"parenExpression", "compOperator", "identifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'$filter'", "'$select'", "'$expand'", "'$orderby'", "'$top'", 
		"'$skip'", "'desc'", "'or'", "'and'", "'eq'", "'ne'", "'gt'", "'ge'", 
		"'lt'", "'le'", "'&'", "'='", "'('", "')'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "FILTER", "SELECT", "EXPAND", "ORDERBY", "TOP", "SKIPKW", "DESC", 
		"OR", "AND", "EQ", "NEQ", "GT", "GTE", "LT", "LTE", "AMP", "ASSIGN", "LPAREN", 
		"RPAREN", "COMMA", "NUMBER", "WS", "BOOLEAN", "STRING", "ID",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ODataUriQueryParser._LITERAL_NAMES, ODataUriQueryParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ODataUriQueryParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ODataUriQuery.g4"; }

	// @Override
	public get ruleNames(): string[] { return ODataUriQueryParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ODataUriQueryParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ODataUriQueryParser._ATN, this);
	}
	// @RuleVersion(0)
	public queryOptions(): QueryOptionsContext {
		let _localctx: QueryOptionsContext = new QueryOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ODataUriQueryParser.RULE_queryOptions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this.queryOption();
			this.state = 47;
			this.queryOptionsList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryOptionsList(): QueryOptionsListContext {
		let _localctx: QueryOptionsListContext = new QueryOptionsListContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ODataUriQueryParser.RULE_queryOptionsList);
		try {
			this.state = 54;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ODataUriQueryParser.AMP:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 49;
				this.match(ODataUriQueryParser.AMP);
				this.state = 50;
				this.queryOption();
				this.state = 51;
				this.queryOptionsList();
				}
				break;
			case ODataUriQueryParser.EOF:
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryOption(): QueryOptionContext {
		let _localctx: QueryOptionContext = new QueryOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ODataUriQueryParser.RULE_queryOption);
		try {
			this.state = 62;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ODataUriQueryParser.FILTER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 56;
				this.filterOption();
				}
				break;
			case ODataUriQueryParser.SELECT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 57;
				this.selectOption();
				}
				break;
			case ODataUriQueryParser.EXPAND:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 58;
				this.expandOption();
				}
				break;
			case ODataUriQueryParser.ORDERBY:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 59;
				this.orderByOption();
				}
				break;
			case ODataUriQueryParser.TOP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 60;
				this.topOption();
				}
				break;
			case ODataUriQueryParser.SKIPKW:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 61;
				this.skipOption();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public filterOption(): FilterOptionContext {
		let _localctx: FilterOptionContext = new FilterOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ODataUriQueryParser.RULE_filterOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this.match(ODataUriQueryParser.FILTER);
			this.state = 65;
			this.match(ODataUriQueryParser.ASSIGN);
			this.state = 66;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectOption(): SelectOptionContext {
		let _localctx: SelectOptionContext = new SelectOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ODataUriQueryParser.RULE_selectOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(ODataUriQueryParser.SELECT);
			this.state = 69;
			this.match(ODataUriQueryParser.ASSIGN);
			this.state = 70;
			this.selectFieldList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expandOption(): ExpandOptionContext {
		let _localctx: ExpandOptionContext = new ExpandOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ODataUriQueryParser.RULE_expandOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.match(ODataUriQueryParser.EXPAND);
			this.state = 73;
			this.match(ODataUriQueryParser.ASSIGN);
			this.state = 74;
			this.expandFieldList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderByOption(): OrderByOptionContext {
		let _localctx: OrderByOptionContext = new OrderByOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ODataUriQueryParser.RULE_orderByOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.match(ODataUriQueryParser.ORDERBY);
			this.state = 77;
			this.match(ODataUriQueryParser.ASSIGN);
			this.state = 78;
			this.orderSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topOption(): TopOptionContext {
		let _localctx: TopOptionContext = new TopOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ODataUriQueryParser.RULE_topOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.match(ODataUriQueryParser.TOP);
			this.state = 81;
			this.match(ODataUriQueryParser.ASSIGN);
			this.state = 82;
			this.match(ODataUriQueryParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public skipOption(): SkipOptionContext {
		let _localctx: SkipOptionContext = new SkipOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ODataUriQueryParser.RULE_skipOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.match(ODataUriQueryParser.SKIPKW);
			this.state = 85;
			this.match(ODataUriQueryParser.ASSIGN);
			this.state = 86;
			this.match(ODataUriQueryParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectFieldList(): SelectFieldListContext {
		let _localctx: SelectFieldListContext = new SelectFieldListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ODataUriQueryParser.RULE_selectFieldList);
		try {
			this.state = 93;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 88;
				this.selectField();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 89;
				this.selectField();
				this.state = 90;
				this.match(ODataUriQueryParser.COMMA);
				this.state = 91;
				this.selectFieldList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expandFieldList(): ExpandFieldListContext {
		let _localctx: ExpandFieldListContext = new ExpandFieldListContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ODataUriQueryParser.RULE_expandFieldList);
		try {
			this.state = 100;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 95;
				this.expandField();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 96;
				this.expandField();
				this.state = 97;
				this.match(ODataUriQueryParser.COMMA);
				this.state = 98;
				this.expandFieldList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectField(): SelectFieldContext {
		let _localctx: SelectFieldContext = new SelectFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ODataUriQueryParser.RULE_selectField);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expandField(): ExpandFieldContext {
		let _localctx: ExpandFieldContext = new ExpandFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ODataUriQueryParser.RULE_expandField);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderSpec(): OrderSpecContext {
		let _localctx: OrderSpecContext = new OrderSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ODataUriQueryParser.RULE_orderSpec);
		try {
			this.state = 110;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 106;
				this.orderField();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 107;
				this.orderField();
				this.state = 108;
				this.match(ODataUriQueryParser.DESC);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderField(): OrderFieldContext {
		let _localctx: OrderFieldContext = new OrderFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ODataUriQueryParser.RULE_orderField);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ODataUriQueryParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.orExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public orExpression(): OrExpressionContext;
	public orExpression(_p: number): OrExpressionContext;
	// @RuleVersion(0)
	public orExpression(_p?: number): OrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: OrExpressionContext = new OrExpressionContext(this._ctx, _parentState);
		let _prevctx: OrExpressionContext = _localctx;
		let _startState: number = 32;
		this.enterRecursionRule(_localctx, 32, ODataUriQueryParser.RULE_orExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 117;
			this.andExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 124;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new OrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ODataUriQueryParser.RULE_orExpression);
					this.state = 119;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 120;
					this.match(ODataUriQueryParser.OR);
					this.state = 121;
					this.andExpression(0);
					}
					}
				}
				this.state = 126;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public andExpression(): AndExpressionContext;
	public andExpression(_p: number): AndExpressionContext;
	// @RuleVersion(0)
	public andExpression(_p?: number): AndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AndExpressionContext = new AndExpressionContext(this._ctx, _parentState);
		let _prevctx: AndExpressionContext = _localctx;
		let _startState: number = 34;
		this.enterRecursionRule(_localctx, 34, ODataUriQueryParser.RULE_andExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 128;
			this.compExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 135;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new AndExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ODataUriQueryParser.RULE_andExpression);
					this.state = 130;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 131;
					this.match(ODataUriQueryParser.AND);
					this.state = 132;
					this.compExpression(0);
					}
					}
				}
				this.state = 137;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public compExpression(): CompExpressionContext;
	public compExpression(_p: number): CompExpressionContext;
	// @RuleVersion(0)
	public compExpression(_p?: number): CompExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: CompExpressionContext = new CompExpressionContext(this._ctx, _parentState);
		let _prevctx: CompExpressionContext = _localctx;
		let _startState: number = 36;
		this.enterRecursionRule(_localctx, 36, ODataUriQueryParser.RULE_compExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 139;
			this.basicExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 147;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new CompExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ODataUriQueryParser.RULE_compExpression);
					this.state = 141;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 142;
					this.compOperator();
					this.state = 143;
					this.basicExpression();
					}
					}
				}
				this.state = 149;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basicExpression(): BasicExpressionContext {
		let _localctx: BasicExpressionContext = new BasicExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ODataUriQueryParser.RULE_basicExpression);
		try {
			this.state = 155;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ODataUriQueryParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 150;
				this.match(ODataUriQueryParser.NUMBER);
				}
				break;
			case ODataUriQueryParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 151;
				this.match(ODataUriQueryParser.STRING);
				}
				break;
			case ODataUriQueryParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 152;
				this.match(ODataUriQueryParser.BOOLEAN);
				}
				break;
			case ODataUriQueryParser.ID:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 153;
				this.identifier();
				}
				break;
			case ODataUriQueryParser.LPAREN:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 154;
				this.parenExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parenExpression(): ParenExpressionContext {
		let _localctx: ParenExpressionContext = new ParenExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ODataUriQueryParser.RULE_parenExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.match(ODataUriQueryParser.LPAREN);
			this.state = 158;
			this.expression();
			this.state = 159;
			this.match(ODataUriQueryParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compOperator(): CompOperatorContext {
		let _localctx: CompOperatorContext = new CompOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ODataUriQueryParser.RULE_compOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ODataUriQueryParser.EQ) | (1 << ODataUriQueryParser.NEQ) | (1 << ODataUriQueryParser.GT) | (1 << ODataUriQueryParser.GTE) | (1 << ODataUriQueryParser.LT) | (1 << ODataUriQueryParser.LTE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ODataUriQueryParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(ODataUriQueryParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 16:
			return this.orExpression_sempred(_localctx as OrExpressionContext, predIndex);

		case 17:
			return this.andExpression_sempred(_localctx as AndExpressionContext, predIndex);

		case 18:
			return this.compExpression_sempred(_localctx as CompExpressionContext, predIndex);
		}
		return true;
	}
	private orExpression_sempred(_localctx: OrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private andExpression_sempred(_localctx: AndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private compExpression_sempred(_localctx: CompExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1B\xA8\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x039\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05" +
		"\x04A\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03" +
		"\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x05" +
		"\v`\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x05\fg\n\f\x03\r\x03\r\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0Fq\n\x0F\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12}" +
		"\n\x12\f\x12\x0E\x12\x80\v\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x07\x13\x88\n\x13\f\x13\x0E\x13\x8B\v\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\x94\n\x14\f\x14\x0E\x14\x97" +
		"\v\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\x9E\n\x15\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x02\x02" +
		"\x05\"$&\x19\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x02\x02\x03\x03\x02\f\x11\x02\xA0\x020\x03\x02\x02" +
		"\x02\x048\x03\x02\x02\x02\x06@\x03\x02\x02\x02\bB\x03\x02\x02\x02\nF\x03" +
		"\x02\x02\x02\fJ\x03\x02\x02\x02\x0EN\x03\x02\x02\x02\x10R\x03\x02\x02" +
		"\x02\x12V\x03\x02\x02\x02\x14_\x03\x02\x02\x02\x16f\x03\x02\x02\x02\x18" +
		"h\x03\x02\x02\x02\x1Aj\x03\x02\x02\x02\x1Cp\x03\x02\x02\x02\x1Er\x03\x02" +
		"\x02\x02 t\x03\x02\x02\x02\"v\x03\x02\x02\x02$\x81\x03\x02\x02\x02&\x8C" +
		"\x03\x02\x02\x02(\x9D\x03\x02\x02\x02*\x9F\x03\x02\x02\x02,\xA3\x03\x02" +
		"\x02\x02.\xA5\x03\x02\x02\x0201\x05\x06\x04\x0212\x05\x04\x03\x022\x03" +
		"\x03\x02\x02\x0234\x07\x12\x02\x0245\x05\x06\x04\x0256\x05\x04\x03\x02" +
		"69\x03\x02\x02\x0279\x03\x02\x02\x0283\x03\x02\x02\x0287\x03\x02\x02\x02" +
		"9\x05\x03\x02\x02\x02:A\x05\b\x05\x02;A\x05\n\x06\x02<A\x05\f\x07\x02" +
		"=A\x05\x0E\b\x02>A\x05\x10\t\x02?A\x05\x12\n\x02@:\x03\x02\x02\x02@;\x03" +
		"\x02\x02\x02@<\x03\x02\x02\x02@=\x03\x02\x02\x02@>\x03\x02\x02\x02@?\x03" +
		"\x02\x02\x02A\x07\x03\x02\x02\x02BC\x07\x03\x02\x02CD\x07\x13\x02\x02" +
		"DE\x05 \x11\x02E\t\x03\x02\x02\x02FG\x07\x04\x02\x02GH\x07\x13\x02\x02" +
		"HI\x05\x14\v\x02I\v\x03\x02\x02\x02JK\x07\x05\x02\x02KL\x07\x13\x02\x02" +
		"LM\x05\x16\f\x02M\r\x03\x02\x02\x02NO\x07\x06\x02\x02OP\x07\x13\x02\x02" +
		"PQ\x05\x1C\x0F\x02Q\x0F\x03\x02\x02\x02RS\x07\x07\x02\x02ST\x07\x13\x02" +
		"\x02TU\x07\x17\x02\x02U\x11\x03\x02\x02\x02VW\x07\b\x02\x02WX\x07\x13" +
		"\x02\x02XY\x07\x17\x02\x02Y\x13\x03\x02\x02\x02Z`\x05\x18\r\x02[\\\x05" +
		"\x18\r\x02\\]\x07\x16\x02\x02]^\x05\x14\v\x02^`\x03\x02\x02\x02_Z\x03" +
		"\x02\x02\x02_[\x03\x02\x02\x02`\x15\x03\x02\x02\x02ag\x05\x1A\x0E\x02" +
		"bc\x05\x1A\x0E\x02cd\x07\x16\x02\x02de\x05\x16\f\x02eg\x03\x02\x02\x02" +
		"fa\x03\x02\x02\x02fb\x03\x02\x02\x02g\x17\x03\x02\x02\x02hi\x05.\x18\x02" +
		"i\x19\x03\x02\x02\x02jk\x05.\x18\x02k\x1B\x03\x02\x02\x02lq\x05\x1E\x10" +
		"\x02mn\x05\x1E\x10\x02no\x07\t\x02\x02oq\x03\x02\x02\x02pl\x03\x02\x02" +
		"\x02pm\x03\x02\x02\x02q\x1D\x03\x02\x02\x02rs\x05.\x18\x02s\x1F\x03\x02" +
		"\x02\x02tu\x05\"\x12\x02u!\x03\x02\x02\x02vw\b\x12\x01\x02wx\x05$\x13" +
		"\x02x~\x03\x02\x02\x02yz\f\x03\x02\x02z{\x07\n\x02\x02{}\x05$\x13\x02" +
		"|y\x03\x02\x02\x02}\x80\x03\x02\x02\x02~|\x03\x02\x02\x02~\x7F\x03\x02" +
		"\x02\x02\x7F#\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x81\x82\b\x13\x01\x02" +
		"\x82\x83\x05&\x14\x02\x83\x89\x03\x02\x02\x02\x84\x85\f\x03\x02\x02\x85" +
		"\x86\x07\v\x02\x02\x86\x88\x05&\x14\x02\x87\x84\x03\x02\x02\x02\x88\x8B" +
		"\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A%" +
		"\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8C\x8D\b\x14\x01\x02\x8D\x8E" +
		"\x05(\x15\x02\x8E\x95\x03\x02\x02\x02\x8F\x90\f\x03\x02\x02\x90\x91\x05" +
		",\x17\x02\x91\x92\x05(\x15\x02\x92\x94\x03\x02\x02\x02\x93\x8F\x03\x02" +
		"\x02\x02\x94\x97\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95\x96\x03\x02" +
		"\x02\x02\x96\'\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x98\x9E\x07\x17" +
		"\x02\x02\x99\x9E\x07\x1A\x02\x02\x9A\x9E\x07\x19\x02\x02\x9B\x9E\x05." +
		"\x18\x02\x9C\x9E\x05*\x16\x02\x9D\x98\x03\x02\x02\x02\x9D\x99\x03\x02" +
		"\x02\x02\x9D\x9A\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9C\x03\x02" +
		"\x02\x02\x9E)\x03\x02\x02\x02\x9F\xA0\x07\x14\x02\x02\xA0\xA1\x05 \x11" +
		"\x02\xA1\xA2\x07\x15\x02\x02\xA2+\x03\x02\x02\x02\xA3\xA4\t\x02\x02\x02" +
		"\xA4-\x03\x02\x02\x02\xA5\xA6\x07\x1B\x02\x02\xA6/\x03\x02\x02\x02\v8" +
		"@_fp~\x89\x95\x9D";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ODataUriQueryParser.__ATN) {
			ODataUriQueryParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ODataUriQueryParser._serializedATN));
		}

		return ODataUriQueryParser.__ATN;
	}

}

export class QueryOptionsContext extends ParserRuleContext {
	public queryOption(): QueryOptionContext {
		return this.getRuleContext(0, QueryOptionContext);
	}
	public queryOptionsList(): QueryOptionsListContext {
		return this.getRuleContext(0, QueryOptionsListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_queryOptions; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitQueryOptions) {
			return visitor.visitQueryOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryOptionsListContext extends ParserRuleContext {
	public AMP(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.AMP, 0); }
	public queryOption(): QueryOptionContext | undefined {
		return this.tryGetRuleContext(0, QueryOptionContext);
	}
	public queryOptionsList(): QueryOptionsListContext | undefined {
		return this.tryGetRuleContext(0, QueryOptionsListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_queryOptionsList; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitQueryOptionsList) {
			return visitor.visitQueryOptionsList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryOptionContext extends ParserRuleContext {
	public filterOption(): FilterOptionContext | undefined {
		return this.tryGetRuleContext(0, FilterOptionContext);
	}
	public selectOption(): SelectOptionContext | undefined {
		return this.tryGetRuleContext(0, SelectOptionContext);
	}
	public expandOption(): ExpandOptionContext | undefined {
		return this.tryGetRuleContext(0, ExpandOptionContext);
	}
	public orderByOption(): OrderByOptionContext | undefined {
		return this.tryGetRuleContext(0, OrderByOptionContext);
	}
	public topOption(): TopOptionContext | undefined {
		return this.tryGetRuleContext(0, TopOptionContext);
	}
	public skipOption(): SkipOptionContext | undefined {
		return this.tryGetRuleContext(0, SkipOptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_queryOption; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitQueryOption) {
			return visitor.visitQueryOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilterOptionContext extends ParserRuleContext {
	public FILTER(): TerminalNode { return this.getToken(ODataUriQueryParser.FILTER, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(ODataUriQueryParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_filterOption; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitFilterOption) {
			return visitor.visitFilterOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectOptionContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(ODataUriQueryParser.SELECT, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(ODataUriQueryParser.ASSIGN, 0); }
	public selectFieldList(): SelectFieldListContext {
		return this.getRuleContext(0, SelectFieldListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_selectOption; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitSelectOption) {
			return visitor.visitSelectOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpandOptionContext extends ParserRuleContext {
	public EXPAND(): TerminalNode { return this.getToken(ODataUriQueryParser.EXPAND, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(ODataUriQueryParser.ASSIGN, 0); }
	public expandFieldList(): ExpandFieldListContext {
		return this.getRuleContext(0, ExpandFieldListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_expandOption; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitExpandOption) {
			return visitor.visitExpandOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderByOptionContext extends ParserRuleContext {
	public ORDERBY(): TerminalNode { return this.getToken(ODataUriQueryParser.ORDERBY, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(ODataUriQueryParser.ASSIGN, 0); }
	public orderSpec(): OrderSpecContext {
		return this.getRuleContext(0, OrderSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_orderByOption; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitOrderByOption) {
			return visitor.visitOrderByOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopOptionContext extends ParserRuleContext {
	public TOP(): TerminalNode { return this.getToken(ODataUriQueryParser.TOP, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(ODataUriQueryParser.ASSIGN, 0); }
	public NUMBER(): TerminalNode { return this.getToken(ODataUriQueryParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_topOption; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitTopOption) {
			return visitor.visitTopOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SkipOptionContext extends ParserRuleContext {
	public SKIPKW(): TerminalNode { return this.getToken(ODataUriQueryParser.SKIPKW, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(ODataUriQueryParser.ASSIGN, 0); }
	public NUMBER(): TerminalNode { return this.getToken(ODataUriQueryParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_skipOption; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitSkipOption) {
			return visitor.visitSkipOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectFieldListContext extends ParserRuleContext {
	public selectField(): SelectFieldContext {
		return this.getRuleContext(0, SelectFieldContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.COMMA, 0); }
	public selectFieldList(): SelectFieldListContext | undefined {
		return this.tryGetRuleContext(0, SelectFieldListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_selectFieldList; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitSelectFieldList) {
			return visitor.visitSelectFieldList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpandFieldListContext extends ParserRuleContext {
	public expandField(): ExpandFieldContext {
		return this.getRuleContext(0, ExpandFieldContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.COMMA, 0); }
	public expandFieldList(): ExpandFieldListContext | undefined {
		return this.tryGetRuleContext(0, ExpandFieldListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_expandFieldList; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitExpandFieldList) {
			return visitor.visitExpandFieldList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectFieldContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_selectField; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitSelectField) {
			return visitor.visitSelectField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpandFieldContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_expandField; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitExpandField) {
			return visitor.visitExpandField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderSpecContext extends ParserRuleContext {
	public orderField(): OrderFieldContext {
		return this.getRuleContext(0, OrderFieldContext);
	}
	public DESC(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.DESC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_orderSpec; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitOrderSpec) {
			return visitor.visitOrderSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderFieldContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_orderField; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitOrderField) {
			return visitor.visitOrderField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public orExpression(): OrExpressionContext {
		return this.getRuleContext(0, OrExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_expression; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrExpressionContext extends ParserRuleContext {
	public andExpression(): AndExpressionContext {
		return this.getRuleContext(0, AndExpressionContext);
	}
	public orExpression(): OrExpressionContext | undefined {
		return this.tryGetRuleContext(0, OrExpressionContext);
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_orExpression; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitOrExpression) {
			return visitor.visitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndExpressionContext extends ParserRuleContext {
	public compExpression(): CompExpressionContext {
		return this.getRuleContext(0, CompExpressionContext);
	}
	public andExpression(): AndExpressionContext | undefined {
		return this.tryGetRuleContext(0, AndExpressionContext);
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.AND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_andExpression; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitAndExpression) {
			return visitor.visitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompExpressionContext extends ParserRuleContext {
	public basicExpression(): BasicExpressionContext {
		return this.getRuleContext(0, BasicExpressionContext);
	}
	public compExpression(): CompExpressionContext | undefined {
		return this.tryGetRuleContext(0, CompExpressionContext);
	}
	public compOperator(): CompOperatorContext | undefined {
		return this.tryGetRuleContext(0, CompOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_compExpression; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitCompExpression) {
			return visitor.visitCompExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicExpressionContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.NUMBER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.STRING, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.BOOLEAN, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public parenExpression(): ParenExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParenExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_basicExpression; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitBasicExpression) {
			return visitor.visitBasicExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParenExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ODataUriQueryParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ODataUriQueryParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_parenExpression; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitParenExpression) {
			return visitor.visitParenExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompOperatorContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.NEQ, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.GTE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.GT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.LTE, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.LT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_compOperator; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitCompOperator) {
			return visitor.visitCompOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ODataUriQueryParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_identifier; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


