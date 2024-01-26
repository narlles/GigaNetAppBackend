module.exports = (tamanho) => {

    const caracteres = '0123456789';
    let resultado = '';

    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        resultado += caracteres.charAt(indiceAleatorio);
    }

    return Number(resultado);

}