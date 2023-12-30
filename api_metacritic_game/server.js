const db = require('./models/indexModel')
const app = require('./app')

db.instance.sync({force: true}).then(async () => {
    console.log('Database connected and synchronized')
    app.listen(3000, () => {
        console.log('Server running on port 3000 !')
    })
    const user = {
        pseudo: "user_1",
        email: "user_1@gmail.com",
        password: "user_mdp"
    }
    await fetch('http://localhost:3000/register/signUp', {
        method: "POST",
        body: JSON.stringify({ 
            pseudo: "user_1",
            email: "user_1@gmail.com",
            password: "user_mdp"
        }),
        headers: {'Content-Type': 'application/json'}
    })

    await db.editors.create({pseudo: "editor_1", email: "editor_1@gmail.com", hashedPassword: "$2b$10$psGwfBHMf9WUYL5og6boBuqRuWutTWccJXwBEKggTuoZtO4EwTxdW"})

    await db.criticsEditors.create({evaluation: "bien",noteE: 8, idE: 1})

    await db.reviews.create({avgU: 9.8, description: "Take on the role of James Bond as played by Daniel Craig in all new SKYFALL levels. Unlock three new single player levels following the storyline of the SKYFALL movie. Levels take place in Istanbul and Shanghai as the player (Bond) attempts to track down ",title: "007 Legends: Skyfall", release: "2012/11/20",idC: 1})

    await db.criticsUsers.create({idR: 1, idU: 1, comment: "Super jeu", noteU: 10})

}).catch((e) => {
    console.error(e)
})
