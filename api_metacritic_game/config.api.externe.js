module.exports = {
    client_id: "gudetfuzegat7v1bqozkvhr96i59dm",
    secret_id: "9z1ve4q1nbzsia86zjqpq04sn75abl",
    access_token: null
}

const url = `https://id.twitch.tv/oauth2/token?client_id=${this.client_id}&client_secret=${this.secret_id}&grant_type=client_credentials`;

exports.getAuthorization = () => {
    if (this.access_token !== null) {
        return this.access_token
    }

    return fetch(
        url,
        { method: 'POST'}
    ) .then(response => {
            console.log(response.json());
            const token = response.json().access_token
            this.access_token = token
        }
    ) .catch(err => {
            console.error(err);
        }
    );
}