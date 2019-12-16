const port = process.env.PORT || 3001;
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const queryParser = require('express-query-int')
const validator = require('express-validator')
const helmet = require('helmet')
const http = require('http')

const allowCors = require('./cors')
const authenticate = require('./authenticate')
const connection = require('./databaseMiddleware')
const db = require('./databaseFactory')

app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(validator())
app.use(allowCors)
app.use(queryParser())
app.use('/api', authenticate)
app.use(connection(db))

const server = http.createServer(app)

server.listen(port, function () {
	console.log(`BACKEND is running on port ${port}.`)
})


module.exports = {app, server}