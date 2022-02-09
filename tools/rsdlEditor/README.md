# RSDL Editor

An editor component that provides syntax highlighting for writing RSDL schemas.

## Installation

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

To add this package as a depedency to another project, add reference to this library to
the other project's `package.json` `dependencies`, the reference should be a file
path that points to this package's `dist` folder:

```json
"dependencies": {
    "rsdl-editor": "file:path/to/rsdlEditor/dist
}
```

## Usage

```ts
import { initRsdlEditor } from "rsdl-editor";

const editor = initRsdlEditor(document.getElementById("editor"), onRsdlUpdated);
// schema is a string in rsdl format
const schema: string = "...";
editor.updateContent(schema);

// this handler will be called when the user updates the content in the editor
function onUrlUpdated(content: string) {
    console.log("URL has been updated to", content);
}

// gets the current contents of the editor
const currentContent = editor.getContent();

```