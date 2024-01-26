const { Model, DataTypes } = require("sequelize");

module.exports = Funcionarios

async function Funcionarios(sequelize) {

    class IXC_Funcionarios extends Model { }

    IXC_Funcionarios.init({

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },

        funcionario: {
            type: DataTypes.STRING,
        }

    }, {
        sequelize,
        timestamps: false,
        modelName: "funcionarios",
        tableName: "funcionarios",
    }
    )

    return IXC_Funcionarios

}