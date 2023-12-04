const express = require('express'),
    router = express.Router(),
    editorsController = require('../controllers/editorsController');


router.get('/', editorsController.getEditors);
router.post('/', editorsController.addEditor);
router.put('/', editorsController.putEditor);
router.get('/:idE', editorsController.getEditorById);
router.delete('/:idE', editorsController.deleteEditorById);

module.exports = router;