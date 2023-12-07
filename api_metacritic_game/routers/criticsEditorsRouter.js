const express = require('express'),
    router = express.Router(),
    criticsEditorsController = require('../controllers/criticsEditorsController'),
    authMiddleware = require('../middlewares/authMiddleware');


router.get('/', criticsEditorsController.getCriticsEditors);
router.post('/', authMiddleware, criticsEditorsController.addCriticsEditor);

router.get('/:idC', criticsEditorsController.getCriticsEditorById);


module.exports = router;