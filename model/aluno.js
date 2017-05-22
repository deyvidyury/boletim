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

// module.exports.getAlunoById = function(id,callback){
// 	Alunos.findById(id,callback);
// }

// module.export.getAlunoByName = function(nome, callback){
// 	Alunos.findOne({nome: nome}, callback);
// }

module.exports.addAluno = function (novoAluno, callback){
	novoAluno.save(callback);
}

// module.exports.updateAluno = function(novoAluno, callback){
// 	const query = {_id: novoAluno._id}
//     Alunos.findOneAndUpdate(query,{nome: novoEstudante.nome},callback);
// }

// module.exports.removeAluno = function(id,callback){
//     Alunos.remove(id,callback);
// }