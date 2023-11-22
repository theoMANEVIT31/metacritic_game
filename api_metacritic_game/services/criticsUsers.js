const db = require('../models');

exports.getCriticsUsers = async () => {
    return await db.criticsUsers.findAll();
}

exports.addCriticsUser = (idR, idU, description) => {
    return db.criticsUsers.create({idR, idU, description});
}

exports.getCriticsUserById = async (idR,idU) => {
    return await db.criticsUsers.findOne({
        where: {
            idR,
            idU
        }
    });
}