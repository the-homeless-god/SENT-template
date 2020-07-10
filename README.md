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

## Formatter usage

```shell
# run the formatting for TypeScript/JavaScript/Svelte files
npm run prettier

# run the formatting Prettier only for TypeScript
npm run prettier:typescript

# run the formatting only for JavaScript
npm run prettier:javascript

# run the formatting only for Svelte
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

## Getting started

### Using `degit`

[`degit`](https://github.com/Rich-Harris/degit) is a scaffolding tool that lets you create a directory from a branch in a repository. Use either the `rollup` or `webpack` branch in `sapper-template`:

```bash
# for Rollup
npx degit "Zimtir/SENT-template" my-app
```

### Using GitHub templates

Alternatively, you can use GitHub's template feature with the [sapper-template-rollup](https://github.com/Zimtir/SENT-template)

### Running the project

However you get the code, you can install dependencies and run the project in development mode with:

```bash
cd my-app
npm install # or yarn
npm run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.

# TODO

- Redis
- MongoDB
- MySQL
- Docker
- K8S
