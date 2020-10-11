import type { Express, Request, Response } from 'express'
import endpoints from 'express-list-endpoints'

import { RequestEnum } from '../enums/request'
import { RouteEnum } from '../enums/route'
import type { Route } from '../interfaces/route'

export const getEndponts = (app: Express): Route<unknown> => ({
  enabled: true,
  path: RouteEnum.endpoints,
  callback: async (_request: Request, response: Response) => {
    response.send(endpoints(app))
  },
  type: RequestEnum.get,
})
