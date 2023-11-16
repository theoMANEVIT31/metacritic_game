const   express = require('express'),
        router = express.Router(),
        registerController = require('../controllers/registerController')

router.post('/signin', registerController.signIn)
router.post('/signup', registerController.signUp)

module.exports = router