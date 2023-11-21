const express = require('express'),
    router = express.Router(),
    usersController = require('../controllers/users');


router.get('/', usersController.getUsers);
router.post('/', usersController.addUsers);

router.put('/:idU', usersController.putUserById);
router.delete('/:idU', usersController.deleteUserById);
router.get('/:idU', usersController.getUserById);


module.exports = router;