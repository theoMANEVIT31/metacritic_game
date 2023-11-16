const   express = require('express'),
        router = express.Router(),
        usersController = require('../controllers/usersController')

router.get('/', usersController.getUsers)
// router.post('/', usersController.addUser)

router.get('/:id', usersController.getOneUser)
// router.delete('/:id', usersController.deleteOneUser)
// router.put('/:id', usersController.updateOneUser)

module.exports = router