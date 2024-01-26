const { Op } = require("sequelize");

module.exports = async () => {
    try {

        const ixc = global.ixc

        const logins = await ixc.logins.findAll({
            where: {
                online: 'S',
                ativo: 'S',
                ultima_conexao_inicial: {
                    [Op.gte]: Ultimo_Dia()
                },
            },
            order: [['ultima_conexao_inicial', 'DESC']],
            raw: true
        })

        return logins

    } catch (error) {
        console.log(`Erro ao buscar logins online recentemente!\n${error}`);
    }
}

function Ultimo_Dia() {
    const agora = new Date();
    const UmaHoraAntes = new Date(agora.getTime() - 24 * 60 * 60 * 1000);
    return UmaHoraAntes;
}