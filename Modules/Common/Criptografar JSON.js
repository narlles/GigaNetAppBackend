const crypto = require('crypto')

module.exports = (json, chaveCriptografia) => {
    try {
        const jsonString = JSON.stringify(json);
        const cipher = crypto.createCipher('aes-256-cbc', chaveCriptografia);
        let encryptedData = cipher.update(jsonString, 'utf8', 'hex');
        encryptedData += cipher.final('hex');
        return encryptedData;
    } catch (error) {
        console.error(`Erro na criptografia do JSON:\n${error}`);
        throw error;
    }
}