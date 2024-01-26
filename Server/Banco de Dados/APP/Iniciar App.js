const Sequelize = require('sequelize')
const logsDb = require('./Models/Logs');
const Sessões = require('./Models/Sessões');

module.exports = async function () {

    const sequelize = await new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASS, {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00',
        logging: false
    });

    const logs = logsDb(sequelize)
    const sessoes = Sessões(sequelize)

    await sequelize.sync()
        .then(() => {
            console.log('Banco de dados sincronizado com sucesso!');
        });

    const database = {
        sequelize,
        logs,
        sessoes
    }

    global.db = database

}