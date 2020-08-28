import open from 'open'

import { OPEN_BROWSER_AFTER_BUILD, PORT } from './environment.helper'
import { loggerWithDate } from './logger.helper'

export const openBrowser = (): void => {
  if (OPEN_BROWSER_AFTER_BUILD === 'true') {
    loggerWithDate('opening browser for preview')

    open(`http://localhost:${PORT}/`)
  }
}
