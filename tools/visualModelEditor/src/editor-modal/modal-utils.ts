import {
  ModelTypeKind,
  NormalizedEdmModel,
  NormalizedEdmModelType,
} from "../mermaid-editor-utils";
export interface ITypeEditor {
  getEditor(
    edmType: NormalizedEdmModelType,
    schema: NormalizedEdmModel
  ): string;
  getEdmType(): NormalizedEdmModelType;
}

export class DefaultTypeEditor implements ITypeEditor {
  private readonly _typeKind: ModelTypeKind;
  constructor(typeKind: ModelTypeKind) {
    this._typeKind = typeKind;
  }
  getEditor(
    edmType: NormalizedEdmModelType,
    schema: NormalizedEdmModel
  ): string {
    return `<pre>${JSON.stringify(edmType, null, 2)}</pre>`;
  }
  getEdmType(): NormalizedEdmModelType {
    return { $Kind: this._typeKind };
  }
}

export function getPropertyFromEditor(editorElement: HTMLElement) {
  const pkInput = editorElement.querySelector<HTMLInputElement>(
    "input[type=checkbox].pk-data"
  );
  const nameInput = editorElement.querySelector<HTMLInputElement>(
    "input[type=text].name-data"
  );
  const typeInput =
    editorElement.querySelector<HTMLSelectElement>("select.type-data");
  const collectionInput = editorElement.querySelector<HTMLInputElement>(
    "input[type=checkbox].collection-data"
  );
  const nullableInput = editorElement.querySelector<HTMLInputElement>(
    "input[type=checkbox].nullable-data"
  );

  const property = {} as any;
  if (pkInput && pkInput.checked) {
    property.$IsPk = true;
  }

  if (nameInput) {
    property.$Name = nameInput.value;
  }

  if (typeInput) {
    property.$Type = typeInput.value;
  }

  if (collectionInput && collectionInput.checked) {
    property.$Collection = true;
  }

  if (nullableInput && nullableInput.checked) {
    property.$Nullable = true;
  }

  return property;
}
