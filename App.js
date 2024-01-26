require('dotenv').config()
const IniciarServidor = require("./App/Servidor/Iniciar Servidor");
const Assinatura = require("./Modules/William Gerhard/Assinatura");
const IniciarBancoDeDados = require("./Server/Banco de Dados/Iniciar Banco de Dados");

(async function () {

    Assinatura()
    await IniciarBancoDeDados()
    IniciarServidor(18500)

})()