const autoPreprocess = require('svelte-preprocess')

module.exports = ({ config, mode }) => {
  const svelteLoader = config.module.rules.find(
    (r) => r.loader && r.loader.includes('svelte-loader'),
  )
  svelteLoader.options.preprocess = autoPreprocess({
    less: { includePaths: ['src', 'node_modules'] },
    css: { includePaths: ['src', 'node_modules'] },
    typescript: {
      tsconfigFile: './tsconfig.json',
      transpileOnly: true,
    },
  })
  config.module.rules.push({
    test: /\.(ts)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
      },
    ],
  })

  config.module.rules.push({
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
      },
    ],
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
