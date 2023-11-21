const express = require('express'),
    router = express.Router(),
    criticsEditorsController = require('../controllers/criticsEditors');


router.get('/', criticsEditorsController.getCriticsEditors);
router.post('/', criticsEditorsController.addCriticsEditors);

router.get('/:idC', criticsEditorsController.getCriticsEditorById);
router.delete('/:idC', criticsEditorsController.deleteCriticsEditorById);
router.put('/:idC', criticsEditorsController.putCriticsEditorById);


module.exports = router;