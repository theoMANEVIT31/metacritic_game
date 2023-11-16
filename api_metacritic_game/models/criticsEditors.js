const { DataTypes } = require('sequelize')

module.exports = (instance) => {
    return instance.define('criticEditor', {
        idc: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        idt: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        idE: {
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