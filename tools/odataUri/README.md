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

So I switched to using Rollup cause I wasn't sure how to for de-duplication with Webpack. The build just worked with Rollup
without even using the `dedup` trick mentioned in the articles linked above.