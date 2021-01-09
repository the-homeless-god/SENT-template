const clientConfig = require('./bundlers/rollup.client.bundler')
const serverConfig = require('./bundlers/rollup.server.bundler')
const serviceWorkerConfig = require('./bundlers/rollup.service.worker.bundler')

export default {
  client: clientConfig,
  server: serverConfig,
  serviceworker: serviceWorkerConfig,
}
