const db = require('../models/indexModel');

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

exports.putUser = async (idU, name) => {
    return await db.users.update({ name: name },{
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