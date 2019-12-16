require('dotenv').config()

const server  = require('./config/server')
const errorHandler = require('./config/error')
const parseData = require('./config/data')

require('./config/routes')(server)

server.app.use(parseData)
server.app.use(errorHandler)