import { type } from 'os'

/**
 * List of directives that need to be included into result schema in order to 
 * properly parse and validate GraphQL schemas
 */
export const supportedScalars = `
""" 
Binary data, stream of octets
"""
scalar Binary

""" 
Date and time with a time-zone offset, no leap seconds
"""
scalar DateTimeOffset


""" 
Date without a time-zone offset
"""
scalar Date

""" 
Time without a time-zone offset
"""
scalar TimeOfDay

""" 
Decimal point variable
"""
scalar Decimal

""" 
32bit Integer Data type
"""
scalar Int32

""" 
64bit Integer Data type
"""
scalar Int64

""" 
Describes double precision float
"""
scalar Double

""" 
Describes Globally Unique Identifier (also known as UUID)
16-byte (128-bit) unique identifier
"""
scalar Guid

`

export const decorateSchemaWithPrimitiveScalars = (schemaString: string) => {
    return `
    ${schemaString}
    ${supportedScalars}
    `
}


export const mapGraphQLTypesToOData = (typeName: string) => {
    if (typeName === "Int") {
        return "Int32"
    }

    if (typeName === "Float") {
        return "Double"
    }


    if (typeName === "ID") {
        return "String"
    }

    return typeName;
}
