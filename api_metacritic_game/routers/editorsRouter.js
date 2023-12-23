const express = require('express'),
    router = express.Router(),
    editorsController = require('../controllers/editorsController'),
    authMiddleware = require('../middlewares/authMiddleware');


router.get('/', editorsController.getEditors);
router.post('/', authMiddleware, editorsController.addEditor);
router.put('/', authMiddleware, editorsController.putEditor);
router.get('/:idE', editorsController.getEditorById);
router.delete('/:idE', authMiddleware, editorsController.deleteEditorById);


module.exports = router;