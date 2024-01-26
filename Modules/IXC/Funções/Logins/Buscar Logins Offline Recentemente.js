const { Op } = require("sequelize");

module.exports = async () => {
    try {

        const ixc = global.ixc

        const logins = await ixc.logins.findAll({
            where: {
                online: 'N',
                ativo: 'S',
                ultima_conexao_final: {
                    [Op.gte]: Ultimo_Dia()
                }
            },
            order: [['ultima_conexao_final', 'DESC']],
            raw: true
        })

        return logins

    } catch (error) {
        console.log(`Erro ao buscar logins offline recentemente!\n${error}`);
    }
}

function Ultimo_Dia() {
    const agora = new Date();
    const TrintaMinutosAtras = new Date(agora.getTime() - 24 * 60 * 60 * 1000);
    return TrintaMinutosAtras;
}