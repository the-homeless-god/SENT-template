import type { Request, Response } from 'express'
import { loggerWithDate } from '../../helpers/logger.helper'
import { ResponseEnum } from '../enums/response'

export const getError = async <HttpException>(
  _request: Request,
  response: Response,
  payload: HttpException,
): Promise<void> => {
  loggerWithDate(payload)

  response.send({
    ...ResponseEnum.ERROR,
    ...payload,
  })
}
