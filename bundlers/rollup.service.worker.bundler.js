const typescript = require('@rollup/plugin-typescript')
const { terser } = require('rollup-plugin-terser')

const environmentConfig = require('./environment.bundler')
const commonJsConfig = require('./common.bundler')
const ioConfig = require('./io.bundler')
const warnBundler = require('./warning.bundler')
const resolveConfig = require('./resolve.bundler')

module.exports = {
  ...ioConfig.getServiceWorkerConfig(),
  plugins: [
    resolveConfig.getServiceWorkerConfig(),
    environmentConfig.replaceEnvironment(),
    commonJsConfig.useEmptyCommonJs(),
    typescript({ sourceMap: environmentConfig.dev }),
    !environmentConfig.dev && terser(),
  ],

  preserveEntrySignatures: false,
  onwarn: warnBundler.onwarn,
}
