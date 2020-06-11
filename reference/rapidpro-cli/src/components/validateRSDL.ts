import { loadSchema } from '../utils/loadSchema';
import { buildSchema, GraphQLType, GraphQLObjectType } from 'graphql';
import { getUserTypesFromSchema } from '@graphql-tools/utils';
import { getFieldDirective } from '../utils/schemaTools';
import { createSchemaWithSupportedDirectives } from '../utils/directives';
import { decorateSchemaWithPrimitiveScalars } from '../utils/scalars';


/**
 * Checks if provided RSDL is valid
 * 
 * @param rsdlString string containng DSL file
 */
export const validateRSDL = (rsdlString: string) => {
    const schemaString = loadSchema(rsdlString);
    let schemaWithDirectives = createSchemaWithSupportedDirectives(schemaString);
    schemaWithDirectives = decorateSchemaWithPrimitiveScalars(schemaWithDirectives)
    if (schemaWithDirectives) {
        try {
            // 1) Must be valid schema
            const schema = buildSchema(schemaWithDirectives);
            const types = getUserTypesFromSchema(schema);
            for (const type of types) {
                // 2) Each type must has at least one ID
                checkIfRapidIDExistOnType(type);
            }

        } catch (error) {
            console.log("Invalid RSDL schema file", error);
            throw error;
        }

        console.log("Document is valid");
    } else {
        console.log("Cannot load RSDL schema file")
    }

}

function checkIfRapidIDExistOnType(type: GraphQLObjectType) {
    let rapidIdFound = false;
    for (const field of Object.values(type.getFields())) {
        if (getFieldDirective(field, "RapidID")) {
            rapidIdFound = true;
        }
    }
    if (!rapidIdFound) {
        throw new Error(`Line: ${type?.astNode?.loc?.start}. ${type.name} is missing required @RapidID directive`);
    }
}
