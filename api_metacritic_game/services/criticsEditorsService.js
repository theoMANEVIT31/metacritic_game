const db = require('../models/indexModel');

exports.getCriticsEditors = async () => {
    return await db.criticsEditors.findAll();
}

exports.addCriticsEditor = (idC, description, idE) => {
    return db.criticsEditors.create({idC, description, idE});
}

exports.getCriticsEditorById = async (idC) => {
    return await db.criticsEditors.findOne({
        where: {
            idC
        }
    });
}

exports.putCriticsEditor = async (idC, description, idE) => {
    return await db.criticsEditors.update({ description: description,idE: idE },{
        where: {
            idC
        }
    });
}

exports.deleteCriticsEditorById = async (idC) => {
    return await db.criticsEditors.destroy({
        where: {
            idC
        }
    });
}