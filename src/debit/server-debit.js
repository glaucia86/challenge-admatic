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
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const sql = require("mssql");
const port = 3000;

const post = require('./api/v1/debit');

//const config = require('config'); // aqui estaremos carregando a localização da base de dados através dos arquivos JSON.

//Opção das base de dados:
/*const options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};*/

//Conexão com a base de dados (via - MongoDB):
//mongoose.connect(config.DBHost, options);
///const db = mongoose.connection;
//db.on('error', console.error.bind(console, 'Erro ao conectar com a Base de Dados....: '));

//Conexão com a base de dados (via - MS SQL):
const connection = require("./connection/connection");

//Essa parte do código estaremos mostrando os logs quando acontecer os testes:
if(config.util.getEnv('NODE_ENV') !== 'Test') {

    //Aqui estamos usando 'morgan'. Ele é responsável por realizar as requisições de logger no middleware para Node.Js
    app.use(morgan('combined')); 
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.get("/", (req, res) => res.json({ message: "Sejam Bem-Vindos a API: B2WAds" }));

//Definição das rotas para: GET (Selecionar Todos)
app.route("/debits")
    .get(debito.getSumDebit);

//Definição da rota para: POST
app.route("/debit")
    .post(debito.addDebit);

//Definição das rotas para: GET (Retornar o Débito por Id)
app.route("/debit/:id")
    .get(debit.debitById);

app.listen(port);
console.log("Aplicação executando na porta.....: " + port);
module.exports = app;