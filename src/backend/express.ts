import type { Server } from 'http'
import dotenv from 'dotenv'
import compression from 'compression'
import bodyParser from 'body-parser'
import express, { Request, Response, RequestHandler, Express, Router } from 'express'
import * as sapper from '@sapper/server'

import { logger } from '../helpers/logger.helper'
import type {
  CompressionPayload,
  ExpressConfiguration,
  RouterPayload,
  Setting,
  StaticPayload,
} from './interfaces/express'
import type { Route } from './interfaces/route'
import { getEndponts } from './routes/endpoints'
import { ResponseEnum } from './enums/response'
import { getError } from './routes/error'

const setupRequestHandler = (
  setting: Setting,
  handler: (payload?: unknown) => RequestHandler | RequestHandler[],
): RequestHandler | RequestHandler[] => {
  const { enabled, payload } = setting

  if (enabled) {
    return handler(payload)
  }

  return null
}

const setupCallback = (payload: Setting): (() => void) => {
  if (payload.enabled) {
    return payload.callback
  }

  return null
}

const setupErrorHandler = (): RequestHandler => {
  const errorThrower = (request: Request, response: Response) => {
    getError(request, response, ResponseEnum.NOT_FOUND)
  }

  return errorThrower
}

const setupBodyParser = (): RequestHandler | RequestHandler[] => [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
]

const setupCompression = (payload: CompressionPayload): RequestHandler => compression({ threshold: payload.threshold })

const setupStatic = (payload: StaticPayload): RequestHandler => express.static(payload.path)

const setupDotenv = (configuration: ExpressConfiguration) => {
  if (configuration.dotenv.enabled) {
    dotenv.config({ path: configuration.dotenv.path })
  }
}

const getExpressEnvironment = (configuration: ExpressConfiguration): Express => {
  setupDotenv(configuration)

  return express()
}

const setupRoute = <T>(router: Router, route: Route<T>): void => {
  if (route.enabled) {
    logger(route.path)

    router[route.type](route.path, (request: Request, response: Response) => {
      logger(route)
      route.callback(request, response, route.option)
    })
  }

  logger({ path: route.path, status: route.enabled })
}

const setupRoutes = (payload: RouterPayload): RequestHandler => {
  const { routes, app, view } = payload

  view.enabled && routes.push(getEndponts(app))

  const router = express.Router()

  routes.forEach((route) => {
    setupRoute<unknown>(router, route)
  })

  return router
}

export const initExpress = (
  configuration: ExpressConfiguration,
  middlewares: RequestHandler[],
  routes: Route<unknown>[],
): Server => {
  const app = getExpressEnvironment(configuration)

  return app
    .use(setupRequestHandler(configuration.static, setupStatic))
    .use(setupRequestHandler(configuration.compression, setupCompression))
    .use(setupRequestHandler(configuration.bodyParser, setupBodyParser))
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
