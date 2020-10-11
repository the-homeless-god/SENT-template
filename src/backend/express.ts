import type { Server } from 'http'
import * as sapper from '@sapper/server'

import type { ExpressConfiguration } from './interfaces/express'
import type { Route } from './interfaces/route'
import {
  setupBodyParser,
  setupCallback,
  setupCompression,
  setupErrorHandler,
  setupExpress,
  setupHelmet,
  setupRequestHandler,
  setupRoutes,
  setupStatic,
} from './tools/setup'

export const initExpress = (configuration: ExpressConfiguration, routes: Route<unknown>[]): Server => {
  const app = setupExpress(configuration)

  return app
    .use(setupRequestHandler(configuration.static, setupStatic))
    .use(setupRequestHandler(configuration.compression, setupCompression))
    .use(setupRequestHandler(configuration.bodyParser, setupBodyParser))
    .use(setupRequestHandler(configuration.security, setupHelmet))
    .use(
      configuration.router.prefix,
      setupRequestHandler(
        { ...configuration.router, payload: { routes, app, view: configuration.router.view } },
        setupRoutes,
      ),
    )
    .use(sapper.middleware())
    .use(setupRequestHandler(configuration.errors, setupErrorHandler))
    .listen(configuration.port, setupCallback(configuration.listen))
}
