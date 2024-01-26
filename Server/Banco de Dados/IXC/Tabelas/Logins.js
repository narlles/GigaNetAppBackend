const { Model, DataTypes } = require("sequelize");

module.exports = Logins

async function Logins(sequelize) {

    class IXC_Logins extends Model { }

    IXC_Logins.init({

        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        
        ativo: DataTypes.STRING,
        
        online: DataTypes.STRING,

        login: DataTypes.STRING,

        senha: DataTypes.STRING,

        id_cliente: {
            type: DataTypes.INTEGER,
        },

        id_contrato: {
            type: DataTypes.INTEGER,
        },

        conexao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        ultima_conexao_inicial: {
            type: DataTypes.DATE,
            allowNull: true,
        },

        ultima_conexao_final: {
            type: DataTypes.DATE,
            allowNull: false,
        }

    }, {
        sequelize,
        timestamps: false,
        modelName: "radusuarios"
    }
    )

    return IXC_Logins

}