const igdbService = require('./infosJeu')


exports.getAllTitles = async () => {
  try {
    const titles = await igdbService.getAllNomJeu()

    return titles
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch game titles')
  }
}

exports.getTitleByName = async (nameT) => {
  try {
    const title = await igdbService.getInfosJeuByName(nameT)

    return title
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch game titles by name')
  }
}
