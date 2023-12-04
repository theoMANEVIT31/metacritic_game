const express = require('express'),
    router = express.Router(),
    criticsEditorsController = require('../controllers/criticsEditorsController');


router.get('/', criticsEditorsController.getCriticsEditors);
router.post('/', criticsEditorsController.addCriticsEditor);
router.put('/', criticsEditorsController.putCriticsEditor);
router.get('/:idC', criticsEditorsController.getCriticsEditorById);
router.delete('/:idC', criticsEditorsController.deleteCriticsEditorById);

module.exports = router;