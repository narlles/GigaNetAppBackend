const { Model, DataTypes } = require("sequelize");

module.exports = tb_contas_netflix

async function tb_contas_netflix(sequelize) {

    class contas_netflix extends Model { }

    contas_netflix.init({

        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },

        restrita: {
            defaultValue: false,
            type: DataTypes.INTEGER,
            values: [0, 1, 2, 3, 4]
        },

        ativa: {
            defaultValue: true,
            type: DataTypes.BOOLEAN
        },

        OLT: {
            allowNull: false,
            type: DataTypes.STRING
        },

        email: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true
        },

        ip: {
            type: DataTypes.STRING(15),
            defaultValue: null,
            allowNull: true
        },

        expira_em: {
            type: DataTypes.DATEONLY,
            defaultValue: null,
            allowNull: true
        },

        quantidade_de_clientes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },

        senha: {
            type: DataTypes.STRING,
            defaultValue: 0
        },

    }, {
        sequelize: sequelize,
        modelName: "contas_netflix",
        tableName: "contas_netflix",
    }
    )

    return contas_netflix

}