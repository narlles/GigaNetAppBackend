const request = require('request');
const config = require('../../Config.json')

module.exports = async ({ mensagem }) => {
    return await new Promise((resolve, reject) => {
        let options = {
            method: 'POST',
            url: `https://${config.host}/webservice/v1/su_oss_chamado`,
            headers:
            {
                'Content-Type': 'application/json',
                Authorization: 'Basic ' + new Buffer.from(config.token).toString('base64')
            },
            body: {
                'tipo': 'C',
                'id_assunto': '57',
                'id_cliente': '13387',
                'id_filial': '1',
                'origem_endereco': 'C',
                'prioridade': 'N',
                'melhor_horario_agenda': 'Q',
                'setor': '14',
                'mensagem': mensagem,
                'status': 'A',
                'gera_comissao': 'S',
                'liberado': '1',
                'id_atendente': '1',
                'valor_unit_comissao': '0,00',
                'valor_total_comissao': '0,00'
            },
            json: true
        };

        request(options, function (error, response, body) {

            if (error) {
                console.log(`Houve um erro ao gerar OS de rompimento, o erro: ${error}`);
                resolve(false)
                return
            }

            if (!body) {
                resolve(false); return
            }

            resolve(body)

        });
    })
}