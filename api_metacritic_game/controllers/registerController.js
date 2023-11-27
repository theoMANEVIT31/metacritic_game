var bcrypt  = require('bcrypt')
// var jwt     = require('jsonwebtoken')
const db    = require('../models/indexModel')


exports.signUp = (req, res) => {
    bcrypt.hash(req.body.password, 10)  // 10 = saltRound
      .then(hash => {
        // console.log(new users())
        db.users.create({
            name: req.body.name,
            email: req.body.email,
            hashedPassword: req.body.password
        })
        // const user = new users({
        //     // idU: 1,
        //     name: req.body.name,
        //     email: req.body.email,
        //     hashedPassword: req.body.password
        // })
        // console.log(user)
        // user.save()
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