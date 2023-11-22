const express = require('express')
const app = express()
const cors = require('cors')
const OpenApiValidator = require('express-openapi-validator')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')

const swaggerDocument = YAML.load('./openapi.yaml')

app.use(cors());
app.use(express.json()); 

app.use(
    OpenApiValidator.middleware({
        apiSpec: './openapi.yaml',
        ignoreUndocumented: true
    })
)

const criticsEditorsRouter = require('./routers/criticsEditors')
app.use('/criticsEditors', criticsEditorsRouter);

const criticsUsersRouter = require('./routers/criticsUsers')
app.use('/criticsUsers', criticsUsersRouter);

const editorsRouter = require('./routers/editors')
app.use('/editors', editorsRouter);

const reviewsRouter = require('./routers/reviews')
app.use('/reviews', reviewsRouter)

const usersRouter = require('./routers/users')
app.use('/users', usersRouter)


app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use((error, req, res, next) => {
    res.status(error.status || 500)
        .json({success: false, message: error.message, status: error.status})
})

module.exports = app