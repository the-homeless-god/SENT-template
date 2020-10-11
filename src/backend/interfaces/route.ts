import type { Request, Response } from 'express'

import type { RequestEnum } from '../enums/request'
import type { RouteEnum } from '../enums/route'

export interface Route<T> {
  enabled: boolean
  path: RouteEnum
  type: RequestEnum
  option?: T

  callback: <T>(request: Request, response: Response, option?: T) => void
}
