const criticsUsersService = require('../services/criticsUsersService');
const createError = require('http-errors')


exports.getCriticsUsers = async (req, res, next) => {
   const criticsUsers = await criticsUsersService.getCriticsUsers()
   if (criticsUsers) {
      res.json({ data: criticsUsers })
   } else {
      next(createError(404, "no criticsUser found"))
   }
}

exports.addCriticsUser = async (req, res, next) => {
   const criticsUserCreated = await criticsUsersService.addCriticsUser(req.body.idR, req.body.idU, req.body.comment, req.body.noteU)
   if (criticsUserCreated) {
      res.status(201).send()
   } else {
      next(createError(400, "Error when creating this criticsUser, verify your args"))
   }
}

exports.getCriticsUserById = async (req, res, next) => {
   const criticsUser = await criticsUsersService.getCriticsUserById(req.params.idR, req.params.idU)
   if (criticsUser) {
      res.json({ data: criticsUser })
   } else {
      next(createError(404, "no criticsUser found for this idR and idU"))
   }
}

exports.putCriticsUser = async (req, res, next) => {
   const criticsUserUpdated = await criticsUsersService.putCriticsUser(req.body.idR, req.body.idU, req.body.comment, req.body.noteU, req.body.date)
   if (criticsUserUpdated) {
      res.status(201).send()
   } else {
      next(createError(400, "Error when updating this criticsUser, verify your args"))
   }
}

exports.deleteCriticsUserById = async (req, res, next) => {
   const criticsUserDeleted = await criticsUsersService.deleteCriticsUserById(req.params.idR, req.params.idU)
   if (criticsUserDeleted) {
      res.status(204).send()
   } else {
      next(createError(400, `The criticsUser with idR '${idR}' and/or idU '${idU}' doesn't exists, it cannot be deleted`))
   }
}