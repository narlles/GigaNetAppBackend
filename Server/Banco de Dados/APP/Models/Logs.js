const { Model, DataTypes } = require('sequelize');

module.exports = logsDb

function logsDb(sequelize) {

    class Logs extends Model { }

    Logs.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        evento: {
            allowNull: false,
            type: DataTypes.STRING
        },
        origem: DataTypes.STRING,
        usuario: DataTypes.STRING,
        nivel: DataTypes.STRING,
        status: DataTypes.STRING,
        extra: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'logs',
    })

    return Logs

}