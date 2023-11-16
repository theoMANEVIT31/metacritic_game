const { DataTypes } = require('sequelize')

module.exports = (instance) => {
    return instance.define('user', {
        idU: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    })
}