import Handlebars from "handlebars";

Handlebars.registerHelper("ifEquals", function (arg1, arg2, options) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper("addOne", function (value) {
  return parseInt(value) + 1;
});

const enumMemberTemplate = `
<div class="input-group mb-3 data-row-container">
    <input
        type="text"
        class="form-control"
        placeholder="enumMember"
        value="{{member}}"
        required
        pattern="^([a-zA-Z_][a-zA-Z\\d_]*)$"
        title="Please provide a valid identifier">
    <button type="button" class="btn btn-danger" aria-label="remove" data-modal-command="remove">&times;</button>
</div>
`;

Handlebars.registerPartial("enumMember", enumMemberTemplate);
export const enumMemberFunction = Handlebars.compile(enumMemberTemplate);

const enumTypeTemplate = `
<div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input
        type="text"
        id="nameInput"
        name="name"
        class="form-control"
        placeholder="name"
        value="{{$Name}}"
        required
        pattern="^([a-zA-Z_][a-zA-Z\\d_]*)$"
        title="Please provide a valid identifier">
</div>

<h6>Members</h6>
<div id="enumMembersContainer">
    {{#each enumMembers}}
    {{>enumMember $Index=@index member=this}}
    {{/each}}

    <div class="d-grid gap-2">
        <button type="button" class="btn btn-info" data-structured-kind="{{$Kind}}" data-modal-command="add" data-add-type="enumMember">Add Enum Member</button>
    </div>
</div>
`;

export const enumTypeFunction = Handlebars.compile(enumTypeTemplate);

// Structure Type

const propertyTemplate = `
<div class="input-group mb-3 data-row-container">
    {{#ifEquals $StructuredKind "EntityType"}}
    <div class="input-group-text">
        <input
            type="checkbox"
            class="form-check-input mt-0 pk-data"
            aria-label="Is PK"
            {{#if property.isPk}}checked{{/if}}
            data-bs-toggle="tooltip"
            title="Is PK"
            >
    </div>
    {{/ifEquals}}
    {{#unless $NoName}}
    <input
        type="text"
        class="form-control name-data"
        placeholder="property"
        value="{{property.name}}"
        required
        pattern="^([a-zA-Z_][a-zA-Z\\d_]*)$"
        title="Please provide a valid identifier">
    {{/unless}}
    <select class="form-select type-data">
        {{#each $TypeOptions}}
        <option value="{{this}}" {{#ifEquals this ../property.type}}selected{{/ifEquals}}>{{this}}</option>
        {{/each}}
    </select>
    <div class="input-group-text">
        <input
            type="checkbox"
            class="form-check-input mt-0 collection-data"
            value="isCollection"
            aria-label="Is Collection"
            {{#if property.isCollection}}checked{{/if}}
            data-bs-toggle="tooltip"
            title="Is Collection">
    </div>
    <div class="input-group-text">
        <input
            type="checkbox"
            class="form-check-input mt-0 nullable-data"
            value="isNullable"
            aria-label="Is Nullable"
            {{#if property.isNullable}}checked{{/if}}
            data-bs-toggle="tooltip"
            title="Is Nullable"
            >
    </div>
    <button type="button" class="btn btn-danger" aria-label="remove" data-modal-command="remove" {{#if $NoName}}disabled{{/if}}>&times;</button>
</div>
`;

Handlebars.registerPartial("property", propertyTemplate);
export const propertyFunction = Handlebars.compile(propertyTemplate);

const operationTemplate = `
<div class="accordion-item data-row-container">
    <h2  id="operation_header_{{$Index}}" class="accordion-header">
        <button 
            type="button"
            class="accordion-button collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#operation_collapse_{{$Index}}"
            aria-expanded="false"
            aria-controls="operation_collapse_{{$Index}}"
            >
            Operation
        </button>
    </h2>
    <div 
        id="operation_collapse_{{$Index}}"
        class="accordion-collapse collapse"
        aria-labelledby="operation_header_{{$Index}}"
        data-bs-parent="#operationsContainer"
        >
        <div class="accordion-body">

            <div class="input-group mb-3">
                <input
                    type="text"
                    class="form-control operation-name-data"
                    placeholder="property"
                    value="{{operation.$Name}}"
                    required
                    pattern="^([a-zA-Z_][a-zA-Z\\d_]*)$"
                    title="Please provide a valid identifier">
                <select class="form-select operation-type-data">
                    <option value="Function" {{#ifEquals operation.$Kind "Function"}}selected{{/ifEquals}}>Function</option>
                    <option value="Action" {{#ifEquals operation.$Kind "Action"}}selected{{/ifEquals}}>Action</option>
                </select>
                <button type="button" class="btn btn-danger" aria-label="remove" data-modal-command="remove">&times;</button>
            </div>

            <div class="d-flex">
                <div class="p-2">
                    <div class="form-check form-switch">
                        <input 
                            type="checkbox"
                            id="hasReturns_{{$Index}}"
                            class="form-check-input has-return-data"
                            {{#if $ReturnType}}checked{{/if}}
                            data-bs-toggle="collapse"
                            data-bs-target="#operationReturnContainer_{{$Index}}"
                            aria-expanded="{{#if $ReturnType}}true{{else}}false{{/if}}"
                            aria-controls="operationReturnContainer_{{$Index}}"
                            >
                        <label for="hasReturns_{{$Index}}" class="form-check-label">
                            <h6>Returns</h6>
                        </label>
                    </div>
                </div>
                <div class="flex-grow-1">
                    <div id="operationReturnContainer_{{$Index}}" class="return-type-container collapse {{#if $ReturnType}}show{{/if}}">
                    {{>property $Index=-7 $NoName=true property=$ReturnType $TypeOptions=$TypeOptions $StructuredKind=operation.$Kind}}
                    </div>
                </div>
            </div>

            <h6>Parameters</h6>

            <div class="input-parameters-container">
                {{#each $InputParameters}}
                {{>property $Index=@index property=this $TypeOptions=../$TypeOptions $StructuredKind=../operation.$Kind}}
                {{/each}}

                <div class="d-grid gap-2">
                    <button type="button" class="btn btn-info" data-structured-kind="{{operation.$Kind}}" data-modal-command="add" data-add-type="inputParameter">Add Parameter</button>
                </div>
            </div>                    
        </div>
    </div>

</div>

`;

Handlebars.registerPartial("operation", operationTemplate);
export const operationFunction = Handlebars.compile(operationTemplate);

const structuredTypeTemplate = `
<div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input
        type="text"
        id="nameInput"
        name="name"
        class="form-control"
        placeholder="name"
        value="{{$Name}}"
        required
        pattern="^([a-zA-Z_][a-zA-Z\\d_]*)$"
        title="Please provide a valid identifier">
</div>

{{#if $BaseTypes.length}}
<div class="d-flex mb-3">
    <div class="p-2">
        <div class="form-check form-switch">
            <input 
                type="checkbox"
                id="extendsInput"
                class="form-check-input extends-data"
                {{#if $Extends}}checked{{/if}}
                data-bs-toggle="collapse"
                data-bs-target="#extendsContainer"
                aria-expanded="{{#if $Extends}}true{{else}}false{{/if}}"
                aria-controls="extendsContainer"
                >
            <label for="extendsInput" class="form-check-label">
                <h6>Extends</h6>
            </label>
        </div>
    </div>
    <div class="flex-grow-1">
        <div id="extendsContainer" class="extends-container collapse {{#if $Extends}}show{{/if}}">
            <select id="extendsSelect" class="form-select type-data">
                {{#each $BaseTypes}}
                <option value="{{this}}" {{#ifEquals this ../$Extends}}selected{{/ifEquals}}>{{this}}</option>
                {{/each}}
            </select>
        </div>
    </div>
</div>

{{/if}}

<h6>Propeties</h6>
<div id="propertiesContainer">
    {{#each $Properties}}
    {{>property $Index=@index property=this $TypeOptions=../$TypeOptions $StructuredKind=../$Kind}}
    {{/each}}

    <div class="d-grid gap-2">
        <button type="button" class="btn btn-info" data-structured-kind="{{$Kind}}" data-modal-command="add" data-add-type="property">Add Property</button>
    </div>
</div>

{{#ifEquals $Kind "EntityType"}}
<h6>Operations</h6>
<div id="operationsContainer" class="accordion">

    {{#each $Operations}}
    {{>operation $Index=@index operation=this $TypeOptions=../$TypeOptions}}
    {{/each}}

    <div class="d-grid gap-2 mt-3">
        <button type="button" class="btn btn-info" data-structured-kind="{{$Kind}}" data-modal-command="add" data-add-type="operation">Add Operation</button>
    </div>

</div>

{{/ifEquals}}
`;

export const structuredTypeFunction = Handlebars.compile(
  structuredTypeTemplate
);

// Entity Container
const entityContainerTemplate = `
<div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input
        type="text"
        id="nameInput"
        name="name"
        class="form-control"
        placeholder="name"
        value="{{$Name}}"
        readonly
        required
        pattern="^([a-zA-Z_][a-zA-Z\\d_]*)$"
        title="Please provide a valid identifier">
</div>

<h6>Navigation Sources</h6>

<div id="navigationSourcesContainer">
    {{#each $NavigationSources}}
    {{>property $Index=@index property=this $TypeOptions=../$EntityTypes $StructuredKind=../$Kind}}
    {{/each}}

    <div class="d-grid gap-2">
        <button type="button" class="btn btn-info" data-structured-kind="{{$Kind}}" data-modal-command="add" data-add-type="navigationSource">Add Navigation</button>
    </div>
</div>
`;

export const entityContainerFunction = Handlebars.compile(
  entityContainerTemplate
);

export const editorContents = `
<div class="btn-toolbar">
<div
  class="btn-group me-2 btn-group-sm"
  role="group"
  aria-label="GUI Menu"
>
<span class="input-group-text">New</span>
  <button
    type="button"
    id="enumTypeButton"
    class="btn btn-outline-primary"
  >
    EnumType
  </button>
  <button
    type="button"
    id="complexTypeButton"
    class="btn btn-outline-primary"
  >
    ComplexType
  </button>
  <button
    type="button"
    id="entityTypeButton"
    class="btn btn-outline-primary"
  >
    EntityType
  </button>
</div>
<button
  type="button"
  id="entityContainerButton"
  class="btn btn-outline-primary btn-sm d-none"
>
  New EntityContainer
</button>
</div>
<div id="diagramContainer"></div>

<div
id="modelModal"
class="modal fade"
data-bs-backdrop="static"
tabindex="-1"
aria-labelledby="modelLabel"
aria-hidden="true"
>
<div class="modal-dialog modal-dialog-scrollable">
  <div class="modal-content">
    <div class="modal-header">
      <h5 id="modelLabel" class="modal-title">Model Title</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <div class="modal-body">
      <form id="modelEditor" novalidate></form>
    </div>
    <div class="modal-footer d-flex">
      <button
        type="button"
        id="deleteElementButton"
        class="btn btn-danger me-auto"
      >
        Delete
      </button>

      <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
      >
        Close
      </button>

      <button
        type="submit"
        form="modelEditor"
        class="btn btn-primary"
      >
        Save changes
      </button>
    </div>
  </div>
</div>
</div>
`.trim();
