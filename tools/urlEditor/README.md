# OData URL Editor

A URL editor component that provides autocomplete suggestions and error highlighting based on CSDL JSON schema.

## Installation

First make sure to build the [odata-uri](../odataUri) package.

Then run:

```
npm install
```

Then run:

```
npm run build
```

The build command will store the output files in the `dist` folder.

**Note**: You need to run the build command before setting up packages that depend on this library. This package is not on npm, so the dependent
packages will fetch this package from the local filesystem as is.

To add this package as a dependency to another project, add reference to this library to
the other project's `package.json` `dependencies`, the reference should be a file
path that points to this package's root folder:

```json
"dependencies": {
    "odata-url-editor": "file:path/to/urlEditor"
}
```

## Usage

```ts
import { schemaFormat, initUrlEditor } from "odata-url-editor";

const editor = initUrlEditor(document.getElementById("editor"), onUrlUpdated);
// schema is a string in rsdl format
const schema: string = "...";
editor.updateSchema(schema, schemaFormat.rsdl);

// this handler will be called when the user updates the url input in the editor
function onUrlUpdated(url: string) {
    console.log("URL has been updated to", url);
}

// gets the current contents of the editor
const url = editor.getUrl();

```

You can also load this library directly in a html's `src` tag. See the [example.html](./example.html) file for a sample.