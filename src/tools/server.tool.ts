import { isNonEmptyList } from './common.tool'
import { logger } from './logger.tool'
import cors from 'cors'
import morgan from 'morgan'
import express from 'express'
import bodyParser from 'body-parser'
import all_routes from 'express-list-endpoints'
import * as sapper from '@sapper/server'
import compression from 'compression'

const getPort = () => {
  const { PORT } = process.env
  return PORT
}

export const initServer = (server: any) => {
  handleServerErrors(server)

  server.listen(getPort())
}

export const initModules = (app: any) => {
  const port = getPort()
  app.set('port', port)
  app.use(bodyParser.json())
  app.use(morgan('combined'))
  app.use(cors())
  app.use(express.static('public'))
  app.use(compression({ threshold: 0 }))
  app.use(sapper.middleware())

  logger(all_routes(app))
  handleAppErrors(app)
}

export const handleAppErrors = (app: any) => {
  app.use((req: any, res: any, next: any) => {
    var err = new Error('Not Found')
    next(err)
  })

  app.use((err: any, req: any, res: any, next: any) => {
    res.locals.message = err.message
    res.locals.error = {}
    res.status(err.status || 500)
    res.json(err)
    logger(err, next)
  })
}

export const handleServerErrors = (server: any) => {
  const onListening = (server: any) => {
    var addr = server.address()
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port

    logger(`server listen at ${bind}`)
  }

  server.on('listening', () => onListening(server))
}
