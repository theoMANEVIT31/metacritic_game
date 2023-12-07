const express = require('express'),
      router = express.Router(),
      usersController = require('../controllers/usersController'),
      authMiddleware = require('../middlewares/authMiddleware');


router.get('/', authMiddleware, usersController.getUsers);
router.post('/', authMiddleware, usersController.addUser);
router.get('/:idU', authMiddleware, usersController.getUserById);

module.exports = router;