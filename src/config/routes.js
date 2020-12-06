const express = require('express')

module.exports = function(server){
    //rotas abertas

    // const protectedApi = express.Router()
    // const auth = require('./auth')    
    
    // server.use('/api',protectedApi)
    // protectedApi.use(auth)


    const openApi = express.Router()
    server.use('/api', openApi)
    const Employer = require('../api/employers/service')
    Employer.Employer.register(openApi, '/employers')
    openApi.get('/employers/getall', Employer.get)

    const TimeSheets = require('../api/timeSheets/service')
    TimeSheets.TimeSheets.register(openApi, '/time-sheets')
    openApi.get('/time-sheets/getall', TimeSheets.getAll)

    // const AuthService = require('../api/user/auth')
    // openApi.post('/login', AuthService.login)
    // openApi.post('/signup', AuthService.signup)
    // openApi.post('/validateToken', AuthService.validateToken)
}