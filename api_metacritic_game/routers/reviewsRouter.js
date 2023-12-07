const express = require('express'),
    router = express.Router(),
    reviewsController = require('../controllers/reviewsController'),
    authMiddleware = require('../middlewares/authMiddleware');

router.get('/', reviewsController.getReviews)
router.post('/', authMiddleware, reviewsController.addReview)

router.get('/:idR', reviewsController.getReviewById)

module.exports = router;