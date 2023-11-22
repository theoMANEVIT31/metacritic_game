const criticsEditorsService = require('../services/criticsEditors');
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
