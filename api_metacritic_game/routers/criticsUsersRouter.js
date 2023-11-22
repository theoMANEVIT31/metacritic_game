const express = require('express'),
    router = express.Router(),
    criticsUsersController = require('../controllers/criticsUsersController');


router.get('/', criticsUsersController.getCriticsUsers);
router.post('/', criticsUsersController.addCriticsUser);

router.get('/:idU/:idR', criticsUsersController.getCriticsUserById);


module.exports = router;