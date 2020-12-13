const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const banco = 'mongodb+srv://api:K2LqgCTEog1usgaT@cluster0.j45ot.mongodb.net/painel?retryWrites=true&w=majority'
module.exports = mongoose.connect(banco,{ useNewUrlParser: true, useUnifiedTopology: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório." 