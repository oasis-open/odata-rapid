import { entityContainerFunction } from './templates';
import { NormalizedEdmModel, NormalizedEdmModelType, objectEntries } from './mermaid-editor-utils';

import { getPropertyFromEditor, ITypeEditor } from './modal-utils';

export class EntityContainerTypeEditor implements ITypeEditor {
  private readonly _modelEditor: HTMLFormElement;
  constructor(modelEditor: HTMLFormElement) {
    this._modelEditor = modelEditor;
  }

  getEditor(edmType: NormalizedEdmModelType, rsdljs: NormalizedEdmModel): string {
    const $NavigationSources = objectEntries(edmType)
      .filter(([name, _]) => name[0] !== '$')
      .map(([name, property]) => ({
        name,
        type: (property.$Type || 'String').split('.').pop(),
        isCollection: property.$Collection,
        isNullable: property.$Nullable,
      }));

    const $EntityTypes = objectEntries(rsdljs.Model)
      .filter(([name, item]) => name[0] !== '$' && item.$Kind === 'EntityType')
      .map(([name, _]) => name);

    return entityContainerFunction({
      ...edmType,
      $NavigationSources,
      $EntityTypes,
    });
  }

  getEdmType(): NormalizedEdmModelType {
    const entityContainerEditor = this._modelEditor;
    const name = entityContainerEditor.querySelector<HTMLInputElement>(
      '#nameInput'
    ).value;
    const entityContainer = Array.from(
      entityContainerEditor.querySelectorAll<HTMLDivElement>(
        '#navigationSourcesContainer > div.data-row-container'
      )
    )
      .map((element) => getPropertyFromEditor(element))
      .reduce(
        (accumulator, item) => {
          accumulator[item.$Name] = item;
          return accumulator;
        },
        {
          $Kind: 'EntityContainer',
          $Name: name,
        }
      );

    return entityContainer;
  }
}
