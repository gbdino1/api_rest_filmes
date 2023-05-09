const express = require("express");

const filmeModel = require("../model/filmeModel");

/* GERENCIADOR DE ROTAS*/
const router = express.Router();

/* ROTA DE INSERÇÃO DE FILME(POST)*/
router.post("/filme/inserir", (req, res) => {
    let nome_filme = req.body.nome_filme;

    filmeModel.create(
        {nome_filme}
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
    let nome_filme = req.body.nome_filme;

    filmeModel.update(
        { nome_filme}, 
        { where: { id } }
        ).then(() => {
            return res.status(200).json({
                errorStatus: false,
                mensageStatus: "filme adicionado de fomra top",
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
                mensageStatus: "FILME EXCLUIDA COM DESPRAZER, MAS SUCESSO",
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
