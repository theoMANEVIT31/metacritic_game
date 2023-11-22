const db = require('../models');

exports.getUsers = async () => {
    return await db.users.findAll();
}

exports.addUser = (idU, name) => {
    return db.users.create({idU, name});
}

exports.getUserById = async (idU) => {
    return await db.users.findOne({
        where: {
            idU
        }
    });
}