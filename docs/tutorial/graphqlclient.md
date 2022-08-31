---
id: graphqlclient
title: GraphQL client tutorial
sidebar_label: GraphQL Client Tutorial
---

[GraphQL](../related/rapid-pro-graphql.md) provides a rich client and tooling experience for consuming data from a compliant service. RAPID makes it easy to build rich, interoperable, enterprise-ready, standards-based services.

Since RAPID services comply with the [OData protocol](../related/rapid-pro-odata.md), they can be used with tooling that targets OData services, such as GraphQL Mesh.

In this tutorial we'll see how easy it is to take advantage of GraphQL's client and tooling experiences with your RAPID service using the [GraphQL Mesh OData Handler](https://www.graphql-mesh.com/docs/handlers/odata).

## Create a node.js project

To create a new node.js project:

1. Install node.js and npm package manager from the [Node.js website](https://nodejs.org/en/)
2. For a new project, run "npm init" to create a new package.json file

## Install the GraphQL Mesh OData Handler

To install GraphQL Mesh to work with your RAPID service, first, install the [GraphQL Mesh framework](https://www.graphql-mesh.com/docs/getting-started/installation) as follows:

```
npm install graphql @graphql-mesh/cli
```

Next, add the OData Handler:

```
npm install @graphql-mesh/odata
```

## Configure the OData Handler

Create a GraphQL Mesh Configuration file named `.meshrc.yaml` at the root of your project, with a pointer to your RAPID service. The following configuration references our [Jetsons Sample Service](https://jetsons.azurewebsites.net/), but you can replace the name and baseUrl with a pointer to your own RAPID service.

```yaml
sources:
  - name: Jetsons
    handler:
      odata:
        baseUrl: https://jetsons.azurewebsites.net/
        schemaHeaders: { "accept": "application/xml" }
```

Note the schemaHeaders line. GraphQL Mesh currently supports only the [XML CSDL metadata format](https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html). Since the Jetsons service defaults to the JSON format, the `accept` header is required in order to force the service to return metadata in the `application/xml` format.

More information on configuring the Handler can be found in the [OData Handler Documentation](https://www.graphql-mesh.com/docs/handlers/odata).

## Preview your service with GraphQL

To test using GraphQL against your service, execute the following command:

```
npx mesh dev
```

You can now use GraphiQL to try out a dynamically generated client at http://localhost:4000

## Build your client

To build a stand-alone GraphQL Client for your service, run the following commands:

```
npx mesh build
```

You can now explore the artifacts, such as the generated GraphQL schema: `schema.graphql`, from the .mesh folder.

## Deploy a GraphQL SDK for your client

Once you have built your GraphQL client, you can deploy it as a [Gateway](https://www.graphql-mesh.com/docs/recipes/as-gateway) or [Generate an SDK](https://www.graphql-mesh.com/docs/recipes/as-sdk) to call it directly from within your applications.
