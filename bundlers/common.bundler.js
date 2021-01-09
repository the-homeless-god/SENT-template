const commonjs = require('@rollup/plugin-commonjs')

const useCommonJs = () =>
  commonjs({
    include: /node_modules/,
  })

const useEmptyCommonJs = () => commonjs()

module.exports = {
  useCommonJs,
  useEmptyCommonJs,
}
