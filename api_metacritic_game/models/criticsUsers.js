const { DataTypes } = require('sequelize')

module.exports = (instance) => {
    return instance.define('criticUsers', {
        idc: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        idt: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        idU: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING,  
        }
    }, {
        timestamps: false
    })
}