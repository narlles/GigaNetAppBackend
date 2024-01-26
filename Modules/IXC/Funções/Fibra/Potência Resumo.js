const path = require('path');
const { Worker } = require('worker_threads');

const MAX_WORKERS = 12
let WORKERS = 0

module.exports = async (id_fibra) => {

    while (WORKERS > MAX_WORKERS) { await esperar(500) }

    WORKERS += 1

    const sinal = await new Promise((resolve, reject) => {
        try {

            const worker = new Worker(path.join(__dirname, "..", "..", "Workers", "Fibra", "Potência Resumo.js"));

            worker.on('message', (resultado) => {
                
                worker.terminate()

                if (resultado.includes("dying-gasp")) {
                    resolve("sem energia"); return
                }

                resolve(resultado)

            });

            worker.postMessage({ id_fibra });

            setTimeout(()=>{resolve("N/I")}, 25000)

        } catch (error) {
            console.error(`Erro ao realizar potência resumo\n${error}`);
            reject(error)
        }
    })

    WORKERS -= 1

    return sinal

}

async function esperar(ms) {
    return await new Promise((resolve) => { setTimeout(resolve, ms) })
}