export const getEnvKey = (name: string): string => {
  // @ts-ignore
  const env = __environment[name]

  if (env) {
    return env
  }

  const error = new Error(`${name} is not defined at .env file`)

  console.error(error)

  throw error
}

export const isDevelopment = !!getEnvKey('IS_DEVELOPMENT')

export const HOST = getEnvKey('HOST')
export const PORT = getEnvKey('PORT')
export const OPEN_BROWSER_AFTER_BUILD = getEnvKey('OPEN_BROWSER_AFTER_BUILD')
export const API_PREFIX = getEnvKey('API_PREFIX')
