# SENT-template

https://github.com/Zimtir/SENT-template

## Sapper Express Node Template

![Logo](https://github.com/Zimtir/SENT-template/blob/master/public/assets/img/logo.png?raw=true)

![GitHub package.json version](https://img.shields.io/github/package-json/v/Zimtir/SENT-template)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![code formatting: eslint](https://img.shields.io/badge/code%20linter-eslint-brightgreen?style=flat-square)](https://github.com/eslint/eslint)

![build and publish](https://github.com/Zimtir/SENT-template/workflows/build%20and%20publish/badge.svg)
![Docker Image Size (tag)](https://img.shields.io/docker/image-size/9e3u2f0b1/sent-template/latest?logo=Docker)
![Docker Stars](https://img.shields.io/docker/stars/9e3u2f0b1/sent-template?logo=Docker)

![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Zimtir/sent-template/dev/rollup?color=green&logo=Rollup)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Zimtir/sent-template/dev/sapper?color=green)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Zimtir/sent-template/dev/svelte?color=green)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Zimtir/sent-template/dev/eslint?color=green)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Zimtir/sent-template/dev/fontello?color=green)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Zimtir/sent-template/dev/prettier?color=green)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Zimtir/sent-template/dev/typescript?color=green)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Zimtir/sent-template/dev/@storybook/svelte?color=green)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Zimtir/sent-template/dev/dotenv?color=green)

## List of features:

- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Develop in container](https://code.visualstudio.com/docs/remote/containers)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [DotEnv](https://github.com/motdotla/dotenv)
- [EditorConfig](https://editorconfig.org/)
- [ESLint](https://eslint.org/)
- [Express.js](https://www.npmjs.com/package/express)
- [Fontello](http://fontello.com/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Husky](https://github.com/typicode/husky)
- [Lint staged](https://github.com/okonet/lint-staged)
- [Node.js](https://nodejs.org/en/)
- [Prettier](https://prettier.io/)
- [SASS](https://sass-lang.com/documentation)
- [Sapper.js](https://sapper.svelte.dev/)
- [Storybook](https://storybook.js.org/)
- [Stylelint](https://github.com/stylelint/stylelint)
- [Svelte.js](https://svelte.dev/)
- [Typescript](https://www.typescriptlang.org/)

## Usage

```shell
# for Rollup
npx degit "Zimtir/SENT-template" my-app
```

### Running the project without Docker

However you get the code, you can install dependencies and run the project in development mode with:

```shell
cd my-app
npm install # or yarn
npm run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.

### Running the project with Docker & Docker Compose

```shell
docker-compose up
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

#### Docker scripts

```shell

# will build and deploy container locally
sh scripts/docker-local-build-and-deploy.sh

# will build and publish container to registry
sh scripts/docker-local-build-and-publish.sh

# will remove all containers & images
sh scripts/docker-remove-all
```

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

## Storybook usage

```shell
# run the storybook
npm run storybook
```

## Fontello usage

```shell
# any new icons can be added by update of fontello.config.json
# all icons placed at http://fontello.com/

# build icons & fonts based on fontello.config.json
npm run build
```

## Update packages

```shell
# show all packages that can be updated
npm run update:pull

# increase and install versions of packages
npm run update:install
```

## Recommended VS Code Extensions

- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [Docker Compose](https://marketplace.visualstudio.com/items?itemName=p1c2u.docker-compose)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [SCSS Formatter](https://marketplace.visualstudio.com/items?itemName=sibiraj-s.vscode-scss-formatter)
- [SCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss)
- [Svelte](https://marketplace.visualstudio.com/items?itemName=JamesBirtles.svelte-vscode)
- [Svelte Auto import](https://marketplace.visualstudio.com/items?itemName=pivaszbs.svelte-autoimport)
- [Svelte 3 Snippets](https://marketplace.visualstudio.com/items?itemName=fivethree.vscode-svelte-snippets)
- [Svelte Intellisense](https://marketplace.visualstudio.com/items?itemName=ardenivanov.svelte-intellisense)
- [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
- [Svelte Type Checker](https://marketplace.visualstudio.com/items?itemName=halfnelson.svelte-type-checker-vscode)
- [TypeScript UML](https://marketplace.visualstudio.com/items?itemName=myxvisual.vscode-ts-uml)

## Recommended Environment

- [Docker](https://www.docker.com)
- [Node.js v12.18.3](https://nodejs.org)
- [Visual Studio Code](https://code.visualstudio.com)
