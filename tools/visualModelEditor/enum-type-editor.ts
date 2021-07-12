import { enumTypeFunction } from '../templates';
import {
  ModelTypeKind,
  NormalizedEdmModel,
  NormalizedEdmModelType,
  objectEntries,
} from '../mermaid-editor-utils';

import { ITypeEditor } from './modal-utils';

export class EnumTypeEditor implements ITypeEditor {
  private readonly _modelEditor: HTMLFormElement;
  constructor(modelEditor: HTMLFormElement) {
    this._modelEditor = modelEditor;
  }

  getEditor(
    edmType: NormalizedEdmModelType,
    rsdljs: NormalizedEdmModel
  ): string {
    const enumMembers = objectEntries(edmType)
      .filter(([name, _]) => name[0] !== '$')
      .map(([name, _]) => name);

    return enumTypeFunction({ ...edmType, enumMembers });
  }

  getEdmType(): NormalizedEdmModelType {
    const enumEditor = this._modelEditor;
    const name = enumEditor.querySelector<HTMLInputElement>('#nameInput').value;
    const enumType = Array.from(
      enumEditor.querySelectorAll<HTMLInputElement>(
        '#enumMembersContainer input[type=text]'
      )
    )
      .map((element) => element.value)
      .reduce(
        (accumulator, item, index) => {
          accumulator[item] = index;
          return accumulator;
        },
        {
          $Kind: 'EnumType' as ModelTypeKind,
          $Name: name,
        }
      );

    return enumType;
  }
}
