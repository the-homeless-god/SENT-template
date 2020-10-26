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
    environmentConfig.replaceEnvironment(),
    cssBundler.getServerConfig(),
    svelteConfig.getServerConfig(),
    resolveConfig.getServerConfig(),
    commonJsConfig.useCommonJs(),
    typescript({ sourceMap: environmentConfig.dev }),
    json({
      // All JSON files will be parsed by default,
      // but you can also specifically include/exclude files
      include: 'node_modules/**',
      exclude: ['node_modules/foo/**', 'node_modules/bar/**'],

      // for tree-shaking, properties will be declared as
      // variables, using either `var` or `const`
      preferConst: true, // Default: false

      // specify indentation for the generated default export —
      // defaults to '\t'
      indent: '  ',

      // ignores indent and generates the smallest code
      compact: true, // Default: false

      // generate a named export for every property of the JSON object
      namedExports: true, // Default: true
    }),
  ],
  external: Object.keys(pkg.dependencies).concat(builtinModules || Object.keys(process.binding('natives'))),
  onwarn: warnBundler.onwarn,
}
