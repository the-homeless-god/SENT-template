# SENT-template

## Sapper.js, Express.js, Node.js, Typescript template

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![code formatting: eslint](https://img.shields.io/badge/code%20linter-eslint-brightgreen?style=flat-square)](https://github.com/eslint/eslint)

## List of features:

- [ESLint](https://eslint.org/)
- [Express.js](https://www.npmjs.com/package/express)
- [Node.js](https://nodejs.org/en/)
- [Prettier](https://prettier.io/)
- [Sapper.js](https://sapper.svelte.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## Usage

```bash
# for Rollup
npx degit "Zimtir/SENT-template" my-app
```

### Running the project

However you get the code, you can install dependencies and run the project in development mode with:

```bash
cd my-app
npm install # or yarn
npm run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.

## Formatter usage

```shell
# TypeScript/JavaScript/Svelte files
npm run prettier

# TypeScript files
npm run prettier:typescript

# JavaScript files
npm run prettier:javascript

# Svelte files
npm run prettier:svelte
```

## Linter usage

```shell
# run the linting
npm run eslint

# show configuration of ESLint
# may be useful at pipeline usage
npm run eslint:dump


# fix code by ESLint
npm run eslint:fix
```

## Update packages

```shell
# show all packages that can be updated
npm run update:pull

# increase and install versions of packages
npm run update:install
```
