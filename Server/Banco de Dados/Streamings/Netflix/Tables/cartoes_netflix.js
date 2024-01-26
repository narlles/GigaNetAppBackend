const { Model, DataTypes } = require("sequelize");

module.exports = tb_cartoes_netflix

async function tb_cartoes_netflix(sequelize) {

    class cartoes_netflix extends Model { }

    cartoes_netflix.init({

        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },

        titular: {
            type: DataTypes.STRING,
            allowNull: false
        },

        numero: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
        },

    }, {
        sequelize,
        modelName: "cartoes_netflix",
        tableName: "cartoes_netflix",
        timestamps: true
    }
    )

    return cartoes_netflix

}