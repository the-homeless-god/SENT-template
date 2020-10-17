import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import compression from 'compression'
import express, { Router, RequestHandler, Request, Response, Express } from 'express'
import helmet from 'helmet'
import { logger } from '../../helpers/logger.helper'
import { ResponseEnum } from '../enums/response'
import type {
  CompressionPayload,
  ExpressConfiguration,
  RouterPayload,
  Setting,
  StaticPayload,
} from '../interfaces/express'
import type { Route } from '../interfaces/route'
import { getEndponts } from '../routes/endpoints'
import { getError } from '../routes/error'

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

const initRoutes = (router: Router, routes: Route<unknown>[]): Router => {
  routes.forEach((route) => {
    setupRoute<unknown>(router, route)
  })

  return router
}

export const setupRoutes = (payload: RouterPayload): RequestHandler => {
  const { routes, app, view } = payload
  const router = express.Router()

  view.enabled && routes.push(getEndponts(app))

  return initRoutes(router, routes)
}

export const setupBodyParser = (): RequestHandler[] => [bodyParser.json(), bodyParser.urlencoded({ extended: true })]

export const setupCompression = (payload: CompressionPayload): RequestHandler =>
  compression({ threshold: payload.threshold })

export const setupStatic = (payload: StaticPayload): RequestHandler => express.static(payload.path)

export const setupDotenv = (configuration: ExpressConfiguration): void => {
  if (configuration.dotenv.enabled) {
    dotenv.config({ path: configuration.dotenv.path })
  }
}

export const setupExpress = (configuration: ExpressConfiguration): Express => {
  setupDotenv(configuration)

  return express()
}

export const setupRequestHandler = (
  setting: Setting,
  handler: (payload?: unknown) => RequestHandler | RequestHandler[],
): RequestHandler | RequestHandler[] => {
  const { enabled, payload } = setting

  if (enabled) {
    return handler(payload)
  }

  return null
}

export const setupCallback = (payload: Setting): (() => void) => {
  if (payload.enabled) {
    return payload.callback
  }

  return null
}

export const setupErrorHandler = (): RequestHandler => {
  const errorThrower = (request: Request, response: Response) => {
    getError(request, response, ResponseEnum.NOT_FOUND)
  }

  return errorThrower
}

export const setupHelmet = (): RequestHandler =>
  helmet({
    contentSecurityPolicy: false,
  })
