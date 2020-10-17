import type { Request, Response } from 'express'

import { RequestEnum } from '../enums/request'
import { ResponseEnum } from '../enums/response'
import { RouteEnum } from '../enums/route'
import type { Route } from '../interfaces/route'

export const getStatus = (): Route<unknown> => ({
  enabled: true,
  path: RouteEnum.status,
  callback: async (_request: Request, response: Response) => {
    response.send(ResponseEnum.OK)
  },
  type: RequestEnum.get,
})
