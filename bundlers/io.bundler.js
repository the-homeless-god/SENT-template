const config = require('sapper/config/rollup')
const environmentConfig = require('./environment.bundler')

const getIOConfig = (input, container) => ({
  input: input.replace(/\.js$/, '.ts'),
  output: container.output(),
  sourcemap: environmentConfig.dev,
})

const getInput = (container) => container.input()

const getClientConfig = () => getIOConfig(getInput(config.client), config.client)
const getServerConfig = () => getIOConfig(getInput(config.server).server, config.server)
const getServiceWorkerConfig = () => getIOConfig(getInput(config.serviceworker), config.serviceworker)

module.exports = {
  getClientConfig,
  getServerConfig,
  getServiceWorkerConfig,
}
