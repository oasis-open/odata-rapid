import { loadSchema } from '../utils/loadSchema'
import { createSchemaWithSupportedDirectives } from '../utils/directives';
import { buildSchema, GraphQLSchema, isType, isObjectType, GraphQLNonNull } from "graphql"
import { getFieldDirective } from '../utils/schemaTools';
import { getUserTypesFromSchema } from "graphql-tools"

const CSDLJSON_HEADER = {
    "$Version": "4.0",
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
    // TODO rename
    "ODataDemo": {

    }
};

const typeTemplate = {
    "$Kind": "EntityType",
    "$Key": [
        "ID"
    ],
};

const typeFlags = {
    "$Nullable": true
}

export const transformRSQL = (name: string) => {
    const schemaString = loadSchema(name);
    if (schemaString) {
        transformToCSDLJSON(schemaString);
    } else {
        console.log(`Invalid file specified ${name}`)
    }
}

export const transformToCSDLJSON = (schemaString: string) => {
    const schemaWithDirectives = createSchemaWithSupportedDirectives(schemaString);
    try {
        const schema = buildSchema(schemaWithDirectives);
        const CSDLJSON = createCSDLFromRSDL(schema);
        console.log(CSDLJSON);
        // TODO specify output format - file etc.
    }
    catch (schemaError) {
        console.error(`Cannot process your schema: ${schemaError}`);
        throw schemaError;
    }
}

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
                newObject["$Key"] = [field.name]
            }

            if (field.type instanceof GraphQLNonNull) {
                newObject[field.name]["$Nullable"] = false;
            }
        }
        jsonDefinition.ODataDemo[name] = newObject
    }
    return JSON.stringify(jsonDefinition, undefined, 2);

}

