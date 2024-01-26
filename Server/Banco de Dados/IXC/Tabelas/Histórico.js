const { Model, DataTypes } = require("sequelize");

module.exports = Fibra_Historico

async function Fibra_Historico(sequelize) {

    class IXC_Fibra_HIstorico extends Model { }

    IXC_Fibra_HIstorico.init({

        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },

        sinal_tx: {
            type: DataTypes.STRING
        },

        sinal_rx: {
            type: DataTypes.STRING
        },

        data_sinal: {
            type: DataTypes.DATE
        },

        id_cliente_fibra: {
            type: DataTypes.INTEGER
        },

    }, {
        sequelize,
        timestamps: false,
        modelName: "radpop_radio_cliente_fibra_historico",
        tableName: "radpop_radio_cliente_fibra_historico",
    }
    )

    return IXC_Fibra_HIstorico

}