"use strict"
const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Nota = require('../model/nota');

// Notas do estudante
router.get('/notas/:aluno_id',function(req,res,next){
    Nota.getNotasDoAluno({aluno_id: req.params.aluno_id},(err,notas) => {
        if(err){
            res.send(err);
        }
        res.json(notas);
    })
})

// Notas do estudante no mes X
router.get('/nota/:aluno_id/:mes',function(req,res,next){
    const condition = {aluno_id: req.params.aluno_id, mes: req.params.mes};
    Nota.getNotasPorMes(condition, (err,nota) => {
        if(err){
            res.send(err);
        }
        res.json(nota);
    })
})

// Adicionar nota do estudante Y no mes X
router.post('/nota/:aluno_id/:mes',function(req,res,next){
    let novaNota = new Nota({
        value: req.body.value,
        aluno_id: req.params.aluno_id,
        mes: req.params.mes
    })
    Nota.addNotaPorMes(novaNota, (err,nota) => {
        if(err){
            res.send(err);
        }
        res.json(nota);
    })
})

// Atualiza nota
router.put('/nota/:id',function(req,res,next){
    const nota = req.body;
    let uptNota = {};

    if(nota.value){
        uptNota = nota;
        uptNota._id = req.params.id;
    }

    Nota.updateNota(uptNota,(err,_nota) => {
        if(err){
            res.send(err);
        }
        res.json(_nota);
    })
})

// Deletar notas do estudante, caso ele seja deletado
router.delete('/notas/:aluno_id',function(req,res,next){
    Nota.removeNotas({aluno_id: req.params.aluno_id},(err,nota)=>{
        if(err){
            res.send(err);
        }
        res.json(nota);
    })
})

module.exports = router;
