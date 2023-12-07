const configApiExterne = require('./../config.api.externe.js');
const axios = require('axios');

exports.getAllNomJeu = async () => {
    await configApiExterne.getAuthorization();
    return fetch(
        //"https://api.igdb.com/v4/release_dates",
        "https://api.igdb.com/v4/games/",
        { method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Client-ID': configApiExterne.client_id,
            'Authorization': `Bearer ${configApiExterne.access_token}`
          },
          body: "fields *; limit 500; "//sort date asc;
        }
    ) .then(response => {
            return response.json()
        }
    ) .catch(err => {
            console.error(err);
        }
    );
}


exports.getInfosJeuByName = async (nameJeu) => {
  await configApiExterne.getAuthorization();

  let data = `fields name, storyline, summary, alternative_name, category, cover, release_dates, franchise, genres, involved_companies, keywords, platforms, status;\r\nwhere name = ${nameJeu};`;

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.igdb.com/v4/games',
    headers: { 
      'Client-ID': configApiExterne.client_id,
      'Authorization': `Bearer ${configApiExterne.access_token}`, 
      'Content-Type': 'text/plain'
    },
    data
  };
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
}