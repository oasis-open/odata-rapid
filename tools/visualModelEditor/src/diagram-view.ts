import mermaid from "mermaid";
import { NormalizedEdmModel } from "./mermaid-editor-utils";
import { getType, getModel } from "./mermaid-editor-utils";

export class DiagramView {
  private readonly _diagramContainer: HTMLDivElement;

  private _mermaidText = "";

  constructor(diagramContainer: HTMLDivElement) {
    this._diagramContainer = diagramContainer;
  }

  public update(schema: NormalizedEdmModel) {
    const diagramContainer = this._diagramContainer;
    const mermaidText = this.getMermaid(schema);
    this._mermaidText = mermaidText;

    this.redraw();
  }

  public redraw() {
    const diagramContainer = this._diagramContainer;
    const mermaidText = this._mermaidText;

    diagramContainer.innerHTML = mermaidText;
    delete diagramContainer.dataset.processed;

    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "loose",
      // logLevel: 1,
    });

    mermaid.init(undefined, diagramContainer);
  }

  private getMermaid(schema: NormalizedEdmModel) {
    const schemaModel = getModel(schema);
    if (!schemaModel || !Object.keys(schemaModel).length) {
      return `graph LR
      text[Add new element above]`;
    }

    const entries = Object.entries(schemaModel);
    const model = entries.map(([key, element]) =>
      this.getMermaidElement(key, element)
    );

    const relationships = entries
      .reduce((accumulator, [elementName, element]) => {
        return Object.entries(element).reduce(
          (accumlator2, [propertyName, propertyType]) => {
            if (propertyType.$Kind === "NavigationProperty") {
              accumlator2.push({
                source: elementName,
                target: propertyType.$Type.split(".").pop(),
                name: propertyName,
                isContained: propertyType.$ContainsTarget === true,
              });
            }

            if (propertyName === "$BaseType") {
              accumlator2.push({
                source: elementName,
                target: propertyType.split(".").pop(),
                isInheritance: true,
              });
            }

            return accumlator2;
          },
          accumulator
        );
      }, [])
      .map((relation) => {
        let definition = "--o";
        if (relation.isContained) {
          definition = "--*";
        } else if (relation.isInheritance) {
          definition = "--|>";
        }

        const text = `\t${relation.source} ${definition} ${relation.target}`;
        if (relation.isInheritance || !relation.name) {
          return text;
        }

        return `${text} : ${relation.name}`;
      });

    const elementSelects = entries.map(
      ([key, ..._]) => `\tclick ${key} call selectElement(${key}) "${key}"`
    );

    return ["classDiagram", ...model, ...relationships, ...elementSelects].join(
      "\n"
    );
  }

  private getMermaidElement(name, edmElement) {
    const contents = this.getElementContents(edmElement);
    return `\tclass ${name} {\n\t\t${contents}\n\t}`;
  }

  private getElementContents(edmElement) {
    switch (edmElement.$Kind) {
      case "EnumType":
        return this.getEnumTypeContents(edmElement);
      case "EntityType":
      case "ComplexType":
        return this.getStructuredTypeContents(edmElement);
      case "EntityContainer":
        return this.getEntityContainerContents(edmElement);
      default:
        return "";
    }
  }

  private getEnumTypeContents(enumType) {
    return Object.entries(enumType)
      .filter(([name, _]) => name[0] !== "$")
      .map(([name, value]) => `${name}: ${value}`)
      .join("\n\t\t");
  }

  private getStructuredTypeContents(structuredType) {
    const properties = this.getPropertiesContents(structuredType);
    const operations = this.getOperationsContents(structuredType.$Operations);

    return properties + operations;
  }

  private getEntityContainerContents(entityContainer) {
    return this.getPropertiesContents(entityContainer);
  }

  private getPropertiesContents(edmType) {
    return Object.entries(edmType)
      .filter(([name, _]) => name[0] !== "$")
      .map(([name, typeDef]) => this.getProperty(name, typeDef))
      .join("\n\t\t");
  }

  private getOperationsContents(operations) {
    if (!operations || !operations.length) {
      return "";
    }

    return (
      "\n\t\t" +
      operations
        .map(
          (op) =>
            `${op.$Name} (${this.getOperationParameters(
              op.$Parameter.slice(1)
            )}) ${op.$ReturnType ? "∶ " + getType(op.$ReturnType) : ""}`
        )
        .join("\n\t\t")
    );
  }

  private getOperationParameters(inputParameters) {
    if (!inputParameters || !inputParameters.length) {
      return "";
    }

    return inputParameters.map((p) => this.getProperty(p.$Name, p)).join(", ");
  }

  private getProperty(name, typeDef) {
    const type = getType(typeDef);
    return `${name}∶ ${type}`;
  }
}
