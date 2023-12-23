const express = require('express'),
    router = express.Router(),
    usersController = require('../controllers/usersController'),
    authMiddleware = require('../middlewares/authMiddleware');


router.get('/', usersController.getUsers);
router.post('/', authMiddleware, usersController.addUser);
router.put('/', authMiddleware, usersController.putUser);
router.get('/:idU', usersController.getUserById);
router.delete('/:idU', authMiddleware, usersController.deleteUserById);


module.exports = router;