const configApiExterne = require('./../config.api.externe.js');
const axios = require('axios');

exports.getAllNomJeu = async () => {
    await configApiExterne.getAuthorization();
    return fetch(
        "https://api.igdb.com/v4/games/",
        { method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Client-ID': configApiExterne.client_id,
            'Authorization': `Bearer ${configApiExterne.access_token}`
          },
          body: "fields name,first_release_date,summary; limit 500; sort name asc;" 
        }
    ) .then(response => {
            return response.json()
        }
    ) .catch(err => {
            console.error(err);
        }
    );
}

exports.getInfosJeuByName = async (nameT) => {
  await configApiExterne.getAuthorization();
  const requestBody = `fields name,first_release_date,summary; where name = "${nameT}";`;
  return fetch(
    "https://api.igdb.com/v4/games/",
    { method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Client-ID': configApiExterne.client_id,
        'Authorization': `Bearer ${configApiExterne.access_token}`
      },
      body: requestBody
    }
) .then(response => {
        return response.json()
    }
) .catch(err => {
        console.error(err);
    }
);
}