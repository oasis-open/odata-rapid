"use strict";
// Generated from src/js/odata-uri/parsers/ODataUriQuery.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifierContext = exports.CompOperatorContext = exports.ParenExpressionContext = exports.BasicExpressionContext = exports.CompExpressionContext = exports.AndExpressionContext = exports.OrExpressionContext = exports.ExpressionContext = exports.OrderFieldContext = exports.OrderSpecContext = exports.ExpandFieldContext = exports.SelectFieldContext = exports.ExpandFieldListContext = exports.SelectFieldListContext = exports.SkipOptionContext = exports.TopOptionContext = exports.OrderByOptionContext = exports.ExpandOptionContext = exports.SelectOptionContext = exports.FilterOptionContext = exports.QueryOptionContext = exports.QueryOptionsListContext = exports.QueryOptionsContext = exports.ODataUriQueryParser = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class ODataUriQueryParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(ODataUriQueryParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return ODataUriQueryParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "ODataUriQuery.g4"; }
    // @Override
    get ruleNames() { return ODataUriQueryParser.ruleNames; }
    // @Override
    get serializedATN() { return ODataUriQueryParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    queryOptions() {
        let _localctx = new QueryOptionsContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    queryOptionsList() {
        let _localctx = new QueryOptionsListContext(this._ctx, this.state);
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
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    queryOption() {
        let _localctx = new QueryOptionContext(this._ctx, this.state);
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
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    filterOption() {
        let _localctx = new FilterOptionContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    selectOption() {
        let _localctx = new SelectOptionContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expandOption() {
        let _localctx = new ExpandOptionContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    orderByOption() {
        let _localctx = new OrderByOptionContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    topOption() {
        let _localctx = new TopOptionContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    skipOption() {
        let _localctx = new SkipOptionContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    selectFieldList() {
        let _localctx = new SelectFieldListContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, ODataUriQueryParser.RULE_selectFieldList);
        try {
            this.state = 93;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expandFieldList() {
        let _localctx = new ExpandFieldListContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, ODataUriQueryParser.RULE_expandFieldList);
        try {
            this.state = 100;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    selectField() {
        let _localctx = new SelectFieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, ODataUriQueryParser.RULE_selectField);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 102;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expandField() {
        let _localctx = new ExpandFieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, ODataUriQueryParser.RULE_expandField);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 104;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    orderSpec() {
        let _localctx = new OrderSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, ODataUriQueryParser.RULE_orderSpec);
        try {
            this.state = 110;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    orderField() {
        let _localctx = new OrderFieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, ODataUriQueryParser.RULE_orderField);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 112;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expression() {
        let _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, ODataUriQueryParser.RULE_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 114;
                this.orExpression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    orExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new OrExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 32;
        this.enterRecursionRule(_localctx, 32, ODataUriQueryParser.RULE_orExpression, _p);
        try {
            let _alt;
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
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    andExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new AndExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 34;
        this.enterRecursionRule(_localctx, 34, ODataUriQueryParser.RULE_andExpression, _p);
        try {
            let _alt;
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
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    compExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new CompExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 36;
        this.enterRecursionRule(_localctx, 36, ODataUriQueryParser.RULE_compExpression, _p);
        try {
            let _alt;
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
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    basicExpression() {
        let _localctx = new BasicExpressionContext(this._ctx, this.state);
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
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parenExpression() {
        let _localctx = new ParenExpressionContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    compOperator() {
        let _localctx = new CompOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, ODataUriQueryParser.RULE_compOperator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 161;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ODataUriQueryParser.EQ) | (1 << ODataUriQueryParser.NEQ) | (1 << ODataUriQueryParser.GT) | (1 << ODataUriQueryParser.GTE) | (1 << ODataUriQueryParser.LT) | (1 << ODataUriQueryParser.LTE))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    identifier() {
        let _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, ODataUriQueryParser.RULE_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 163;
                this.match(ODataUriQueryParser.ID);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 16:
                return this.orExpression_sempred(_localctx, predIndex);
            case 17:
                return this.andExpression_sempred(_localctx, predIndex);
            case 18:
                return this.compExpression_sempred(_localctx, predIndex);
        }
        return true;
    }
    orExpression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    andExpression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    compExpression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 2:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    static get _ATN() {
        if (!ODataUriQueryParser.__ATN) {
            ODataUriQueryParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(ODataUriQueryParser._serializedATN));
        }
        return ODataUriQueryParser.__ATN;
    }
}
exports.ODataUriQueryParser = ODataUriQueryParser;
ODataUriQueryParser.FILTER = 1;
ODataUriQueryParser.SELECT = 2;
ODataUriQueryParser.EXPAND = 3;
ODataUriQueryParser.ORDERBY = 4;
ODataUriQueryParser.TOP = 5;
ODataUriQueryParser.SKIPKW = 6;
ODataUriQueryParser.DESC = 7;
ODataUriQueryParser.OR = 8;
ODataUriQueryParser.AND = 9;
ODataUriQueryParser.EQ = 10;
ODataUriQueryParser.NEQ = 11;
ODataUriQueryParser.GT = 12;
ODataUriQueryParser.GTE = 13;
ODataUriQueryParser.LT = 14;
ODataUriQueryParser.LTE = 15;
ODataUriQueryParser.AMP = 16;
ODataUriQueryParser.ASSIGN = 17;
ODataUriQueryParser.LPAREN = 18;
ODataUriQueryParser.RPAREN = 19;
ODataUriQueryParser.COMMA = 20;
ODataUriQueryParser.NUMBER = 21;
ODataUriQueryParser.WS = 22;
ODataUriQueryParser.BOOLEAN = 23;
ODataUriQueryParser.STRING = 24;
ODataUriQueryParser.ID = 25;
ODataUriQueryParser.RULE_queryOptions = 0;
ODataUriQueryParser.RULE_queryOptionsList = 1;
ODataUriQueryParser.RULE_queryOption = 2;
ODataUriQueryParser.RULE_filterOption = 3;
ODataUriQueryParser.RULE_selectOption = 4;
ODataUriQueryParser.RULE_expandOption = 5;
ODataUriQueryParser.RULE_orderByOption = 6;
ODataUriQueryParser.RULE_topOption = 7;
ODataUriQueryParser.RULE_skipOption = 8;
ODataUriQueryParser.RULE_selectFieldList = 9;
ODataUriQueryParser.RULE_expandFieldList = 10;
ODataUriQueryParser.RULE_selectField = 11;
ODataUriQueryParser.RULE_expandField = 12;
ODataUriQueryParser.RULE_orderSpec = 13;
ODataUriQueryParser.RULE_orderField = 14;
ODataUriQueryParser.RULE_expression = 15;
ODataUriQueryParser.RULE_orExpression = 16;
ODataUriQueryParser.RULE_andExpression = 17;
ODataUriQueryParser.RULE_compExpression = 18;
ODataUriQueryParser.RULE_basicExpression = 19;
ODataUriQueryParser.RULE_parenExpression = 20;
ODataUriQueryParser.RULE_compOperator = 21;
ODataUriQueryParser.RULE_identifier = 22;
// tslint:disable:no-trailing-whitespace
ODataUriQueryParser.ruleNames = [
    "queryOptions", "queryOptionsList", "queryOption", "filterOption", "selectOption",
    "expandOption", "orderByOption", "topOption", "skipOption", "selectFieldList",
    "expandFieldList", "selectField", "expandField", "orderSpec", "orderField",
    "expression", "orExpression", "andExpression", "compExpression", "basicExpression",
    "parenExpression", "compOperator", "identifier",
];
ODataUriQueryParser._LITERAL_NAMES = [
    undefined, "'$filter'", "'$select'", "'$expand'", "'$orderby'", "'$top'",
    "'$skip'", "'desc'", "'or'", "'and'", "'eq'", "'neq'", "'gt'", "'gte'",
    "'lt'", "'lte'", "'&'", "'='", "'('", "')'", "','",
];
ODataUriQueryParser._SYMBOLIC_NAMES = [
    undefined, "FILTER", "SELECT", "EXPAND", "ORDERBY", "TOP", "SKIPKW", "DESC",
    "OR", "AND", "EQ", "NEQ", "GT", "GTE", "LT", "LTE", "AMP", "ASSIGN", "LPAREN",
    "RPAREN", "COMMA", "NUMBER", "WS", "BOOLEAN", "STRING", "ID",
];
ODataUriQueryParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ODataUriQueryParser._LITERAL_NAMES, ODataUriQueryParser._SYMBOLIC_NAMES, []);
ODataUriQueryParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1B\xA8\x04\x02" +
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
class QueryOptionsContext extends ParserRuleContext_1.ParserRuleContext {
    queryOption() {
        return this.getRuleContext(0, QueryOptionContext);
    }
    queryOptionsList() {
        return this.getRuleContext(0, QueryOptionsListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_queryOptions; }
    // @Override
    accept(visitor) {
        if (visitor.visitQueryOptions) {
            return visitor.visitQueryOptions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QueryOptionsContext = QueryOptionsContext;
class QueryOptionsListContext extends ParserRuleContext_1.ParserRuleContext {
    AMP() { return this.tryGetToken(ODataUriQueryParser.AMP, 0); }
    queryOption() {
        return this.tryGetRuleContext(0, QueryOptionContext);
    }
    queryOptionsList() {
        return this.tryGetRuleContext(0, QueryOptionsListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_queryOptionsList; }
    // @Override
    accept(visitor) {
        if (visitor.visitQueryOptionsList) {
            return visitor.visitQueryOptionsList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QueryOptionsListContext = QueryOptionsListContext;
class QueryOptionContext extends ParserRuleContext_1.ParserRuleContext {
    filterOption() {
        return this.tryGetRuleContext(0, FilterOptionContext);
    }
    selectOption() {
        return this.tryGetRuleContext(0, SelectOptionContext);
    }
    expandOption() {
        return this.tryGetRuleContext(0, ExpandOptionContext);
    }
    orderByOption() {
        return this.tryGetRuleContext(0, OrderByOptionContext);
    }
    topOption() {
        return this.tryGetRuleContext(0, TopOptionContext);
    }
    skipOption() {
        return this.tryGetRuleContext(0, SkipOptionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_queryOption; }
    // @Override
    accept(visitor) {
        if (visitor.visitQueryOption) {
            return visitor.visitQueryOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QueryOptionContext = QueryOptionContext;
class FilterOptionContext extends ParserRuleContext_1.ParserRuleContext {
    FILTER() { return this.getToken(ODataUriQueryParser.FILTER, 0); }
    ASSIGN() { return this.getToken(ODataUriQueryParser.ASSIGN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_filterOption; }
    // @Override
    accept(visitor) {
        if (visitor.visitFilterOption) {
            return visitor.visitFilterOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FilterOptionContext = FilterOptionContext;
class SelectOptionContext extends ParserRuleContext_1.ParserRuleContext {
    SELECT() { return this.getToken(ODataUriQueryParser.SELECT, 0); }
    ASSIGN() { return this.getToken(ODataUriQueryParser.ASSIGN, 0); }
    selectFieldList() {
        return this.getRuleContext(0, SelectFieldListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_selectOption; }
    // @Override
    accept(visitor) {
        if (visitor.visitSelectOption) {
            return visitor.visitSelectOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SelectOptionContext = SelectOptionContext;
class ExpandOptionContext extends ParserRuleContext_1.ParserRuleContext {
    EXPAND() { return this.getToken(ODataUriQueryParser.EXPAND, 0); }
    ASSIGN() { return this.getToken(ODataUriQueryParser.ASSIGN, 0); }
    expandFieldList() {
        return this.getRuleContext(0, ExpandFieldListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_expandOption; }
    // @Override
    accept(visitor) {
        if (visitor.visitExpandOption) {
            return visitor.visitExpandOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpandOptionContext = ExpandOptionContext;
class OrderByOptionContext extends ParserRuleContext_1.ParserRuleContext {
    ORDERBY() { return this.getToken(ODataUriQueryParser.ORDERBY, 0); }
    ASSIGN() { return this.getToken(ODataUriQueryParser.ASSIGN, 0); }
    orderSpec() {
        return this.getRuleContext(0, OrderSpecContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_orderByOption; }
    // @Override
    accept(visitor) {
        if (visitor.visitOrderByOption) {
            return visitor.visitOrderByOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OrderByOptionContext = OrderByOptionContext;
class TopOptionContext extends ParserRuleContext_1.ParserRuleContext {
    TOP() { return this.getToken(ODataUriQueryParser.TOP, 0); }
    ASSIGN() { return this.getToken(ODataUriQueryParser.ASSIGN, 0); }
    NUMBER() { return this.getToken(ODataUriQueryParser.NUMBER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_topOption; }
    // @Override
    accept(visitor) {
        if (visitor.visitTopOption) {
            return visitor.visitTopOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TopOptionContext = TopOptionContext;
class SkipOptionContext extends ParserRuleContext_1.ParserRuleContext {
    SKIPKW() { return this.getToken(ODataUriQueryParser.SKIPKW, 0); }
    ASSIGN() { return this.getToken(ODataUriQueryParser.ASSIGN, 0); }
    NUMBER() { return this.getToken(ODataUriQueryParser.NUMBER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_skipOption; }
    // @Override
    accept(visitor) {
        if (visitor.visitSkipOption) {
            return visitor.visitSkipOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SkipOptionContext = SkipOptionContext;
class SelectFieldListContext extends ParserRuleContext_1.ParserRuleContext {
    selectField() {
        return this.getRuleContext(0, SelectFieldContext);
    }
    COMMA() { return this.tryGetToken(ODataUriQueryParser.COMMA, 0); }
    selectFieldList() {
        return this.tryGetRuleContext(0, SelectFieldListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_selectFieldList; }
    // @Override
    accept(visitor) {
        if (visitor.visitSelectFieldList) {
            return visitor.visitSelectFieldList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SelectFieldListContext = SelectFieldListContext;
class ExpandFieldListContext extends ParserRuleContext_1.ParserRuleContext {
    expandField() {
        return this.getRuleContext(0, ExpandFieldContext);
    }
    COMMA() { return this.tryGetToken(ODataUriQueryParser.COMMA, 0); }
    expandFieldList() {
        return this.tryGetRuleContext(0, ExpandFieldListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_expandFieldList; }
    // @Override
    accept(visitor) {
        if (visitor.visitExpandFieldList) {
            return visitor.visitExpandFieldList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpandFieldListContext = ExpandFieldListContext;
class SelectFieldContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_selectField; }
    // @Override
    accept(visitor) {
        if (visitor.visitSelectField) {
            return visitor.visitSelectField(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SelectFieldContext = SelectFieldContext;
class ExpandFieldContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_expandField; }
    // @Override
    accept(visitor) {
        if (visitor.visitExpandField) {
            return visitor.visitExpandField(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpandFieldContext = ExpandFieldContext;
class OrderSpecContext extends ParserRuleContext_1.ParserRuleContext {
    orderField() {
        return this.getRuleContext(0, OrderFieldContext);
    }
    DESC() { return this.tryGetToken(ODataUriQueryParser.DESC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_orderSpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitOrderSpec) {
            return visitor.visitOrderSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OrderSpecContext = OrderSpecContext;
class OrderFieldContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_orderField; }
    // @Override
    accept(visitor) {
        if (visitor.visitOrderField) {
            return visitor.visitOrderField(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OrderFieldContext = OrderFieldContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    orExpression() {
        return this.getRuleContext(0, OrExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_expression; }
    // @Override
    accept(visitor) {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressionContext = ExpressionContext;
class OrExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    andExpression() {
        return this.getRuleContext(0, AndExpressionContext);
    }
    orExpression() {
        return this.tryGetRuleContext(0, OrExpressionContext);
    }
    OR() { return this.tryGetToken(ODataUriQueryParser.OR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_orExpression; }
    // @Override
    accept(visitor) {
        if (visitor.visitOrExpression) {
            return visitor.visitOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OrExpressionContext = OrExpressionContext;
class AndExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    compExpression() {
        return this.getRuleContext(0, CompExpressionContext);
    }
    andExpression() {
        return this.tryGetRuleContext(0, AndExpressionContext);
    }
    AND() { return this.tryGetToken(ODataUriQueryParser.AND, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_andExpression; }
    // @Override
    accept(visitor) {
        if (visitor.visitAndExpression) {
            return visitor.visitAndExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AndExpressionContext = AndExpressionContext;
class CompExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    basicExpression() {
        return this.getRuleContext(0, BasicExpressionContext);
    }
    compExpression() {
        return this.tryGetRuleContext(0, CompExpressionContext);
    }
    compOperator() {
        return this.tryGetRuleContext(0, CompOperatorContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_compExpression; }
    // @Override
    accept(visitor) {
        if (visitor.visitCompExpression) {
            return visitor.visitCompExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CompExpressionContext = CompExpressionContext;
class BasicExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    NUMBER() { return this.tryGetToken(ODataUriQueryParser.NUMBER, 0); }
    STRING() { return this.tryGetToken(ODataUriQueryParser.STRING, 0); }
    BOOLEAN() { return this.tryGetToken(ODataUriQueryParser.BOOLEAN, 0); }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    parenExpression() {
        return this.tryGetRuleContext(0, ParenExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_basicExpression; }
    // @Override
    accept(visitor) {
        if (visitor.visitBasicExpression) {
            return visitor.visitBasicExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BasicExpressionContext = BasicExpressionContext;
class ParenExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(ODataUriQueryParser.LPAREN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() { return this.getToken(ODataUriQueryParser.RPAREN, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_parenExpression; }
    // @Override
    accept(visitor) {
        if (visitor.visitParenExpression) {
            return visitor.visitParenExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParenExpressionContext = ParenExpressionContext;
class CompOperatorContext extends ParserRuleContext_1.ParserRuleContext {
    EQ() { return this.tryGetToken(ODataUriQueryParser.EQ, 0); }
    NEQ() { return this.tryGetToken(ODataUriQueryParser.NEQ, 0); }
    GTE() { return this.tryGetToken(ODataUriQueryParser.GTE, 0); }
    GT() { return this.tryGetToken(ODataUriQueryParser.GT, 0); }
    LTE() { return this.tryGetToken(ODataUriQueryParser.LTE, 0); }
    LT() { return this.tryGetToken(ODataUriQueryParser.LT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_compOperator; }
    // @Override
    accept(visitor) {
        if (visitor.visitCompOperator) {
            return visitor.visitCompOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CompOperatorContext = CompOperatorContext;
class IdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    ID() { return this.getToken(ODataUriQueryParser.ID, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ODataUriQueryParser.RULE_identifier; }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierContext = IdentifierContext;
