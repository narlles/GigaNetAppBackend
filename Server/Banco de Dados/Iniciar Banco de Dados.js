const IniciarBdIXC = require("./IXC/Iniciar BD IXC")
const IniciarIStreamings = require("./Streamings/Iniciar Streamings")
const IniciarAPP = require("./APP/Iniciar App")

module.exports = async () => {
    try {

        await Promise.all([
            await IniciarBdIXC(),
            await IniciarIStreamings(),
            await IniciarAPP()
        ])

    } catch (error) {
        console.error(`Erro ao iniciar banco de dados!\n${error}`);
    }
}