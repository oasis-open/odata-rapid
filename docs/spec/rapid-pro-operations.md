# Rest API Design (RAPID) Profile Operations

Although a pure REST service would perform operations through manipulating the
state of resources, we have found many services require the ability to
encapsulate complex processing logic into atomic operations. Rather than
requiring such services to expose a separate endpoint for such business logic,
RAPID allows services to support Operations. Operations are exposed as resources
at the root of the service or "bound" to the resource on which they operate.

Operations bound to a resource are invoked by appending a segment containing the
name of the operation to the URL of the resource. The name of the operation must
not conflict with the name of any properties or other operations bound to that
resource.

Operations include Functions and Actions.

# Functions

Functions are invoked using GET and must be non-side affecting. Parameters are
passed to functions as an array of name/value pairs, enclosed in parenthesis,
following the function name:

| Template | GET {resource-path}{functionName}?{@param=value,...}                 |
| -------- | :------------------------------------------------------------------- |
| Example  | GET http://rapid-pro.org/company/topEmployees?@startDate='2065-6-12' |

# Actions

Actions may have side-affects, are invoked using POST, and have parameters
specified in the body.

| Template | POST {resource-path}{functionName}                       |
| -------- | :------------------------------------------------------- |
| Example  | POST http://rapid-pro.org/company/employees/1/youreFired |

**Body:**

```json
{
    "reason": "Embezzlement"
}
```
