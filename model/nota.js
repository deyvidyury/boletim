const mongoose = require('mongoose');
const config = require('../config/database');

// Schema Nota
const NotaSchema = mongoose.Schema({
    aluno_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    value: {
        type: Number,
        default: 0
    },
    mes: {
        type: Number
    }
});

const Nota = module.exports = mongoose.model('Nota',NotaSchema);

module.exports.getAll = function(callback){
    Nota.find(callback);
}

module.exports.getNotasDoAluno = function(aluno_id,callback){
    Nota.find(aluno_id,callback);
}

module.exports.getNotasPorMes = function(condition,callback){
    // console.log(condition);
    // const query = {aluno_id, mes};
    Nota.find(condition,callback);
}

module.exports.addNotaPorMes = function(novaNota,callback){
    novaNota.save(callback);
}

module.exports.updateNota = function(uptNota,callback){
    const query = {_id: uptNota._id}
    Nota.findOneAndUpdate(query,{value: uptNota.value},callback);
}

module.exports.removeNotas = function(aluno_id,callback){
    Nota.remove(aluno_id,callback);
}

module.exports.removeAll = function(callback){
    Nota.remove({},callback);
}