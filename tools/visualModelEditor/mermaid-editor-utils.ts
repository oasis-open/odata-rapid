type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export function objectEntries<T>(obj: T): Entries<T> {
  return Object.entries(obj) as any;
}

export const $TypeOptions = [
  'String',
  'Binary',
  'Boolean',
  'Byte',
  'Date',
  'DateTimeOffset',
  'Decimal',
  'Double',
  'Duration',
  'Guid',
  'Int16',
  'Int32',
  'Int64',
  'SByte',
  'Single',
  'Stream',
  'TimeOfDay',
  'Geography',
  'GeographyPoint',
  'GeographyLineString',
  'GeographyPolygon',
  'GeographyMultiPoint',
  'GeographyMultiLineString',
  'GeographyMultiPolygon',
  'GeographyCollection',
  'Geometry',
  'GeometryPoint',
  'GeometryLineString',
  'GeometryPolygon',
  'GeometryMultiPoint',
  'GeometryMultiLineString',
  'GeometryMultiPolygon',
  'GeometryCollection',
];

export type ModelTypeKind =
  | 'EnumType'
  | 'ComplexType'
  | 'EntityType'
  | 'EntityContainer'
  | 'Function'
  | 'Action';

export interface NormalizedEdmModelType {
  $Kind: ModelTypeKind;
  [prop: string]: any;
}

export interface NormalizedEdmModel {
  Model: any;
  [prop: string]: any;
}

export function getType(typeDef) {
  // TODO: Remove hack
  let type = (typeDef.$Type || 'String').split('.').pop();
  if (typeDef.$Nullable) {
    type = type + '?';
  }

  if (typeDef.$Collection) {
    type = `[${type}]`;
  }

  return type;
}
