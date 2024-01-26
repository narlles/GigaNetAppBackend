const { buscarFaturasPorCPF } = require("../../7AZ/Funções");
const ValidarToken = require("../Utils/ValidarToken");


module.exports = async (req, res) => {
    try {

        const cliente = await ValidarToken(req.headers.token)

        if (cliente.status) {
            res.status(cliente.status).send(cliente.message); return
        }

        const faturas = await buscarFaturasPorCPF(cliente.cliente.cnpj_cpf.replace(".", "").replace("-", "").replace("/", ""))

        if (!faturas) {
            res.status(400).send(`Faturas não encontradas`)
        }

        for (const fatura of faturas) {

            const data_fatura = new Date(fatura.dueDate)
            const hoje = new Date()

            fatura.vencida = (data_fatura - hoje < 0)

        }

        res.status(200).send((faturas))

    } catch (error) {
        console.error(`Erro na rota /faturas\n${error}`);
        res.status(500).send(`Ocorreu um erro ao buscar faturas, tente novamente mais tarde, se o erro persistir contate o suporte!`)
    }
}