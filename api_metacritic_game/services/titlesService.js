const igdbService = require('./infosJeu'); 


exports.getAllTitles = async () => {
  try {
    const titles = await igdbService.getAllNomJeu(); 

    return titles;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch game titles');
  }
};


exports.getTitleById = async (idT) => {
  try {
    const titles = await igdbService.getInfosJeuByName({
        where: {
          idT,
        },
      }); 

    return titles;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch game titles');
  }
};