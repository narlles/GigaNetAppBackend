const { Model, DataTypes } = require("sequelize");

module.exports = OS

async function OS(sequelize) {

    class IXC_OS extends Model { }

    IXC_OS.init({

        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },

        id_cliente: {
            type: DataTypes.INTEGER,
        },

        id_login: {
            type: DataTypes.INTEGER,
        },

        status: {
            type: DataTypes.STRING,
        },

        data_agenda: {
            type: DataTypes.DATE,
        },

        id_tecnico: {
            type: DataTypes.INTEGER,
        }

    }, {
        sequelize,
        timestamps: false,
        modelName: "su_oss_chamado",
        tableName: 'su_oss_chamado'
    }
    )

    return IXC_OS

}