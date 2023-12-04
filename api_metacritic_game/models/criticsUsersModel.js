const { DataTypes } = require("sequelize");

module.exports = (instance) => {
  return instance.define(
    "criticsUsers",
    {
      idR: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      idU: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      NoteU: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
