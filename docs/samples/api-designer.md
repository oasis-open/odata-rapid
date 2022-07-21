---
id: apidesigner
title: RAPID API Designer
sidebar_label: RAPID API Designer
---

## Overview

The <a href="/api-designer/index.html" target="_blank">RAPID API Designer</a> is a simple application for designing a RAPID API.
It allows you to describe your API in simple [RAPID Schema Definition Language (RSDL)](../rsdl/rapid-rsdl-intro.md) syntax,
view as runtime [Common Schema Definition Language (CSDL)](../spec/rapid-pro-resource_description.md),
Swagger UI, or visually, and build sample queries against the schema.

## Try it Out!

To try out the RAPID API Designer, just click <a href="/api-designer/index.html" target="_blank">RAPID API Designer</a>.
You can start with the schema for the [Jetsons service](../samples/jetsons-sample-service.md) or design your own schema from scratch.

## Source Code

The source code for the API Designer can be found in the [RAPID API Designer](https://github.com/oasis-open/odata-rapid/tree/main/tools/api-designer) open source repo, and demonstrates the use of the following individual controls:

- [RSDL Editor](https://github.com/oasis-open/odata-rapid/tree/main/tools/rsdlEditor) for designing a service using [RAPID Schema Definition Language (RSDL)](../rsdl/rapid-rsdl-intro.md)
- [RSDL-JS](https://github.com/oasis-open/odata-rapid/tree/main/tools/rsdl/rsdl-js) for generating runtime [Common Schema Definition Language (CSDL)](../spec/rapid-pro-resource_description.md) from RSDL
- [RAPID Visual Model Editor](https://github.com/oasis-open/odata-rapid/tree/main/tools/visualModelEditor) for creating a visual display of your service
- [OData-OpenAPI](https://github.com/oasis-tcs/odata-openapi) for converting the runtime CSDL metadata to OpenAPI format.
- [RAPID Url Editor](https://github.com/oasis-open/odata-rapid/tree/main/tools/urlEditor) for building RAPID-compliant URLs against your service
