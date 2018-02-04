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
