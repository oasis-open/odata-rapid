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

To add this package as a dependency to another project, add reference to this library to
the other project's `package.json` `dependencies`, the reference should be a file
path that points to this package's `dist` folder:

```json
"dependencies": {
    "rsdl-editor": "file:path/to/rsdlEditor
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

You can also load this library directly in a html's `src` tag. See the [example.html](./example.html) file for a sample.

## Notes for future reference (feel free to ignore this)

I used Rollup here instead of Webpack to fix some issues with the build. Initially, I used Webpack
but kept getting the following error:
```
Error: Unrecognized extension value in extension set ([object Object]).
This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.
```

This was trigger by the `rsdl()` and `rsdlStyle` extensions passed to the `EditorState.Create({...})` method
in `src/rsdl-editor.ts`. It turns out that the CodeMirror validates the each extension by checking if it's an
instance of one of classes it supports as extensions by using `instanceof` for the test. If the extension doesn't
match any of the classes (e.g. `StateField`), the error above is thrown. This error may happen if the class used
to construct the extension is different from the class used in the `instanceof` test. And this happened to be the case.

Let's assume for the sake of example that `StateField` from `@codemirror/state` package was used to create the extension,
it happened that after bundling the app using Webpack, the `StateField` loaded by `rsdl-editor.ts`
from the `StateField` load by `lang-rsdl/lang.js`. This may happen when the `@codemirror/state` dependency is duplicated and
`import`s from different packages resolve to different versions of `@codemirror/state`.

There were some leads online on how to address this, most were based on Rollup for bundling the modules and instructing Rollup
to de-duplicate dependencies:
- https://github.com/codemirror/lang-example/issues/3
- https://discuss.codemirror.net/t/troubleshooting-article-for-cm6/2803/4
- https://github.com/skypackjs/skypack-cdn/issues/159
- https://codemirror.net/6/examples/bundle/

So I switched to using Rollup cause I wasn't sure how to force de-duplication with Webpack. The build just worked with Rollup
without even using the `dedup` trick mentioned in the articles linked above.