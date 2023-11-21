const express = require('express'),
   router = express.Router();

const criticsEditorsService = require('../services/criticsEditors');

router.get('/', async (req, res) => {
   const criticsEditors = await criticsEditorsService.getCriticsEditors();
   res.json({ success: true, data: criticsEditors });
});

router.post('/', (req, res) => {
   try {
      criticsEditorsService.addCriticsEditors(req.body.idC, req.body.description, req.body.idE);
      res.status(201).json({ success: true, message: `CriticsEditor has been added` });
   } catch (e) {
      res.status(400).json({ success: false, message: 'CriticsEditor has not been added', error: e.message });
   }
});

/*
router.put('/:idC', (req, res) => {
    criticsEditorsService.putCriticsEditorById(req.params.idC);
    res.json({success: true, message: 'CriticsEditor has been modified'});
 });
*/

router.delete('/:idC', (req, res) => {
   criticsEditorsService.deleteCriticsEditorById(req.params.idC);
   res.json({ success: true, message: 'CriticsEditor has been deleted' });
});

router.get('/:idC', (req, res) => {
   const criticsEditor = criticsEditorsService.getCriticsEditorById(req.params.idC);
   if (criticsEditor) {
      res.json({ success: true, data: criticsEditor });
   } else {
      res.status(404).json({ success: false, message: 'CriticsEditor not found for this id' });
   }
});

module.exports = router;