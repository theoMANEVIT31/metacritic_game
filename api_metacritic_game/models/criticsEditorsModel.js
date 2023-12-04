const { DataTypes } = require("sequelize");

module.exports = (instance) => {
  return instance.define(
    "criticsEditors",
    {
      idC: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      evaluation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      noteE: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      idE: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
