const express = require('express')

module.exports = function(server){
    //rotas abertas
    const openApi = express.Router()
    server.use('/api', openApi)
    const Employer = require('../api/employers/service')
    Employer.Employer.register(openApi, '/employers')
    openApi.get('/employers', Employer.get)

    const TimeSheets = require('../api/timeSheets/service')
    TimeSheets.TimeSheets.register(openApi, '/time-sheets')
    openApi.get('/time-sheets', TimeSheets.get)
}