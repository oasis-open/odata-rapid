import {
  AbstractParseTreeVisitor,
  RuleNode,
  TerminalNode,
} from "antlr4ts/tree";
import {
  AndExpressionContext,
  BasicExpressionContext,
  CompExpressionContext,
  ExpandFieldListContext,
  ExpandOptionContext,
  ExpressionContext,
  FilterOptionContext,
  ODataUriQueryParser,
  OrderByOptionContext,
  OrderFieldContext,
  OrderSpecContext,
  OrExpressionContext,
  ParenExpressionContext,
  QueryOptionContext,
  QueryOptionsContext,
  QueryOptionsListContext,
  SelectFieldContext,
  SelectFieldListContext,
  SelectOptionContext,
  SkipOptionContext,
  TopOptionContext,
} from "./parsers/ODataUriQueryParser";
import {
  createPrimitiveType,
  createUnknownType,
  findProperty,
  findStructuredType,
  ISchema,
  ISchemaType,
  isCollection,
  isPrimitiveType,
  PrimitiveType,
} from "./json-model";
import { ParserRuleContext } from "antlr4ts";
import { ODataUriQueryVisitor } from "./parsers/ODataUriQueryVisitor";
import { peekStack, IError } from "./common";

export interface ISemanticParseResult<TNode extends SemanticNode> {
  tree: TNode;
  errors: IError[];
  schema: ISchema;
  syntaxSemanticMap: ISyntaxToSemanticMap;
}

export interface ISemanticQueryOptionsParser {
  (
    syntaxTree: QueryOptionsContext,
    schema: ISchema,
    rootType: ISchemaType
  ): ISemanticParseResult<QueryOptionsNode>;
}

export function parseQueryOptionsSemantics(
  syntaxTree: QueryOptionsContext,
  schema: ISchema,
  rootType: ISchemaType
): ISemanticParseResult<QueryOptionsNode> {
  const visitor = new QueryOptionsVisitor(schema, rootType);
  const semanticTree = syntaxTree.accept(visitor) as QueryOptionsNode;

  return {
    tree: semanticTree,
    errors: visitor.errors,
    syntaxSemanticMap: visitor.semanticMap,
    schema: visitor.schema,
  };
}

export class SemanticNode {
  syntaxContext: ParserRuleContext;
  nodeType: string;
  schemaType: ISchemaType;
  children: SemanticNode[];
  parent: SemanticNode;

  constructor(syntaxCtx: ParserRuleContext, schemaType: ISchemaType) {
    this.syntaxContext = syntaxCtx;
    this.schemaType = schemaType;
    this.children = [];
  }

  addChild(child: SemanticNode) {
    if (!child) return;
    this.children.push(child);
    child.parent = this;
  }

  toString(): string {
    return this.nodeType;
  }
}

export class QueryOptionsNode extends SemanticNode {
  filterOption: FilterNode;
  selectOption: SelectNode;
  expandOption: ExpandNode;
  skipOption: SkipNode;
  topOption: TopNode;
  orderByOption: OrderByNode;

  nodeType = "queryOptions";

  toString() {
    return `${this.filterOption?.toString()}`;
  }
}

export class FilterNode extends SemanticNode {
  nodeType = "filter";

  get expression(): SemanticNode {
    return this.children.length && this.children[0];
  }

  set expression(node: SemanticNode) {
    if (!node) {
      this.children = [];
    }
    if (this.children.length) {
      this.children[0] = node;
      node.parent = this;
    } else {
      this.addChild(node);
    }
  }

  toString() {
    return `$filter=${this.expression?.toString()}`;
  }
}

export class SelectNode extends SemanticNode {
  nodeType = "select";
}

export class ExpandNode extends SemanticNode {
  nodeType = "expand";
}

export class OrderByNode extends SemanticNode {
  nodeType = "orderby";
  isAsc: boolean = true;
}

export class TopNode extends SemanticNode {
  nodeType = "top";
  value: number;
}

export class SkipNode extends SemanticNode {
  nodeType = "skip";
  value: number;
}

export class BinaryOperatorNode extends SemanticNode {
  operator: string;

  get left(): SemanticNode {
    return this.children.length && this.children[0];
  }

  set left(node: SemanticNode) {
    if (!node) return;
    if (this.children.length) {
      this.children[0] = node;
      node.parent = this;
    } else {
      this.addChild(node);
    }
  }

  get right(): SemanticNode {
    if (this.children.length > 1) {
      return this.children[1];
    }

    return null;
  }

  set right(node: SemanticNode) {
    if (!node) return;
    if (this.children.length === 1) {
      this.addChild(node);
    } else if (this.children.length > 1) {
      this.children[1] = node;
      node.parent = this;
    } else {
      throw new Error(
        "Adding right child of a binary operation without a left child"
      );
    }
  }

  toString() {
    if (this.right) {
      return `(${this.left.toString()}) ${
        this.operator
      } (${this.right.toString()})`;
    }

    return this.left.toString();
  }
}

export function createBinaryOperator(
  ctx: ParserRuleContext,
  type: ISchemaType,
  operator: string
): BinaryOperatorNode {
  const ctor =
    operator === "or"
      ? OrNode
      : operator === "and"
      ? AndNode
      : operator === "eq"
      ? EqNode
      : operator === "neq"
      ? NeqNode
      : operator === "gt"
      ? GtNode
      : operator === "gte"
      ? GteNode
      : operator === "lt"
      ? LtNode
      : operator === "lte"
      ? LteNode
      : null; // todo: throw error
  return new ctor(ctx, type);
}

export class OrNode extends BinaryOperatorNode {
  operator = "or";
}

export class AndNode extends BinaryOperatorNode {
  operator = "and";
}

export class EqNode extends BinaryOperatorNode {
  operator = "eq";
}

export class NeqNode extends BinaryOperatorNode {
  operator = "neq";
}

export class GtNode extends BinaryOperatorNode {
  operator = "gt";
}

export class GteNode extends BinaryOperatorNode {
  operator = "gte";
}

export class LtNode extends BinaryOperatorNode {
  operator = "lt";
}

export class LteNode extends BinaryOperatorNode {
  operator = "lte";
}

export class PropertyAccessNode extends SemanticNode {
  propertyName: string;
  parentType: ISchemaType;
  parentName: string;

  toString() {
    return this.propertyName;
  }
}

export class BasicExpressionNode extends SemanticNode {
  parentType: ISchemaType;
  parentName: string;
}

export class ConstantNode extends SemanticNode {
  rawValue: string;

  toString() {
    return this.rawValue;
  }
}

export class Int32ConstantNode extends ConstantNode {
  get value() {
    return Number(this.rawValue);
  }
}

export class StringContantNode extends ConstantNode {
  get value() {
    return this.rawValue;
  }
}

export class BooleanConstantNode extends ConstantNode {
  get value() {
    return Boolean(this.rawValue);
  }
}

export interface ISyntaxToSemanticMap {
  getByRuleAndToken(ruleKey: number, tokenIndex: number): SemanticNode;
}

export class SyntaxToSemanticMap {
  map: Map<string, SemanticNode>;
  schema: ISchema;

  constructor(schema: ISchema) {
    this.map = new Map<string, SemanticNode>();
    this.schema = schema;
  }

  private computeSyntaxKey(ruleContext: ParserRuleContext) {
    const start = ruleContext.start.tokenIndex;
    const ruleKey = ruleContext.ruleIndex;
    return this.computeKey(ruleKey, start);
  }

  private computeKey(ruleKey: number, tokenIndex: number) {
    const key = `${ruleKey}-${tokenIndex}`;
    return key;
  }

  set(syntaxContext: ParserRuleContext, node: SemanticNode) {
    const key = this.computeSyntaxKey(syntaxContext);
    this.map.set(key, node);
  }

  get(syntaxContext: ParserRuleContext) {
    const key = this.computeSyntaxKey(syntaxContext);
    this.map.get(key);
  }

  getByRuleAndToken(ruleKey: number, tokenIndex: number) {
    const key = this.computeKey(ruleKey, tokenIndex);
    return this.map.get(key);
  }
}

export class QueryOptionsVisitor
  extends AbstractParseTreeVisitor<SemanticNode>
  implements ODataUriQueryVisitor<SemanticNode>
{
  schema: ISchema;
  rootType: ISchemaType;
  errors: IError[];
  typeStack: ISchemaType[];
  semanticMap: SyntaxToSemanticMap;
  root: QueryOptionsNode;

  constructor(schema: ISchema, rootType: ISchemaType) {
    super();
    this.schema = schema;
    this.rootType = rootType;
    this.errors = [];
    this.typeStack = [];
    this.semanticMap = new SyntaxToSemanticMap(schema);
  }

  protected defaultResult(): SemanticNode {
    return null;
  }

  visitQueryOptions(ctx: QueryOptionsContext): SemanticNode {
    if (!ctx) return null;
    const node = new QueryOptionsNode(ctx, this.rootType);
    this.root = node;
    this.semanticMap.set(ctx, node);
    this.typeStack.push(this.rootType);
    const option = ctx.queryOption();
    if (option) {
      this.visitQueryOption(option);
    }

    const optionsList = ctx.childCount > 1 && ctx.queryOptionsList();
    if (optionsList) {
      this.visitQueryOptionsList(optionsList);
    }

    return node;
  }

  visitQueryOption(ctx: QueryOptionContext): SemanticNode {
    if (!ctx) return null;

    const options = [
      "filterOption",
      "selectOption",
      "expandOption",
      "orderByOption",
      "topOption",
      "skipOption",
    ];
    options.forEach((option) => this.checkAndAddQueryOption(option, ctx));

    return null;
  }

  visitQueryOptionsList(ctx: QueryOptionsListContext): SemanticNode {
    if (ctx.childCount === 0) return;
    const option = ctx.queryOption();
    if (option) {
      this.visitQueryOption(option);
    }

    const optionsList = ctx.childCount > 1 && ctx.queryOptionsList();
    if (optionsList) {
      this.visitQueryOptionsList(optionsList);
    }

    return null;
  }

  checkAndAddQueryOption(option: string, ctx: QueryOptionContext) {
    // @ts-ignore
    const optionCtx = ctx[option]() as ParserRuleContext;
    if (optionCtx) {
      // @ts-ignore
      if (this.root[option]) {
        const optName = option.split("Option")[0];
        this.addError(`Duplicate query option $${optName}`, optionCtx);
      }
      // @ts-ignore
      this.root[option] = optionCtx.accept(this);
    }
  }

  visitFilterOption(ctx: FilterOptionContext) {
    const parentType = peekStack(this.typeStack);

    if (!isCollection(parentType)) {
      this.addError("Cannot use $filter on non-collection response", ctx);
    }

    const itemType = { ...parentType };
    itemType.$Collection = false;

    const node = new FilterNode(ctx, itemType);
    this.semanticMap.set(ctx, node);
    // the instance type, to be used by the expression
    this.typeStack.push(itemType);

    const expression =
      ctx.childCount > 0 && ctx.tryGetRuleContext(0, ExpressionContext);
    if (expression) {
      node.expression = expression.accept<SemanticNode>(this);

      if (
        node.expression &&
        node.expression.schemaType.$Type != PrimitiveType.Boolean
      ) {
        this.addError(`The filter expression must evaluate to a boolean`, ctx);
      }
    }

    this.typeStack.pop();

    return node;
  }

  visitSelectOption(ctx: SelectOptionContext) {
    const parentType = peekStack(this.typeStack);

    if (isPrimitiveType(parentType)) {
      this.addError("Cannot use $select on a primitive type", ctx);
    }

    const itemType = { ...parentType };
    itemType.$Collection = false;

    const node = new SelectNode(ctx, itemType);
    this.semanticMap.set(ctx, node);

    this.typeStack.push(itemType);

    const fieldList = ctx.tryGetRuleContext(0, SelectFieldListContext);
    if (fieldList) {
      this.visitSelectNodeFields(fieldList, node);
    }

    this.typeStack.pop();

    return node;
  }

  visitSelectNodeFields(
    ctx: SelectFieldListContext,
    selectNode: SelectNode
  ): SemanticNode {
    this.semanticMap.set(ctx, selectNode); // this helps with auto-complete since this ctx is visited even when there's no field
    const field = ctx.children && ctx.tryGetRuleContext(0, SelectFieldContext);
    if (!field) return;
    const instanceType = peekStack(this.typeStack);
    const propName = field.text;

    let fieldNode: SemanticNode;
    const typeDef = findStructuredType(instanceType.$Type, this.schema);
    if (typeDef) {
      const property = findProperty(propName, typeDef);
      const type = property || createUnknownType();
      if (!property) {
        this.addError(
          `Property '${propName}' does not exist on type '${instanceType.$Type}'`,
          field
        );
      }

      const node = new PropertyAccessNode(field, type);
      this.semanticMap.set(field, node);
      node.parentName = "$it";
      node.parentType = instanceType;
      node.propertyName = propName;

      fieldNode = node;
    } else {
      const node = new PropertyAccessNode(field, createUnknownType());
      this.semanticMap.set(field, node);
      node.parentName = "$it";
      node.parentType = instanceType;
      node.propertyName = propName;
      fieldNode = node;
    }

    selectNode.addChild(fieldNode);

    if (ctx.childCount > 1) {
      const remainingFields = ctx.selectFieldList();
      if (remainingFields) {
        this.visitSelectNodeFields(remainingFields, selectNode);
      }
    }

    return null;
  }

  visitExpandOption(ctx: ExpandOptionContext) {
    const parentType = peekStack(this.typeStack);

    if (isPrimitiveType(parentType)) {
      this.addError("Cannot use $expand on a primitive type", ctx);
    }

    const itemType = { ...parentType };
    itemType.$Collection = false;

    const node = new ExpandNode(ctx, itemType);
    this.semanticMap.set(ctx, node);

    this.typeStack.push(itemType);

    const fieldList = ctx.tryGetRuleContext(0, ExpandFieldListContext);
    if (fieldList) {
      this.visitExpandNodeFields(fieldList, node);
    }

    this.typeStack.pop();

    return node;
  }

  visitExpandNodeFields(
    ctx: ExpandFieldListContext,
    expandNode: ExpandNode
  ): SemanticNode {
    this.semanticMap.set(ctx, expandNode); // this helps with auto-complete since this ctx is visited even when there's no field
    if (ctx.childCount == 0) return null;
    const field = ctx.expandField();
    const instanceType = peekStack(this.typeStack);
    const propName = field.text;

    let fieldNode: SemanticNode;
    const typeDef = findStructuredType(instanceType.$Type, this.schema);
    if (typeDef) {
      const property = findProperty(propName, typeDef);
      const type = property || createUnknownType();
      if (!property) {
        this.addError(
          `Property '${propName}' does not exist on type '${instanceType.$Type}'`,
          field
        );
      }

      if (property?.$Kind !== "NavigationProperty") {
        this.addError(
          `Property '${propName}' is not a navigation property`,
          field
        );
      }

      const node = new PropertyAccessNode(field, type);
      this.semanticMap.set(field, node);
      node.parentName = "$it";
      node.parentType = instanceType;
      node.propertyName = propName;

      fieldNode = node;
    } else {
      const node = new PropertyAccessNode(field, createUnknownType());
      this.semanticMap.set(field, node);
      node.parentName = "$it";
      node.parentType = instanceType;
      node.propertyName = propName;
      fieldNode = node;
    }

    expandNode.addChild(fieldNode);

    if (ctx.childCount > 1) {
      const remainingFields = ctx.expandFieldList();
      if (remainingFields) {
        this.visitExpandNodeFields(remainingFields, expandNode);
      }
    }

    return null;
  }

  visitOrderByOption(ctx: OrderByOptionContext) {
    const parentType = peekStack(this.typeStack);

    if (!isCollection(parentType)) {
      this.addError("$orderby should be used on a collection response", ctx);
    }

    const itemType = { ...parentType };
    itemType.$Collection = false;

    const node = new OrderByNode(ctx, itemType);
    this.semanticMap.set(ctx, node);

    this.typeStack.push(itemType);

    const orderSpec = ctx.tryGetRuleContext(0, OrderSpecContext);
    console.log("order spec", orderSpec);
    if (orderSpec) {
      const field = orderSpec.tryGetRuleContext(0, OrderFieldContext);
      const fieldNode = field && this.visitOrderField(field);
      if (fieldNode) {
        node.addChild(fieldNode);
      } else {
        // this helps detect the instance type during auto-completion
        const node = new PropertyAccessNode(ctx, createUnknownType());
        this.semanticMap.set(orderSpec, node);
        node.parentName = "$it";
        node.parentType = peekStack(this.typeStack);
        node.propertyName = null;
        return node;
      }

      if (orderSpec.DESC()) {
        node.isAsc = false;
      }
    }

    this.typeStack.pop();

    return node;
  }

  visitOrderField(ctx: OrderFieldContext) {
    console.log("visiting order field");
    const instanceType = peekStack(this.typeStack);
    const propName = ctx.text;

    const typeDef = findStructuredType(instanceType.$Type, this.schema);
    if (typeDef) {
      const property = findProperty(propName, typeDef);
      const type = property || createUnknownType();
      if (!property) {
        this.addError(
          `Property '${propName}' does not exist on type '${instanceType.$Type}'`,
          ctx
        );
      }

      if (!isPrimitiveType(property)) {
        this.addError(`Cannot order by a non-primitive type`, ctx);
      }

      const node = new PropertyAccessNode(ctx, type);
      this.semanticMap.set(ctx, node);
      node.parentName = "$it";
      node.parentType = instanceType;
      node.propertyName = propName;

      return node;
    } else {
      const node = new PropertyAccessNode(ctx, createUnknownType());
      this.semanticMap.set(ctx, node);
      node.parentName = "$it";
      node.parentType = instanceType;
      node.propertyName = propName;
      return node;
    }
  }

  visitTopOption(ctx: TopOptionContext) {
    const parentType = peekStack(this.typeStack);
    if (!isCollection(parentType)) {
      this.addError("$top should be used on a collection response", ctx);
    }

    const node = new TopNode(ctx, createPrimitiveType(PrimitiveType.Int32)); // TODO should type be long?
    if (ctx.NUMBER()) {
      node.value = Number(ctx.NUMBER().text);
    }

    return node;
  }

  visitSkipOption(ctx: SkipOptionContext) {
    const parentType = peekStack(this.typeStack);
    if (!isCollection(parentType)) {
      this.addError("$skip should be used on a collection response", ctx);
    }

    const node = new SkipNode(ctx, createPrimitiveType(PrimitiveType.Int32)); // TODO should type be long?
    if (ctx.NUMBER()) {
      node.value = Number(ctx.NUMBER().text);
    }

    return node;
  }

  visitBasicExpression(ctx: BasicExpressionContext) {
    const identifier = ctx.identifier();

    if (identifier) {
      const propName = identifier.getChild(0).text;
      // check whether it's a property
      const instanceType = peekStack(this.typeStack);
      if (isPrimitiveType(instanceType)) {
        this.addError(
          `Cannot access property '${propName}' of type '${instanceType.$Type}'`,
          ctx
        );
      }

      // try to find the property
      const typeDef = findStructuredType(instanceType.$Type, this.schema);
      if (typeDef) {
        const property = findProperty(propName, typeDef);
        const type = property || createUnknownType();
        if (!property) {
          this.addError(
            `Property '${propName}' does not exist on type '${instanceType.$Type}'`,
            identifier
          );
        }

        const node = new PropertyAccessNode(identifier, type);
        this.semanticMap.set(identifier, node);
        node.parentName = "$it";
        node.parentType = instanceType;
        node.propertyName = propName;

        return node;
      } else {
        // todo, if it's not a property, maybe it was a function?
        const node = new PropertyAccessNode(identifier, createUnknownType());
        this.semanticMap.set(identifier, node);
        node.parentName = "$it";
        node.parentType = instanceType;
        node.propertyName = propName;
        return node;
      }
    } else if (ctx.children) {
      return ctx.getChild(0).accept<SemanticNode>(this);
    } else {
      // this help know where we are when providing auto-complete options
      const node = new BasicExpressionNode(ctx, createUnknownType());
      node.parentType = peekStack(this.typeStack);
      node.parentName = "$it";
      this.semanticMap.set(ctx, node);
      return node;
    }
  }

  visitParenExpression(ctx: ParenExpressionContext) {
    const expression = ctx.expression();
    return expression?.accept<SemanticNode>(this);
  }

  visitOrExpression(ctx: OrExpressionContext) {
    const resultType = createPrimitiveType(PrimitiveType.Boolean);
    return this.visitBinaryExpression(ctx, resultType);
  }

  visitAndExpression(ctx: AndExpressionContext) {
    const resultType = createPrimitiveType(PrimitiveType.Boolean);
    return this.visitBinaryExpression(ctx, resultType);
  }

  visitCompExpression(ctx: CompExpressionContext) {
    const resultType = createPrimitiveType(PrimitiveType.Boolean);
    // TODO should validate that inputs have compatible type
    return this.visitBinaryExpression(ctx, resultType);
  }

  visitBinaryExpression(
    ctx: ParserRuleContext,
    type: ISchemaType
  ): SemanticNode {
    const leftChild = ctx.getChild(0);
    const left = leftChild.accept<SemanticNode>(this);
    if (ctx.childCount === 1) return left;

    const operator = ctx.getChild(1).text;

    const node = createBinaryOperator(ctx, type, operator);
    this.semanticMap.set(ctx, node);
    node.left = left;

    if (ctx.childCount > 1) {
      const rightChild = ctx.getChild(2);
      const right = rightChild.accept<SemanticNode>(this);
      node.right = right;
    }

    return node;
  }

  visitTerminal(ctx: TerminalNode): SemanticNode {
    const tokenIndex = ctx._symbol.tokenIndex;
    if (tokenIndex === ODataUriQueryParser.NUMBER) {
      // todo: the forced cast could be an error
      const node = new Int32ConstantNode(
        ctx.parent.ruleContext as ParserRuleContext,
        createPrimitiveType(PrimitiveType.Int32)
      );

      node.rawValue = ctx.text;
    } else if (tokenIndex === ODataUriQueryParser.STRING) {
      const node = new StringContantNode(
        ctx.parent.ruleContext as ParserRuleContext,
        createPrimitiveType(PrimitiveType.String)
      );

      node.rawValue = ctx.text;
    } else if (tokenIndex === ODataUriQueryParser.BOOLEAN) {
      const node = new BooleanConstantNode(
        ctx.parent.ruleContext as ParserRuleContext,
        createPrimitiveType(PrimitiveType.Boolean)
      );

      node.rawValue = ctx.text;
    }

    return null; // should throw an exception
  }

  addError(message: string, ctx: ParserRuleContext) {
    this.errors.push({
      message,
      range: {
        start: ctx.start.startIndex,
        stop: ctx.start.stopIndex,
      },
    });
  }
}
