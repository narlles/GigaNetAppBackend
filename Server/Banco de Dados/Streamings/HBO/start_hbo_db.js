const tb_clientes_hbo = require("./Tables/clientes_hbo");
const tb_emails_hbo = require("./Tables/emails_hbo");

async function carregarHbo(database) {
    const promis = new Promise(async (res, rej) => {
        try {

            const [clientes_hbo, emails_hbo] = await Promise.all([
                await tb_clientes_hbo(database),
                await tb_emails_hbo(database)
            ])

            res({ clientes_hbo, emails_hbo })

        } catch (e) {
            console.log(e);
            rej(e)
        }
    })

    return await promis

}

module.exports = carregarHbo