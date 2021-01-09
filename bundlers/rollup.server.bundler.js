const json = require('@rollup/plugin-json')
const typescript = require('@rollup/plugin-typescript')
const { builtinModules } = require('module')
const pkg = require('../package.json')

const cssBundler = require('./css.bundler')
const svelteConfig = require('./svelte.bundler')
const environmentConfig = require('./environment.bundler')
const commonJsConfig = require('./common.bundler')
const ioConfig = require('./io.bundler')
const warnBundler = require('./warning.bundler')
const resolveConfig = require('./resolve.bundler')

module.exports = {
  ...ioConfig.getServerConfig(),
  plugins: [
    json(),
    environmentConfig.replaceEnvironment(),
    cssBundler.getServerConfig(),
    svelteConfig.getServerConfig(),
    resolveConfig.getServerConfig(),
    commonJsConfig.useCommonJs(),
    typescript({ sourceMap: environmentConfig.dev, inlineSources: environmentConfig.dev }),
  ],
  external: Object.keys(pkg.dependencies).concat(builtinModules || Object.keys(process.binding('natives'))),
  onwarn: warnBundler.onwarn,
}
