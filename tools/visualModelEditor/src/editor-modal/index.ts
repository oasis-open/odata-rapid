import { Modal, Tooltip } from "bootstrap";
import {
  $TypeOptions,
  objectEntries,
  NormalizedEdmModel,
  NormalizedEdmModelType,
  ModelTypeKind,
  getModel,
} from "../mermaid-editor-utils";
import { ITypeEditor, DefaultTypeEditor } from "./modal-utils";
import {
  enumTypeFunction,
  enumMemberFunction,
  propertyFunction,
  structuredTypeFunction,
  operationFunction,
  entityContainerFunction,
} from "../templates";

import { EnumTypeEditor } from "./enum-type-editor";
import { ComplexTypeEditor, EntityTypeEditor } from "./structured-type-editor";
import { EntityContainerTypeEditor } from "./entity-container-type-editor";

export class EditorModal {
  private readonly _modal: Modal;
  private readonly _modelLabel: HTMLElement;
  private readonly _modelEditor: HTMLFormElement;
  private readonly _enumTypeEditor: EnumTypeEditor;
  private readonly _complexTypeEditor: ComplexTypeEditor;
  private readonly _entityTypeEditor: EntityTypeEditor;
  private readonly _entityContainerTypeEditor: EntityContainerTypeEditor;

  private _editModel: NormalizedEdmModelType;
  private _globalIndex = 1000;
  private _currentSchema: NormalizedEdmModel;

  constructor(element: HTMLElement) {
    this._modal = new Modal(element);
    this._modelLabel = element.querySelector("#modelLabel");
    const deleteElementButton = element.querySelector<HTMLButtonElement>(
      "#deleteElementButton"
    );

    deleteElementButton.addEventListener("click", () => this.delete());

    const modelEditor = element.querySelector<HTMLFormElement>("#modelEditor");
    this._modelEditor = modelEditor;

    this._enumTypeEditor = new EnumTypeEditor(modelEditor);
    this._complexTypeEditor = new ComplexTypeEditor(modelEditor);
    this._entityTypeEditor = new EntityTypeEditor(modelEditor);
    this._entityContainerTypeEditor = new EntityContainerTypeEditor(
      modelEditor
    );

    modelEditor.addEventListener("click", (event) => {
      const button = event.target as HTMLButtonElement;
      if (!button) {
        return;
      }

      switch (button.dataset.modalCommand) {
        case "remove":
          this.removeDataRow(button);
          return;
        case "add":
          this.addDataRow(button);
          return;
        default:
          return;
      }
    });

    modelEditor.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.save();
    });
  }

  public onSave?: (
    existingModel: NormalizedEdmModelType,
    edmModel: NormalizedEdmModelType
  ) => void;

  public onDelete?: (edmModel: NormalizedEdmModelType) => void;

  public open(model: NormalizedEdmModelType, schema: NormalizedEdmModel) {
    this._currentSchema = schema;
    this._editModel = model;

    const typeEditor = this.getTypeEditor(model.$Kind);
    const editorHtml = typeEditor.getEditor(model, schema);

    const modelEditor = this._modelEditor;

    modelEditor.innerHTML = editorHtml;

    modelEditor
      .querySelectorAll('[data-bs-toggle="tooltip"]')
      .forEach((element) => new Tooltip(element));

    modelEditor.classList.remove("was-validated");

    this._modelLabel.innerHTML = model.$Kind;

    this._modal.show();
  }

  private delete() {
    const existingModel = this._editModel;
    if (this.onDelete) {
      this.onDelete(existingModel);
    }

    this._modal.hide();
  }

  private save() {
    const modelEditor = this._modelEditor;
    if (!modelEditor.checkValidity()) {
      modelEditor.classList.add("was-validated");
      console.log("Not valid");
      return;
    }

    // Validate
    // updateModel(schema, modelModal.model, editorModel);

    // console.log(modelEditor.innerHTML);
    // console.log(modelModal.model);

    const existingModel = this._editModel;
    const typeEditor = this.getTypeEditor(existingModel.$Kind);
    const editorModel = typeEditor.getEdmType();

    if (this.onSave) {
      this.onSave(existingModel, editorModel);
    }

    this._modal.hide();
  }

  private getTypeEditor(typeKind: ModelTypeKind): ITypeEditor {
    switch (typeKind) {
      case "EnumType":
        return this._enumTypeEditor;
      case "ComplexType":
        return this._complexTypeEditor;
      case "EntityType":
        return this._entityTypeEditor;
      case "EntityContainer":
        return this._entityContainerTypeEditor;
      default:
        return new DefaultTypeEditor(typeKind);
    }
  }

  private removeDataRow(button: HTMLButtonElement) {
    const dataRow = button.closest(".data-row-container");
    dataRow.parentNode.removeChild(dataRow);
  }

  private addDataRow(button: HTMLButtonElement) {
    const { templateFunction, extraProps } = this.getAddParameters(button);
    if (!templateFunction) {
      return;
    }

    const schema = this._currentSchema;
    const index = this._globalIndex++;

    const template = document.createElement("template");

    const schemaOptions = objectEntries(getModel(schema))
      .filter(
        ([name, item]) =>
          item.$Kind === "EntityType" ||
          item.$Kind === "ComplexType" ||
          item.$Kind === "EnumType"
      )
      .map(([name, _]) => name)
      .sort();

    template.innerHTML = templateFunction({
      $Index: index,
      $TypeOptions: [...$TypeOptions, ...schemaOptions],
      $StructuredKind: button.dataset.structuredKind,
      ...extraProps,
    }).trim();

    const dataRow = template.content.firstElementChild;
    button.parentElement.insertAdjacentElement("beforebegin", dataRow);

    dataRow
      .querySelectorAll('[data-bs-toggle="tooltip"]')
      .forEach((element) => new Tooltip(element));
  }

  private getAddParameters(button: HTMLButtonElement) {
    let templateFunction: HandlebarsTemplateDelegate;
    let extraProps = {};
    switch (button.dataset.addType) {
      case "property":
        templateFunction = propertyFunction;
        break;
      case "operation":
        templateFunction = operationFunction;
        break;
      case "enumMember":
        templateFunction = enumMemberFunction;
        break;
      case "inputParameter":
        templateFunction = propertyFunction;
        break;
      case "navigationSource":
        templateFunction = propertyFunction;

        const $TypeOptions = objectEntries(getModel(this._currentSchema))
          .filter(
            ([name, item]) => name[0] !== "$" && item.$Kind === "EntityType"
          )
          .map(([name, _]) => name);

        extraProps = { $TypeOptions };
        break;
    }

    return { templateFunction, extraProps };
  }
}
