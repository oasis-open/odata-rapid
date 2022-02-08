# OData URI tools

This package contains a URI parser that provides autocomplete suggestions and error validation.

## How to build

Run:

```
npm install
```

then

```
npm run build
```

The build command will store the output files in the `dist` folder.

**Note**: You need to run the build command before setting up packages that depend on this library. This package is not on npm, so the dependent
packages will fetch this package from the local filesystem as is.

To add this package as a depedency to another project, add reference to this library to
the other project's `package.json` `dependencies`, the reference should be a file
path that points to this package's `dist` folder:

```json
"dependencies": {
    "odata-uri": "file:path/to/odataUri/dist
}
```

## Usage

```ts
import { AutoCompleteManager } from "odata-uri";

// `schema` is an object in CSDL JSON format
const parser = new AutoCompleteManager(schema);

// gets a list of validation errors (both syntax and semantic errors)
// returns an array with objects like { message: "error message", range: { start: 10, stop: 20 } }
const errors = parser.getErrors("http://service/companies?$filter=");

// second parameter is the cursor position for which suggestions will be provided
// returns an array of strings
const suggestions = parser.getCompletions("http://service/companies?$filter=", 34);

// updates the schema
parsers.updateSchema(newSchema);

```