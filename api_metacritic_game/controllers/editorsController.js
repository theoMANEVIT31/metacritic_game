const editorsService = require('../services/editorsService')
const createError = require('http-errors')


exports.getEditors = async (req, res, next) => {
   const editors = await editorsService.getEditors()
   if (editors) {
      res.json({ data: editors })
   } else {
      next(createError(404, "no editor found"))
   }
}

exports.addEditor = async (req, res, next) => {
   const editorCreated = await editorsService.addEditor(req.body.pseudo, req.body.email, req.body.hashedPassword)
   if (editorCreated) {
      res.status(201).send()
   } else {
      next(createError(400, "Error when creating this editor, verify your args"))
   }
}

exports.getEditorById = async (req, res, next) => {
   const editor = await editorsService.getEditorById(req.params.idE)
   if (editor) {
      res.json({ data: editor })
   } else {
      next(createError(404, "no editor found for this idE"))
   }
}

exports.putEditor = async (req, res, next) => {
   const editorUpdated = await editorsService.putEditor(req.body.idE, req.body.pseudo, req.body.email, req.body.hashedPassword)
   if (editorUpdated) {
      res.status(201).send()
   } else {
      next(createError(400, "Error when updating this editor, verify your args"))
   }
}

exports.deleteEditorById = async (req, res, next) => {
   const editorDeleted = await editorsService.deleteEditorById(req.params.idE)
   if (editorDeleted) {
      res.status(204).send()
   } else {
      next(createError(400, "Error when updating this editor, verify your args"))
   }
}
