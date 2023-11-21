const express = require('express'),
      router = express.Router();

const reviewsService = require('../services/reviews');

router.get('/', async (req, res) => {
   const reviews = await reviewsService.getReviews();
   res.json({success: true, data: reviews});
});

router.post('/', (req, res) => {
   try {
    reviewsService.addReviews(req.body.idR, req.body.noteE, req.body.noteU, req.body.description, req.body.titre, req.body.date, req.body.idC);
      res.status(201).json({success: true, message: `Review has been added`});
   } catch (e) {
      res.status(400).json({success: false, message: 'Review has not been added', error: e.message});
   }
});

/*
router.put('/:idU', (req, res) => {
    reviewsService.putReviewById(req.params.idU);
    res.json({success: true, message: 'Review has been modified'});
 });

router.delete('/:idU', (req, res) => {
   reviewsService.deleteReviewById(req.params.idU);
   res.json({success: true, message: 'Review has been deleted'});
});
*/

router.get('/:idU', (req, res) => {
    const review = reviewsService.getReviewById(req.params.idU);
    if (review) {
       res.json({success: true, data: review});
    } else {
       res.status(404).json({success: false, message: 'Review not found for this id'});
    }
 });

module.exports = router;