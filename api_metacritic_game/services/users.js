const usersService = require('./users')


exports.getUsers = () => {
    return users
}

exports.addUsers = (idU, name) => {
    if (idU != null && name != null) {
        const userById = module.exports.getUserById(idU)
        if (!userById) {
            users.push({idU, name})
            return true
        } else {
            throw new Error('A user with this id already exists')
        }
    } else {
        throw new Error('All parameters are required')
    }
}

/*
exports.putUserById = (idU) => {
    return users.find(o => o.idU === parseInt(idU))
}
*/

exports.deleteUserById = function deleteUserBy(idU) {
    const userIndex = users.findIndex(o => o.idU === parseInt(idU))
    if (userIndex > -1) {
        criticsUsers.deleteCriticsUsersForUser(idU)
        users.splice(userIndex, 1)
        return true
    } else {
        throw new Error('User not found')
    }
}

exports.getUserById = (idU) => {
    return users.find(o => o.idU === parseInt(idU))
}