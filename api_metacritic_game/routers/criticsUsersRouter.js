const express = require('express'),
    router = express.Router(),
    criticsUsersController = require('../controllers/criticsUsersController');


router.get('/', criticsUsersController.getCriticsUsers);
router.post('/', criticsUsersController.addCriticsUser);
router.put('/', criticsUsersController.putCriticsUser);
router.get('/:idU/:idR', criticsUsersController.getCriticsUserById);
router.delete('/:idU/:idR', criticsUsersController.deleteCriticsUserById);

module.exports = router;