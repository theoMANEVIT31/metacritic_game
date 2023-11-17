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

// Import des modèles
const Users = require("./users")(instance);
const Reviews = require("./reviews")(instance);
const CriticsEditors = require("./criticsEditors")(instance);
const CriticsUsers = require("./criticsUsers")(instance);
const Editors = require("./editors")(instance);

// Définition des associations
CriticsUsers.belongsTo(Users, { foreignKey: "idU" });
CriticsUsers.belongsTo(Reviews, { foreignKey: "idR" });
Reviews.belongsTo(CriticsEditors, { foreignKey: "idC" });
CriticsEditors.belongsTo(Editors, { foreignKey: "idE" });

// Export des modèles et de l'instance Sequelize
module.exports = {
  instance,
  Users,
  Reviews,
  CriticsEditors,
  CriticsUsers,
  Editors,
};
