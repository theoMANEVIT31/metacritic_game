const { DataTypes } = require("sequelize");

module.exports = (instance) => {
  return instance.define(
    "editors",
    {
      idE: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
