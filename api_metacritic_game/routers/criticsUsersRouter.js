const express = require('express'),
    router = express.Router(),
    criticsUsersController = require('../controllers/criticsUsersController'),
    authMiddleware = require('../middlewares/authMiddleware')


router.get('/', criticsUsersController.getCriticsUsers)
router.post('/', authMiddleware, criticsUsersController.addCriticsUser)
router.put('/', authMiddleware, criticsUsersController.putCriticsUser)
router.get('/:idU/:idR', criticsUsersController.getCriticsUserById)
router.delete('/:idU/:idR', authMiddleware, criticsUsersController.deleteCriticsUserById)


module.exports = router
