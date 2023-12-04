const editorsService = require('../services/editorsService');
const createError = require('http-errors')


exports.getEditors = async (req, res) => {
   const editors = await editorsService.getEditors()
   res.json({data: editors})
}

exports.addEditor = (req, res, next) => {
   const editorCreated = editorsService.addEditor(req.body.idE, req.body.pseudo, req.body.email, req.body.hashedPassword)
   if (editorCreated) {
      res.status(201).json({idE: editorCreated.idE})
   } else {
      next(createError(400, "Error when creating this editor, verify your args"))
   }
}

exports.getEditorById = async (req, res, next) => {
   const editor = await editorsService.getEditorById(req.params.idE)
   if (editor) {
      res.json({data: editor})
   } else {
      next(createError(404, "no editor found for this idE"))
   }
}

exports.putEditor = (req, res, next) => {
   const editorUpdated = editorsService.putEditor(req.body.idE, req.body.pseudo, req.body.email, req.body.hashedPassword)
   if (editorUpdated) {
      res.status(201).json({idE: editorUpdated.idE})
   } else {
      next(createError(400, "Error when updating this editor, verify your args"))
   }
}

exports.deleteEditorById = (req, res, next) => {
   try {
      editorsService.deleteEditorById(req.params.idE)
      res.status(204).send()
   } catch(e) {
      next(createError(404, `The editor with id '${idE}' doesn't exists, it cannot be deleted`))
   }
}
