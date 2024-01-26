const { Model, DataTypes } = require("sequelize");

module.exports = Contratos

async function Contratos(sequelize) {

    class IXC_Contratos extends Model { }

    IXC_Contratos.init({

        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },

        id_cliente: {
            type: DataTypes.INTEGER,
        },
        
        contrato: {
            type: DataTypes.STRING,
        },

        data_ativacao: {
            type: DataTypes.STRING,
        },

        status_internet: {
            type: DataTypes.STRING,
        },

        status: {
            type: DataTypes.STRING,
        },

    }, {
        sequelize,
        timestamps: false,
        modelName: "cliente_contrato",
        tableName: "cliente_contrato",
    }
    )

    return IXC_Contratos

}