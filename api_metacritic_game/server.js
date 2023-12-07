const db = require('./models/indexModel');
const app = require('./app');

db.instance.sync({force: true}).then(async () => {
    console.log('Database connected and synchronized');

    await db.users.create({pseudo: "user_1", email: "user_1@gmail.com", hashedPassword: "user_mdp"});

    await db.editors.create({pseudo: "editor_1", email: "editor_1@gmail.com", hashedPassword: "editor_mdp"});

    await db.criticsEditors.create({evaluation: "bien",noteE: 8, idE: 1});

    await db.reviews.create({avgU: 9.8, description: "Grand Theft Auto V est un jeu vidéo d'action-aventure, développé par Rockstar North et édité par Rockstar Games.", title: "GTA V", release: "2013/09/17", idC: 1});

    await db.criticsUsers.create({idR: 1, idU: 1, comment: "Super jeu", noteU: 10});

    app.listen(3000, () => {
        console.log('Server running on port 3000 !');
    });
}).catch((e) => {
    console.error(e);
});