const { DataTypes } = require("sequelize");

module.exports = (instance) => {
  return instance.define(
    "reviews",
    {
      idR: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      noteE: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      noteU: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      titre: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      idC: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
