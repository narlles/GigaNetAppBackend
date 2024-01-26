const BuscarCliente = require("../Buscar Cliente");

module.exports = async (token) => {
    try {

        const sessao = await global.db.sessoes.findOne({
            where: { token }
        })

        if (!sessao) {
            return { status: 401, message: `Token inválido` }
        }

        const cliente = await BuscarCliente({ id: sessao.usuario })

        if (cliente.code) {
            return { status: cliente.code, message: cliente.data }
        }

        return cliente

    } catch (error) {
        console.error(`Erro ao validar token\n${error}`);
        return { status: 500, message: `Ocorreu um erro ao validar token, tente novamente mais tarde, se o erro persistir contate o suporte!` }
    }
}