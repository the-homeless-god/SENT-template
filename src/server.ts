import express from 'express'
import { createServer } from 'http'
import { initModules, initServer } from './tools/server.tool'

const app = express()
initModules(app)
var server = createServer(app)
initServer(server)
