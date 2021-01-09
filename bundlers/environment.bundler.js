const dotenv = require('dotenv')
const replace = require('@rollup/plugin-replace')

const mode = process.env.NODE_ENV

const environment = dotenv.config().parsed || process.env
const environmentJSON = JSON.stringify(environment)

const getBooleanVariable = (key) => JSON.parse(environment[key] || null)

console.log(environment)

const replaceEnvironment = () =>
  replace({
    'process.browser': false,
    'process.env.NODE_ENV': JSON.stringify(mode),
    __environment: environmentJSON,
  })

module.exports = {
  dev: getBooleanVariable('IS_DEVELOPMENT'),
  isCodeCoverage: getBooleanVariable('IS_CODE_COVERAGE_ENABLED'),
  legacy: getBooleanVariable('SAPPER_LEGACY_BUILD'),
  replaceEnvironment,
}
