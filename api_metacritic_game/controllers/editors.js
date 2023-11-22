const editorsService = require('../services/editors');
const createError = require('http-errors')


exports.getEditors = async (req, res) => {
   const editors = await editorsService.getEditors()
   res.json({data: editors})
}

exports.addEditor = (req, res, next) => {
   const editorCreated = editorsService.addEditor(req.body.idE, req.body.name)
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
