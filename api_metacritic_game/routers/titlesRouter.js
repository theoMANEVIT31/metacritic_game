const express = require('express'),
    router = express.Router(),
    titlesController = require('../controllers/titlesController')


router.get('/', titlesController.getAllTitles);
router.get('/:idT', titlesController.getTitleById);

module.exports = router;