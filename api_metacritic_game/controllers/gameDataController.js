const gameData = require('../services/gameData')


exports.getAllGameName = (req, res) => {
    const game = gameData.getAllGameName()
    res.json({ data: game})
};

exports.getGameDataByName = (req, res) => {
  const game = gameData.getGameDataByName()
  res.json({ data: game})
};
       
