---
id: batch
title: Batch Operations
---

RAPID allows wrapping multiple requests into a single batch request.

## Basics

Batch requests are sent to a special resource `/$batch`.
The request payload consists of an array of individual requests,
and the response payload consists of an array of individual responses.
Requests and responses are correlated via an `id` for each individual request.

| Template    | POST \{service-root\}/\$batch    |
| ----------- | :------------------------------- |
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

## Error Handling

Batch requests return `200 OK` even if some or all of the individual requests in the batch fail.
Batch requests only return `4xx` if the batch request body is malformed,
the client is not authenticated or lacks authorization for the `/$batch` resource,
or other reasons not related to individual requests in the batch.

If an individual request fails, processing continues with the next request.
Individual requests can be processed in any order,
not necessarily in the sequence they appear in the batch request.

**Body:**

```json
{
  "requests": [
    {
      "id": "p-0",
      "method": "patch",
      "url": "company/employees/2",
      "headers": {
        "if-match": "MjA2My0wNC0wMVQxMzo1NToyNy4xMjM0NTZa"
      },
      "body": {
        "title": "On garden leave"
      }
    },
    {
      "id": "p-1",
      "method": "patch",
      "url": "company/employees/4",
      "body": {
        "title": "Junior Digital Index Operator"
      }
    }
  ]
}
```

**Result (some individual requests succeed, some fail):**

```json
{
  "responses": [
    {
      "id": "p-0",
      "status": 412,
      "body": {
        "error": {
          "code": "INVALID_ETAG",
          "message": "The ETag provided in the If-Match header was outdated"
        }
      }
    },
    {
      "id": "p-1",
      "status": 204
    }
  ]
}
```

## Advanced Features

Batch requests can be enhanced in many ways:

- Execute individual requests only if preceding requests in the same batch request succeed or fail
- Reference the result of preceding requests
- Execute batch requests asynchronously and return individual results as soon as they are available
- Group operations into atomicity groups that are executed all-or-nothing

See [Batch Requests and Responses](https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html#sec_BatchRequestsandResponses) for details.
