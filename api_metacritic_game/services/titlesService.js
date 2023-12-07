const igdbService = require('./infosJeu'); // Importez le service qui contient les méthodes pour récupérer les informations de l'API IGDB


exports.getAllTitles = async () => {
  try {
    // Utilisez la fonction appropriée du service IGDB pour récupérer la liste de tous les titres de jeu
    const titles = await igdbService.getAllNomJeu(); // Cette fonction doit être implémentée dans votre service IGDB

    return titles; // Retournez la liste des titres de jeu
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch game titles');
  }
};