import 'reflect-metadata'
import 'module-alias/register';

import dotenv from 'dotenv'
import express from 'express'
import history from 'connect-history-api-fallback'
import path from 'path'
import http from 'http'
import favicon from 'serve-favicon'
import logger from 'morgan'
import methodOverride from 'method-override'
import session from 'express-session'
import bodyParser from 'body-parser'
import errorHandler from 'errorhandler'
import { Server, Socket } from "socket.io"
import * as database from './database'
import routes from './routes'

/**
 * Import environment settings
 */
dotenv.config()

/**
 * Start database connection
 */
database.connect()

if (database.connected())
    console.log('[DB] Database server connected successfully.')

/**
 * Create new express application instance
 * 
 * @const Application
 */
const app = express()

/**
 * Create new HTTP Server instance
 * 
 * @const http.createServer
 */
const server = http.createServer(app)

/**
 * Create websocket server
 */
const io = new Server(server, {
    path: '/javascripts/ws/'
})

/**
 * Handle client websocket connections
 * 
 * @param Socket socket
 */
io.on('connection', (socket: Socket) => {
    console.log('[WS] Client connected.')
})

/**
 * Set application settings
 */
app.set('port', process.env.SERVER_PORT || 80)
app.set('host', process.env.SERVER_HOST || 'localhost')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

/**
 * Set application middlewares
 */
app.use(favicon(__dirname + '/public/favicon.png'))
app.use(logger('dev'))
app.use(methodOverride())
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'uwotm8'
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

/**
 * Development only
 */
if ('development' == app.get('env'))
    app.use(errorHandler());

/**
 * Get application routes
 */
app.use(routes)

/**
 * Support history mode for Vue
 */
app.use(history())

/**
 * Start server listening
 */
server.listen(app.get('port'), app.get('host'), () => console.log(`[HTTP] Web server listening on port ${app.get('port')}`))