const titleServices = require('../services/titlesService'); 
const createError = require('http-errors')

exports.getAllTitles = async (req, res, next) => {
  try {
    const titles = await titleServices.getAllTitles(); // Obtenez la liste de tous les titres de jeu depuis le service approprié

    res.json(titles); // Renvoyez les titres de jeu sous forme de réponse JSON
  } catch (error) {
    next(createError(400, "Failed to fetch game titles"))
  }
};
