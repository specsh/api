import express from 'express'
import {ParseServer} from 'parse-server'
import config from '../config'
import objenv from 'objenv'
import pkg from '../package.json'
import http from 'http'

const app = express()

objenv(config, {prefix: 'APS', camelCase: true}, (key, value) => {
  console.log('%s %s', key, value)
})

const api = new ParseServer(config)

app.enable('trust proxy')

// Serve the Parse API on /
app.use('/', api)

// Initialize a LiveQuery server instance, app is the express app of your Parse Server
const httpServer = http.createServer(app)

httpServer.listen(config.port, () => {
  console.log('%s (%s) running on port %s.', pkg.name, pkg.version, config.port)
})

ParseServer.createLiveQueryServer(httpServer)
