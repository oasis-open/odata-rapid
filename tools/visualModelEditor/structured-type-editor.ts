import { structuredTypeFunction } from '../templates';
import {
  $TypeOptions,
  NormalizedEdmModel,
  NormalizedEdmModelType,
  objectEntries,
} from '../mermaid-editor-utils';

import { getPropertyFromEditor, ITypeEditor } from './modal-utils';

type StructuredTypeKind = 'EntityType' | 'ComplexType';

abstract class StructuredTypeEditor implements ITypeEditor {
  private readonly _modelEditor: HTMLFormElement;
  private readonly _typeKind: StructuredTypeKind;

  constructor(modelEditor: HTMLFormElement, typeKind: StructuredTypeKind) {
    this._modelEditor = modelEditor;
    this._typeKind = typeKind;
  }

  getEditor(edmType: NormalizedEdmModelType, rsdljs: NormalizedEdmModel): string {
    const baseElements = objectEntries(rsdljs.Model).filter(
      ([_, item]) => item !== edmType && item.$Kind === edmType.$Kind
    );

    const baseMap = baseElements.reduce((map, [key, edmElement]) => {
      map[key] = (edmElement.$BaseType || '').split('.').pop();
      return map;
    }, {});

    const $BaseTypes = baseElements
      .filter(([key, item]) => {
        // If might cause cycles then remove
        let baseType = baseMap[key];
        while (baseType) {
          if (baseType === edmType.$Name) {
            return false;
          }

          baseType = baseMap[baseType];
        }

        return true;
      })
      .map(([key, schemaElement]) => key)
      .sort();

    const $Properties = objectEntries(edmType)
      .filter(([name, _]) => name[0] !== '$')
      .map(([name, property]) => ({
        name,
        isPk: edmType.$Key && edmType.$Key.indexOf(name) >= 0,
        type: (property.$Type || 'String').split('.').pop(),
        isCollection: property.$Collection,
        isNullable: property.$Nullable,
      }));

    const schemaTypeOptions = objectEntries(rsdljs.Model)
      .filter(
        ([_, item]) =>
          item.$Kind === 'EntityType' ||
          item.$Kind === 'ComplexType' ||
          item.$Kind === 'EnumType'
      )
      .map(([name, _]) => name)
      .sort();

    return structuredTypeFunction({
      ...edmType,
      $Properties,
      $BaseTypes,
      $TypeOptions: [...$TypeOptions, ...schemaTypeOptions],
    });
  }

  getEdmType(): NormalizedEdmModelType {
    const typeKind = this._typeKind;
    const structuredTypeEditor = this._modelEditor;
    const name = structuredTypeEditor.querySelector<HTMLInputElement>(
      '#nameInput'
    ).value;
    const extendsInput = structuredTypeEditor.querySelector<HTMLInputElement>(
      '#extendsInput'
    );
    const extendsSelect = structuredTypeEditor.querySelector<HTMLInputElement>(
      '#extendsSelect'
    );

    const properties = Array.from(
      structuredTypeEditor.querySelectorAll<HTMLDivElement>(
        '#propertiesContainer > div.data-row-container'
      )
    ).map((element) => getPropertyFromEditor(element));

    const operations = Array.from(
      structuredTypeEditor.querySelectorAll(
        '#operationsContainer > div.data-row-container'
      )
    ).map((element) => this.getOperation(element, name));

    const structuredType = properties.reduce(
      (accumulator, item) => {
        accumulator[item.$Name] = item;
        return accumulator;
      },
      {
        $Kind: typeKind,
        $Name: name,
      }
    );

    if (typeKind === 'EntityType') {
      structuredType.$Operations = operations;
      structuredType.$Key = properties
        .filter((p) => p.$IsPk)
        .map((p) => p.$Name);
    }

    if (extendsInput && extendsInput.checked && extendsSelect) {
      structuredType.$BaseType = structuredType.$Extends = extendsSelect.value;
    } else {
      delete structuredType.$BaseType;
      delete structuredType.$Extends;
    }

    return structuredType;
  }

  private getOperation(operationEditor, bindingTypeName) {
    const nameInput = operationEditor.querySelector(
      'input[type=text].operation-name-data'
    );
    const typeInput = operationEditor.querySelector(
      'select.operation-type-data'
    );
    const hasReturnInput = operationEditor.querySelector(
      'input[type=checkbox].has-return-data'
    );
    const returnTypeDataRow = operationEditor.querySelector(
      'div.return-type-container > div.data-row-container'
    );
    const inputParameters = [
      ...operationEditor.querySelectorAll(
        'div.input-parameters-container > div.data-row-container'
      ),
    ].map((element) => getPropertyFromEditor(element));

    const operation = {
      $Name: nameInput.value,
      $Kind: typeInput.value,
      $IsBound: true,
      $Parameter: [
        {
          $Name: 'this',
          $Type: bindingTypeName,
        },
        ...inputParameters,
      ],
    } as any;

    if (hasReturnInput && hasReturnInput.checked) {
      const returnProperty = getPropertyFromEditor(returnTypeDataRow);
      operation.$ReturnType = returnProperty.$Type;
    }

    return operation;
  }
}

export class EntityTypeEditor extends StructuredTypeEditor {
  constructor(modelEditor: HTMLFormElement) {
    super(modelEditor, 'EntityType');
  }
}

export class ComplexTypeEditor extends StructuredTypeEditor {
  constructor(modelEditor: HTMLFormElement) {
    super(modelEditor, 'ComplexType');
  }
}
