const { Model, DataTypes } = require("sequelize");

module.exports = Consumo_m

async function Consumo_m(sequelize) {

    class consumo_m extends Model { }

    consumo_m.init({

        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },

        id_login: {
            type: DataTypes.INTEGER
        },

        consumo: {
            type: DataTypes.FLOAT
        },

        data: {
            type: DataTypes.DATE
        },

        consumo_upload: {
            type: DataTypes.INTEGER
        },

        maior_id_consumo: {
            type: DataTypes.INTEGER
        }

    }, {
        sequelize,
        timestamps: false,
        modelName: "radusuarios_consumo_m",
        tableName: "radusuarios_consumo_m"
    }
    )

    return consumo_m

}