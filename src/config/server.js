const port = 3003

const bodyParser = require('body-parser')
const allowCors = require('./cors')
const express = require('express')
const server = express()

server.use(allowCors)
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.listen(port,'0.0.0.0')

module.exports = server