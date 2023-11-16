const { Sequelize } = require('sequelize')
const dbConfig = require('../db.config')

const instance = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.hostname,
    port: dbConfig.port,
    dialect: "mysql"
})

// 1 seul module.exports mais plusieurs exports, équivalence:
// exports.instance = instance

module.exports = {
    instance,
    users: require('./users')(instance),
    reviews: require('./reviews')(instance),
    criticsEditors: require('./criticsEditors')(instance),
    criticsUsers: require('./criticsUsers')(instance),
    editors: require('./editors')(instance)
}

// Define associations between models
instance.models.criticsEditors.belongsTo(instance.models.reviews)
instance.models.v.belongsTo(instance.models.reviews)
instance.models.users.belongsTo(instance.models.criticsUsers)
instance.models.editors.belongsTo(instance.models.criticsEditors)