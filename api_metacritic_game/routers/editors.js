const express = require('express'),
    router = express.Router(),
    editorsController = require('../controllers/editors');


router.get('/', editorsController.getEditors);
router.post('/', editorsController.addEditors);

router.put('/:idE', editorsController.putEditorById);
router.delete('/:idE', editorsController.deleteEditorById);
router.get('/:idE', editorsController.getEditorById);


module.exports = router;