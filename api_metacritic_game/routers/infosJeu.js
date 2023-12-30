const express = require('express'),
    router = express.Router(),
    infosJeu = require('../controllers/infosJeu')

router.get('https://api.igdb.com/v4/games/', infosJeu.getAllNomJeu)
router.get('https://api.igdb.com/v4/games/', infosJeu.getInfosJeuByName)

module.exports = router
