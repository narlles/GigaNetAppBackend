const { buscarPIXPorIDFatura } = require("../../7AZ/Funções");
const ValidarToken = require("../Utils/ValidarToken");

module.exports = async (req, res) => {
    try {

        const { fatura: id_fatura } = req.params
        const { token } = req.headers

        if (!token || !id_fatura) { res.status(400).send(`Cabeçalho token ou parâmetro fatura faltando!`); return }

        const cliente = await ValidarToken(token)
        if (cliente.status) { res.status(cliente.status).send(cliente.message); return }

        const fatura = await buscarPIXPorIDFatura(id_fatura)

        res
            .status(200)
            .send(fatura)

    } catch (error) {
        console.error(`Erro ao buscar fatura\n${error}`);
        res.status(500).send(`Ocorreu um erro ao buscar fatura, tente novamente mais tarde, se o erro persistir contate o suporte!`)
    }
}