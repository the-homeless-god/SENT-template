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

module.exports = {
  scssWebpackConfig,
  scssRollupConfig,
}
