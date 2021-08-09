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

**Note**: You need to run the build command before setting up packages that depend on this library. This package is not on npm, so the dependent
packages will fetch this package from the local fs as is.

## Usage

```ts
import { initUrlEditor } from "odata-url-editor";

const editor = initUrlEditor(document.getElementById("editor"), onUrlUpdated);
// schema is a string in rsdl format
const schema: string = "...";
editor.updateSchema(schema);

// this handler will be called when the user updates the url input in the editor
function onUrlUpdated(url: string) {
    console.log("URL has been updated to", url);
}

// gets the current contents of the editor
const url = editor.getUrl();

```