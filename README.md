# SENT-template

[https://github.com/Zimtir/SENT-template](https://github.com/Zimtir/SENT-template)

## Sapper Express Node Template

![Logo](https://github.com/Zimtir/SENT-template/blob/master/public/assets/img/logo.png?raw=true)

![GitHub package.json version](https://img.shields.io/github/package-json/v/Zimtir/SENT-template?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/Zimtir/SENT-template)
![GitHub forks](https://img.shields.io/github/forks/Zimtir/SENT-template)
![GitHub stars](https://img.shields.io/github/stars/Zimtir/SENT-template)
![GitHub license](https://img.shields.io/github/license/Zimtir/SENT-template)

![GitHub issues](https://img.shields.io/github/issues/Zimtir/SENT-template)
![GitHub forks](https://img.shields.io/github/forks/Zimtir/SENT-template)
![GitHub stars](https://img.shields.io/github/stars/Zimtir/SENT-template)
![GitHub license](https://img.shields.io/github/license/Zimtir/SENT-template)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier?style=for-the-badge)
[![code formatting: eslint](https://img.shields.io/badge/code%20linter-eslint-brightgreen?style=flat-square)](https://github.com/eslint/eslint?style=for-the-badge)

![build and publish](https://github.com/Zimtir/SENT-template/workflows/build%20and%20publish/badge.svg?style=for-the-badge)
![linters and tests](https://github.com/Zimtir/SENT-template/workflows/linters%20and%20tests/badge.svg?style=for-the-badge)

![Docker Stars](https://img.shields.io/docker/stars/9e3u2f0b1/sent-template?logo=Docker&style=for-the-badge)

![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Zimtir/sent-template/dev/rollup?color=green&style=for-the-badge)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Zimtir/sent-template/dev/sapper?color=green&style=for-the-badge)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Zimtir/sent-template/dev/svelte?color=green&style=for-the-badge)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Zimtir/sent-template/dev/fontello-cli?color=green&style=for-the-badge)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Zimtir/sent-template/dev/typescript?color=green&style=for-the-badge)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Zimtir/sent-template/dev/dotenv?color=green&style=for-the-badge)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Zimtir/sent-template/swagger-ui-express?color=green&style=for-the-badge)

![Coverage by tests](https://github.com/Zimtir/SENT-template/blob/master/public/assets/img/coverage.png?raw=true)

## Design

![Design](./design/architecture.svg)

## Usage

- Create a repository based on SENT-template

  ```shell
  # for Rollup
  npx degit "Zimtir/SENT-template" my-app
  ```

- Install packages
  - `npm run install:dev` - Install only required packages for simple development (no test support and other tools)
  - `npm run install:dev:full` - Install all packages
  - `npm run install:prod:full` - Install all packages to execute tests, storybook and so on at production environment
  - `npm run install:prod` - Install only required packages to run production

## Testing

- `npm run test:dev` or `npm run test:prod` - Execute all tests
- Note: setup `IS_CODE_COVERAGE_ENABLED='true'` in environment variables to print at output a coverage by tests

## Swagger

[Swagger configuration](./design/swagger.json)

- Start application

  ```shell
  npm run dev

  # or

  npm run start
  ```

- Navigate to Swagger url (<http://localhost:3000/api/swagger>)

## Docker

### Production

- Application

  - The running of bundles in container
  - Note: Sure to execute the build before `npm run build`

  ```shell
  docker-cmpose up sent-template
  ```

### Development

- Application

  - The running of application in development mode inside a container

  ```shell
  docker-compose -f docker-compose.dev.yml up web
  ```

- Storybook

  - Demonstrates all components that can be used in development

  ```shell
  docker-compose -f docker-compose.dev.yml up storybook
  ```

- Nginx

  - The hosting of bundles through Nginx
  - Note: Sure to execute the build before `npm run build`

  ```shell
  docker-compose -f docker-compose.dev.yml up nginx
  ```

- Tests

  - Allows to execute all tests in the container

  ```shell
  docker-compose -f docker-compose.dev.yml up test
  ```

## Docs

[Wiki](https://github.com/Zimtir/SENT-template/wiki)

## List of features

- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)
- [Develop in container](https://code.visualstudio.com/docs/remote/containers)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Docker Size Limit](https://github.com/marketplace/actions/docker-image-size-limit)
- [DotEnv](https://github.com/motdotla/dotenv)
- [EditorConfig](https://editorconfig.org/)
- [ESLint](https://eslint.org/)
- [Express.js](https://www.npmjs.com/package/express)
- [Fontello](http://fontello.com/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Helmet](https://helmetjs.github.io/)
- [Husky](https://github.com/typicode/husky)
- [Lint staged](https://github.com/okonet/lint-staged)
- [Nginx](https://nginx.org/)
- [Node.js](https://nodejs.org/en/)
- [Prettier](https://prettier.io/)
- [SASS](https://sass-lang.com/documentation)
- [Sapper.js](https://sapper.svelte.dev/)
- [Storybook](https://storybook.js.org/)
- [Stylelint](https://github.com/stylelint/stylelint)
- [Svelte.js](https://svelte.dev/)
- [Swagger](https://swagger.io)
- [Typescript](https://www.typescriptlang.org/)
