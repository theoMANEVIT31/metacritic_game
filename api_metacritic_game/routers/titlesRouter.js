const express = require('express'),
    router = express.Router(),
    titlesController = require('../controllers/titlesController')


router.get('/', titlesController.getAllTitles);

module.exports = router;