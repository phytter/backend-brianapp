const restful = require('node-restful')
const mongoose = restful.mongoose

const employerSchema = new mongoose.Schema({
    name:{type: String, require: true},
    cpf:{type: String, require: false},
},
    {timestamps: {}}
)

module.exports = restful.model('Employer',employerSchema)