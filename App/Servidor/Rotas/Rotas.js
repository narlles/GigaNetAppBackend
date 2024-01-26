const express = require("express");
const Login = require("../../Controllers/Login");
const Faturas = require("../../Controllers/Faturas/Faturas");
const PIX = require("../../Controllers/Faturas/PIX");
const Boleto = require("../../Controllers/Faturas/Boleto");
const rotas = express.Router()

rotas.post("/login", Login)

rotas.get('/faturas/pix/:fatura', PIX)
rotas.get('/faturas/boleto/:fatura', Boleto)
rotas.get("/faturas", Faturas)

module.exports = rotas