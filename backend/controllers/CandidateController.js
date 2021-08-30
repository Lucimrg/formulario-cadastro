const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { nome, cargo, dia, mes, ano, genero, estado_civil, celular, telefone, email, cep, logradouro, numero_logradouro, complemento_logradouro, bairro, cidade, estado, cpf, rg, habilitacao, veiculo } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.cargo = cargo;
        newCandidate.dia = dia;
        newCandidate.mes = mes;
        newCandidate.ano = ano;
        newCandidate.genero = genero;
        newCandidate.estado_civil = estado_civil;
        newCandidate.celular = celular;
        newCandidate.telefone = telefone;
        newCandidate.email = email;
        newCandidate.cep = cep;
        newCandidate.logradouro = logradouro;
        newCandidate.numero_logradouro = numero_logradouro;
        newCandidate.complemento_logradouro = complemento_logradouro;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.estado = estado;
        newCandidate.cpf = cpf;
        newCandidate.rg = rg;
        newCandidate.habilitacao = habilitacao;
        newCandidate.veiculo = veiculo;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }

            return res.status(200).send(savedCandidate);
        });
    }, 

};