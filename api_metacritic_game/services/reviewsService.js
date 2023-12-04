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

exports.putReview = async (idR, noteE, noteU, description, titre, date, idC) => {
    return await db.reviews.update({ noteE: noteE , noteU: noteU, description: description, titre: titre, date: date, idC: idC},{
        where: {
            idR
        }
    });
}

exports.deleteReviewById = async (idR) => {
    return await db.reviews.destroy({
        where: {
            idR
        }
    });
}