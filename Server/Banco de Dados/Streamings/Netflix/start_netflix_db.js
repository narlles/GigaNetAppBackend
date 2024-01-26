const tb_cartoes_netflix = require("./Tables/cartoes_netflix");
const tb_clientes_netflix = require("./Tables/clientes_netflix");
const tb_contas_netflix = require("./Tables/contas_netflix");
const tb_gifts_netflix = require("./Tables/gifts_netflix");

async function carregarNetflix(database) {
    const promis = new Promise(async (res, rej) => {
        try {

            Promise.all([
                tb_clientes_netflix(database),
                tb_contas_netflix(database),
                tb_gifts_netflix(database),
                tb_cartoes_netflix(database)
            ]).then((tables) => {
                const [clientes_netflix, contas_netflix, gifts_netflix, cartoes_netflix] = tables;
                res({ clientes_netflix, contas_netflix, gifts_netflix, cartoes_netflix });
            });

        } catch (e) {
            console.log(e);
            rej(e)
        }
    })

    return await promis

}

module.exports = carregarNetflix