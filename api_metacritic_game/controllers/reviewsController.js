const reviewsService = require('../services/reviewsService');
const createError = require('http-errors')


exports.getReviews = async (req, res, next) => {
   const reviews = await reviewsService.getReviews()
   if (reviews) {
      res.json({ data: reviews })
   } else {
      next(createError(404, "no review found"))
   }
}

exports.addReview = async (req, res, next) => {
   const reviewCreated = await reviewsService.addReview(req.body.avgU, req.body.title, req.body.idC)
   if (reviewCreated) {
      res.status(201).send()
   } else {
      next(createError(400, "Error when creating this review, verify your args"))
   }
}

exports.getReviewById = async (req, res, next) => {
   const review = await reviewsService.getReviewById(req.params.idR)
   if (review) {
      res.json({ data: review })
   } else {
      next(createError(404, "no review found for this idR"))
   }
}

exports.putReview = async (req, res, next) => {
   const reviewUpdated = await reviewsService.putReview(req.body.idR, req.body.avgU, req.body.description, req.body.title, req.body.release, req.body.idC)
   if (reviewUpdated) {
      res.status(201).send()
   } else {
      next(createError(400, "Error when updating this review, verify your args"))
   }
}

exports.deleteReviewById = async (req, res, next) => {
   const reviewDeleted = await reviewsService.deleteReviewById(req.params.idR)
   if (reviewDeleted) {
      res.status(204).send()
   } else {
      next(createError(404, `The review with id '${idR}' doesn't exists, it cannot be deleted`))
   }
}