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
      res.status(201).json({id: userCreated.id})
   } else {
      next(createError(400, "Error when creating this user, verify your args"))
   }
}

exports.getUserById = async (req, res, next) => {
   const user = await usersService.getUserById(req.params.id)
   if (user) {
      res.json({ data: user })
   } else {
      next(createError(404, "no user found for this id"))
   }
}

exports.putUser = (req, res, next) => {
   const userUpdated = usersService.putUser(req.body.id, req.body.pseudo, req.body.hashedPassword, req.body.email)
   if (userUpdated) {
      res.status(201).json({id: userUpdated.id})
   } else {
      next(createError(400, "Error when updating this user, verify your args"))
   }
}

exports.updateRoleByUserId = async (req, res, next) => {
   if(!req.body || !req.body.role){
      res.status(400).json({
         success: false,
         message: "Bad Request, verify your args"
      })
   } else {
      if(! await usersService.getUserById(req.params.id)){
         res.status(400).json({
            success: false,
            message: "This user doesn't exist"
         }).send()
         return
      }
      const userUpdated = usersService.updateRoleByUserId(req.params.id, req.body.role)
      if (userUpdated) {
         res.status(200).json({
            success: true,
            message: "User updated",
            user: {
               id: userUpdated.id,
               role: userUpdated.roles
            }
         })
      } else {
         next(createError(400, "Error"))
      }
   }
}

exports.deleteUserById = (req, res, next) => {
   try {
      usersService.deleteUserById(req.params.id)
      res.status(204).send()
   } catch(e) {
      next(createError(404, `The user with id '${id}' doesn't exists, it cannot be deleted`))
   }
}
