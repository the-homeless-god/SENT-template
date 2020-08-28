const svelteConfig = require('../svelte.config')
const { scssWebpackConfig } = require('../bundlers/css.bundler')

module.exports = ({ config, mode }) => {
  const svelteLoader = config.module.rules.find(
    (r) => r.loader && r.loader.includes('svelte-loader'),
  )
  svelteLoader.options.preprocess = svelteConfig.preprocess

  config.module.rules.push({
    test: /\.(ts)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
      },
    ],
  })

  config.module.rules.push(scssWebpackConfig)

  config.resolve.extensions.push('.ts')

  return config
}
