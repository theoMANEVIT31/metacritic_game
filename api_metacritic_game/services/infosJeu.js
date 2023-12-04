const configApiExterne = require('config.api.externe.js');

exports.getInfosJeu = async () => {
    await configApiExterne.getAuthorization();
    fetch(
        "https://api.igdb.com/v4/games",
        { method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Client-ID': configApiExterne.client_id,
            'Authorization': `Bearer ${configApiExterne.access_token}`
          },
          body: "name, storyline, summary, alternative_name, category, cover, release_dates, franchise, genres, involved_companies, keywords, platforms, status;"
        }
    ) .then(response => {
            console.log(response.json());
        }
    ) .catch(err => {
            console.error(err);
        }
    );
}
