const db = require('../models/indexModel');

exports.getEditors = async () => {
    return await db.editors.findAll();
}

exports.addEditor = (idE, name) => {
    return db.editors.create({idE, name});
}

exports.getEditorById = async (idE) => {
    return await db.editors.findOne({
        where: {
            idE
        }
    });
}