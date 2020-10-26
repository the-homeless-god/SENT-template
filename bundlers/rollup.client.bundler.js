const json = require('@rollup/plugin-json')
const typescript = require('@rollup/plugin-typescript')
const { terser } = require('rollup-plugin-terser')

const cssBundler = require('./css.bundler')
const svelteConfig = require('./svelte.bundler')
const environmentConfig = require('./environment.bundler')
const commonJsConfig = require('./common.bundler')
const ioConfig = require('./io.bundler')
const warnBundler = require('./warning.bundler')
const resolveConfig = require('./resolve.bundler')

module.exports = {
  ...ioConfig.getClientConfig(),
  plugins: [
    environmentConfig.replaceEnvironment(),
    cssBundler.getClientConfig(),
    svelteConfig.getClientConfig(),
    resolveConfig.getClientConfig(),
    commonJsConfig.useCommonJs(),
    typescript({ sourceMap: environmentConfig.dev }),
    json(),
    environmentConfig.legacy
      && !environmentConfig.dev
      && terser({
        module: true,
      }),
  ],
  preserveEntrySignatures: false,

  onwarn: warnBundler.onwarn,
}
