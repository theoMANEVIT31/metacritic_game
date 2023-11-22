const db = require('./models/index');
const app = require('./app');

db.instance.sync({force: true}).then(async () => {
    console.log('Database connected and synchronized');

    await db.users.create({idU: 1, name: "test"});

    app.listen(3000, () => {
        console.log('Server running on port 3000 !');
    });
}).catch((e) => {
    console.error(e);
});