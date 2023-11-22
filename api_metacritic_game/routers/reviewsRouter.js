const express = require('express'),
    router = express.Router(),
    reviewsController = require('../controllers/reviewsController');


router.get('/', reviewsController.getReviews);
router.post('/', reviewsController.addReview);

router.get('/:idR', reviewsController.getReviewById);


module.exports = router;