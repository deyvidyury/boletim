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

// Get estudante por id
// router.get('/estudante/:id',function(req,res,next){
//     Estudante.getEstudanteById({_id: req.params.id},(err,estudante)=>{
//         if(err){
//             res.send(err);
//         }
//         res.json(estudante);
//     })
// })

// // ! Not working
// // Get estudante por nome
// router.post('/estudante/nome',function(req,res,next){
//     Estudante.getEstudanteByName({name: req.body.name},(err,estudante)=>{
//         if(err){
//             res.send(err);
//         }
//         res.json(estudante);
//     })
// })

// // Save estudante
// router.post('/estudante',function(req,res,next){
//     let novoEstudante = new Estudante({
//         name: req.body.name
//     });

//     // console.log(req.body);

//     Estudante.addEstudante(novoEstudante, (err,estudante) => {
//         if(err){
//             res.json(err);
//             //res.json({success: false, msg:"Nao pode salvar estudante"});
//         } else {
//             res.json(estudante);
//             //res.json({success: true, msg:"Estudante cadastrado"});
//             // Criar quatro notas para o aluno
//             for(var i=1;i<=4;i++){
//                 var nota = new Nota({
//                     std_id: estudante._id,
//                     mes: i
//                 });
//                 Nota.addNotaPorMes(nota);
//             }
//         }
//     })


// })

// // Atualiza estudante
// router.put('/estudante',function(req,res,next){
//     const estudante = req.body;
//     let uptEstudante = {};

//     if(estudante.name){
//         uptEstudante = req.body;
//     }

//     console.log(uptEstudante);

//     Estudante.updateEstudante(uptEstudante,(err,_estudante) => {
//         if(err){
//             res.send(err);
//         }
//         res.json(_estudante);
//     })

//     // if(!uptEstudante){
//     //     res.status(400);
//     //     res.json({"error":"Bad data"});
//     // } else {
//     //     Estudante.updateEstudante(uptEstudante,(err,estudante) => {
//     //         if(err) throw err;
//     //         res.json(estudante);
//     //     })
//     // }
// })

// router.delete('/estudante/:id',function(req,res,next){
//     Estudante.removeEstudante({_id: req.params.id},(err,estudante) => {
//         if(err) {
//             res.send(err);
//         } else {
//             res.json(estudante);
//             // deletar notas do estudante
//             Nota.removeNotas({std_id: req.params.id});
//         }

//     })
// })

module.exports = router;
