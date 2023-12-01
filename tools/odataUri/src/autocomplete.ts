import { CandidateRule, CodeCompletionCore } from "antlr4-c3";
import { ODataUriQueryParser as QueryParser } from "./parsers/ODataUriQueryParser";
import { ODataUriQueryLexer as QueryLexer } from "./parsers/ODataUriQueryLexer";
import {
  BasicExpressionNode,
  ExpandNode,
  ISyntaxToSemanticMap,
  OrderByNode,
  PropertyAccessNode,
  QueryOptionsNode,
  SelectNode,
} from "./semantic-model";
import {
  isPrimitiveType,
  findStructuredType,
  ISchema,
  getAllPropertiesNames,
  getAllProperties,
} from "./json-model";

export class AutoComplete {
  private queryParser: QueryParser;
  private core: CodeCompletionCore;
  private map: ISyntaxToSemanticMap;
  private schema: ISchema;
  static emptyResult = { suggestions: [] as string[], match: false };

  constructor(
    parser: QueryParser,
    syntaxToSemanticMap: ISyntaxToSemanticMap,
    schema: ISchema
  ) {
    this.queryParser = parser;
    this.map = syntaxToSemanticMap;
    this.schema = schema;
    const core = new CodeCompletionCore(this.queryParser);
    this.core = core;
    // core.ignoredTokens = new Set([
    //     // QueryLexer.ID,
    //     QueryLexer.NUMBER,
    //     QueryLexer.LPAREN,
    //     QueryLexer.RPAREN,
    //     QueryLexer.AMP
    // ]);

    core.preferredRules = new Set([
      QueryParser.RULE_identifier,
      QueryParser.RULE_basicExpression,
      QueryParser.RULE_orderSpecList,
      QueryParser.RULE_selectFieldList,
      QueryParser.RULE_expandFieldList,
    ]);
  }

  getSuggestions(
    pos: number,
    lastSegment: string
  ): { suggestions: string[]; match: boolean } {
    const keywords: string[] = [];
    const candidates = this.core.collectCandidates(
      pos,
      this.queryParser.context
    );

    candidates.tokens.forEach((_, k) => {
      let name = this.queryParser.vocabulary.getDisplayName(k);
      if (name.startsWith("'") && name.endsWith("'")) {
        name = name.substring(1, name.length - 1);
      }
      if (name == "-2") return; // todo: quick hack, not sure what this token is
      keywords.push(name);
    });

    const identifiers: string[] = [];
    var match = false;
    candidates.rules.forEach((rule, key) => {
      switch (key) {
        case QueryParser.RULE_identifier:
          identifiers.push(...this.identifierSuggestions(key, rule));
          break;
        case QueryParser.RULE_selectFieldList:
          var result = this.selectFieldSuggestions(key, rule, lastSegment);
          identifiers.push(...result.suggestions);
          match = result.match;
          break;
        case QueryParser.RULE_expandFieldList:
          result = this.expandSuggestions(key, rule, lastSegment);
          identifiers.push(...result.suggestions);
          match = result.match;
          break;
        case QueryParser.RULE_basicExpression:
          result = this.basicExpressionSuggestions(key, rule, lastSegment);
          identifiers.push(...result.suggestions);
          match = result.match;
          break;
        case QueryParser.RULE_orderSpecList:
          identifiers.push(...this.orderSpecSuggestions(key, rule));
          break;
      }
    });

    const suggestions = [...keywords, ...identifiers];
    return { suggestions: suggestions, match: match };
  }

  private identifierSuggestions(
    ruleKey: number,
    rule: CandidateRule
  ): string[] {
    const node = this.map.getByRuleAndToken(ruleKey, rule.startTokenIndex);
    if (!node) return [];

    if (node instanceof PropertyAccessNode) {
      const instanceType = node.parentType;
      if (isPrimitiveType(instanceType)) {
        return [];
      }

      const typeDef = findStructuredType(instanceType.$Type, this.schema);
      if (typeDef) {
        return getAllPropertiesNames(typeDef);
      }
    }

    return [];
  }

  private selectFieldSuggestions(
    ruleKey: number,
    rule: CandidateRule,
    lastSegment: string
  ): { suggestions: string[]; match: boolean } {
    const node = this.map.getByRuleAndToken(ruleKey, rule.startTokenIndex);
    if (!node) return AutoComplete.emptyResult;

    if (node instanceof SelectNode) {
      const instanceType = node.schemaType;
      if (isPrimitiveType(instanceType)) {
        return AutoComplete.emptyResult;
      }

      const typeDef = findStructuredType(instanceType.$Type, this.schema);
      if (typeDef) {
        const properties = getAllProperties(typeDef)
          .filter((prop) => prop.type.$Kind !== "NavigationProperty")
          .map((prop) => prop.name);

        if (properties.indexOf(lastSegment) > -1) {
          return { suggestions: [","], match: true };
        }

        return { suggestions: properties, match: false };
      }
    }

    return { suggestions: [], match: false };
  }

  private expandSuggestions(
    ruleKey: number,
    rule: CandidateRule,
    lastSegment: string
  ): { suggestions: string[]; match: boolean } {
    const node = this.map.getByRuleAndToken(ruleKey, rule.startTokenIndex);

    if (!node) return AutoComplete.emptyResult;

    if (node instanceof ExpandNode) {
      const instanceType = node.schemaType;
      if (isPrimitiveType(instanceType)) {
        return AutoComplete.emptyResult;
      }

      const typeDef = findStructuredType(instanceType.$Type, this.schema);
      if (typeDef) {
        const properties = getAllProperties(typeDef)
          .filter((prop) => prop.type.$Kind === "NavigationProperty")
          .map((prop) => prop.name);
        if (properties.indexOf(lastSegment) > -1) {
          return { suggestions: [","], match: true };
        }

        return { suggestions: properties, match: false };
      }
    }

    return AutoComplete.emptyResult;
  }

  private orderSpecSuggestions(ruleKey: number, rule: CandidateRule): string[] {
    const node = this.map.getByRuleAndToken(ruleKey, rule.startTokenIndex);
    if (!node) return [];

    if (node instanceof OrderByNode) {
      const instanceType = node.schemaType;
      if (isPrimitiveType(instanceType)) {
        return [];
      }

      const typeDef = findStructuredType(instanceType.$Type, this.schema);
      if (typeDef) {
        const properties = getAllProperties(typeDef)
          .filter((property) => !property.type.$Collection)
          .map((property) => property.name);
        // TODO: add 'prop desc' manually, the completion core will not visit the token DESC since the upper-level rule orderByOption is already visited
        return properties.reduce<string[]>(
          (list, item) => [...list, item, `${item} desc`],
          []
        );
        // for some reason, the type is {} for some properties so we can't tell the data type
        // this seems to be an issue with the generated csdl json
        // return getAllProperties(typeDef)
        // .filter(prop => isPrimitiveType(prop.type))
        // .map(prop => prop.name);
      }
    }

    return [];
  }

  private basicExpressionSuggestions(
    ruleKey: number,
    rule: CandidateRule,
    lastSegment: string
  ): { suggestions: string[]; match: boolean } {
    const node = this.map.getByRuleAndToken(ruleKey, rule.startTokenIndex);
    if (!node) AutoComplete.emptyResult;
    if (node instanceof BasicExpressionNode) {
      const instanceType = node.parentType;
      var candidates = ["true", "false"];
      if (!isPrimitiveType(instanceType)) {
        const typeDef = findStructuredType(instanceType.$Type, this.schema);
        if (typeDef) {
          candidates = getAllPropertiesNames(typeDef).concat(candidates);
        }
      }
      return {
        suggestions: candidates,
        match: candidates.indexOf(lastSegment) > -1,
      };
    }

    return AutoComplete.emptyResult;
  }
}
