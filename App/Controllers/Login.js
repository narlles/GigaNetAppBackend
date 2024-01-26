const BuscarCliente = require("./Buscar Cliente");

module.exports = (req, res) => {
    try {

        login(req.body, req.ip).then((response) => {
            res.status(response.code).send(response.data)
        })

    } catch (error) {
        console.error(`Erro na rota /login\n${error}`);
        res.status(500).send(`Erro interno, se persistir, contate o suporte técnico`)
    }
}

async function login({ usuario, senha }, ip) {
    try {

        if (!usuario || !senha) {
            return { code: 400, data: `Parâmetros Usuário ou senha faltando!` }
        }

        const cliente = await BuscarCliente({ hotsite_email: usuario, senha })

        if (cliente.code) {
            return { code: cliente.code, data: cliente.data }
        }

        const streamings = await verificar_streaming(cliente.cliente.id)

        await global.db.sessoes.destroy({ where: { usuario: cliente.cliente.id } })

        const token = gerarToken(25)

        await global.db.sessoes.create({
            origem: ip,
            token,
            usuario: cliente.cliente.id
        })

        await global.db.logs.create({
            evento: "Login", origin: ip, usuario: cliente.id, nivel: "INFO", status: "SUCESS", extra: token
        })

        return {
            code: 200,
            data: { ...cliente, streamings, token }
        }

    } catch (error) {
        console.error(`Erro na função Login\n${error}`);
    }
}

async function verificar_streaming(id_cliente) {
    try {

        const [hbo, netflix] = await Promise.all([
            global.streamings.hbo.clientes_hbo.findAll({ where: { id_cliente }, raw: true }),
            global.streamings.netflix.clientes_netflix.findAll({ where: { id_cliente }, raw: true })
        ])

        if (hbo && hbo.length > 0) {
            for (const acesso of hbo) {
                const login = await global.streamings.hbo.emails_hbo.findOne({ where: { id_email: acesso.id_email }, raw: true })
                if (!login) continue
                acesso.senha = login.senha; acesso.email = login.email
            }
        }

        if (netflix && netflix.length > 0) {
            for (const acesso of netflix) {
                const login = await global.streamings.netflix.contas_netflix.findOne({ where: { id: acesso.id_conta }, raw: true })
                if (!login) continue
                acesso.senha = login.senha; acesso.email = login.email
            }
        }

        return { hbo, netflix }

    } catch (error) {
        console.error(`Erro ao verificar Streaming:\n${error}`);
    }
}

function gerarToken(tamanho) {
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let token = "";
    for (let i = 0; i < tamanho; i++) {
        token += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    return token;
}