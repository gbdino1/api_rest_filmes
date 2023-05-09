/* IMPORTAÇÃO DO SEQUELIZE */
const sequelize  = require('sequelize');

/* IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS */
const connection = require('../database/database');

const categoria = connection.define(
    'tbl_filme',
    {
        filme:{
            type: sequelize.STRING,
            allowNull: false
        }
    }
);

//categoria.sync({force:true});

module.exports = categoria;
