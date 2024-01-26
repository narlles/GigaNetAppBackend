const config = require('../../Config.json')
const request = require('request')
const { parentPort } = require("worker_threads")

parentPort.on('message', async ({ id_fibra }) => {
    try {

        setTimeout(() => {
            parentPort.postMessage("N/I")
        }, 25000)

        const dados = await new Promise(async (resolve, reject) => {

            const options = {
                method: 'POST',
                url: `https://${config.host}/webservice/v1/botao_rel_22991`,
                headers:
                {
                    'Content-Type': 'application/json',
                    Authorization: 'Basic ' + new Buffer.from(config.token).toString('base64'),
                },
                body:
                {
                    "id": id_fibra
                },
                json: true
            };

            request(options, function (error, response, body) {

                if (error) {
                    console.log(`Houve um erro ao realizar potência resumo, o erro: ${error}`);
                    reject(error)
                    return
                }

                if (!body) {
                    reject(false); return
                }

                let sinalOnu = body.match(/Rx:\s*(-?\d+(\.\d+)?)/)

                if (sinalOnu === '-' || !sinalOnu) {
                    sinalOnu =
                        body.match(/Last down cause: (.*?)</) ||
                        body.match(/(Onu Offline!)/)
                }

                if (!sinalOnu) {
                    resolve(`N/I`)
                } else {
                    resolve(sinalOnu[1])
                }

            });

        })

        parentPort.postMessage(dados)

    } catch (error) {
        console.error(`Erro na thread Potência Resumo`);
    }
})