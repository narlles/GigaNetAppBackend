const token = process.env.TOKEN_7AZ;
const request = require('request');

async function buscarFaturasPorCPF(cpf) {
    try {
        const consulta = new Promise(async (res, rej) => {

            const options = {
                method: 'GET',
                url: `https://api.7az.com.br/v2/integrations/omnichannel/invoices?txId=${cpf}`,
                headers: { 'x-api-key': token }
            };

            request(options, (error, response, body) => {
                if (error) rej(error);
                res(body)
            })

        })

        return JSON.parse(await consulta)

    } catch (error) {
        console.log(error);
        rej(error)
    }
}

async function buscarPDFPorIDFatura(ID) {
    try {
        const consulta = new Promise(async (res, rej) => {

            const options = {
                method: 'GET',
                url: `https://api.7az.com.br/v2/integrations/omnichannel/invoices/${ID}/pdf`,
                headers: { 'x-api-key': token },
                encoding: null
            };

            request(options, (error, response, body) => {
                if (error) rej(error);
                res(body)
            })

        })

        return await consulta

    } catch (error) {
        console.log(error);
        rej(error)
    }
}

async function buscarPIXPorIDFatura(ID) {
    try {
        const consulta = await new Promise(async (res, rej) => {

            const options = {
                method: 'GET',
                url: `https://api.7az.com.br/v2/integrations/omnichannel/invoices/${ID}/payment-data`,
                headers: { 'x-api-key': token }
            };

            request(options, (error, response, body) => {
                if (error) rej(error);
                res(JSON.parse(body))
            })

        })

        return await consulta

    } catch (error) {
        console.log(error);
        rej(error)
    }
}

module.exports = {
    buscarFaturasPorCPF,
    buscarPDFPorIDFatura,
    buscarPIXPorIDFatura
}