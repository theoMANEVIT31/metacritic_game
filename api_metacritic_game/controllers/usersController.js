const usersService = require('../services/usersService')
const createError = require('http-errors')


exports.getUsers = async (req, res, next) => {
   const users = await usersService.getUsers()
   if (users) {
      res.json({ data: users })
   } else {
      next(createError(404, "no user found"))
   }
}

exports.addUser = async (req, res, next) => {
   const userCreated = await usersService.addUser(req.body.pseudo, req.body.hashedPassword, req.body.email)
   if (userCreated) {
      res.status(201).send()
   } else {
      next(createError(400, "Error when creating this user, verify your args"))
   }
}

exports.getUserById = async (req, res, next) => {
   const user = await usersService.getUserById(req.params.idU)
   if (user) {
      res.json({ data: user })
   } else {
      next(createError(404, "no user found for this idU"))
   }
}

exports.putUser = async (req, res, next) => {
   const userUpdated = await usersService.putUser(req.body.idU, req.body.pseudo, req.body.hashedPassword, req.body.email)
   if (userUpdated) {
      res.status(201).send()
   } else {
      next(createError(400, "Error when updating this user, verify your args"))
   }
}

exports.deleteUserById = async (req, res, next) => {
   const userDeleted = await usersService.deleteUserById(req.params.idU)
   if (userDeleted) {
      res.status(204).send()
   } else {
      next(createError(404, `The user with id '${idU}' doesn't exists, it cannot be deleted`))
   }
}
