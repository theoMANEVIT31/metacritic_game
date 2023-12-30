const db = require("../models/indexModel");
const igdbService = require('./infosJeu');

exports.getReviews = async () => {
  return await db.reviews.findAll();
};

exports.addReview = async (avg, title, idCriticEditor) => {
  try {
    // Utilisez title comme il est s'il est déjà correctement formaté
    const gameInfo = await igdbService.getInfosJeuByName(title);

    // Vérifier si gameInfo est défini et s'il contient des éléments
    if (gameInfo && gameInfo.length > 0) {
      const { first_release_date, summary, name } = gameInfo[0];

      // Convertir le timestamp en une date JavaScript
      const releaseDate = new Date(first_release_date * 1000); // Notez la multiplication par 1000 pour convertir secondes en millisecondes

      // Obtenir les composants de la date
      const year = releaseDate.getFullYear();
      const month = String(releaseDate.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
      const day = String(releaseDate.getDate()).padStart(2, '0');

      // Format de la date
      const formattedDate = `${year}/${month}/${day}`;

      const review = await db.reviews.create({
        avg,
        description: summary,
        title: name, // Utiliser le nom du jeu du JSON
        release: formattedDate,
        idCriticEditor,
      });

      return review;
    } else {
      // Log pour débuguer
      console.log('Game information not found:', title);
      throw new Error('Game information not found.');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to add review');
  }
};

exports.getReviewById = async (id) => {
  return await db.reviews.findOne({
    where: {
      id,
    },
  });
};

exports.putReview = async (id, avg, description, title, release, idCriticEditor) => {
  return await db.reviews.update(
    { avg: avg, description: description, title: title, release: release, idCriticEditor: idCriticEditor},
    {
      where: {
        id,
      },
    }
  );
};

exports.deleteReviewById = async (id) => {
  try {
    const hasRelatedCriticsUsers = await db.criticsUsers.findOne({
      where: {
        idReview: id,
      },
    });
    if (hasRelatedCriticsUsers) {
      await db.criticsUsers.destroy({
        where: {
          idReview: id,
        },
      });
    }
    return await db.reviews.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    throw new Error(
      `Une erreur s'est produite lors de la suppression de l'avis : ${error}`
    );
  }
};
