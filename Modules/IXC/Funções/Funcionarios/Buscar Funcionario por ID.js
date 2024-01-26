module.exports = async (id) => {
    try {
        return await global.ixc.funcionarios.findOne({ where: { id: id } })
    } catch (error) {
        console.log(`erro ao buscar técnico por ID\n${error}`);
    }
}