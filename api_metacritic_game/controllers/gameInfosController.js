const gameInfos = require('../services/gameInfos')


exports.getAllGameName = (req, res) => {
    const game = gameInfos.getAllGameName()
    res.json({ data: game})
}

exports.getGameDataByName = (req, res) => {
  const game = gameInfos.getGameDataByName()
  res.json({ data: game})
}
       
