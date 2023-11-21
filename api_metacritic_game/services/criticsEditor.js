const reviewsService = require('./reviews')


exports.getCriticsEditors = () => {
    return criticsEditors
}

exports.addCriticsEditors = (idE, name) => {
    if (idE != null && name != null) {
        const criticsEditorById = module.exports.getCriticsEditorById(idE)
        if (!criticsEditorById) {
            criticsEditors.push({idE, name})
            return true
        } else {
            throw new Error('A criticsEditor with this id already exists')
        }
    } else {
        throw new Error('All parameters are required')
    }
}

/*
exports.putCriticsEditorById = (idE) => {
    return criticsEditors.find(o => o.idE === parseInt(idE))
}
*/

exports.deleteCriticsEditorById = function deleteCriticsEditorBy(idE) {
    const criticsEditorIndex = criticsEditors.findIndex(o => o.idE === parseInt(idE))
    if (criticsEditorIndex > -1) {
        reviewsService.deleteReviewById(idR)
        criticsEditors.splice(criticsEditorIndex, 1)
        return true
    } else {
        throw new Error('criticsEditor not found')
    }
}

exports.getCriticsEditorById = (idE) => {
    return criticsEditors.find(o => o.idE === parseInt(idE))
}