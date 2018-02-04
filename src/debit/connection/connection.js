/**
 *
 * Arquivo: connection.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável por tratar a conexão com a base de dados MS SQL.
 * Data: 04/02/2017
 *
 */

//Chamada do MS SQL:
const sql = require('msssql');

//Configuração do SQL:
const config = {
  user: "sa",
  password: "glau123",
  server: "localhost",
  database: "B2WAds",

  options: {
    encrypt: false // Use 'true' if you're on Windows Azure!
  }
};

//Conexão com a base de dados:
sql.connect(config).then(function() {
    console.log('Base de Dados conectado com Sucesso!');

}).catch(function(err) {
    console.log('Errro ao realizar a conexão com a Base de dados!');
});

//Retornar a soma dos Débitos:
//Get all contacts
exports.getSumDebit = function(req, res) {
  const request = new sql.Request();
  request
    .query("SELECT * FROM debits")
    .then(function(recordset) {
      res.json(recordset);
    })
    .catch(function(err) {
      console.log(err.message);
    });
};
