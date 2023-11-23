const db = require('../models/indexModel');

exports.getReviews = async () => {
    return await db.reviews.findAll();
}

exports.addReview = (idR, noteE, noteU, description, titre, date, idC) => {
    return db.reviews.create({idR, noteE, noteU, description, titre, date, idC});
}

exports.getReviewById = async (idR) => {
    return await db.reviews.findOne({
        where: {
            idR
        }
    });
}