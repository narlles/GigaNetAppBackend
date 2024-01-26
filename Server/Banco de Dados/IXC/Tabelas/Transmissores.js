const { Model, DataTypes } = require("sequelize");

module.exports = Transmissores

async function Transmissores(sequelize) {

    class IXC_Transmissores extends Model { }

    IXC_Transmissores.init({

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },

        descricao: {
            type: DataTypes.STRING,
        }

    }, {
        sequelize,
        timestamps: false,
        modelName: "radpop_radio",
        tableName: "radpop_radio",
    }
    )

    return IXC_Transmissores

}