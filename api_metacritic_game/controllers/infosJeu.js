const infosJeu = require('../services/infosJeu')


exports.getAllNomJeu = (req, res) => {
    const game = infosJeu.getAllNomJeu()
    res.json({ data: game})
};

exports.getInfosJeuByName = (req, res) => {
  const game = infosJeu.getInfosJeuByName()
  res.json({ data: game})
};
       
