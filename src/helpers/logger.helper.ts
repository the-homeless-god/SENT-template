import { isDevelopment } from './environment.helper'

export const logger = (args: unknown): void => {
  if (isDevelopment) {
    console.log(args)
  }
}

export const loggerWithDate = (args: unknown): void => {
  if (isDevelopment) {
    console.log(args, new Date())
  }
}
