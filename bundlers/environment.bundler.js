const dotenv = require('dotenv')
const replace = require('@rollup/plugin-replace')

const mode = process.env.NODE_ENV
const legacy = Boolean(process.env.SAPPER_LEGACY_BUILD)

const environment = dotenv.config().parsed || process.env
const environmentJSON = JSON.stringify(environment)

console.log(environment)

const replaceEnvironment = () =>
  replace({
    'process.browser': false,
    'process.env.NODE_ENV': JSON.stringify(mode),
    __environment: environmentJSON,
  })

module.exports = {
  dev: JSON.parse(environment.IS_DEVELOPMENT),
  isCodeCoverage: JSON.parse(environment.IS_CODE_COVERAGE_ENABLED),
  legacy,
  replaceEnvironment,
}
