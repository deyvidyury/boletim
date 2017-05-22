"use strict"
const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Aluno = require('../model/aluno');

// Get para todos os estudantes
router.get('/alunos',function(req,res,next){
    Aluno.getTodosAlunos((err,estudantes)=>{
        if(err){
            res.send(err);
        }
        return res.json(estudantes);
    });
});

//Get aluno por id
router.get('/aluno/:id',function(req,res,next){
    Aluno.getAlunoById({_id: req.params.id},(err,aluno)=>{
        if(err){
            res.send(err);
        }
        res.json(aluno);
    })
})

// Get aluno por nome
router.get('/aluno',function(req,res,next){
    var nome = req.query.nome
    Aluno.getAlunoByName({nome: nome},(err,aluno)=>{
        if(err){
            res.send(err);
        }
        res.json(aluno);
    })
})

// Inclui aluno
router.post('/aluno',function(req,res,next){
    let novoAluno = new Aluno({
        nome: req.body.nome
    });

    console.log(novoAluno);

    Aluno.addAluno(novoAluno, (err,aluno) => {
        if(err){
            res.json(err);
            //res.json({success: false, msg:"Nao pode salvar estudante"});
        } else {
            res.json(aluno);
            // //res.json({success: true, msg:"Estudante cadastrado"});
            // // Criar quatro notas para o aluno
            // for(var i=1;i<=4;i++){
            //     var nota = new Nota({
            //         std_id: estudante._id,
            //         mes: i
            //     });
            //     Nota.addNotaPorMes(nota);
            // }
        }
    })


})

// Atualiza aluno
router.put('/aluno',function(req,res,next){
    const id = req.params.id;
    const aluno = req.body;
    let uptAluno = {};

    if(aluno.nome){
        uptAluno = req.body;
    }

    console.log(uptAluno);

    Aluno.updateAluno(uptAluno,(err,_aluno) => {
        if(err){
            res.send(err);
        }
        res.json(_aluno);
    })

    // if(!uptEstudante){
    //     res.status(400);
    //     res.json({"error":"Bad data"});
    // } else {
    //     Estudante.updateEstudante(uptEstudante,(err,estudante) => {
    //         if(err) throw err;
    //         res.json(estudante);
    //     })
    // }
})

router.delete('/aluno/:id',function(req,res,next){
    Aluno.removeAluno({_id: req.params.id},(err,aluno) => {
        if(err) {
            res.send(err);
        } else {
            res.json({'status':'Aluno removido'});
            // deletar notas do estudante
            //Nota.removeNotas({std_id: req.params.id});
        }

    })
})

module.exports = router;
