const { Model, DataTypes, BOOLEAN } = require("sequelize");

module.exports = tb_clientes_hbo

async function tb_clientes_hbo(sequelize) {

    class clientes_hbo extends Model { }

    clientes_hbo.init({

        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },

        id_cliente: { type: DataTypes.INTEGER, unique: true },
        OLT: DataTypes.STRING,
        Nome: DataTypes.TEXT,
        Perfil: DataTypes.TEXT,
        id_email: DataTypes.INTEGER

    }, {
        sequelize,
        modelName: "clientes_hbo",
        tableName: "clientes_hbo",
        timestamps: false
    }
    )

    return clientes_hbo

}