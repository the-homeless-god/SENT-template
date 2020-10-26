const scss = require('rollup-plugin-scss')

const environmentConfig = require('./environment.bundler')

const configuration = {
  prefix: '@import \'src/styles/variables.scss\';',
}

const scssWebpackConfig = {
  test: /\.scss$/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'sass-loader',
      options: {
        additionalData: configuration.prefix,
      },
    },
  ],
}

const scssRollupConfig = (postfix, dev) => ({
  output: `public/assets/css/${postfix}.css`,
  sourceMap: dev,
  prefix: configuration.prefix,
  watch: 'src/**/*.(scss|svelte)',
})

const getSvelteStyles = () => ({
  less: { includePaths: ['src', 'node_modules'] },
  css: { includePaths: ['src', 'node_modules'] },
  scss: configuration,
})

const getSCSSConfig = (path) => scss(scssRollupConfig(path, environmentConfig.dev))

const getClientConfig = () => getSCSSConfig('client')
const getServerConfig = () => getSCSSConfig('server')

module.exports = {
  configuration,
  scssWebpackConfig,
  getClientConfig,
  getServerConfig,
  getSvelteStyles,
}
