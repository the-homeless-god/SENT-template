const svelte = require('rollup-plugin-svelte')

const preprocess = require('svelte-preprocess')
const environmentConfig = require('./environment.bundler')
const cssConfig = require('./css.bundler')

const preprocessor = preprocess({
  babel: {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          // No need for babel to resolve modules
          modules: false,
          targets: {
            // ! Very important. Target es6+
            esmodules: true,
          },
        },
      ],
    ],
  },
  defaults: {
    script: 'typescript',
  },
  sourceMap: environmentConfig.dev,
  ...cssConfig.getSvelteStyles(),
  typescript: {
    tsconfigFile: './tsconfig.json',
    transpileOnly: true,
  },
})

const getClientConfig = () =>
  svelte({
    dev: environmentConfig.dev,
    hydratable: true,
    emitCss: true,
    preprocess: preprocessor,
  })

const getServerConfig = () =>
  svelte({
    generate: 'ssr',
    dev: environmentConfig.dev,
    preprocess: preprocessor,
  })

module.exports = {
  getClientConfig,
  getServerConfig,
}
