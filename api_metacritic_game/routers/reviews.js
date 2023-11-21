const express = require('express'),
    router = express.Router(),
    reviewsController = require('../controllers/reviews');


router.get('/', reviewsController.getEditors);
router.post('/', reviewsController.addEditors);

router.get('/:idR', reviewsController.getEditorById);
router.delete('/:idR', reviewsController.deleteEditorById);
router.put('/:idR', reviewsController.putEditorById);


module.exports = router;