const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

let users = []

exports.signUp = (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = ({
                email: req.body.email,
                password: hash
            })
            if(users.push(user)){
                res.status(201).json({message: "New user created !"})
            } else {
                res.status(400).json({error})
            }
            // user.save()
            //     .then(() => res.status(201).json({message: "New user created !"}))
            //     .catch(error => res.status(400).json({error}))
        }).catch(error => res.status(500).json({error}))
}

exports.signIn = async (req, res) => {
    
}