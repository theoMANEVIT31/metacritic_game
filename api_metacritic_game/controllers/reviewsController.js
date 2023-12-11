const reviewsService = require('../services/reviewsService');
const createError = require('http-errors')

exports.getReviews = async (req, res) => {
   const reviews = await reviewsService.getReviews()
   res.json({data: reviews})
}

exports.addReview = (req, res, next) => {
   const reviewCreated = reviewsService.addReview(req.body.avgU, req.body.title, req.body.idC)
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

exports.putReview = (req, res, next) => {
   const reviewUpdated = reviewsService.putReview(req.body.idR, req.body.avgU, req.body.description, req.body.title, req.body.release, req.body.idC)
   if (reviewUpdated) {
      res.status(201).json({idR: reviewUpdated.idR})
   } else {
      next(createError(400, "Error when updating this review, verify your args"))
   }
}

exports.deleteReviewById = (req, res, next) => {
   try {
      reviewsService.deleteReviewById(req.params.idR)
      res.status(204).send()
   } catch(e) {
      next(createError(404, `The review with id '${idR}' doesn't exists, it cannot be deleted`))
   }
}
