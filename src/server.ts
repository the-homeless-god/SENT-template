import { PORT } from './helpers/environment.helper'
import { loggerWithDate } from './helpers/logger.helper'
import { openBrowser } from './helpers/browser.helper'
import { initExpress } from './backend/express'
import { getStatus } from './backend/routes/status'

const routes = [getStatus()]

initExpress(
  {
    bodyParser: {
      enabled: true,
    },
    router: {
      enabled: true,
      prefix: '/api',
      view: {
        enabled: true,
      },
    },
    dotenv: { enabled: true, path: '.env' },
    errors: {
      enabled: true,
    },
    listen: {
      enabled: true,
      callback: () => {
        loggerWithDate(`Service started on port ${PORT}.`)

        openBrowser()
      },
    },
    security: {
      enabled: true,
    },
    static: {
      enabled: true,
      payload: {
        path: 'public',
      },
    },
    compression: {
      enabled: true,
      payload: {
        threshold: 0,
      },
    },
    port: parseInt(PORT, 10),
  },
  routes,
)
