const express = require('express'),
    router = express.Router(),
    editorsController = require('../controllers/editorsController'),
    authMiddleware = require('../middlewares/authMiddleware');


router.get('/', authMiddleware, editorsController.getEditors);
router.post('/', authMiddleware, editorsController.addEditor);

router.get('/:idE', authMiddleware, editorsController.getEditorById);


module.exports = router;