import { GraphQLNamedType, GraphQLField } from 'graphql';

/**
 * Fetches directive for the type
 * @param type 
 * @param name name of the directive
 */
export const getTypeDirective = (type: GraphQLNamedType, name: string) => {
    for (const directive of type.astNode.directives) {
        if (directive.name.value === name) {
            return directive
        }
    }

    return undefined;
}

/**
 * Fetches directive for the field
 * 
 * @param field 
 * @param name name of the directive
 */
export const getFieldDirective = (field: GraphQLField<any, any>, name: string) => {
    for (const directive of field.astNode.directives) {
        if (directive.name.value === name) {
            return directive
        }
    }

    return undefined;
}