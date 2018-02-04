/**
 *
 * Arquivo: connection.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável por tratar a conexão com a base de dados MS SQL.
 * Data: 04/02/2017
 *
 */

//Chamada do MS SQL:
const sql = require('mssql');

//Configuração do SQL:
const config = {
  user: "sa",
  password: "glau123",
  server: "localdb\\MSSQLLocalDB",
  port: "1433",
  database: "B2WAds",

  options: {
    encrypt: false // Use 'true' if you're on Windows Azure!
  }
};

//Conexão com a base de dados:
sql.connect(config).then(function() {
    console.log('Base de Dados conectado com Sucesso!');

}).catch(function(err) {
    console.log('Erro ao realizar a conexão com a Base de dados!');
});

