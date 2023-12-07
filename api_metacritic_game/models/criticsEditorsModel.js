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
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
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
