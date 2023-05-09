/*IMPORTAÇÃO DO SEQUELIZE*/
const sequelize = require('sequelize');

/*CRAÇÃO DA CONEXÃO COM O BANCO DE DADOS*/
const connection = new sequelize(
    'api_filminhos',
    'root',
    '',
    {
        host:'localhost',
        port:'3307',
        dialect:'mysql',
        timezone:'-03:00'
    }
);

module.exports = connection;