// Déclaration des modules à importer
const express = require('express')
const app = express()
const cors = require('cors')
const OpenApiValidator = require('express-openapi-validator')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')

// Déclaration du swagger document pour être servi en statique
const swaggerDocument = YAML.load('./openapi.yaml')

// Utilisation de middleware globaux
app.use(cors()); // Autorise toutes les requêtes de tout origine
app.use(express.json()); // Permet de parser automatiquement le json en entrée

// Middleware d'openAPI
app.use(
    OpenApiValidator.middleware({
        apiSpec: './openapi.yaml',
        ignoreUndocumented: true
    })
)

// Déclaration des routers principaux qui utilisent les sous-routers
const criticsEditorsRouter = require('./routers/criticsEditors')
app.use('/criticsEditors', criticsEditorsRouter);

const criticsUsersRouter = require('./routers/criticsUsers')
app.use('/criticsUsers', criticsUsersRouter);

const editorsRouter = require('./routers/editors')
app.use('/editors', editorsRouter);

const reviewsRouter = require('./routers/reviews')
app.use('/reviews', reviewsRouter)



// Par défaut quand on appellera "/" on veut servir en statique la doc OpenAPI
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Déclaration globale du middleware d'erreur, on assume que le paramètre error, possède certains attributs
app.use((error, req, res, next) => {
    res.status(error.status || 500)
        .json({success: false, message: error.message, status: error.status})
})

// On oublie pas d'exporter pour tester
module.exports = app