const { DataTypes } = require("sequelize")

module.exports = (instance) => {
  return instance.define(
    "reviews",
    {
      idR: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      avgU: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      release: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idC: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  )
}
