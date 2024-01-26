module.exports = async (id) => {
    try {
        return await global.ixc.os.findOne({ where: { id: id } })
    } catch (error) {
        console.log(`Erro ao buscar OS por ID:\n${error}`);
    }
}