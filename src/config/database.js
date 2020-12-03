const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const banco = 'mongodb+srv://dbadmin:dbadmin@estacionamento-kvdqj.gcp.mongodb.net/fazendaSantaCruz?retryWrites=true&w=majority'
module.exports = mongoose.connect(banco,{ useNewUrlParser: true, useUnifiedTopology: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório." 