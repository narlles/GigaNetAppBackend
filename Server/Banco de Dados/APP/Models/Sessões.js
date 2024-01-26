const { Model, DataTypes } = require('sequelize');

module.exports = Sessões

function Sessões(sequelize) {

    class Sessão extends Model { }

    Sessão.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        origem: DataTypes.STRING,
        usuario: DataTypes.STRING,
        token: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'sessoes',
    })

    return Sessão

}