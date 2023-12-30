const criticsEditorsService = require('../services/criticsEditorsService')
const createError = require('http-errors')


exports.getCriticsEditors = async (req, res, next) => {
   const criticsEditors = await criticsEditorsService.getCriticsEditors()
   if (criticsEditors) {
      res.json({ data: criticsEditors })
   } else {
      next(createError(404, "no criticsEditors found"))
   }
}

exports.addCriticsEditor = async (req, res, next) => {
   const criticsEditorCreated = await criticsEditorsService.addCriticsEditor(req.body.evaluation, req.body.noteE, req.body.date, req.body.idE)
   if (criticsEditorCreated) {
      res.status(201).send()
   } else {
      next(createError(400, "Error when creating this criticsEditor, verify your args"))
   }
}

exports.getCriticsEditorById = async (req, res, next) => {
   const criticsEditor = await criticsEditorsService.getCriticsEditorById(req.params.idC)
   if (criticsEditor) {
      res.json({ data: criticsEditor })
   } else {
      next(createError(404, "no criticsEditor found for this idC"))
   }
}

exports.putCriticsEditor = async (req, res, next) => {
   const criticsEditorUpdated = await criticsEditorsService.putCriticsEditor(req.body.idC, req.body.evaluation, req.body.noteE, req.body.date, req.body.idE)
   if (criticsEditorUpdated) {
      res.status(201).send()
   } else {
      next(createError(400, "Error when updating this criticsEditor, verify your args"))
   }
}

exports.deleteCriticsEditorById = async (req, res, next) => {
   const criticsEditorDeleted = await criticsEditorsService.deleteCriticsEditorById(req.params.idC)
   if (criticsEditorDeleted) {
      res.status(204).send()
   } else {
      next(createError(400, `The criticsEditor with id '${idC}' doesn't exists, it cannot be deleted`))
   }
}
