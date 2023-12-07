const titleServices = require('../services/titlesService'); 
const createError = require('http-errors')

exports.getAllTitles = async (req, res, next) => {
  try {
    const titles = await titleServices.getAllTitles();

    res.json(titles); 
  } catch (error) {
    next(createError(400, "Failed to fetch game titles"))
  }
};

exports.getTitleById = async (req, res, next) => {
  try {
    const titles = await titleServices.getTitleById(req.params.idT); 

    res.json(titles);
  } catch (error) {
    next(createError(400, "Failed to fetch game titles"))
  }
};
