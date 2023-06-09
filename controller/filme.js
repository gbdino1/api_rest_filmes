const express = require("express");

const filmeModel = require("../model/filmeModel");

/* GERENCIADOR DE ROTAS*/
const router = express.Router();

/* ROTA DE INSERÇÃO DE FILME(POST)*/
router.post("/filme/inserir", (req, res) => {
    let titulo_filme = req.body.titulo_filme;

    filmeModel.create(
        {titulo_filme}
        ).then(() => {
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: "FILME ADCIONADO DE FORMA TOP",
            });
        })
        .catch((error) => {
            return res.status(500).json({
                errorStatus: true,
                mensageStatus: error,
            });
        });
});

/* ROTA DE SELEÇÃO DE FILME(GET)*/
router.get("/filme/selecionar", (req, res) => {
    filmeModel.findAll()
        .then((filme) => {
            //console.log(filme);
            res.json(filme);
        })
        .catch((error) => {
            return res.status(500).json({
                errorStatus: true,
                mensageStatus: error,
            });
        });
});

/* ROTA DE ALTERAÇÃO DE filme(PUT)*/
router.put("/filme/alterar", (req, res) => {
    let id = req.body.id;
    let titulo_filme = req.body.titulo_filme;

    filmeModel.update(
        { titulo_filme}, 
        { where: { id } }
        ).then(() => {
            return res.status(200).json({
                errorStatus: false,
                mensageStatus: "filme alterado de forma top",
            });
        })
        .catch((error) => {
            return res.status(500).json({
                errorStatus: true,
                mensageStatus: error,
            });
        });
});

/* ROTA DE EXCLUSÃO DE CATEGORIA(DELETE)*/
router.delete("/filme/excluir/:id", (req, res) => {
    let id = req.params.id;
    console.log("ID: " + id);

    filmeModel.destroy(
        { where: { id } }
        ).then(() => {
            return res.status(200).json({
                errorStatus: false,
                mensageStatus: "FILME EXCLUIDO COM DESPRAZER, MAS SUCESSO",
            });
        })
        .catch((error) => {
            return res.status(500).json({
                errorStatus: true,
                mensageStatus: error,
            });
        });
});

module.exports = router;
