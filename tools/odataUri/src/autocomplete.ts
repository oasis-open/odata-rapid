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
      QueryParser.RULE_orderByOption,
      QueryParser.RULE_selectFieldList,
      QueryParser.RULE_expandFieldList,
    ]);
  }

  getSuggestions(pos: number): string[] {
    const keywords: string[] = [];
    const candidates = this.core.collectCandidates(pos);

    candidates.tokens.forEach((_, k) => {
      let name = this.queryParser.vocabulary.getDisplayName(k);
      if (name.startsWith("'") && name.endsWith("'")) {
        name = name.substring(1, name.length - 1);
      }
      if (name == "-2") return; // todo: quick hack, not sure what this token is
      keywords.push(name);
    });

    const identifiers: string[] = [];
    candidates.rules.forEach((rule, key) => {
      switch (key) {
        case QueryParser.RULE_identifier:
          identifiers.push(...this.identifierSuggestions(key, rule));
          break;
        case QueryParser.RULE_selectFieldList:
          identifiers.push(...this.selectFieldSuggestions(key, rule));
          break;
        case QueryParser.RULE_expandFieldList:
          identifiers.push(...this.expandSuggestions(key, rule));
        case QueryParser.RULE_basicExpression:
          identifiers.push(...this.basicExpressionSuggestions(key, rule));
          break;
        case QueryParser.RULE_orderByOption:
          identifiers.push(...this.orderBySuggestions(key, rule));
          break;
      }
    });
    const suggestions = [...keywords, ...identifiers];
    return suggestions;
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
    rule: CandidateRule
  ): string[] {
    const node = this.map.getByRuleAndToken(ruleKey, rule.startTokenIndex);

    if (!node) return [];

    if (node instanceof SelectNode) {
      const instanceType = node.schemaType;
      if (isPrimitiveType(instanceType)) {
        return [];
      }

      const typeDef = findStructuredType(instanceType.$Type, this.schema);
      if (typeDef) {
        const properties = getAllPropertiesNames(typeDef);
        if (node.children.length) {
          properties.push(",");
        }

        return properties;
      }
    }

    return [];
  }

  private expandSuggestions(ruleKey: number, rule: CandidateRule): string[] {
    const node = this.map.getByRuleAndToken(ruleKey, rule.startTokenIndex);

    if (!node) return [];

    if (node instanceof ExpandNode) {
      const instanceType = node.schemaType;
      if (isPrimitiveType(instanceType)) {
        return [];
      }

      const typeDef = findStructuredType(instanceType.$Type, this.schema);
      if (typeDef) {
        const properties = getAllProperties(typeDef)
          .filter((prop) => prop.type.$Kind === "NavigationProperty")
          .map((prop) => prop.name);
        if (node.children.length) {
          properties.push(",");
        }

        return properties;
      }
    }

    return [];
  }

  private orderBySuggestions(ruleKey: number, rule: CandidateRule): string[] {
    const node = this.map.getByRuleAndToken(ruleKey, rule.startTokenIndex);
    if (!node) return [];

    if (node instanceof OrderByNode) {
      const instanceType = node.schemaType;
      if (isPrimitiveType(instanceType)) {
        return [];
      }

      const typeDef = findStructuredType(instanceType.$Type, this.schema);
      if (typeDef) {
        const properties = getAllPropertiesNames(typeDef);
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
    rule: CandidateRule
  ): string[] {
    const node = this.map.getByRuleAndToken(ruleKey, rule.startTokenIndex);
    if (!node) return [];
    if (node instanceof BasicExpressionNode) {
      const instanceType = node.parentType;
      const candidates = ["true", "false"];
      if (isPrimitiveType(instanceType)) {
        return candidates;
      }

      const typeDef = findStructuredType(instanceType.$Type, this.schema);
      if (typeDef) {
        return getAllPropertiesNames(typeDef).concat(candidates);
      }
    }

    return [];
  }
}
