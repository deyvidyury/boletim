const mongoose = require('mongoose');
const config = require('../config/database');

// Aluno schema
const AlunoSchema = mongoose.Schema({
	nome: {
		type: String
	}
});

const Alunos = module.exports = mongoose.model('Alunos',AlunoSchema);

module.exports.getTodosAlunos = function(callback){
	Alunos.find(callback);
}

module.exports.getAlunoById = function(id,callback){
	Alunos.findById(id,callback);
}

module.exports.getAlunoByName = function(_nome, callback){
	Alunos.find({nome: new RegExp(_nome,'ig')}, callback);
}

module.exports.addAluno = function (novoAluno, callback){
	novoAluno.save(callback);
}

module.exports.updateAluno = function(novoAluno, callback){
	const query = {_id: novoAluno.id}
    Alunos.findOneAndUpdate(query,{nome: novoAluno.nome},callback);
}

module.exports.removeAluno = function(id,callback){
    Alunos.remove(id,callback);
}

module.exports.removeAll = function(callback){
	Alunos.remove({},callback);
}