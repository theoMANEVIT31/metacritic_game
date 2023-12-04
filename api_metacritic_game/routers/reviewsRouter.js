const express = require('express'),
    router = express.Router(),
    reviewsController = require('../controllers/reviewsController')


router.get('/', reviewsController.getReviews);
router.post('/', reviewsController.addReview);
router.put('/', reviewsController.putReview);
router.get('/:idR', reviewsController.getReviewById);
router.delete('/:idR', reviewsController.deleteReviewById);

module.exports = router;