import { GraphQLObjectType } from 'graphql';
import { getFieldDirective } from '../utils/schemaTools';

export function checkIfRapidIDExistOnType(type: GraphQLObjectType) {
    let rapidIdFound = false;
    for (const field of Object.values(type.getFields())) {
        if (getFieldDirective(field, "RapidID")) {
            rapidIdFound = true;
        }
    }
    console.log(rapidIdFound)
    if (!rapidIdFound) {
        throw new Error(`Line: ${type?.astNode?.loc?.startToken.line}. ${type.name} is missing required @RapidID directive`);
    }
}