---
id: batch
title: Batch Operations
---


# Batch Operations

RAPID allows wrapping multiple requests into a single batch request.
This can be used for two purposes:
- Reduce the number of round-trips and reduce latency between requests
- Group multiple modification operations and execute them all-or-nothing

## Batch Requests and Responses

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

## Atomicity Groups

TODO