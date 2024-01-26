const ConectarAoMySQL = require("../../../Modules/Common/Conectar ao MySQL");
const CTOs = require("./Tabelas/CTOs");
const Clientes = require("./Tabelas/Clientes");
const Consumo_m = require("./Tabelas/Consumo_m");
const Contratos = require("./Tabelas/Contratos");
const Fibra = require("./Tabelas/Fibra");
const Funcionarios = require("./Tabelas/Funcionarios");
const Fibra_Historico = require("./Tabelas/Histórico");
const Logins = require("./Tabelas/Logins");
const OS = require("./Tabelas/Ordens De Serviço");
const Transmissores = require("./Tabelas/Transmissores");

module.exports = async () => {
    try {

        const sequelize = await ConectarAoMySQL('10.254.1.3',
            process.env.IXC_USER,
            process.env.IXC_PASS,
            'ixcprovedor')

        const [clientes, contratos, fibras, logins, os, transmissores, funcionarios, ctos, fibra_historico, consumo_m] = await Promise.all([
            Clientes(sequelize),
            Contratos(sequelize),
            Fibra(sequelize),
            Logins(sequelize),
            OS(sequelize),
            Transmissores(sequelize),
            Funcionarios(sequelize),
            CTOs(sequelize),
            Fibra_Historico(sequelize),
            Consumo_m(sequelize)
        ]);

        const IXC = { clientes, contratos, fibras, logins, os, transmissores, funcionarios, ctos, fibra_historico, consumo_m, sequelize }

        global.ixc = IXC

        console.info("Conectado ao BD IXC")

        return IXC

    } catch (error) {
        console.log(`Erro ao Iniciar a base de dados do IXC:\n` + error);
        return false;
    }

}
