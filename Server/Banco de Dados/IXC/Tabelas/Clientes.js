const { Model, DataTypes } = require("sequelize");

module.exports = Clientes

async function Clientes(sequelize) {

    class IXC_Clientes extends Model { }

    IXC_Clientes.init({

        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },

        ativo: {
            type: DataTypes.STRING,
        },

        razao: {
            type: DataTypes.STRING,
            allowNull: false
        },

        cnpj_cpf: {
            type: DataTypes.STRING,
        },

        bairro: {
            type: DataTypes.STRING,
        },

        endereco: {
            type: DataTypes.STRING,
        },

        numero: {
            type: DataTypes.INTEGER,
        },

        cidade: {
            type: DataTypes.INTEGER,
        },

        latitude: {
            type: DataTypes.INTEGER,
        },

        longitude: {
            type: DataTypes.INTEGER,
        },

        telefone_celular: {
            type: DataTypes.STRING,
        },

        hotsite_email: {
            type: DataTypes.STRING,
        },

        senha: {
            type: DataTypes.STRING,
        },

    }, {
        sequelize,
        timestamps: false,
        modelName: "cliente",
        tableName: 'cliente'
    }
    )

    return IXC_Clientes

}