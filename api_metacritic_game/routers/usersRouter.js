const express = require('express'),
      router = express.Router(),
      usersController = require('../controllers/usersController');


router.get('/', usersController.getUsers);
router.post('/', usersController.addUser);
router.get('/:idU', usersController.getUserById);


module.exports = router;