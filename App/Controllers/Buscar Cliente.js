const { Op } = require("sequelize")
const BuscarCidadePorID = require("../../Modules/IXC/Funções/Cidades/Buscar Cidade Por ID")

module.exports = async (filtro) => {
    try {

        const cliente = await global.ixc.clientes.findOne({
            where: filtro,
            raw: true
        })

        if (!cliente) {
            return { code: 401, data: `Usuário ou senha incorretos!` }
        } else {
            cliente.cidade = BuscarCidadePorID(cliente.cidade)
        }

        const contrato = await global.ixc.contratos.findOne({
            where: {
                status: "A",
                id_cliente: cliente.id
            },
            raw: true
        })

        if (!contrato) {
            return { code: 401, data: `Usuário ou senha incorretos!` }
        }

        const login = await global.ixc.logins.findOne({
            where: {
                ativo: "S",
                id_cliente: cliente.id,
                id_contrato: contrato.id
            },
            raw: true
        })

        if (!login) {
            return { code: 401, data: `Usuário ou senha incorretos!` }
        }

        const consumo = await global.ixc.consumo_m.findOne({
            where: {
                id_login: login.id,
                data: {
                    [Op.lte]: new Date()
                }
            },
            raw: true
        })

        if (consumo) {
            login.download = converterBytes(consumo.consumo)
            login.upload = converterBytes(consumo.consumo_upload)
            login.data_consumo = consumo.data
        }

        return { cliente, contrato, login }

    } catch (error) {
        console.error(`Erro ao buscar cliente\n${error}`);
        return { code: 500, data: `Ocorreu um erro ao realizar login, tente novamente mais tarde!` }
    }
}

function converterBytes(bytes) {
    try {

        if (bytes < 1024) {
            return `${bytes} B`
        } else if (bytes < 1048576) {
            return `${(bytes / 1024).toFixed(2)} KB`
        } else if (bytes < 1073741824) {
            return `${(bytes / 1048576).toFixed(2)} MB`
        } else {
            return `${(bytes / 1073741824).toFixed(2)} GB`
        }

    } catch (error) {
        console.error(`Erro ao converter bytes\n${error}`);
    }
}