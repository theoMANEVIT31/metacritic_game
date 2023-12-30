const db = require("../models/indexModel")
const igdbService = require('./infosJeu')


exports.getReviews = async () => {
  return await db.reviews.findAll();
}

exports.addReview = async (avgU, title, idC) => {
  try {
    const gameInfo = await igdbService.getInfosJeuByName(title)

    if (gameInfo && gameInfo.length > 0) {
      const { first_release_date, summary, name } = gameInfo[0]
      const releaseDate = new Date(first_release_date * 1000)
      const year = releaseDate.getFullYear()
      const month = String(releaseDate.getMonth() + 1).padStart(2, '0')
      const day = String(releaseDate.getDate()).padStart(2, '0')
      const formattedDate = `${year}/${month}/${day}`

      const review = await db.reviews.create({
        avgU,
        description: summary,
        title: name,
        release: formattedDate,
        idC,
      })
      return review;
    } else {
      throw new Error('Game information not found.')
    }
  } catch (error) {
    throw new Error('Failed to add review')
  }
}

exports.getReviewById = async (idR) => {
  return await db.reviews.findOne(
    { where: { idR } }
  )
}

exports.putReview = async (idR, avgU, description, title, release, idC) => {
  return await db.reviews.update(
    { avgU: avgU, description: description, title: title, release: release, idC: idC },
    { where: { idR } }
  )
}

exports.deleteReviewById = async (idR) => {
  try {
    const hasRelatedCriticsUsers = await db.criticsUsers.findOne(
      { where: { idR, }, }
    );
    if (hasRelatedCriticsUsers) {
      await db.criticsUsers.destroy(
        { where: { idR } }
      )
    }
    return await db.reviews.destroy(
      { where: { idR } }
    )
  } catch (error) {
    throw new Error(
      `Une erreur s'est produite lors de la suppression de l'avis : ${error}`
    )
  }
}
