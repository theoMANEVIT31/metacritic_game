const express = require('express')
const app = express()
const OpenApiValidator = require('express-openapi-validator')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')

const swaggerDocument = YAML.load('./open_api.yaml')

app.use(express.json())

app.use(
    OpenApiValidator.middleware({
        apiSpec: './open_api.yaml',
        ignoreUndocumented: true
    })
)

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use((error, req, res, next) => {
    res.status(error.status || 500)
        .json({success: false, messag: error.message, status: error.status})
})

module.exports = app