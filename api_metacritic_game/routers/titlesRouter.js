const express = require('express'),
    router = express.Router(),
    titlesController = require('../controllers/titlesController')


router.get('/', titlesController.getAllTitles);
router.get('/:nameT', titlesController.getTitleByName);

module.exports = router;