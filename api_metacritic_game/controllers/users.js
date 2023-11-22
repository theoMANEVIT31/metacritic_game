const usersService = require('../services/users');
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
