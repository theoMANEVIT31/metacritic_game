var bcrypt    = require('bcrypt')
var jwt       = require('jsonwebtoken')
var waterfall = require ('async-waterfall')
var db        = require('../models/indexModel')

const EMAIL_REGEX = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
const PSEUDO_REGEX = /^[\w\-]+$/

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
  if(!EMAIL_REGEX.test(email)) return res.status(400).json({
      success: false,
      message: 'Email not valid'
    })
  if(!PSEUDO_REGEX.test(name)) return res.status(400).json({
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

exports.signIn = async (req, res) => {
  const email   = req.body.email
  const password= req.body.password

  if(!email || !password) return res.status(400).json({
    success: false,
    message: 'Email and password are required'
  })

  waterfall([
    async function(callback) {
      await db.users.findOne({where: {email: email}})
        .then(function(user) {
          callback(null, user)
        })
        .catch(function(err) {
          return res.status(500).json({
            success: false,
            error: 'An error occured during user recovery'
          })
        })
    },
    function(user, callback) {
      if(user){
        bcrypt.compare(password, user.hashedPassword, function(errBcrypt, resBcrypt) {
          callback(null, user, resBcrypt)
        })
      } else {
        return res.status(404).json({
          success: false,
          error: 'This user doesn\'t exist'
        })
      }
    },
    function(user, resBcrypt, callback) {
      if(resBcrypt){
        callback(user)
      } else {
        return res.status(401).json({
          success: false,
          error: 'Invalid password'
        })
      }
    },
  ], function(user) {
    if(user){
      require('dotenv').config();
      res.status(200).json({
        success: true,
        userId: user.id,
        token: jwt.sign({
            id: user.id,
        }, 
        process.env.JWT_SIGN_SECRET,
        {
          expiresIn: '1h'
        }
        )
      })
    } else {
      return res.status(500).json({
        success: false,
        error: 'An error occured during user\'s login'
      })
    }
  })
}