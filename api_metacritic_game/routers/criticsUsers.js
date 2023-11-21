const express = require('express'),
    router = express.Router(),
    criticsUsersController = require('../controllers/criticsUsers');


router.get('/', criticsUsersController.getCriticsUsers);
router.post('/', criticsUsersController.addCriticsUsers);

router.get('/:idU/:idR', criticsUsersController.getCriticsUserById);
router.delete('/:idU/:idR', criticsUsersController.deleteCriticsUserById);
router.put('/:idU/:idR', criticsUsersController.putCriticsUserById);


module.exports = router;