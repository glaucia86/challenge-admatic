/**
 *
 * Arquivo: server-debit.js
 * Author: Glaucia Lemos
 * Description: Arquivo principal e responsável por executar a API.
 * Data: 04/02/2017
 *
 */

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const sql = require('mssql');
const connection = require('./connection/connection'); //Conexão com a base de dados (via - MS SQL):
const debit = require('../debit/api/v1/debit');
const port = 3000;

const post = require('./api/v1/debit');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.get("/", (req, res) => res.json({ message: "Sejam Bem-Vindos a API: B2WAds" }));

//Definição das rotas para: GET (Retornar a soma dos débitos)
app.route("/debits")
    .get(debit.getSumDebit);

//Definição da rota para: POST
/*app.route("/debit")
    .post(debit.addDebit);

//Definição das rotas para: GET (Retornar o Débito por Id)
app.route("/debit/:id")
    .get(debit.debitById);*/

app.listen(port);
console.log("Aplicação executando na porta.....: " + port);
module.exports = app;