const criticsUsersService = require('../services/criticsUsersService');
const createError = require('http-errors')


exports.getCriticsUsers = async (req, res) => {
   const criticsUsers = await criticsUsersService.getCriticsUsers()
   res.json({data: criticsUsers})
}

exports.addCriticsUser = (req, res, next) => {
   const criticsUserCreated = criticsUsersService.addCriticsUser(req.body.idReview, req.body.idUser, req.body.comment, req.body.noteU)
   if (criticsUserCreated) {
      res.status(201).json({idReview: criticsUserCreated.idReview, idUser: criticsUserCreated.idUser})
   } else {
      next(createError(400, "Error when creating this criticsUser, verify your args"))
   }
}

exports.getCriticsUserById = async (req, res, next) => {
   const criticsUser = await criticsUsersService.getCriticsUserById(req.params.idReview, req.params.idUser)
   if (criticsUser) {
      res.json({data: criticsUser})
   } else {
      next(createError(404, "no criticsUser found for this idReview and idUser"))
   }
}

exports.putCriticsUser = (req, res, next) => {
   const criticsUserUpdated = criticsUsersService.putCriticsUser(req.body.idReview, req.body.idUser, req.body.comment, req.body.noteU, req.body.date)
   if (criticsUserUpdated) {
      res.status(201).json({idReview: criticsUserUpdated.idReview, idUser: criticsUserUpdated.idUser})
   } else {
      next(createError(400, "Error when updating this criticsUser, verify your args"))
   }
}

exports.deleteCriticsUserById = (req, res, next) => {
   try {
      criticsUsersService.deleteCriticsUserById(req.params.idReview, req.params.idUser)
      res.status(204).send()
   } catch(e) {
      next(createError(404, `The criticsUser with idUser '${idUser}' and/or idReview '${idReview}'  doesn't exists, it cannot be deleted`))
   }
}