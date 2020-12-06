const restful = require('node-restful')
const mongoose = restful.mongoose

const timeSheets = new mongoose.Schema({
    regarding:{type: String, require: true},
    // day_week:{type: String, require: true},
    days:{type: Array, require: false},
    id_employer: {type: String, require: true},
},
    {timestamps: {}}
)

module.exports = restful.model('TimeSheets', timeSheets)