const resolve = require('@rollup/plugin-node-resolve')

const extensions = ['.js', '.mjs', '.html', '.svelte', '.ts']

const dedupe = (importee) => importee === 'svelte' || importee.startsWith('svelte/')

const getClientConfig = () =>
  resolve({
    browser: true,
    jsnext: true,
    extensions,
    dedupe,
  })

const getServerConfig = () =>
  resolve({
    dedupe,
  })

const getServiceWorkerConfig = () => resolve()

module.exports = {
  getClientConfig,
  getServerConfig,
  getServiceWorkerConfig,
}
