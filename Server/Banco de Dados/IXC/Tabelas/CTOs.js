const { Model, DataTypes } = require("sequelize");

module.exports = CTOs

async function CTOs(sequelize) {

    class IXC_CTO extends Model { }

    IXC_CTO.init({

        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },

        descricao: {
            type: DataTypes.STRING,
        },

        id_transmissor: {
            type: DataTypes.INTEGER,
        },

        latitude: {
            type: DataTypes.STRING,
            allowNull: false
        },

        longitude: {
            type: DataTypes.STRING,
            allowNull: false
        },

        endereco: {
            type: DataTypes.STRING,
            allowNull: false
        },

        capacidade: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    }, {
        sequelize,
        timestamps: false,
        modelName: "rad_caixa_ftth",
        tableName: "rad_caixa_ftth",
    }
    )

    return IXC_CTO

}