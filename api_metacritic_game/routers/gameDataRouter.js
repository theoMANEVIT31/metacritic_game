const express = require('express'),
    router = express.Router(),
    gameData = require('../controllers/gameDataController')

router.get('https://api.igdb.com/v4/games/', gameData.getAllGameName)
router.get('https://api.igdb.com/v4/games/', gameData.getGameDataByName)

module.exports = router
