const criticsEditorsService = require('./criticsEditors')


exports.getEditors = () => {
    return editors
}

exports.addEditors = (idE, name) => {
    if (idE != null && name != null) {
        const editorById = module.exports.getEditorById(idE)
        if (!editorById) {
            editors.push({idE, name})
            return true
        } else {
            throw new Error('A editor with this id already exists')
        }
    } else {
        throw new Error('All parameters are required')
    }
}

/*
exports.putEditorById = (idE) => {
    return editors.find(o => o.idE === parseInt(idE))
}
*/

exports.deleteEditorById = function deleteEditorBy(idE) {
    const editorIndex = editors.findIndex(o => o.idE === parseInt(idE))
    if (editorIndex > -1) {
        criticsEditorsService.deleteCriticsEditorById(idE)
        editors.splice(editorIndex, 1)
        return true
    } else {
        throw new Error('Editor not found')
    }
}

exports.getEditorById = (idE) => {
    return editors.find(o => o.idE === parseInt(idE))
}