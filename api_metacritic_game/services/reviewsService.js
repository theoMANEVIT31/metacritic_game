const db = require("../models/indexModel");

exports.getReviews = async () => {
  return await db.reviews.findAll();
};

exports.addReview = (avgU, description, title, release, idC) => {
  return db.reviews.create({
    avgU,
    description,
    title,
    release,
    idC,
  });
};

exports.getReviewById = async (idR) => {
  return await db.reviews.findOne({
    where: {
      idR,
    },
  });
};

exports.putReview = async (idR, avgU, description, title, release, idC) => {
  return await db.reviews.update(
    { avgU: avgU, description: description, title: title, release: release, idC: idC},
    {
      where: {
        idR,
      },
    }
  );
};

exports.deleteReviewById = async (idR) => {
  try {
    const hasRelatedCriticsUsers = await db.criticsUsers.findOne({
      where: {
        idR,
      },
    });
    if (hasRelatedCriticsUsers) {
      await db.criticsUsers.destroy({
        where: {
          idR,
        },
      });
    }
    return await db.reviews.destroy({
      where: {
        idR,
      },
    });
  } catch (error) {
    throw new Error(
      `Une erreur s'est produite lors de la suppression de l'avis : ${error}`
    );
  }
};
