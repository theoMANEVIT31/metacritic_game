const express = require('express'),
    router = express.Router(),
    criticsUsersController = require('../controllers/criticsUsersController'),
    authMiddleware = require('../middlewares/authMiddleware');


router.get('/', criticsUsersController.getCriticsUsers);
router.post('/', authMiddleware, criticsUsersController.addCriticsUser);

router.get('/:idU/:idR', criticsUsersController.getCriticsUserById);


module.exports = router;