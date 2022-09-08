# RAPID ROCKS Tools

A collection of tools for RAPID/ODATA APIs and RSDL-based services.

## Installation and build instructions

Note for Windows: use [PowerShell](https://github.com/PowerShell/PowerShell) for running these commands.

Make sure you have [Node.js](https://nodejs.org/) installed and in the `PATH`.

Make sure you have **Java** installed from [here](https://jdk.java.net/) or [here](https://sap.github.io/SapMachine/) and in the `PATH`.

Install all tools in this monorepo:

```
npm install
npm run build
```

If you had installed the tools previously and want to start from a clean slate:

```
npm run clean
npm install
npm run build
```

Check correct installation by running the tests:

```
npm test
```

## Launch API Designer

```
npm run api-designer
```

## Launch API Explorer

```
npm run api-explorer
```
