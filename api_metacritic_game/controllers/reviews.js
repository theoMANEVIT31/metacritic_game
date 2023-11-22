const reviewsService = require('../services/reviews');
const createError = require('http-errors')

exports.getReviews = async (req, res) => {
   const reviews = await reviewsService.getReviews()
   res.json({data: reviews})
}

exports.addReview = (req, res, next) => {
   const reviewCreated = reviewsService.addReview(req.body.idR, req.body.noteE, req.body.noteU, req.body.description, req.body.titre, req.body.date, req.body.idC)
   if (reviewCreated) {
      res.status(201).json({idR: reviewCreated.idR})
   } else {
      next(createError(400, "Error when creating this review, verify your args"))
   }
}

exports.getReviewById = async (req, res, next) => {
   const review = await reviewsService.getReviewById(req.params.idR)
   if (review) {
      res.json({data: review})
   } else {
      next(createError(404, "no review found for this idR"))
   }
}
