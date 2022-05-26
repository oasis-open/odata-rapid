import { parse } from 'rsdl-js';
import { getType, getModel } from './mermaid-editor-utils';
import { NormalizedEdmModel, objectEntries } from './mermaid-editor-utils';

export function getSchema(rsdlText) {
  try {
    const json = parse(rsdlText, () => () => '');
    if (json.$$errors) {
      return { errors: json.$$errors };
    }

    var normalized = getNormalizedSchema(json);

    return { schema: normalized };
  } catch (e) {
    return { errors: [e] };
  }
}

function getNormalizedSchema(schema): NormalizedEdmModel {
  const copy = JSON.parse(JSON.stringify(schema));
  const model = getModel(copy);
  const schemaElements = objectEntries(model).filter(
    ([key, item]) => item.$Kind
  );

  const kindMap = schemaElements.reduce((map, [key, edmElement]) => {
    map[key] = {
      $Kind: edmElement.$Kind,
      $BaseType: (edmElement.$BaseType || '').split('.').pop(),
    };

    return map;
  }, {});

  schemaElements
    .filter(([key, edmElement]) => edmElement.$BaseType)
    .forEach(([key, edmElement]) => {
      const baseType = edmElement.$BaseType.split('.').pop();
      edmElement.$Extends = baseType;

      let rootType = kindMap[baseType];
      while (rootType && rootType.$BaseType) {
        rootType = kindMap[rootType.$BaseType];
      }

      if (rootType) {
        edmElement.$Kind = rootType.$Kind;
      }
    });

  const edmOperations = objectEntries(model).filter(([key, edmElement]) =>
    Array.isArray(edmElement)
  );
  edmOperations.forEach(([key, operations]) => {
    delete model[key];
    operations.forEach((op) => {
      // TODO: Remove Hacks
      const bindingParameter = op.$Parameter[0];
      const typeName = bindingParameter.$Type.split('.').pop();
      const type = model[typeName];
      if (type) {
        type.$Operations = type.$Operations || [];
        op.$Name = key;
        op.$InputParameters = op.$Parameter.slice(1).map((p) => ({
          name: p.$Name,
          type: (p.$Type || 'String').split('.').pop(),
          isCollection: p.$Collection,
          isNullable: p.$Nullable,
        }));
        if (op.$ReturnType) {
          op.$ReturnType = {
            ...op.$ReturnType,
            name: op.$ReturnType.$Name,
            type: (op.$ReturnType.$Type || 'String').split('.').pop(),
            isCollection: op.$ReturnType.$Collection,
            isNullable: op.$ReturnType.$Nullable,
          };
        }
        type.$Operations.push(op);
      }
    });
  });

  return copy;
}

export function getRsdlText(schema) {
  return Object.entries(getModel(schema))
    .map(([name, element]) => getRsdlElement(name, element))
    .join('');
}

function getRsdlElement(name, edmElement) {
  switch (edmElement.$Kind) {
    case 'EnumType':
      return getEnumTypeRsdl(name, edmElement);
    case 'EntityType':
      return getEntityTypeRsdl(name, edmElement);
    case 'ComplexType':
      return getComplexTypeRsdl(name, edmElement);
    case 'EntityContainer':
      return getEntityContainerRsdl(name, edmElement);
    default:
      return '';
  }
}

function getEnumTypeRsdl(name, enumType) {
  const members = Object.entries(enumType)
    .map(([name]) => name)
    .filter((name) => name[0] !== '$')
    .join('\n    ');
  return `
enum ${name} {
    ${members}
}
  `;
}

function getEntityTypeRsdl(name, entityType) {
  return getStructuredTypeRsdl(name, entityType);
}

function getComplexTypeRsdl(name, complexType) {
  return getStructuredTypeRsdl(name, complexType);
}

function getStructuredTypeRsdl(name, structuredType) {
  const baseType = structuredType.$BaseType
    ? ' extends ' + structuredType.$BaseType.split('.').pop()
    : '';
  const properties = getRsdlProperties(structuredType);
  const operations = getRsdlOperations(structuredType.$Operations);

  return `
type ${name} ${baseType}{
    ${properties + operations}
}
`;
}

function getRsdlOperations(operations) {
  if (!operations || !operations.length) {
    return '';
  }

  return (
    '\n    ' +
    operations
      .map(
        (op) =>
          `${op.$Kind.toLowerCase()} ${op.$Name} (${getOperationParametersRsdl(
            op.$Parameter.slice(1)
          )}) ${op.$ReturnType ? ': ' + getType(op.$ReturnType) : ''}`
      )
      .join('\n    ')
  );
}

function getEntityContainerRsdl(_name, entityContainer) {
  return `
service {
    ${getRsdlProperties(entityContainer)}
}
  `;
}

function getOperationParametersRsdl(inputParameters) {
  if (!inputParameters || !inputParameters.length) {
    return '';
  }

  return inputParameters.map((p) => getPropertyRsdl(p.$Name, p, [])).join(', ');
}

function getPropertyRsdl(name, typeDef, keys) {
  const type = getType(typeDef);
  const keyPrefix = keys && keys.indexOf(name) >= 0 ? 'key ' : '';
  return `${keyPrefix}${name}: ${type}`;
}

function getRsdlProperties(edmType) {
  // TODO: Reuses mermaid property;
  const keys = edmType.$Key;
  return Object.entries(edmType)
    .filter(([name, _]) => name[0] !== '$')
    .map(([name, typeDef]) => getPropertyRsdl(name, typeDef, keys))
    .join('\n    ');
}
