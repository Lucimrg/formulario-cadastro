const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true},
    cargo: { type: String, unique: false, required: true},
    dia: { type: String, unique: false, required: true},
    mes: { type: String, unique: false, required: true},
    ano: { type: String, unique: false, required: true},
    genero: { type: String, unique: false, required: false},
    estado_civil: { type: String, unique: false, required: false},
    celular: { type: String, unique: false, required: true},
    telefone: { type: String, unique: false, required: false},
    email: { type: String, unique: true, required: true},
    cep: { type: String, unique: false, required: true},
    logradouro: { type: String, unique: false, required: true},
    numero_logradouro: { type: String, unique: false, required: true},
    complemento_logradouro: { type: String, unique: false, required: false},
    bairro: { type: String, unique: false, required: true},
    cidade: { type: String, unique: false, required: true},
    estado: { type: String, unique: false, required: true},
    cpf: { type: String, unique: true, required: true},
    rg: { type: String, unique: false, required: false},
    habilitacao: { type: String, unique: false, required: false},
    veiculo: { type: String, unique: false, required: false} 
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);