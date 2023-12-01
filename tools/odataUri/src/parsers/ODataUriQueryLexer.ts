// Generated from src/parsers/ODataUriQuery.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ODataUriQueryLexer extends Lexer {
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
	public static readonly RWS = 22;
	public static readonly WS = 23;
	public static readonly BOOLEAN = 24;
	public static readonly STRING = 25;
	public static readonly ID = 26;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"FILTER", "SELECT", "EXPAND", "ORDERBY", "TOP", "SKIPKW", "DESC", "OR", 
		"AND", "EQ", "NEQ", "GT", "GTE", "LT", "LTE", "AMP", "ASSIGN", "LPAREN", 
		"RPAREN", "COMMA", "NUMBER", "RWS", "WS", "BOOLEAN", "STRING", "ID",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'$filter'", "'$select'", "'$expand'", "'$orderby'", "'$top'", 
		"'$skip'", "'desc'", "'or'", "'and'", "'eq'", "'ne'", "'gt'", "'ge'", 
		"'lt'", "'le'", "'&'", "'='", "'('", "')'", "','", undefined, "' '",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "FILTER", "SELECT", "EXPAND", "ORDERBY", "TOP", "SKIPKW", "DESC", 
		"OR", "AND", "EQ", "NEQ", "GT", "GTE", "LT", "LTE", "AMP", "ASSIGN", "LPAREN", 
		"RPAREN", "COMMA", "NUMBER", "RWS", "WS", "BOOLEAN", "STRING", "ID",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ODataUriQueryLexer._LITERAL_NAMES, ODataUriQueryLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ODataUriQueryLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ODataUriQueryLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "ODataUriQuery.g4"; }

	// @Override
	public get ruleNames(): string[] { return ODataUriQueryLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ODataUriQueryLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ODataUriQueryLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ODataUriQueryLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x1C\xB1\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x06\x16\x8D\n" +
		"\x16\r\x16\x0E\x16\x8E\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x05\x19\xA0\n\x19\x03\x1A\x03\x1A\x07\x1A\xA4\n\x1A\f\x1A\x0E\x1A\xA7" +
		"\v\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x07\x1B\xAD\n\x1B\f\x1B\x0E\x1B" +
		"\xB0\v\x1B\x03\xA5\x02\x02\x1C\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02" +
		"\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02" +
		"\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%" +
		"\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B" +
		"5\x02\x1C\x03\x02\x06\x03\x022;\x03\x02\"\"\x04\x02C\\c|\x06\x022;C\\" +
		"aac|\x02\xB4\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03" +
		"\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02" +
		"\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02" +
		"\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02" +
		"\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02" +
		"\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02" +
		"\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-" +
		"\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02" +
		"\x02\x02\x025\x03\x02\x02\x02\x037\x03\x02\x02\x02\x05?\x03\x02\x02\x02" +
		"\x07G\x03\x02\x02\x02\tO\x03\x02\x02\x02\vX\x03\x02\x02\x02\r]\x03\x02" +
		"\x02\x02\x0Fc\x03\x02\x02\x02\x11h\x03\x02\x02\x02\x13k\x03\x02\x02\x02" +
		"\x15o\x03\x02\x02\x02\x17r\x03\x02\x02\x02\x19u\x03\x02\x02\x02\x1Bx\x03" +
		"\x02\x02\x02\x1D{\x03\x02\x02\x02\x1F~\x03\x02\x02\x02!\x81\x03\x02\x02" +
		"\x02#\x83\x03\x02\x02\x02%\x85\x03\x02\x02\x02\'\x87\x03\x02\x02\x02)" +
		"\x89\x03\x02\x02\x02+\x8C\x03\x02\x02\x02-\x90\x03\x02\x02\x02/\x92\x03" +
		"\x02\x02\x021\x9F\x03\x02\x02\x023\xA1\x03\x02\x02\x025\xAA\x03\x02\x02" +
		"\x0278\x07&\x02\x0289\x07h\x02\x029:\x07k\x02\x02:;\x07n\x02\x02;<\x07" +
		"v\x02\x02<=\x07g\x02\x02=>\x07t\x02\x02>\x04\x03\x02\x02\x02?@\x07&\x02" +
		"\x02@A\x07u\x02\x02AB\x07g\x02\x02BC\x07n\x02\x02CD\x07g\x02\x02DE\x07" +
		"e\x02\x02EF\x07v\x02\x02F\x06\x03\x02\x02\x02GH\x07&\x02\x02HI\x07g\x02" +
		"\x02IJ\x07z\x02\x02JK\x07r\x02\x02KL\x07c\x02\x02LM\x07p\x02\x02MN\x07" +
		"f\x02\x02N\b\x03\x02\x02\x02OP\x07&\x02\x02PQ\x07q\x02\x02QR\x07t\x02" +
		"\x02RS\x07f\x02\x02ST\x07g\x02\x02TU\x07t\x02\x02UV\x07d\x02\x02VW\x07" +
		"{\x02\x02W\n\x03\x02\x02\x02XY\x07&\x02\x02YZ\x07v\x02\x02Z[\x07q\x02" +
		"\x02[\\\x07r\x02\x02\\\f\x03\x02\x02\x02]^\x07&\x02\x02^_\x07u\x02\x02" +
		"_`\x07m\x02\x02`a\x07k\x02\x02ab\x07r\x02\x02b\x0E\x03\x02\x02\x02cd\x07" +
		"f\x02\x02de\x07g\x02\x02ef\x07u\x02\x02fg\x07e\x02\x02g\x10\x03\x02\x02" +
		"\x02hi\x07q\x02\x02ij\x07t\x02\x02j\x12\x03\x02\x02\x02kl\x07c\x02\x02" +
		"lm\x07p\x02\x02mn\x07f\x02\x02n\x14\x03\x02\x02\x02op\x07g\x02\x02pq\x07" +
		"s\x02\x02q\x16\x03\x02\x02\x02rs\x07p\x02\x02st\x07g\x02\x02t\x18\x03" +
		"\x02\x02\x02uv\x07i\x02\x02vw\x07v\x02\x02w\x1A\x03\x02\x02\x02xy\x07" +
		"i\x02\x02yz\x07g\x02\x02z\x1C\x03\x02\x02\x02{|\x07n\x02\x02|}\x07v\x02" +
		"\x02}\x1E\x03\x02\x02\x02~\x7F\x07n\x02\x02\x7F\x80\x07g\x02\x02\x80 " +
		"\x03\x02\x02\x02\x81\x82\x07(\x02\x02\x82\"\x03\x02\x02\x02\x83\x84\x07" +
		"?\x02\x02\x84$\x03\x02\x02\x02\x85\x86\x07*\x02\x02\x86&\x03\x02\x02\x02" +
		"\x87\x88\x07+\x02\x02\x88(\x03\x02\x02\x02\x89\x8A\x07.\x02\x02\x8A*\x03" +
		"\x02\x02\x02\x8B\x8D\t\x02\x02\x02\x8C\x8B\x03\x02\x02\x02\x8D\x8E\x03" +
		"\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F,\x03" +
		"\x02\x02\x02\x90\x91\x07\"\x02\x02\x91.\x03\x02\x02\x02\x92\x93\t\x03" +
		"\x02\x02\x93\x94\x03\x02\x02\x02\x94\x95\b\x18\x02\x02\x950\x03\x02\x02" +
		"\x02\x96\x97\x07v\x02\x02\x97\x98\x07t\x02\x02\x98\x99\x07w\x02\x02\x99" +
		"\xA0\x07g\x02\x02\x9A\x9B\x07h\x02\x02\x9B\x9C\x07c\x02\x02\x9C\x9D\x07" +
		"n\x02\x02\x9D\x9E\x07u\x02\x02\x9E\xA0\x07g\x02\x02\x9F\x96\x03\x02\x02" +
		"\x02\x9F\x9A\x03\x02\x02\x02\xA02\x03\x02\x02\x02\xA1\xA5\x07)\x02\x02" +
		"\xA2\xA4\v\x02\x02\x02\xA3\xA2\x03\x02\x02\x02\xA4\xA7\x03\x02\x02\x02" +
		"\xA5\xA6\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA6\xA8\x03\x02\x02\x02" +
		"\xA7\xA5\x03\x02\x02\x02\xA8\xA9\x07)\x02\x02\xA94\x03\x02\x02\x02\xAA" +
		"\xAE\t\x04\x02\x02\xAB\xAD\t\x05\x02\x02\xAC\xAB\x03\x02\x02\x02\xAD\xB0" +
		"\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF6" +
		"\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\x07\x02\x8E\x9F\xA5\xAE\x03\b" +
		"\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ODataUriQueryLexer.__ATN) {
			ODataUriQueryLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ODataUriQueryLexer._serializedATN));
		}

		return ODataUriQueryLexer.__ATN;
	}

}

