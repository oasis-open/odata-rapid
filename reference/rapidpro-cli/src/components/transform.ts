import { buildSchema, GraphQLSchema, GraphQLNonNull, getNullableType, GraphQLScalarType, GraphQLList, GraphQLObjectType, GraphQLEnumType, validate } from "graphql"
import { getUserTypesFromSchema } from "@graphql-tools/utils"
import { loadSchema } from '../utils/loadSchema'
import { createSchemaWithSupportedDirectives } from '../utils/directives';
import { getFieldDirective } from '../utils/schemaTools';
import { decorateSchemaWithPrimitiveScalars, mapGraphQLTypesToOData } from '../utils/scalars';


const CSDLJSON_HEADER = {
    "$Version": "4.01",
    "$Reference": {
        "https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Core.V1.json": {
            "$Include": [
                {
                    "$Namespace": "Org.OData.Core.V1",
                    "$Alias": "Core",
                    "@Core.DefaultNamespace": true
                }
            ]
        }
    },
    RapidModels: {
        RapidContainer: {
            $Kind: "EntityContainer"
        }
    }
};

const typeTemplate = {
    "$Kind": "EntityType",
    "$Key": [
    ],
};

const typeFlags = {
    "$Nullable": true
}

const containerInstanceFlags = {
    $Collection: true,
};

export const createCSDLFromRSDL = (schema: GraphQLSchema) => {
    const allTypes = getUserTypesFromSchema(schema);
    const jsonDefinition = Object.assign({}, CSDLJSON_HEADER);
    for (const currentType of allTypes) {
        const name = currentType.name;
        const fields = Object.values(currentType.getFields());
        const newObject = Object.assign({}, typeTemplate);
        for (const field of fields) {
            // TODO scallar mapping for INT, FLOAT etc.
            // TODO ID based on the directives
            // Relationships/Navigation detection
            newObject[field.name] = Object.assign({}, typeFlags);
            if (getFieldDirective(field, 'RapidID')) {
                newObject.$Key.push(field.name)
            }

            if (field.type instanceof GraphQLNonNull) {
                newObject[field.name].$Nullable = false;
            }

            const originalType = getNullableType(field.type);
            if (originalType instanceof GraphQLScalarType) {
                const typeName = mapGraphQLTypesToOData(originalType.name);
                if (typeName !== 'String') {
                    newObject[field.name].$Type = `Edm.${typeName}`
                }
            }

            if (originalType instanceof GraphQLList) {
                // TODO Navigation (set)
            }

            if (originalType instanceof GraphQLObjectType) {
                // TODO Navigation (single)
            }

            if (originalType instanceof GraphQLEnumType) {
                // TODO Enums
            }

        }
        const newSet = Object.assign({ "$Type": `RapidModels.${name}` }, containerInstanceFlags)
        const container = jsonDefinition.RapidModels.RapidContainer
        container[name] = newSet
        jsonDefinition.RapidModels[name] = newObject
    }

    return jsonDefinition;
}

export const transformToCSDLJSON = (schemaString: string) => {
    let schemaWithDirectives = createSchemaWithSupportedDirectives(schemaString);
    schemaWithDirectives = decorateSchemaWithPrimitiveScalars(schemaWithDirectives)
    try {
        const schema = buildSchema(schemaWithDirectives);
        const CSDLJSON = createCSDLFromRSDL(schema);
        console.log(JSON.stringify(CSDLJSON, undefined, 2));

        // TODO specify output format - file etc.
        return CSDLJSON
    }
    catch (schemaError) {
        console.error(`Cannot process your schema: ${schemaError}`);
        throw schemaError;
    }
}

export const transformRSQL = (name: string) => {
    const schemaString = loadSchema(name);
    if (schemaString) {
        transformToCSDLJSON(schemaString);
    } else {
        console.log(`Invalid file specified ${name}`)
    }
}

