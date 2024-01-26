const crypto = require('crypto')

module.exports = (jsonCriptografado, chaveCriptografia) => {
    try {

        if (typeof jsonCriptografado !== "string") { throw "Formato inválido!"}

        const decipher = crypto.createDecipher('aes-256-cbc', chaveCriptografia);
        let decryptedData = decipher.update(jsonCriptografado, 'hex', 'utf8');
        decryptedData += decipher.final('utf8');
        return JSON.parse(decryptedData);
    } catch (error) {
        console.error(`Erro na descriptografia do JSON:\n${error}`);
        throw error;
    }
}