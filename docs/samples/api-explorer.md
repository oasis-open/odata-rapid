---
id: apiexplorer
title: RAPID API Explorer
sidebar_label: RAPID API Explorer
---

## Overview

The [RAPID API Explorer](https://rapid.rocks/odata-explorer/index.html) is a simple application for exploring a RAPID Service.
It allows you to explore your services' metadata and build and execute queries against your service.

## Try it Out!

To try out the RAPID API Explorer, just click [RAPID API Explorer](https://rapid.rocks/odata-explorer/index.html).
You can experiment with the [Jetsons service](../samples/jetsons-sample-service.md) or enter your service URL and click Enter.

## Source Code

The source code for the API Explorer can be found in the [RAPID API Explorer](https://github.com/oasis-open/odata-rapid/tree/main/tools/odata-explorer) open source repo, and demonstrates the use of the following individual controls:

- [RAPID Url Editor](https://github.com/oasis-open/odata-rapid/tree/main/tools/urlEditor) for building RAPID-compliant URLs against your service
- [RAPID Visual Model Editor](https://github.com/oasis-open/odata-rapid/tree/main/tools/visualModelEditor) for creating a visual display of your service
- [OData-OpenAPI](https://github.com/oasis-tcs/odata-openapi) for converting the CSDL runtime metadata to OpenAPI format.
