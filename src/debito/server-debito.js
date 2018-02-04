/**
 *
 * Arquivo: server-debito.js
 * Author: Glaucia Lemos
 * Description: Arquivo principal e responsável por executar a API.
 * Data: 04/02/2017
 *
 */

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var port = 3000;

var post = require('./api/v1/debito');
var config = require('config'); // aqui estaremos carregando a localização da base de dados através dos arquivos JSON.

//Opção das base de dados:
var options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

//Conexão com a base de dados:
mongoose.connect(config.DBHost, options);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro ao conectar com a Base de Dados....: '));