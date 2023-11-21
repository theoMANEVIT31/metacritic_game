const express = require('express'),
      router = express.Router();

const editorsService = require('../services/editors');

router.get('/', async (req, res) => {
   const editors = await editorsService.getEditors();
   res.json({success: true, data: editors});
});

router.post('/', (req, res) => {
   try {
    editorsService.addEditors(req.body.idE, req.body.name);
      res.status(201).json({success: true, message: `Editor has been added`});
   } catch (e) {
      res.status(400).json({success: false, message: 'Editor has not been added', error: e.message});
   }
});

/*
router.put('/:idE', (req, res) => {
    editorsService.putEditorById(req.params.idE);
    res.json({success: true, message: 'Editor has been modified'});
 });

router.delete('/:idE', (req, res) => {
   editorsService.deleteEditorById(req.params.idE);
   res.json({success: true, message: 'Editor has been deleted'});
});
*/

router.get('/:idE', (req, res) => {
    const editor = editorsService.getEditorById(req.params.idE);
    if (editor) {
       res.json({success: true, data: editor});
    } else {
       res.status(404).json({success: false, message: 'Editor not found for this id'});
    }
 });

module.exports = router;