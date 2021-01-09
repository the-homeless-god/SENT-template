import type { Express } from 'express'
import type { Route } from './route'

export interface CompressionPayload {
  threshold: number
}

export interface StaticPayload {
  path: string
}

export interface Setting {
  enabled: boolean
  callback?: () => void
  payload?: unknown
}

export interface RouterPayload {
  routes: Route<unknown>[]
  app: Express
  view: Setting
  swagger: Setting
}

export interface ExpressConfiguration {
  bodyParser: Setting
  router: Setting & {
    prefix: string
    view: Setting
  }
  dotenv: Setting & {
    path: string
  }
  errors: Setting
  static: Setting & {
    payload: StaticPayload
  }
  compression: Setting & {
    payload: CompressionPayload
  }
  swagger: Setting
  security: Setting
  listen: Setting
  port: number
}

export interface ExpressInit {
  app: Express
  onStart: (callback?: () => void) => void
}

export interface HttpException extends Error {
  status: number
  message: string
}
