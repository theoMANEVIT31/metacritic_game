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
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
