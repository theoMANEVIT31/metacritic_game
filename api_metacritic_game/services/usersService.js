const db = require('../models/indexModel');

exports.getUsers = async () => {
    return await db.users.findAll();
}

exports.addUser = (pseudo, hashedPassword, email) => {
    return db.users.create({pseudo, hashedPassword, email});
}

exports.getUserById = async (idU) => {
    return await db.users.findOne({
        where: {
            idU
        }
    });
}

exports.putUser = async (pseudo, hashedPassword, email) => {
    return await db.users.update({ pseudo: pseudo, hashedPassword: hashedPassword, email: email},{
        where: {
            idU
        }
    });
}

exports.deleteUserById = async (idU) => {
    return await db.users.destroy({
        where: {
            idU
        }
    });
}