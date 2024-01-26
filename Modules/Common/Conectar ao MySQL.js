const { Sequelize } = require("sequelize");

module.exports = async (host, user, pass, database) => {

    const seq = new Promise(async (res, rej) => {

        const sequelize = new Sequelize({
            host: host, username: user, password: pass, database: database, dialect: "mysql", logging: false,
            timezone: "-03:00",
            pool: {
                max: 250,
                min: 0,
                acquire: 45000,
                idle: 25000,
            },
        })

        await sequelize.authenticate().then(() => {
            // console.log(`Conectado ao banco de dados ${database}`);
            res(sequelize)
        }).catch(err => {
            console.error('Não foi possível autenticar-se ao banco de dados:', err);
            rej(false)
        });

    })

    return seq

}
