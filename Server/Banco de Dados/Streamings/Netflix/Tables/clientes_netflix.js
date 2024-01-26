const { Model, DataTypes } = require("sequelize");

module.exports = tb_clientes_netflix

async function tb_clientes_netflix(sequelize) {

    class clientes_netflix extends Model { }

    clientes_netflix.init({

        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },

        id_cliente: { type: DataTypes.INTEGER, allowNull: false },
        OLT: DataTypes.STRING,
        nome: DataTypes.STRING,
        
        id_conta: DataTypes.INTEGER,
        pin: DataTypes.INTEGER,
        ip: DataTypes.STRING(15),

    }, {
        sequelize,
        modelName: "clientes_netflix",
        tableName: "clientes_netflix",
    }
    )

    return clientes_netflix

}