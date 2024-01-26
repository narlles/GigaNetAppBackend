const { Model, DataTypes } = require("sequelize");

module.exports = tb_gifts_netflix

async function tb_gifts_netflix(sequelize) {

    class gifts_netflix extends Model { }

    gifts_netflix.init({

        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },

        codigo: DataTypes.STRING(100),
        valor: DataTypes.DECIMAL,
        usado_em: DataTypes.DATEONLY,

        status: {
            type: DataTypes.STRING(50)
        },

        data_compra: DataTypes.DATEONLY,
        numero_pedido: DataTypes.STRING,
        loja: DataTypes.STRING,
        cartao: DataTypes.STRING(25),
        responsavel: DataTypes.STRING,

    }, {
        sequelize,
        modelName: "gifts_netflix",
        tableName: "gifts_netflix",
        timestamps: true
    }
    )

    return gifts_netflix

}