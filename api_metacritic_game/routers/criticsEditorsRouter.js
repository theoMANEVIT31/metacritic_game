const express = require('express'),
    router = express.Router(),
    criticsEditorsController = require('../controllers/criticsEditorsController');


router.get('/', criticsEditorsController.getCriticsEditors);
router.post('/', criticsEditorsController.addCriticsEditor);

router.get('/:idC', criticsEditorsController.getCriticsEditorById);


module.exports = router;