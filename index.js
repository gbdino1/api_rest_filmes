/* IMPORTACAO DO PACOTE EXPRESS */
const express = require('express');

/*INSTANCIA EXECUTAVEL DO EXPRESS*/
const app = express();

/*HABILITA A APLICAÇÃO A MANIPULAR JSON*/
app.use(express.json());

/*HABILITA A APLICAÇÃO A MANIPULA DADOS DE UM CORPO DE DADOS*/
app.use(express.urlencoded({extended:true}))

/*CRIAÇÃO */
app.listen(3000, ()=>{
    console.log('Servidor rodando em http://localhost:3000/');
});