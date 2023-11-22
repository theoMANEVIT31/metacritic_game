const express = require('express'),
    router = express.Router(),
    editorsController = require('../controllers/editorsController');


router.get('/', editorsController.getEditors);
router.post('/', editorsController.addEditor);

router.get('/:idE', editorsController.getEditorById);


module.exports = router;