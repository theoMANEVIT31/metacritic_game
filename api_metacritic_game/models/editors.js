const { DataTypes } = require('sequelize')

module.exports = (instance) => {
    return instance.define('editors', {
        idE: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,  
        }
    }, {
        timestamps: false
    })
}