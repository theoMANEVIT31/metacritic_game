const { DataTypes } = require("sequelize");

module.exports = (instance) => {
  return instance.define(
    "criticsUsers",
    {
      idR: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      idU: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
