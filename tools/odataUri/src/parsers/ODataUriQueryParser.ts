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
	public static readonly RULE_queryOption = 0;
	public static readonly RULE_queryOptions = 1;
	public static readonly RULE_queryOptionsList = 2;
	public static readonly RULE_collectionQueryOption = 3;
	public static readonly RULE_collectionQueryOptions = 4;
	public static readonly RULE_collectionQueryOptionsList = 5;
	public static readonly RULE_filterOption = 6;
	public static readonly RULE_selectOption = 7;
	public static readonly RULE_expandOption = 8;
	public static readonly RULE_orderByOption = 9;
	public static readonly RULE_topOption = 10;
	public static readonly RULE_skipOption = 11;
	public static readonly RULE_selectFieldList = 12;
	public static readonly RULE_expandFieldList = 13;
	public static readonly RULE_orderSpecList = 14;
	public static readonly RULE_selectField = 15;
	public static readonly RULE_expandField = 16;
	public static readonly RULE_orderSpec = 17;
	public static readonly RULE_orderField = 18;
	public static readonly RULE_expression = 19;
	public static readonly RULE_orExpression = 20;
	public static readonly RULE_andExpression = 21;
	public static readonly RULE_compExpression = 22;
	public static readonly RULE_basicExpression = 23;
	public static readonly RULE_parenExpression = 24;
	public static readonly RULE_compOperator = 25;
	public static readonly RULE_identifier = 26;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"queryOption", "queryOptions", "queryOptionsList", "collectionQueryOption", 
		"collectionQueryOptions", "collectionQueryOptionsList", "filterOption", 
		"selectOption", "expandOption", "orderByOption", "topOption", "skipOption", 
		"selectFieldList", "expandFieldList", "orderSpecList", "selectField", 
		"expandField", "orderSpec", "orderField", "expression", "orExpression", 
		"andExpression", "compExpression", "basicExpression", "parenExpression", 
		"compOperator", "identifier",
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
	public queryOption(): QueryOptionContext {
		let _localctx: QueryOptionContext = new QueryOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ODataUriQueryParser.RULE_queryOption);
		try {
			this.state = 56;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ODataUriQueryParser.SELECT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 54;
				this.selectOption();
				}
				break;
			case ODataUriQueryParser.EXPAND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 55;
				this.expandOption();
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
	public queryOptions(): QueryOptionsContext {
		let _localctx: QueryOptionsContext = new QueryOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ODataUriQueryParser.RULE_queryOptions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.queryOption();
			this.state = 59;
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
		this.enterRule(_localctx, 4, ODataUriQueryParser.RULE_queryOptionsList);
		try {
			this.state = 66;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ODataUriQueryParser.AMP:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 61;
				this.match(ODataUriQueryParser.AMP);
				this.state = 62;
				this.queryOption();
				this.state = 63;
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
	public collectionQueryOption(): CollectionQueryOptionContext {
		let _localctx: CollectionQueryOptionContext = new CollectionQueryOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ODataUriQueryParser.RULE_collectionQueryOption);
		try {
			this.state = 74;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ODataUriQueryParser.SELECT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 68;
				this.selectOption();
				}
				break;
			case ODataUriQueryParser.EXPAND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 69;
				this.expandOption();
				}
				break;
			case ODataUriQueryParser.FILTER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 70;
				this.filterOption();
				}
				break;
			case ODataUriQueryParser.ORDERBY:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 71;
				this.orderByOption();
				}
				break;
			case ODataUriQueryParser.TOP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 72;
				this.topOption();
				}
				break;
			case ODataUriQueryParser.SKIPKW:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 73;
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
	public collectionQueryOptions(): CollectionQueryOptionsContext {
		let _localctx: CollectionQueryOptionsContext = new CollectionQueryOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ODataUriQueryParser.RULE_collectionQueryOptions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.collectionQueryOption();
			this.state = 77;
			this.collectionQueryOptionsList();
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
	public collectionQueryOptionsList(): CollectionQueryOptionsListContext {
		let _localctx: CollectionQueryOptionsListContext = new CollectionQueryOptionsListContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ODataUriQueryParser.RULE_collectionQueryOptionsList);
		try {
			this.state = 84;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ODataUriQueryParser.AMP:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 79;
				this.match(ODataUriQueryParser.AMP);
				this.state = 80;
				this.collectionQueryOption();
				this.state = 81;
				this.collectionQueryOptionsList();
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
	public filterOption(): FilterOptionContext {
		let _localctx: FilterOptionContext = new FilterOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ODataUriQueryParser.RULE_filterOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this.match(ODataUriQueryParser.FILTER);
			this.state = 87;
			this.match(ODataUriQueryParser.ASSIGN);
			this.state = 88;
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
		this.enterRule(_localctx, 14, ODataUriQueryParser.RULE_selectOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.match(ODataUriQueryParser.SELECT);
			this.state = 91;
			this.match(ODataUriQueryParser.ASSIGN);
			this.state = 92;
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
		this.enterRule(_localctx, 16, ODataUriQueryParser.RULE_expandOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this.match(ODataUriQueryParser.EXPAND);
			this.state = 95;
			this.match(ODataUriQueryParser.ASSIGN);
			this.state = 96;
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
		this.enterRule(_localctx, 18, ODataUriQueryParser.RULE_orderByOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.match(ODataUriQueryParser.ORDERBY);
			this.state = 99;
			this.match(ODataUriQueryParser.ASSIGN);
			this.state = 100;
			this.orderSpecList();
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
		this.enterRule(_localctx, 20, ODataUriQueryParser.RULE_topOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(ODataUriQueryParser.TOP);
			this.state = 103;
			this.match(ODataUriQueryParser.ASSIGN);
			this.state = 104;
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
		this.enterRule(_localctx, 22, ODataUriQueryParser.RULE_skipOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.match(ODataUriQueryParser.SKIPKW);
			this.state = 107;
			this.match(ODataUriQueryParser.ASSIGN);
			this.state = 108;
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
		this.enterRule(_localctx, 24, ODataUriQueryParser.RULE_selectFieldList);
		try {
			this.state = 115;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 110;
				this.selectField();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 111;
				this.selectField();
				this.state = 112;
				this.match(ODataUriQueryParser.COMMA);
				this.state = 113;
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
		this.enterRule(_localctx, 26, ODataUriQueryParser.RULE_expandFieldList);
		try {
			this.state = 122;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 117;
				this.expandField();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 118;
				this.expandField();
				this.state = 119;
				this.match(ODataUriQueryParser.COMMA);
				this.state = 120;
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
	public orderSpecList(): OrderSpecListContext {
		let _localctx: OrderSpecListContext = new OrderSpecListContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ODataUriQueryParser.RULE_orderSpecList);
		try {
			this.state = 129;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 124;
				this.orderSpec();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 125;
				this.orderSpec();
				this.state = 126;
				this.match(ODataUriQueryParser.COMMA);
				this.state = 127;
				this.orderSpecList();
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
		this.enterRule(_localctx, 30, ODataUriQueryParser.RULE_selectField);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
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
		this.enterRule(_localctx, 32, ODataUriQueryParser.RULE_expandField);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
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
		this.enterRule(_localctx, 34, ODataUriQueryParser.RULE_orderSpec);
		try {
			this.state = 139;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 135;
				this.orderField();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 136;
				this.orderField();
				this.state = 137;
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
		this.enterRule(_localctx, 36, ODataUriQueryParser.RULE_orderField);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
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
		this.enterRule(_localctx, 38, ODataUriQueryParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
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
		let _startState: number = 40;
		this.enterRecursionRule(_localctx, 40, ODataUriQueryParser.RULE_orExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 146;
			this.andExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 153;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
					this.state = 148;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 149;
					this.match(ODataUriQueryParser.OR);
					this.state = 150;
					this.andExpression(0);
					}
					}
				}
				this.state = 155;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
		let _startState: number = 42;
		this.enterRecursionRule(_localctx, 42, ODataUriQueryParser.RULE_andExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 157;
			this.compExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 164;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
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
					this.state = 159;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 160;
					this.match(ODataUriQueryParser.AND);
					this.state = 161;
					this.compExpression(0);
					}
					}
				}
				this.state = 166;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
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
		let _startState: number = 44;
		this.enterRecursionRule(_localctx, 44, ODataUriQueryParser.RULE_compExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 168;
			this.basicExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 176;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
					this.state = 170;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 171;
					this.compOperator();
					this.state = 172;
					this.basicExpression();
					}
					}
				}
				this.state = 178;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
		this.enterRule(_localctx, 46, ODataUriQueryParser.RULE_basicExpression);
		try {
			this.state = 184;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ODataUriQueryParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 179;
				this.match(ODataUriQueryParser.NUMBER);
				}
				break;
			case ODataUriQueryParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 180;
				this.match(ODataUriQueryParser.STRING);
				}
				break;
			case ODataUriQueryParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 181;
				this.match(ODataUriQueryParser.BOOLEAN);
				}
				break;
			case ODataUriQueryParser.ID:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 182;
				this.identifier();
				}
				break;
			case ODataUriQueryParser.LPAREN:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 183;
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
		this.enterRule(_localctx, 48, ODataUriQueryParser.RULE_parenExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.match(ODataUriQueryParser.LPAREN);
			this.state = 187;
			this.expression();
			this.state = 188;
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
		this.enterRule(_localctx, 50, ODataUriQueryParser.RULE_compOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
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
		this.enterRule(_localctx, 52, ODataUriQueryParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
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
		case 20:
			return this.orExpression_sempred(_localctx as OrExpressionContext, predIndex);

		case 21:
			return this.andExpression_sempred(_localctx as AndExpressionContext, predIndex);

		case 22:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1B\xC5\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x03" +
		"\x02\x03\x02\x05\x02;\n\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04E\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05M\n\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07W\n\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03" +
		"\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x05\x0Ev\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"}\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\x84\n\x10\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\x8E" +
		"\n\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x07\x16\x9A\n\x16\f\x16\x0E\x16\x9D\v\x16\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\xA5\n\x17\f\x17\x0E\x17\xA8" +
		"\v\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18" +
		"\xB1\n\x18\f\x18\x0E\x18\xB4\v\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x05\x19\xBB\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B" +
		"\x03\x1C\x03\x1C\x03\x1C\x02\x02\x05*,.\x1D\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02" +
		"6\x02\x02\x03\x03\x02\f\x11\x02\xBC\x02:\x03\x02\x02\x02\x04<\x03\x02" +
		"\x02\x02\x06D\x03\x02\x02\x02\bL\x03\x02\x02\x02\nN\x03\x02\x02\x02\f" +
		"V\x03\x02\x02\x02\x0EX\x03\x02\x02\x02\x10\\\x03\x02\x02\x02\x12`\x03" +
		"\x02\x02\x02\x14d\x03\x02\x02\x02\x16h\x03\x02\x02\x02\x18l\x03\x02\x02" +
		"\x02\x1Au\x03\x02\x02\x02\x1C|\x03\x02\x02\x02\x1E\x83\x03\x02\x02\x02" +
		" \x85\x03\x02\x02\x02\"\x87\x03\x02\x02\x02$\x8D\x03\x02\x02\x02&\x8F" +
		"\x03\x02\x02\x02(\x91\x03\x02\x02\x02*\x93\x03\x02\x02\x02,\x9E\x03\x02" +
		"\x02\x02.\xA9\x03\x02\x02\x020\xBA\x03\x02\x02\x022\xBC\x03\x02\x02\x02" +
		"4\xC0\x03\x02\x02\x026\xC2\x03\x02\x02\x028;\x05\x10\t\x029;\x05\x12\n" +
		"\x02:8\x03\x02\x02\x02:9\x03\x02\x02\x02;\x03\x03\x02\x02\x02<=\x05\x02" +
		"\x02\x02=>\x05\x06\x04\x02>\x05\x03\x02\x02\x02?@\x07\x12\x02\x02@A\x05" +
		"\x02\x02\x02AB\x05\x06\x04\x02BE\x03\x02\x02\x02CE\x03\x02\x02\x02D?\x03" +
		"\x02\x02\x02DC\x03\x02\x02\x02E\x07\x03\x02\x02\x02FM\x05\x10\t\x02GM" +
		"\x05\x12\n\x02HM\x05\x0E\b\x02IM\x05\x14\v\x02JM\x05\x16\f\x02KM\x05\x18" +
		"\r\x02LF\x03\x02\x02\x02LG\x03\x02\x02\x02LH\x03\x02\x02\x02LI\x03\x02" +
		"\x02\x02LJ\x03\x02\x02\x02LK\x03\x02\x02\x02M\t\x03\x02\x02\x02NO\x05" +
		"\b\x05\x02OP\x05\f\x07\x02P\v\x03\x02\x02\x02QR\x07\x12\x02\x02RS\x05" +
		"\b\x05\x02ST\x05\f\x07\x02TW\x03\x02\x02\x02UW\x03\x02\x02\x02VQ\x03\x02" +
		"\x02\x02VU\x03\x02\x02\x02W\r\x03\x02\x02\x02XY\x07\x03\x02\x02YZ\x07" +
		"\x13\x02\x02Z[\x05(\x15\x02[\x0F\x03\x02\x02\x02\\]\x07\x04\x02\x02]^" +
		"\x07\x13\x02\x02^_\x05\x1A\x0E\x02_\x11\x03\x02\x02\x02`a\x07\x05\x02" +
		"\x02ab\x07\x13\x02\x02bc\x05\x1C\x0F\x02c\x13\x03\x02\x02\x02de\x07\x06" +
		"\x02\x02ef\x07\x13\x02\x02fg\x05\x1E\x10\x02g\x15\x03\x02\x02\x02hi\x07" +
		"\x07\x02\x02ij\x07\x13\x02\x02jk\x07\x17\x02\x02k\x17\x03\x02\x02\x02" +
		"lm\x07\b\x02\x02mn\x07\x13\x02\x02no\x07\x17\x02\x02o\x19\x03\x02\x02" +
		"\x02pv\x05 \x11\x02qr\x05 \x11\x02rs\x07\x16\x02\x02st\x05\x1A\x0E\x02" +
		"tv\x03\x02\x02\x02up\x03\x02\x02\x02uq\x03\x02\x02\x02v\x1B\x03\x02\x02" +
		"\x02w}\x05\"\x12\x02xy\x05\"\x12\x02yz\x07\x16\x02\x02z{\x05\x1C\x0F\x02" +
		"{}\x03\x02\x02\x02|w\x03\x02\x02\x02|x\x03\x02\x02\x02}\x1D\x03\x02\x02" +
		"\x02~\x84\x05$\x13\x02\x7F\x80\x05$\x13\x02\x80\x81\x07\x16\x02\x02\x81" +
		"\x82\x05\x1E\x10\x02\x82\x84\x03\x02\x02\x02\x83~\x03\x02\x02\x02\x83" +
		"\x7F\x03\x02\x02\x02\x84\x1F\x03\x02\x02\x02\x85\x86\x056\x1C\x02\x86" +
		"!\x03\x02\x02\x02\x87\x88\x056\x1C\x02\x88#\x03\x02\x02\x02\x89\x8E\x05" +
		"&\x14\x02\x8A\x8B\x05&\x14\x02\x8B\x8C\x07\t\x02\x02\x8C\x8E\x03\x02\x02" +
		"\x02\x8D\x89\x03\x02\x02\x02\x8D\x8A\x03\x02\x02\x02\x8E%\x03\x02\x02" +
		"\x02\x8F\x90\x056\x1C\x02\x90\'\x03\x02\x02\x02\x91\x92\x05*\x16\x02\x92" +
		")\x03\x02\x02\x02\x93\x94\b\x16\x01\x02\x94\x95\x05,\x17\x02\x95\x9B\x03" +
		"\x02\x02\x02\x96\x97\f\x03\x02\x02\x97\x98\x07\n\x02\x02\x98\x9A\x05," +
		"\x17\x02\x99\x96\x03\x02\x02\x02\x9A\x9D\x03\x02\x02\x02\x9B\x99\x03\x02" +
		"\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C+\x03\x02\x02\x02\x9D\x9B\x03\x02" +
		"\x02\x02\x9E\x9F\b\x17\x01\x02\x9F\xA0\x05.\x18\x02\xA0\xA6\x03\x02\x02" +
		"\x02\xA1\xA2\f\x03\x02\x02\xA2\xA3\x07\v\x02\x02\xA3\xA5\x05.\x18\x02" +
		"\xA4\xA1\x03\x02\x02\x02\xA5\xA8\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02" +
		"\xA6\xA7\x03\x02\x02\x02\xA7-\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02" +
		"\xA9\xAA\b\x18\x01\x02\xAA\xAB\x050\x19\x02\xAB\xB2\x03\x02\x02\x02\xAC" +
		"\xAD\f\x03\x02\x02\xAD\xAE\x054\x1B\x02\xAE\xAF\x050\x19\x02\xAF\xB1\x03" +
		"\x02\x02\x02\xB0\xAC\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03" +
		"\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3/\x03\x02\x02\x02\xB4\xB2\x03" +
		"\x02\x02\x02\xB5\xBB\x07\x17\x02\x02\xB6\xBB\x07\x1A\x02\x02\xB7\xBB\x07" +
		"\x19\x02\x02\xB8\xBB\x056\x1C\x02\xB9\xBB\x052\x1A\x02\xBA\xB5\x03\x02" +
		"\x02\x02\xBA\xB6\x03\x02\x02\x02\xBA\xB7\x03\x02\x02\x02\xBA\xB8\x03\x02" +
		"\x02\x02\xBA\xB9\x03\x02\x02\x02\xBB1\x03\x02\x02\x02\xBC\xBD\x07\x14" +
		"\x02\x02\xBD\xBE\x05(\x15\x02\xBE\xBF\x07\x15\x02\x02\xBF3\x03\x02\x02" +
		"\x02\xC0\xC1\t\x02\x02\x02\xC15\x03\x02\x02\x02\xC2\xC3\x07\x1B\x02\x02" +
		"\xC37\x03\x02\x02\x02\x0E:DLVu|\x83\x8D\x9B\xA6\xB2\xBA";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ODataUriQueryParser.__ATN) {
			ODataUriQueryParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ODataUriQueryParser._serializedATN));
		}

		return ODataUriQueryParser.__ATN;
	}

}

export class QueryOptionContext extends ParserRuleContext {
	public selectOption(): SelectOptionContext | undefined {
		return this.tryGetRuleContext(0, SelectOptionContext);
	}
	public expandOption(): ExpandOptionContext | undefined {
		return this.tryGetRuleContext(0, ExpandOptionContext);
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


export class CollectionQueryOptionContext extends ParserRuleContext {
	public selectOption(): SelectOptionContext | undefined {
		return this.tryGetRuleContext(0, SelectOptionContext);
	}
	public expandOption(): ExpandOptionContext | undefined {
		return this.tryGetRuleContext(0, ExpandOptionContext);
	}
	public filterOption(): FilterOptionContext | undefined {
		return this.tryGetRuleContext(0, FilterOptionContext);
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
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_collectionQueryOption; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitCollectionQueryOption) {
			return visitor.visitCollectionQueryOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CollectionQueryOptionsContext extends ParserRuleContext {
	public collectionQueryOption(): CollectionQueryOptionContext {
		return this.getRuleContext(0, CollectionQueryOptionContext);
	}
	public collectionQueryOptionsList(): CollectionQueryOptionsListContext {
		return this.getRuleContext(0, CollectionQueryOptionsListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_collectionQueryOptions; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitCollectionQueryOptions) {
			return visitor.visitCollectionQueryOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CollectionQueryOptionsListContext extends ParserRuleContext {
	public AMP(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.AMP, 0); }
	public collectionQueryOption(): CollectionQueryOptionContext | undefined {
		return this.tryGetRuleContext(0, CollectionQueryOptionContext);
	}
	public collectionQueryOptionsList(): CollectionQueryOptionsListContext | undefined {
		return this.tryGetRuleContext(0, CollectionQueryOptionsListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_collectionQueryOptionsList; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitCollectionQueryOptionsList) {
			return visitor.visitCollectionQueryOptionsList(this);
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
	public orderSpecList(): OrderSpecListContext {
		return this.getRuleContext(0, OrderSpecListContext);
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


export class OrderSpecListContext extends ParserRuleContext {
	public orderSpec(): OrderSpecContext {
		return this.getRuleContext(0, OrderSpecContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.COMMA, 0); }
	public orderSpecList(): OrderSpecListContext | undefined {
		return this.tryGetRuleContext(0, OrderSpecListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_orderSpecList; }
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitOrderSpecList) {
			return visitor.visitOrderSpecList(this);
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


