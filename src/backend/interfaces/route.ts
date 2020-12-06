import type { Request, Response } from 'express'

import type { RequestEnum } from '../enums/request'
import type { RouteEnum } from '../enums/route'

type RouterCallback = <T>(request: Request, response: Response, option?: T) => void

export interface Route<T> {
  enabled: boolean
  path: RouteEnum
  type: RequestEnum
  option?: T

  callback?: RouterCallback
  middlewares?: RouterCallback[]
}
