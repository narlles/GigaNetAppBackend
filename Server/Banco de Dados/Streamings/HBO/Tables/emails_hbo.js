const { Model, DataTypes } = require("sequelize");

module.exports = tb_emails_hbo

async function tb_emails_hbo(sequelize) {

    class emails_hbo extends Model { }

    emails_hbo.init({

        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },

        id_email: {
            type: DataTypes.INTEGER,
            unique: true
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
        
        senha: DataTypes.STRING,

        cadastros: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },

        restrita: {
            defaultValue: false,
            type: DataTypes.INTEGER,
            values: [0, 1, 2, 3, 4]
        },

    }, {
        sequelize: sequelize,
        modelName: "emails_hbo",
        tableName: "emails_hbo",
        timestamps: false
    }
    )

    return emails_hbo

}