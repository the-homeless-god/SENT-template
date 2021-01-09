const resolve = require('@rollup/plugin-node-resolve')

const extensions = ['.js', '.mjs', '.html', '.svelte', '.ts', '.json']

const dedupe = (importee) => importee === 'svelte' || importee.startsWith('svelte/')

const getClientConfig = () =>
  resolve.nodeResolve({
    browser: true,
    jsnext: true,
    extensions,
    dedupe,
  })

const getServerConfig = () =>
  resolve.nodeResolve({
    dedupe,
    extensions,
  })

const getServiceWorkerConfig = () => resolve.nodeResolve()

module.exports = {
  getClientConfig,
  getServerConfig,
  getServiceWorkerConfig,
}
