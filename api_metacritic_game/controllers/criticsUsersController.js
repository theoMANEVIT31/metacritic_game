const criticsUsersService = require('../services/criticsUsersService');
const createError = require('http-errors')


exports.getCriticsUsers = async (req, res) => {
   const criticsUsers = await criticsUsersService.getCriticsUsers()
   res.json({data: criticsUsers})
}

exports.addCriticsUser = (req, res, next) => {
   const criticsUserCreated = criticsUsersService.addCriticsUser(req.body.idR, req.body.idU, req.body.comment, req.body.noteU)
   if (criticsUserCreated) {
      res.status(201).json({idR: criticsUserCreated.idR, idU: criticsUserCreated.idU})
   } else {
      next(createError(400, "Error when creating this criticsUser, verify your args"))
   }
}

exports.getCriticsUserById = async (req, res, next) => {
   const criticsUser = await criticsUsersService.getCriticsUserById(req.params.idR, req.params.idU)
   if (criticsUser) {
      res.json({data: criticsUser})
   } else {
      next(createError(404, "no criticsUser found for this idR and idU"))
   }
}

exports.putCriticsUser = (req, res, next) => {
   const criticsUserUpdated = criticsUsersService.putCriticsUser(req.body.idR, req.body.idU, req.body.comment, req.body.noteU)
   if (criticsUserUpdated) {
      res.status(201).json({idR: criticsUserUpdated.idR, idU: criticsUserUpdated.idU})
   } else {
      next(createError(400, "Error when updating this criticsUser, verify your args"))
   }
}

exports.deleteCriticsUserById = (req, res, next) => {
   try {
      criticsUsersService.deleteCriticsUserById(req.params.idR, req.params.idU)
      res.status(204).send()
   } catch(e) {
      next(createError(404, `The criticsUser with idU '${idU}' and/or idR '${idR}'  doesn't exists, it cannot be deleted`))
   }
}