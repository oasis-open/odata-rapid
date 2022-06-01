# RAPID OData Explorer

An app for exploring RAPID/ODATA services.

## Build instructions

### Build related tools

This project depends on other tools in this repo. You have to manually build those tools first by going to their respective directories and following their build instructions (mainly a combination of `npm install` + `npm run build`):
- [odataUri](../odataUri) (This is not a direct dependency of the API designer, but is required by the `urlEditor` )
- [urlEditor](../urlEditor) (Referenced in `package.json` as `odata-uri-editor`)
- [visualModelEditor](../visualModelEditor) (`visual-model-editor`)
- [rsdlEditor](../rsdlEditor) (`rsdl-editor`)

**Note**: if you make modifications to any of those dependencies and rebuild and the changes don't take effect in the API designer, try:
- uninstalling the dependency from the API designer (remove it from `package.json` and `node_modules` or run `npm uninstall`)
- adding it back to `package.json`
- running `npm run build`

**Troubleshooting**:
- If you get build errors on Windows, especially related to typescript types, consider using Powershell instead of CMD
- [This GitHub thread](https://github.com/parcel-bundler/parcel/issues/7697) was useful in resolving `Cannot resolve 'process'` error that occured in some environments

**TODO**: Consider organizing this project as a monorepo to make dependency management of related tools easier. The current set up is a quick hack.

### Install dependencies

Run:

```
npm install
```

### Launch the app locally

```
npm start
```