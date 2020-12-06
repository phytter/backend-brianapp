
const User = require('./user')
const aqp = require('api-query-params')

const _ = require('lodash')
const bcrypt = require('bcrypt')
//const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z]).{6,20})/

const sendErrorsFromDB = (res, dbErrors) => {
  const errors = []
  _.forIn(dbErrors.errors, error => errors.push(error.message))
  return res.status(400).json({ errors })
}

const changePass = (req, res, next) => {
    const email = req.body.email || ''
    const password = req.body.password || ''
    const confirmPassword = req.body.confirm_password || ''

    // if (!password.match(passwordRegex)) {
    //   return res.status(400).send({
    //     errors: [
    //       "Senha precisar ter: letras, números e tamanho entre 6 - 20."]
    //   })
    // }
    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(password, salt)

    if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
      return res.status(400).send({ errors: ['Senhas não conferem.'] })
    }

    User.findOne({ email }, (err, user) => {
      if (err) {
        return sendErrorsFromDB(res, err)
      } else {
        user.password = passwordHash
        user.save(err => {
          if (err) {
              return sendErrorsFromDB(res, err)
          } else {
            return res.json('Senha alterada com sucesso!')
          }
      })        
      }
    })
}


module.exports = { changePass}