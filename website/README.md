# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

Build the [tools](../tools/readme.md) mono-repo.

Make sure you have [Yarn v1.22.19](https://classic.yarnpkg.com/lang/en/docs/install) installed.

Then:

```
cd website
yarn clean
yarn
```

Repeat this whenever you want to pull in changes from the [tools](../tools/readme.md) mono-repo.

### Linting and fixing documentation issues

To run linting and build locally before contributing any change to the website

```sh
yarn lintDocs
yarn build
```

### Local Development

```
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Once you have built the website, you can deploy using GIT Bash:

```
GIT_USER=<Your GitHub username> yarn deploy
```

Or using PowerShell:

```
$env:GIT_USER="<Your GitHub username>"
yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
