const { Model, DataTypes } = require("sequelize");

module.exports = Fibra

async function Fibra(sequelize) {

    class IXC_Fibra extends Model { }

    IXC_Fibra.init({

        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },

        nome: {
            type: DataTypes.STRING,
        },

        id_contrato: {
            type: DataTypes.INTEGER,
        },

        id_login: {
            type: DataTypes.INTEGER,
        },

        ponid: {
            type: DataTypes.STRING,
            allowNull: false
        },

        id_transmissor: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        id_caixa_ftth: {
            type: DataTypes.INTEGER,
        },

        porta_ftth: {
            type: DataTypes.INTEGER,
        },

    }, {
        sequelize,
        timestamps: false,
        modelName: "radpop_radio_cliente_fibra",
        tableName: "radpop_radio_cliente_fibra",
    }
    )

    return IXC_Fibra

}