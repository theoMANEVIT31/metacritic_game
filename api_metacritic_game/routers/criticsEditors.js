const express = require('express'),
    router = express.Router(),
    criticsEditorsController = require('../controllers/criticsEditors');


router.get('/', criticsEditorsController.getCriticsEditors);
router.post('/', criticsEditorsController.addCriticsEditor);

router.get('/:idC', criticsEditorsController.getCriticsEditorById);


module.exports = router;