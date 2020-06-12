---
id: batch
title: Batch Operations
---

RAPID allows wrapping multiple requests into a single batch request.
This can be used for two purposes:
- Reduce the number of round-trips and reduce latency between requests
- Group multiple modification operations and execute them all-or-nothing

## Basics

Batch requests are sent to a special resource `/$batch`.
The request payload consists of an array of individual requests,
and the response payload consists of an array of individual responses.

| Template    | POST {service-root}/$batch             |
| ----------- | :------------------------------------------ |
| **Example** | POST http://rapid-pro.org/$batch |

**Body:**

```json
{
    "requests": [
        {
            "id": "0",
            "method": "get",
            "url": "company"
        },
        {
            "id": "1",
            "method": "get",
            "url": "competitors"
        }
    ]
}
```

**Result:**

```json
{
    "responses": [
        {
            "id": "0",
            "status": 200,
            "body": {
                "@context": "$metadata#company",
                "name": "Spacely's Space Sprockets",
                "stockSymbol": "spcly"
            }
        },
        {
            "id": "1",
            "status": 200,
            "body": {
                "@context": "$metadata#competitors",
                "value": [
                    {
                        "stockSymbol": "cgswl",
                        "name": "Cogswell's Cosmic COGs",
                        "incorporated": "2054-10-04T00:00:00Z"
                    }
                ]
            }
        }
    ]
}
```

### Error handling

Batch requests return `200 OK` (or `202 Accepted` if executed asynchronously) even if some or all of the individual requests in the batch fail. Batch requests only return `4xx` if the batch request body is malformed, the client is not authenticated or lacks authorization for the `/$batch` resource, or other reasons not related to individual requests in the batch.

## Atomicity Groups

Multiple operations can be grouped into an atomicity group.
Requests within an atomicity group either all succeed, or all fail.

**Body:**

```json
{
    "requests": [
        {
            "id": "r-0",
            "atomicityGroup": "g-0",
            "method": "patch",
            "url": "company/employees/2",
            "body": {
                "title": "On garden leave"
            }
        },
        {
            "id": "r-1",
            "atomicityGroup": "g-0",
            "method": "patch",
            "url": "company/employees/4",
            "body": {
                "title": "Junior Digital Index Operator"
            }
        }
    ]
}
```

**Result (all individual requests succeed):**

```json
{
    "responses": [
        {
            "id": "r-0",
            "atomicityGroup": "g-0",
            "status": 204
        },
        {
            "id": "r-1",
            "atomicityGroup": "g-0",
            "status": 204
        }
    ]
}
```

**Result (all individual requests fail, batch succeeds):**

```json
{
    "responses": [
        {
            "id": "r-0",
            "atomicityGroup": "g-0",
            "status": 400,
            "body": {
                "error": {
                    "code": "NO_WAY",
                    "message": "Insufficient justification"
                }
            }
        },
        {
            "id": "r-1",
            "atomicityGroup": "g-0",
            "status": 424,
            "body": {
                "error": {
                    "code": "SKIPPED",
                    "message": "Skipped due to failure in same atomicity group"
                }
            }
        }
    ]
}
```

## Advanced Features

Batch requests can be fine-tuned in many ways:
- Execute individual requests only if preceding requests in the same batch request succeed or fail
- Reference the result of preceding requests
- Execute batch requests asynchronously and return individual results as soon as they are available

See [Batch Requests and Responses](https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html#sec_BatchRequestsandResponses) for details.
