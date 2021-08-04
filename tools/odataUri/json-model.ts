

export interface ISchema {
    $Version: string;
    $EntityContainer: string;
    [modelNamespace: string]: ISchemaModel | string;
}

export interface ISchemaModel {
    [modelElement: string]: ISchemaElement;
}

export type ISchemaElement = ISchemaStructuredType;

export interface ISchemaStructuredType {
    $Kind: 'EntityType' | 'ComplexType';
    $OpenType: boolean;
    $Key: any[];
    [property: string]: ISchemaType | any;
}

export interface ISchemaType {
    $Type?: string;
    $Collection?: boolean;
    $Kind?: string;
    $ContainsTarget?: boolean;
}

export interface NavigationProperty extends ISchemaType {
    $Kind: 'NavigationProperty';
    $ContainsTarget?: boolean;
}

export interface IProperty {
    name: string;
    type: ISchemaType;
}

export enum PrimitiveType {
    Int32 = 'Edm.Int32',
    Boolean = 'Edm.Boolean',
    Date = 'Edm.Date',
    String = 'Edm.String'
}

export function isCollection(type: ISchemaType) {
    return type.$Collection == true;
}

export function createUnknownType(): ISchemaType {
    return {
        $Type: '$$Unknown'
    };
}

export function createPrimitiveType(type: string): ISchemaType {
    return {
        $Type: type
    };
}

export function isUnknownType(type: ISchemaType) {
    return type.$Type === '$$Unknown';
}

export function isPrimitiveType(type: ISchemaType) {
    return type.$Type?.startsWith('Edm.');
}

export function findStructuredType(typeName: string, schema: ISchema): ISchemaStructuredType {
    const [namespace, name] = splitQualifiedName(typeName);
    const model = schema[namespace] as ISchemaModel;
    if (!model) return null;

    const type = model[name] as ISchemaStructuredType;
    if (!type) return null;

    return type;
}

export function findProperty(propertyName: string, schemaType: ISchemaElement): ISchemaType {
    const propType = schemaType[propertyName] as ISchemaType;
    return propType;
}

export function getAllPropertiesNames(type: ISchemaElement): string[] {
    return Object.keys(type).filter(name => !name.startsWith('$'));
}

export function getAllProperties(type: ISchemaElement):  IProperty[] {
    return Object.keys(type)
        .filter(name => !name.startsWith('$'))
        .map(name => ({ name, type: type[name]}));
}

type SplitName = [namespace: string, name: string];

export function splitQualifiedName(fullName: string): SplitName {
    const parts = fullName.split('.');
    const name = parts.pop();
    const namespace = parts.join('.');
    return [namespace, name];
}

export function getModel(namespace: string, schema: ISchema): ISchemaModel {
    return schema[namespace] as ISchemaModel;
}

export function getEntityContainer(container: string, model: ISchemaModel): ISchemaElement {
    return model[container] as ISchemaElement;
}

export function getNavigationSource(source: string, container: ISchemaElement): ISchemaType {
    return container[source] as ISchemaType;
}

export function getType(name: string, model: ISchemaModel): ISchemaElement {
    return model[name] as ISchemaElement;
}