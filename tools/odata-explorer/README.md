# RAPID OData Explorer

An app for exploring RAPID/ODATA services.

## Build instructions

### Build related tools

This project depends on other tools in this repo. These tools are built in the correct order via `npm install` + `npm run build` in the `tools` folder (parent of this folder):

- [odataUri](../odataUri) (This is not a direct dependency of the API designer, but is required by the `urlEditor` )
- [urlEditor](../urlEditor) (Referenced in `package.json` as `odata-uri-editor`)
- [visualModelEditor](../visualModelEditor) (`visual-model-editor`)
- [rsdlEditor](../rsdlEditor) (`rsdl-editor`)

**Note**: if you make modifications to any of those dependencies and rebuild and the changes don't take effect in the API designer, try:

- delete all `dist` folders of the dependencies
- run `npm run build` again in the `tools` folder

**Troubleshooting**

- If you get build errors on Windows, especially related to typescript types, consider using Powershell instead of CMD
- [This GitHub thread](https://github.com/parcel-bundler/parcel/issues/7697) was useful in resolving `Cannot resolve 'process'` error that occurred in some environments

### Install dependencies

In the `tools` folder (parent of this folder) run:

```
npm install
npm run build
```

### Launch the app locally

In the `tools` folder (parent of this folder) run:

```
npm run odata-explorer
```

Alternatively, in this folder run:

```
npm start
```
