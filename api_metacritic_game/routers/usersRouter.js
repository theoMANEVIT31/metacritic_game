const express = require('express'),
      router = express.Router(),
      usersController = require('../controllers/usersController'),
      authMiddleware = require('../middlewares/authMiddleware');


router.get('/', authMiddleware, usersController.getUsers);
router.post('/', authMiddleware, usersController.addUser);
router.put('/', authMiddleware, usersController.putUser);
router.get('/:idU', authMiddleware, usersController.getUserById);
router.delete('/:idU', authMiddleware, usersController.deleteUserById);

module.exports = router;