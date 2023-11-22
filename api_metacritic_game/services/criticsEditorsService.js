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