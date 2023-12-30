const express = require('express'),
    router = express.Router(),
    criticsEditorsController = require('../controllers/criticsEditorsController'),
    authMiddleware = require('../middlewares/authMiddleware')


router.get('/', criticsEditorsController.getCriticsEditors)
router.post('/', authMiddleware, criticsEditorsController.addCriticsEditor)
router.put('/', authMiddleware, criticsEditorsController.putCriticsEditor)
router.get('/:idC', criticsEditorsController.getCriticsEditorById)
router.delete('/:idC', authMiddleware, criticsEditorsController.deleteCriticsEditorById)


module.exports = router
