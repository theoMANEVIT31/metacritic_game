const db = require('../models/indexModel');

exports.getCriticsUsers = async () => {
    return await db.criticsUsers.findAll();
}

exports.addCriticsUser = (idR, idU, comment, noteU) => {
    return db.criticsUsers.create({idR, idU, comment, noteU});
}

exports.getCriticsUserById = async (idR,idU) => {
    return await db.criticsUsers.findOne({
        where: {
            idR,
            idU
        }
    });
}

exports.putCriticsUser = async (idR, idU, comment, noteU) => {
    return await db.criticsUsers.update({ comment: comment, noteU: noteU},{
        where: {
            idR,
            idU
        }
    });
}

exports.deleteCriticsUserById = async (idR, idU) => {
    try {
      return await db.criticsUsers.destroy({
        where: {
          idR,
          idU,
        },
      });
    } catch (error) {
      throw new Error(
        `Une erreur s'est produite lors de la suppression de l'utilisateur de critiques : ${error}`
      );
    }
  };