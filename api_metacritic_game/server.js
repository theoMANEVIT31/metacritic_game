const db = require('./models/indexModel');
const app = require('./app');

db.instance.sync({force: true}).then(async () => {
    console.log('Database connected and synchronized');

    await db.users.create({idU: 1, name: "user1"});

    await db.editors.create({idE: 1, name: "editor1"});

    await db.criticsEditors.create({idU: 1, description: "criticeditor1", idE: 1});

    await db.reviews.create({idR: 1, noteE: 10, noteU: 10, description: "description1", titre:"titre1", date:"23/11/2023", idC:1});

    await db.criticsUsers.create({idR: 1, idU: 1, description: "description1"});

    app.listen(3000, () => {
        console.log('Server running on port 3000 !');
    });
}).catch((e) => {
    console.error(e);
});