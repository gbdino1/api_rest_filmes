/* IMPORTAÇÃO DO SEQUELIZE */
const sequelize  = require('sequelize');

/* IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS */
const connection = require('../database/database');

const filme = connection.define(
    'tbl_filme',
    {
        titulo_filme:{
            type: sequelize.STRING,
            allowNull: false
        },

        genero_filme:{
            type: sequelize.STRING,
            allowNull: true
        },

        elenco_filme:{
            type: sequelize.STRING,
            allowNull: true
        },

        
        diretor_filme:{
            type: sequelize.STRING,
            allowNull: true
        },

        
        estudio_filme:{
            type: sequelize.STRING,
            allowNull: true
        },
    }
);

//filme.sync({force:true});

module.exports = filme;
