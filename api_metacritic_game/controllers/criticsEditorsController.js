const criticsEditorsService = require('../services/criticsEditorsService');
const createError = require('http-errors')


exports.getCriticsEditors = async (req, res) => {
   const criticsEditors = await criticsEditorsService.getCriticsEditors()
   res.json({data: criticsEditors})
}

exports.addCriticsEditor = (req, res, next) => {
   const criticsEditorCreated = criticsEditorsService.addCriticsEditor(req.body.idC, req.body.description, req.body.idE)
   if (criticsEditorCreated) {
      res.status(201).json({idC: criticsEditorCreated.idC})
   } else {
      next(createError(400, "Error when creating this criticsEditor, verify your args"))
   }
}

exports.getCriticsEditorById = async (req, res, next) => {
   const criticsEditor = await criticsEditorsService.getCriticsEditorById(req.params.idC)
   if (criticsEditor) {
      res.json({data: criticsEditor})
   } else {
      next(createError(404, "no criticsEditor found for this idC"))
   }
}

exports.putCriticsEditor = (req, res, next) => {
   const criticsEditorUpdated = criticsEditorsService.putCriticsEditor(req.body.idC, req.body.description, req.body.idE)
   if (criticsEditorUpdated) {
      res.status(201).json({idC: criticsEditorUpdated.idC})
   } else {
      next(createError(400, "Error when updating this criticsEditor, verify your args"))
   }
}

exports.deleteCriticsEditorById = (req, res, next) => {
   try {
      criticsEditorsService.deleteCriticsEditorById(req.params.idC)
      res.status(204).send()
   } catch(e) {
      next(createError(404, `The criticsEditor with id '${idC}' doesn't exists, it cannot be deleted`))
   }
}
