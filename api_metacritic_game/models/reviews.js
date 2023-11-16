const { DataTypes } = require('sequelize')

module.exports = (instance) => {
    return instance.define('review', {
        noteE: {
            type: DataTypes.INTEGER,
        },
        noteU: {
            type: DataTypes.INTEGER,
        },
        idt: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        idU: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        idE: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING,  
        },
        titre: {
            type: DataTypes.STRING,  
        },
        date: {
            type: DataTypes.STRING,  
        },
    }, {
        timestamps: false
    })
}