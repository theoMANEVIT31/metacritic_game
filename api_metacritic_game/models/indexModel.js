const { Sequelize } = require("sequelize");
const dbConfig = require("../db.config");

const instance = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.hostname,
    port: dbConfig.port,
    dialect: "mysql",
  }
);

module.exports = {
  instance,
  users: require('./usersModel')(instance),
  reviews: require('./reviewsModel')(instance),
  criticsEditors: require('./criticsEditorsModel')(instance),
  criticsUsers: require('./criticsUsersModel')(instance),
  editors: require('./editorsModel')(instance)
}

instance.models.criticsUsers.belongsTo(instance.models.users, { foreignKey: "idU" });
instance.models.criticsUsers.belongsTo(instance.models.reviews, { foreignKey: "idR" });
instance.models.reviews.belongsTo(instance.models.criticsEditors, { foreignKey: "idC" });
instance.models.criticsEditors.belongsTo(instance.models.editors, { foreignKey: "idE" });
