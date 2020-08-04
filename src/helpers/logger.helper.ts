export const logger = (args: unknown): void => {
  console.log(args)
}

export const loggerWithDate = (args: unknown): void => {
  console.log(args, new Date())
}
