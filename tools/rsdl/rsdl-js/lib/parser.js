const antlr4 = require("antlr4");
const rsdlLexer = require("../grammar/parser/rsdlLexer").rsdlLexer;
const rsdlParser = require("../grammar/parser/rsdlParser").rsdlParser;
const rsdlListener = require("../grammar/parser/rsdlListener").rsdlListener;
const path = require("path");

const TYPENAMES = {
  Boolean: "Edm.Boolean",
  Date: "Edm.Date",
  Datetime: "Edm.DateTimeOffset",
  Decimal: "Edm.Decimal",
  Double: "Edm.Double",
  Integer: "Edm.Int32",
  String: "Edm.String",
  //TODO: other type shortnames, e.g. Guid/UUID, Time/TimeOfDay?
};

class MyListener extends rsdlListener {
  constructor(includeReader) {
    super();
    this.csdl = { $Version: "4.0" };
    this.namespace = "Model";
    this.schema = {};
    this.entityContainer = { $Kind: "EntityContainer" };
    this.current = {};
    this.topLevelTypes = {};
    this.includeReader = includeReader;
    this.annotatable = [];
    this.annotation = [];
    this.pushAnnotatable(this.schema);
  }

  enterNamespace(ctx) {
    this.namespace = ctx.qualifiedName().getText();
  }

  enterInclude(ctx) {
    const alias = ctx.ID() && ctx.ID().getText();

    const quotedFilename = ctx.STRING().getText();
    const filename = quotedFilename.substring(1, quotedFilename.length - 1);
    const rsdl = this.includeReader(filename);
    //TODO: build full model with recursively included files
    const csdl = parse(rsdl, () => {
      return "";
    });
    const namespace = Object.keys(csdl).filter(
      (name) => !name.startsWith("$")
    )[0];

    if (!this.csdl.$Reference) this.csdl.$Reference = {};
    if (!this.csdl.$Reference[filename])
      this.csdl.$Reference[filename] = { $Include: [] };

    this.csdl.$Reference[filename].$Include.push({
      $Namespace: namespace,
      ...(alias && { $Alias: alias }),
    });
  }

  //TODO: construct annotation value
  enterAnnotation(ctx) {
    this.annotation.unshift({});
  }

  exitAnnotation(ctx) {
    if (this.annotatable.length === 0) {
      console.log("Panic: no annotatable!!!");
    }

    const term = this.normalizeTermName(ctx.qualifiedName().getText());
    this.annotatable[0].target[
      `${this.annotatable[0].prefix}@${term}`
      //TODO: parse annotation value
    ] = this.annotation[0].value;
    this.annotation.shift();
  }

  normalizeTermName(name) {
    //TODO: clean up
    return name
      .replace(/^Core./, "Org.OData.Core.V1.")
      .replace(/^Validation./, "Org.OData.Validation.V1.");
  }

  exitPath(ctx) {
    //TODO: do we support absolute paths?
    this.annotation[0].value = { $Path: ctx.getText().substring(2) };
  }

  enterArr(ctx) {
    this.annotation[0].value = [];
  }

  enterItem(ctx) {
    this.annotation.unshift({});
  }

  exitItem(ctx) {
    const value = this.annotation[0].value;
    this.annotation.shift();
    this.annotation[0].value.push(value);
  }

  enterObj(ctx) {
    this.annotation[0].value = {};
  }

  enterPair(ctx) {
    this.annotation.unshift({});
  }

  exitPair(ctx) {
    const value = this.annotation[0].value;
    this.annotation.shift();
    this.annotation[0].value[ctx.ID().getText()] = value;
  }

  exitValue(ctx) {
    if (this.annotation[0].value === undefined) {
      this.annotation[0].value = JSON.parse(ctx.getText());
    }
  }

  pushAnnotatable(target, prefix = "") {
    this.annotatable.unshift({ target, prefix });
  }

  popAnnotatable() {
    this.annotatable.shift();
  }

  enterStructuredType(ctx) {
    const name = ctx.ID().getText();
    this.current.type = {
      $Kind: "ComplexType",
      $$Name: name,
      ...(ctx.ABSTRACT() && { $Abstract: true }),
      $OpenType: true,
    };
    this.schema[name] = this.current.type;
    this.pushAnnotatable(this.current.type);
  }

  exitStructuredType(ctx) {
    delete this.current.type.$$Name;
    this.current.type = null;
    this.popAnnotatable();
  }

  enterBaseType(ctx) {
    this.current.type.$BaseType = `${this.namespace}.${ctx.ID().getText()}`;
  }

  enterProperty(ctx) {
    this.current.typedElement = {};
    const propertyName = ctx.propertyName();
    const name = propertyName && propertyName.getText();
    if (ctx.KEY()) {
      this.current.type.$Kind = "EntityType";
      if (!this.current.type.$Key) this.current.type.$Key = [];
      this.current.type.$Key.push(name);
    }
    this.current.type[name] = this.current.typedElement;
    this.pushAnnotatable(this.current.typedElement);
  }

  exitProperty(ctx) {
    this.current.typedElement = null;
    this.popAnnotatable();
  }

  enterTypeName(ctx) {
    if (!this.current.typedElement) return;
    let name = ctx.getText();
    name = TYPENAMES[name] || name;
    if (!name.includes(".")) name = `${this.namespace}.${name}`;
    if (name !== "Edm.String") this.current.typedElement.$Type = name;
  }

  enterSingle(ctx) {
    if (!this.current.typedElement) return;
    if (ctx.NULLABLE()) this.current.typedElement.$Nullable = true;
  }

  enterArray(ctx) {
    if (!this.current.typedElement) return;
    if (ctx.NULLABLE()) this.current.typedElement.$Nullable = true;
    this.current.typedElement.$Collection = true;
  }

  enterOperation(ctx) {
    const name = ctx.ID().getText();
    if (!this.schema[name]) this.schema[name] = [];
    this.current.overload = {
      $Kind: ctx.ACTION() ? "Action" : "Function",
      $IsBound: true,
      ...(ctx.FUNCTION() && { $IsComposable: true }),
      $Parameter: [
        {
          $Name: "this",
          $Type: `${this.namespace}.${this.current.type.$$Name}`,
        },
      ],
    };
    this.schema[name].push(this.current.overload);
    this.pushAnnotatable(this.current.overload);
  }

  exitOperation(ctx) {
    this.current.typedElement = null;
    this.popAnnotatable();
  }

  enterParameter(ctx) {
    const name = ctx.ID().getText();
    this.current.typedElement = { $Name: name };
    if (!this.current.overload.$Parameter)
      this.current.overload.$Parameter = [];
    this.current.overload.$Parameter.push(this.current.typedElement);
    this.pushAnnotatable(this.current.typedElement);
  }

  exitParameter(ctx) {
    this.current.typedElement = null;
    this.popAnnotatable();
  }

  enterReturnType(ctx) {
    this.current.typedElement = {};
    this.current.overload.$ReturnType = this.current.typedElement;
    this.pushAnnotatable(this.current.typedElement);
  }

  exitReturnType(ctx) {
    this.current.typedElement = null;
    this.popAnnotatable();
  }

  enterEnumType(ctx) {
    const name = ctx.ID().getText();
    const enumKind = ctx.enumKind().getText();
    this.current.type = {
      $Kind: "EnumType",
      ...(enumKind === "flags" && { $IsFlags: true }),
      $$nextMemberNumber: enumKind === "flags" ? 1 : 0,
      $$enumKind: enumKind,
    };
    this.schema[name] = this.current.type;
    this.pushAnnotatable(this.current.type);
  }

  exitEnumType(ctx) {
    delete this.current.type.$$nextMemberNumber;
    delete this.current.type.$$enumKind;
    this.current.type = null;
    this.popAnnotatable();
  }

  enterEnumMember(ctx) {
    const name = ctx.ID().getText();
    this.current.type[name] = this.current.type.$$nextMemberNumber;
    if (this.current.type.$$enumKind === "flags") {
      this.current.type.$$nextMemberNumber *= 2;
    } else {
      this.current.type.$$nextMemberNumber += 1;
    }
    this.pushAnnotatable(this.current.type, name);
  }

  exitEnumMember(ctx) {
    this.popAnnotatable();
  }

  enterService(ctx) {
    const name = (ctx.ID() && ctx.ID().getText()) || "Service";
    this.csdl.$EntityContainer = `${this.namespace}.${name}`;
    this.schema[name] = this.entityContainer;
    this.pushAnnotatable(this.entityContainer);
  }

  exitService(ctx) {
    this.popAnnotatable();
  }

  enterEntitySet(ctx) {
    const name = ctx.ID().getText();
    const set = { $Collection: true };
    set.$Type = `${this.namespace}.${ctx.qualifiedName().getText()}`;
    this.topLevelTypes[set.$Type] = true;
    this.entityContainer[name] = set;
    this.pushAnnotatable(set);
  }

  exitEntitySet(ctx) {
    this.popAnnotatable();
  }

  enterSingleton(ctx) {
    const name = ctx.ID().getText();
    const singleton = {};
    singleton.$Type = `${this.namespace}.${ctx.qualifiedName().getText()}`;
    this.topLevelTypes[singleton.$Type] = true;
    this.entityContainer[name] = singleton;
    this.pushAnnotatable(singleton);
  }

  exitSingleton(ctx) {
    this.popAnnotatable();
  }

  enterServiceOperation(ctx) {
    const name = ctx.ID().getText();
    if (!this.schema[name]) this.schema[name] = [];
    const kind = ctx.ACTION() ? "Action" : "Function";
    this.current.overload = {
      $Kind: kind,
      ...(ctx.FUNCTION() && { $IsComposable: true }),
    };
    this.schema[name].push(this.current.overload);
    const serviceOperation = {};
    serviceOperation[`$${kind}`] = `${this.namespace}.${name}`;
    this.entityContainer[name] = serviceOperation;
    this.pushAnnotatable(this.current.overload);
  }

  exitServiceOperation(ctx) {
    this.popAnnotatable();
  }

  exitModel(ctx) {
    this.csdl[this.namespace] = this.schema;

    // types referenced in entity sets or singletons are entity types
    for (const [name, child] of Object.entries(this.entityContainer || {})) {
      if (!this.isIdentifier(name) || !child.$Type) continue;
      const type = this.modelElement(child.$Type);
      if (!["ComplexType", "EntityType"].includes(type.$Kind)) {
        //TODO: Error if entity set or singleton does not reference a structured type
        continue;
      }
      type.$Kind = "EntityType";
      //TODO: entity types used in entity sets must have a key
    }

    for (const [typename, type] of Object.entries(this.schema)) {
      if (!this.isIdentifier(typename)) continue;
      if (!["ComplexType", "EntityType"].includes(type.$Kind)) continue;
      for (const [propertyname, property] of Object.entries(type)) {
        if (!this.isIdentifier(propertyname)) continue;
        if (!property.$Type) continue;
        const referencedType = this.modelElement(property.$Type);
        if (referencedType && referencedType.$Kind === "EntityType") {
          property.$Kind = "NavigationProperty";
          if (!this.topLevelTypes[property.$Type]) {
            property.$ContainsTarget = true;
          }
        }
      }
    }
  }

  modelElement(name) {
    const q = this.nameParts(name);
    if (q.qualifier === "Edm") return null;
    console.assert(q.qualifier === this.namespace, `Unknown type ${name}`);
    const element = this.schema[q.name];
    return element;
  }

  nameParts(qualifiedName) {
    const pos = qualifiedName.lastIndexOf(".");
    console.assert(pos > 0, "Invalid qualified name " + qualifiedName);
    return {
      qualifier: qualifiedName.substring(0, pos),
      name: qualifiedName.substring(pos + 1),
    };
  }

  isIdentifier(name) {
    return !name.startsWith("$") && !name.includes("@");
  }
}

class ErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.errors = [];
  }

  syntaxError(recognizer, symbol, line, column, message, payload) {
    //TODO: include filename, also from included files, via includeReader (rename to fileReader?)
    this.errors.push({ message, target: `${line}:${column + 1}` });
  }
}

function parse(input, includeReader) {
  const errorListener = new ErrorListener();

  const chars = new antlr4.InputStream(input);
  const lexer = new rsdlLexer(chars);
  lexer.removeErrorListeners();
  lexer.addErrorListener(errorListener);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new rsdlParser(tokens);
  parser.buildParseTrees = true;
  parser.removeErrorListeners();
  parser.addErrorListener(errorListener);
  const tree = parser.model();
  const listener = new MyListener(includeReader);

  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

  if (errorListener.errors.length > 0) {
    listener.csdl.$$errors = errorListener.errors;
  }

  return listener.csdl;
}

module.exports = { parse };
