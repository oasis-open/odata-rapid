import { SemanticNode, parseQueryOptionsSemantics } from "./semantic-model";
import { ISchema, ISchemaType } from "./json-model";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ODataUriQueryParser } from "./parsers/ODataUriQueryParser";
import { ODataUriQueryLexer } from "./parsers/ODataUriQueryLexer";
import { AutoComplete } from "./autocomplete";
import { IPathParseResult, parsePath, PathAutoComplete } from "./path";
import { peekStack, IError } from "./common";

export interface ICompletions {
  from: number;
  suggestions: string[];
}

export class AutoCompleteManager {
  schema: ISchema;
  lastInput: string;
  queryAutoComplete: AutoComplete;
  queryOptions: SemanticNode;
  queryParser: ODataUriQueryParser;
  errors: IError[];

  pathAutoComplete: PathAutoComplete = null;

  pathStart: number = 0;
  pathEnd: number = 0;
  queryStart = 0;
  queryEnd = 0;

  separatorPos = 0;

  path: string = "";
  query: string = "";

  pathResult: IPathParseResult;

  constructor(schema: ISchema) {
    this.schema = schema;
    this.lastInput = null;
    this.errors = [];
    this.queryOptions = null;
    this.queryParser = null;
    this.queryAutoComplete = null;
  }

  private parse(input: string) {
    this.reset();
    const separatorPos = input.indexOf("?");
    this.separatorPos = separatorPos;
    let [path, query] = input.split("?");

    this.pathStart = 0;
    if (path.startsWith("/")) {
      path = path.substring(1);
      this.pathStart = 1;
    }

    this.pathEnd = path.length + this.pathStart - 1;
    this.path = path;
    this.parsePath();

    if (path && separatorPos > -1) {
      this.queryStart = separatorPos + 1;
      this.queryEnd = this.queryStart + path.length - 1;
      this.query = query;
      const pathSegment = peekStack(this.pathResult.segments);
      this.parseQuery(pathSegment.schemaType);
    }

    this.lastInput = input;
  }

  private parsePath() {
    this.pathResult = parsePath(this.path, this.schema, this.pathStart);
    this.errors.push(
      ...this.pathResult.errors.map((err) => {
        err.range.start += this.pathStart;
        err.range.stop += this.pathStart;
        return err;
      })
    );
    this.pathAutoComplete = new PathAutoComplete(
      this.path,
      this.schema,
      this.pathResult.segments
    );
  }

  private parseQuery(rootType: ISchemaType) {
    const input = this.query;
    const inputStream = CharStreams.fromString(input);
    const queryLexer = new ODataUriQueryLexer(inputStream);
    const tokens = new CommonTokenStream(queryLexer);
    const queryParser = new ODataUriQueryParser(tokens);
    const ast = queryParser.queryOptions();

    const semanticResult = parseQueryOptionsSemantics(
      ast,
      this.schema,
      rootType
    );
    this.queryOptions = semanticResult.tree;
    this.errors.push(
      ...semanticResult.errors.map((err) => {
        err.range.start += this.queryStart;
        err.range.stop += this.queryStart;
        return err;
      })
    );
    this.lastInput = input;
    this.queryParser = queryParser;
    this.queryAutoComplete = new AutoComplete(
      queryParser,
      semanticResult.syntaxSemanticMap,
      semanticResult.schema
    );
  }

  updateSchema(schema: ISchema) {
    this.schema = schema;
    // reset everything
    this.reset();
  }

  reset() {
    this.lastInput = null;
    this.errors = [];
    this.pathResult = null;
    this.queryOptions = null;
    this.queryParser = null;
    this.queryAutoComplete = null;
    this.pathAutoComplete = null;
  }

  getErrors(input: string) {
    if (!this.schema) return [];

    if (input === this.lastInput) {
      return this.errors;
    }

    this.parse(input);
    return this.errors;
  }

  getCompletions(input: string, pos: number): ICompletions {
    if (!this.schema) return { from: pos, suggestions: [] };

    if (input !== this.lastInput) {
      this.parse(input);
    }

    if (this.separatorPos > -1 && pos >= this.separatorPos) {
      // query
      const relativePos = pos - this.queryStart;
      const suggestions = this.queryAutoComplete.getSuggestions(relativePos);
      //TODO: from
      return { from: pos, suggestions };
    } else {
      // path
      const suggestions = this.pathAutoComplete.getCompletions(pos);
      const lastSlash = input.lastIndexOf("/");
      const lastSegment = input.substring(lastSlash + 1);
      if (suggestions.includes(lastSegment)) {
        return { from: pos, suggestions: ["?", "/"] };
      } else {
        return { from: lastSlash + 1, suggestions };
      }
    }
  }
}
