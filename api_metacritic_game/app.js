const express = require('express')
const app = express()
const OpenApiValidator = require('express-openapi-validator')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')

const swaggerDocument = YAML.load('./openapi.yaml')

app.use(express.json())

app.use(
    OpenApiValidator.middleware({
        apiSpec: './openapi.yaml',
        ignoreUndocumented: true
    })
)

const registerRouter = require('./routers/registerRouter')
app.use('/register', registerRouter)

const reviews = require('./routers/reviewsRouter')
app.use('/reviews', reviews)

const users = require('./routers/usersRouter')
app.use('/users', users)

const criticsEditors = require('./routers/criticsEditorsRouter')
app.use('/criticsEditors', criticsEditors)

const criticsUsers = require('./routers/criticsUsersRouter')
app.use('/criticsUsers', criticsUsers)

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use((error, req, res, next) => {
    res.status(error.status || 500)
        .json({success: false, messag: error.message, status: error.status})
})

module.exports = app