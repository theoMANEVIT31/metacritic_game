var bcrypt  = require('bcrypt')
// var jwt     = require('jsonwebtoken')
const db    = require('../models/indexModel')
const regexEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
const regexPseudo = /^[\w\-]+$/

exports.signUp = async (req, res) => {
  const email   = req.body.email
  const password= req.body.password
  const name    = req.body.name

  if(!email || !password || !name) return res.status(400).json({
      success: false,
      message: 'Name, email and password are required'
    })
  if(await db.users.findOne({where: {email: email}}))return res.status(400).json({
      success: false,
      message: 'This user already have an account'
    })
  if(!regexEmail.test(email)) return res.status(400).json({
      success: false,
      message: 'Email not valid'
    })
  if(!regexPseudo.test(name)) return res.status(400).json({
      success: false,
      message: 'Name can contains only alphanumeric character and \'_\' and \'-\''
    })
  

  bcrypt.hash(password, 10)  // 10 = saltRound
    .then(hash => {
      db.users.create({
          name: name,
          email: email,
          hashedPassword: hash
      })
        .then(() => res.status(201).json({
          message: 'User created !'
      }))
        .catch(error => res.status(400).json({
          error: 'An error occured during user\'s creation !'
      }))
    })
    .catch(error => res.status(500).json({
      error: 'An error occured during hashing password !'
    }))
}

exports.signIn = (req, res) => {
    
}