import { parse } from 'rsdl-js';
import mermaid from 'mermaid';

import 'bootstrap/dist/css/bootstrap.css';
// import 'swagger-ui/dist/swagger-ui.css';
// import 'highlight.js/styles/default.css';
// import '../css/main.scss';

import {
  NormalizedEdmModel,
  NormalizedEdmModelType,
} from './mermaid-editor-utils';
import { editorContents } from './templates';
import { EditorModal } from './editor-modal';
import { getRsdlJs, getRsdlText } from './rsdl-converter';
import { DiagramView } from './diagram-view';

type ModelUpdatedCallback = (rsdl: string) => any;

export class MermaidEditor {
  private readonly _onModelUpdated: ModelUpdatedCallback;
  private readonly _editorModal: EditorModal;
  private readonly _entityContainerButton: HTMLButtonElement;
  private readonly _diagramView: DiagramView;

  private _currentSchema: NormalizedEdmModel;

  constructor(
    editorContainer: HTMLElement,
    global: any,
    onModelUpdated: ModelUpdatedCallback
  ) {
    this._onModelUpdated = onModelUpdated;

    editorContainer.innerHTML = editorContents;

    const editorModal = new EditorModal(
      editorContainer.querySelector<HTMLFormElement>('#modelModal')
    );

    this._editorModal = editorModal;

    editorModal.onSave = (edmType, rsdljs) => this.save(edmType, rsdljs);
    editorModal.onDelete = (edmType) => this.delete(edmType);

    this._diagramView = new DiagramView(
      editorContainer.querySelector<HTMLDivElement>('#diagramContainer')
    );

    global.selectElement = (name) => this.selectElement(name);

    editorContainer
      .querySelector('#enumTypeButton')
      .addEventListener('click', () => this.addEnumType());
    editorContainer
      .querySelector('#complexTypeButton')
      .addEventListener('click', () => this.addComplexType());
    editorContainer
      .querySelector('#entityTypeButton')
      .addEventListener('click', () => this.addEntityType());
    const entityContainerButton = editorContainer.querySelector<HTMLButtonElement>(
      '#entityContainerButton'
    );
    this._entityContainerButton = entityContainerButton;
    entityContainerButton.addEventListener('click', () =>
      this.addEntityContainerType()
    );
  }

  public redraw() {
    this._diagramView.redraw();
  }

  public updateCsdl(jsonCsdlText: string)
  {
    //todo: add error handling
    const schema = JSON.parse(jsonCsdlText);
    this.updateSchema(schema);
  }

  public updateRsdl(rsdlText: string) {
    try {
      const { rsdljs, errors } = getRsdlJs(rsdlText);

      if (errors) {
        errors.map((error) => console.error(error));
        return;
      }
      this.updateSchema(rsdljs);
    }
    catch {}
  }

  private updateSchema(schema: any)
  {
    const entityContainerButton = this._entityContainerButton;
      console.info(schema);

    if (schema.$EntityContainer) {
      entityContainerButton.classList.add('d-none');
    } else {
      entityContainerButton.classList.remove('d-none');
    }

    this._currentSchema = schema;
    this._diagramView.update(schema);
  }

  private publishRsdl() {
    const rsdlText = getRsdlText(this._currentSchema);
    if (this._onModelUpdated) {
      this._onModelUpdated(rsdlText);
    }
  }

  private save(
    existingModel: NormalizedEdmModelType,
    edmModel: NormalizedEdmModelType
  ) {
    const schema = this._currentSchema;
    const entries = Object.entries(schema.Model);
    const existingModelIndex = entries.findIndex(
      (e) => e[0] == existingModel.$Name
    );
    if (existingModelIndex >= 0) {
      entries.splice(existingModelIndex, 1, [edmModel.$Name, edmModel]);
    } else {
      entries.push([edmModel.$Name, edmModel]);
    }

    schema.Model = Object.fromEntries(entries);
    this.publishRsdl();
  }

  private delete(edmModel: NormalizedEdmModelType) {
    const rsdljs = this._currentSchema;
    if (rsdljs.Model[edmModel.$Name]) {
      delete rsdljs.Model[edmModel.$Name];

      this.publishRsdl();
    }
  }

  private selectElement(name: string) {
    const rsdljs = this._currentSchema;

    const edmType = rsdljs.Model[name];
    if (!edmType) {
      return;
    }

    edmType.$Name = name;
    console.log(edmType);

    this.show(edmType);
  }

  private addEnumType() {
    this.show({
      $Kind: 'EnumType',
      '': 0,
    });
  }

  private addComplexType() {
    this.show({
      $Kind: 'ComplexType',
      '': {},
    });
  }

  private addEntityType() {
    this.show({
      $Kind: 'EntityType',
      '': {},
    });
  }

  private addEntityContainerType() {
    this.show({
      $Kind: 'EntityContainer',
      $Name: 'Service',
      '': {},
    });
  }

  private show(edmType: NormalizedEdmModelType) {
    this._editorModal.open(edmType, this._currentSchema);
  }
}
