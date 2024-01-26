const cidades = require('../../Cache/CidadesIXC.json')

module.exports = (id) => {
    const cidade = cidades.find((c) => c.id == id)
    if (cidade && cidade.nome) { return cidade.nome }
    return false
}