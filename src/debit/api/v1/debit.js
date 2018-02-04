/*
 *
 * Arquivo: api/v1/post.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável pelas rotas das APIS: GET, PUT, DELETE & POST
 * Data: 04/02/2018
 * 
 */

const connection = require("../../connection/connection");

//Retornar a Soma dos Débitos:

exports.getSumDebit = function(req, res) {
  var request = new sql.Request();
  request
    .query("SELECT * FROM Debit")
    .then(function(recordset) {
      res.json(recordset);
    })
    .catch(function(err) {
      console.log(err.message);
    });
};


