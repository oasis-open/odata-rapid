import { buildSchema, GraphQLSchema, isType, isObjectType, GraphQLNonNull } from "graphql"
import { getUserTypesFromSchema } from "@graphql-tools/utils"
import { loadSchema } from '../utils/loadSchema'
import { createSchemaWithSupportedDirectives } from '../utils/directives';
import { getFieldDirective } from '../utils/schemaTools';

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
    // TODO rename
    "ODataDemo": {
        TheService: {
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

const setTemplate = {
    $Collection: true,
};

export const createCSDLFromRSDL = (schema: GraphQLSchema) => {
    const allTypes = getUserTypesFromSchema(schema);
    const jsonDefinition = Object.assign({}, CSDLJSON_HEADER);
    // TODO hardcoded names
    const theService = jsonDefinition.ODataDemo.TheService
 
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
        }
        const newSet = Object.assign({}, setTemplate)
        // TODO hardcoded names
        newSet.$Type = `ODataDemo.${name}`
        theService[name] = newSet
        jsonDefinition.ODataDemo[name] = newObject
    }

    return jsonDefinition;
}

export const transformToCSDLJSON = (schemaString: string) => {
    const schemaWithDirectives = createSchemaWithSupportedDirectives(schemaString);
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

