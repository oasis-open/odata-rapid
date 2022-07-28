import { buildSchema, GraphQLType, GraphQLObjectType } from 'graphql';
import { getUserTypesFromSchema } from '@graphql-tools/utils';
import { loadSchema } from '../utils/loadSchema';
import { getFieldDirective } from '../utils/schemaTools';
import { createSchemaWithSupportedDirectives } from '../utils/directives';
import { decorateSchemaWithPrimitiveScalars } from '../utils/scalars';
import { checkIfRapidIDExistOnType } from '../validators/checkIfIdExist';

/**
 * Checks if provided RSDL is valid
 * 
 * @param rsdlString string containng DSL file
 */
export const validateRSDL = (rsdlString: string) => {
    let schemaWithDirectives = createSchemaWithSupportedDirectives(rsdlString);
    schemaWithDirectives = decorateSchemaWithPrimitiveScalars(schemaWithDirectives)
    if (schemaWithDirectives) {
        try {
            // 1) Must be valid schema
            const schema = buildSchema(schemaWithDirectives, {
                assumeValidSDL: false,
                assumeValid: false
            });
            const types = getUserTypesFromSchema(schema);
            console.log(types)
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

export const validateRSDLFile = (rsdlString: string) => {
    const schemaString = loadSchema(rsdlString);
    validateRSDL(schemaString)
}
