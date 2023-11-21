
exports.getCriticsUsers = () => {
    return criticsUsers
}

exports.addCriticsUsers = (idR, idU, description) => {
    if (idR != null && idU != null && idU != description) {
        const criticsUserById = module.exports.getCriticsUserById(idR, idU)
        if (!criticsUserById) {
            criticsUsers.push({idR, idU, description})
            return true
        } else {
            throw new Error('A criticsUser with this id already exists')
        }
    } else {
        throw new Error('All parameters are required')
    }
}

/*
exports.putCriticsUserById = (idE) => {
    return criticsUsers.find(o => o.idE === parseInt(idE))
}
*/

exports.deleteCriticsUserById = function deleteCriticsUserBy(idE) {
    const criticsUserIndex = criticsUsers.findIndex(o => o.idR === parseInt(idR) && o.idU === parseInt(idU))
    if (criticsUserIndex > -1) {
        reviewsService.deleteReviewsForCriticsUser(idE)
        criticsUsers.splice(criticsUserIndex, 1)
        return true
    } else {
        throw new Error('criticsUser not found')
    }
}

exports.getCriticsUserById = (idR, idU) => {
    return criticsUsers.find(o => o.idR === parseInt(idR) && o.idU === parseInt(idU))
}