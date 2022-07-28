---
id: operations
title: Actions and Functions
sidebar_label: Actions and Functions
---

Although a pure REST service would perform operations through manipulating the state of resources,
we have found that many services require the ability to encapsulate complex processing logic into atomic operations.
Rather than requiring services to expose a separate endpoint for such business logic,
RAPID allows services to support Operations.
Operations are exposed as resources at the root of the service or "bound" to the resource on which they operate.

Operations bound to a resource are invoked by appending a segment containing the name of the operation to the URL of the resource.
The name of the operation must not conflict with the name of any properties or other operations bound to that
resource.

Operations include Actions and Functions.

## Actions

Actions have effects on resources, are invoked using `POST`, and have parameters specified in the body.

| Template | POST {resource-path}/{actionName}                        |
| -------- | :------------------------------------------------------- |
| Example  | POST http://rapid-pro.org/company/employees/1/youreFired |

**Body:**

```json
{
  "reason": "Embezzlement"
}
```

## Functions

Functions are invoked using `GET` and must have no side effects.
Parameters are passed to functions as query options.

| Template | GET {resource-path}/{functionName}?{@param=value...}                                                                    |
| -------- | :---------------------------------------------------------------------------------------------------------------------- |
| Example  | GET [http://rapid-pro.org/company/topEmployees?@num=2](<https://jetsons.azurewebsites.net/company/topEmployees(num=2)>) |
