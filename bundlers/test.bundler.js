const istanbul = require('rollup-plugin-istanbul')

const checkCodeCoverage = () =>
  istanbul({
    extensions: ['.js', '.ts', '.svelte'],
    include: ['src/**/*'],
    sourceMap: true,
    compact: false,
    debug: true,
  })

module.exports = {
  checkCodeCoverage,
}
