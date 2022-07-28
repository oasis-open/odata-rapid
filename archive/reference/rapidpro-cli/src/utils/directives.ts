

/**
 * List of directives that need to be included into result schema in order to 
 * properly parse and validate GraphQL schemas
 */
export const supportedDirectives = `
""" 
Describes if type is represented as set
"""
directive @RapidSet on OBJECT 

""" 
Annotates certain field as id
"""
directive @RapidID on FIELD_DEFINITION 
`

export const createSchemaWithSupportedDirectives = (schemaString: string) => {
    return `
    ${schemaString}
    ${supportedDirectives}
    `
}