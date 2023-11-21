const reviewsService = require('./reviews')


exports.getReviews = () => {
    return reviews
}

exports.addReviews = (idR, noteE, noteU, description, titre, date, idC) => {
    if (idR != null && noteE != null && noteU != null && description != null && titre != null && date != null && idC != null) {
        const reviewById = module.exports.getReviewById(idR)
        if (!reviewById) {
            reviews.push({idR, noteE, noteU, description, titre, date, idC})
            return true
        } else {
            throw new Error('A review with this id already exists')
        }
    } else {
        throw new Error('All parameters are required')
    }
}

/*
exports.putReviewById = (idR) => {
    return reviews.find(o => o.idR === parseInt(idR))
}
*/

exports.deleteReviewById = function deleteReviewBy(idR) {
    const reviewIndex = reviews.findIndex(o => o.idR === parseInt(idR))
    if (reviewIndex > -1) {
        criticsReviews.deleteCriticsReviewsForReview(idR)
        reviews.splice(reviewIndex, 1)
        return true
    } else {
        throw new Error('Review not found')
    }
}

exports.getReviewById = (idR) => {
    return reviews.find(o => o.idR === parseInt(idR))
}