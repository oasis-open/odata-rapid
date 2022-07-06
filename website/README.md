# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```sh
cd website
yarn
```

If you had installed the website previously and want to start from a clean slate:

```
cd website
yarn clean
yarn
```

### Linting and fixing documentation issues

To run linting and build locally before contributing any change to the website

```sh
yarn lintDocs
yarn build
```

Build the required [urlEditor](../tools/urlEditor) package.

Then:

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Once you have built the website, you can deploy using GIT Bash:

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
