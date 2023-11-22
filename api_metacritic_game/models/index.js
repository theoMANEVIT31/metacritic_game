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
  users: require('./users')(instance),
  reviews: require('./reviews')(instance),
  criticsEditors: require('./criticsEditors')(instance),
  criticsUsers: require('./criticsUsers')(instance),
  editors: require('./editors')(instance)
}

instance.models.criticsUsers.belongsTo(instance.models.users, { foreignKey: "idU" });
instance.models.criticsUsers.belongsTo(instance.models.reviews, { foreignKey: "idR" });
instance.models.reviews.belongsTo(instance.models.criticsEditors, { foreignKey: "idC" });
instance.models.criticsEditors.belongsTo(instance.models.editors, { foreignKey: "idE" });
