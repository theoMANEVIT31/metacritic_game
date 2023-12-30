const express = require('express'),
    router = express.Router(),
    reviewsController = require('../controllers/reviewsController'),
    authMiddleware = require('../middlewares/authMiddleware')

    
router.get('/', reviewsController.getReviews)
router.post('/', authMiddleware, reviewsController.addReview)
router.put('/', authMiddleware, reviewsController.putReview)
router.get('/:idR', reviewsController.getReviewById)
router.delete('/:idR', authMiddleware, reviewsController.deleteReviewById)


module.exports = router
