import LoggerTool from 'node-crud-kit/lib/tools/logger.tool'
import ServerTool from 'node-crud-kit/lib/tools/server.tool'

const express = ServerTool.initExpress({
  bodyParser: true,
  routeView: true,
  dotenv: { enabled: true, path: '.env' },
  handleErrors: true,
  listen: true,
  static: {
    enabled: true,
    path: 'public'
  },
  compression: {
    enabled: true,
    threshold: 0
  }
})

express.app.get('/status', (req, res, next) => {
  res.send({
    status: 200,
    message: 'OK'
  })
})

express.installAfterRoutes(process.env.PORT, () => {
  LoggerTool.log(`Service started on port ${process.env.PORT}.`)
})
