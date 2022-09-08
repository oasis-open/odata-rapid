# RAPID ROCKS Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

Install everything in this monorepo from the project root:

```
npm install
npm run build
```

If you had installed the monorepo previously and want to start from a clean slate:

```
npm run clean
npm install
npm run build
```

### Local Development

In the project root or this folder:

```
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Deployment

In the project root:

```
npm run build
```

This generates static content into the `website/build` folder that can be locally served with

```
npm run serve
```

Once you have tested the website locally, you can deploy using GIT Bash:

```
GIT_USER=<Your GitHub username> npm run deploy
```

Or using PowerShell:

```
$env:GIT_USER="<Your GitHub username>"
npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
