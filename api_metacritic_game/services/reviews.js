const db = require('../models');

exports.getReviews = async () => {
    return await db.reviews.findAll();
}

exports.addReview = (idR, noteE, noteU, description, titre, date) => {
    return db.reviews.create({idR, noteE, noteU, description, titre, date});
}

exports.getReviewById = async (idR) => {
    return await db.reviews.findOne({
        where: {
            idR
        }
    });
}