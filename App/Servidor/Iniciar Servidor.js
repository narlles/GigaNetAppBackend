const http = require('http');
const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const fs = require('fs');

module.exports = function (port) {
    const server = express();

    const protocol = process.env.PROTOCOL || 'http';

    if (protocol === 'https') {

        const privateKey = fs.readFileSync(__dirname + '/ssl/code.key')
        const certificate = fs.readFileSync(__dirname + '/ssl/code.crt')

        const credentials = { key: privateKey, cert: certificate };

        https.createServer(credentials, server)
            .listen(port, () => {
                console.log(`Servidor HTTPS sendo executado na porta ${port}`);
            });

    } else {

        http.createServer(server)
            .listen(port, () => {
                console.log(`Servidor HTTP sendo executado na porta ${port}`);
            });

    }

    server.use(bodyParser.json());
    server.use(cors({ origin: true }));

    const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 150, }); // 150 requisições por 15 minutos
    server.use(limiter);

    const routes = require('./Rotas/Rotas');
    server.use('/', routes);

};
