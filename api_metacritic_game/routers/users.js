const express = require('express'),
      router = express.Router(),
      usersController = require('../controllers/users');


router.get('/', usersController.getUsers);
router.post('/', usersController.addUser);
router.get('/:idU', usersController.getUserById);


module.exports = router;