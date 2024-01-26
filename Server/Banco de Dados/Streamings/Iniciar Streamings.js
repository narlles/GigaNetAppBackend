const ConectarAoMySQL = require("../../../Modules/Common/Conectar ao MySQL");
const carregarHbo = require("./HBO/start_hbo_db")
const carregarNetflix = require("./Netflix/start_netflix_db")

module.exports = async () => {

    const database = await ConectarAoMySQL("10.254.1.61", "cristian", "cristian@123", 'controle_de_streamings')

    return await new Promise(async (resolve, reject) => {

        const [hbo, netflix] = await Promise.all([
            carregarHbo(database),
            carregarNetflix(database),
        ])

        global.streamings = { hbo, netflix }

        console.log(`Conectado ao DB Streamings`);

        resolve()

    })
}