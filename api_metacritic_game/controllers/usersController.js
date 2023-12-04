const usersService = require('../services/usersService');
const createError = require('http-errors')


exports.getUsers = async (req, res) => {
   const users = await usersService.getUsers()
   res.json({data: users})
}

exports.addUser = (req, res, next) => {
   const userCreated = usersService.addUser(req.body.idU, req.body.name)
   if (userCreated) {
      res.status(201).json({idU: userCreated.idU})
   } else {
      next(createError(400, "Error when creating this user, verify your args"))
   }
}

exports.getUserById = async (req, res, next) => {
   const user = await usersService.getUserById(req.params.idU)
   if (user) {
      res.json({data: user})
   } else {
      next(createError(404, "no user found for this idU"))
   }
}

exports.putUser = (req, res, next) => {
   const userUpdated = usersService.putUser(req.body.idU, req.body.name)
   if (userUpdated) {
      res.status(201).json({idU: userUpdated.idU})
   } else {
      next(createError(400, "Error when updating this user, verify your args"))
   }
}

exports.deleteUserById = (req, res, next) => {
   try {
      usersService.deleteUserById(req.params.idU)
      res.status(204).send()
   } catch(e) {
      next(createError(404, `The user with id '${idU}' doesn't exists, it cannot be deleted`))
   }
}