'use strict';

const limparFormulario = (endereco) =>{
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}


const preencherFormulario = (endereco) =>{
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}


const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep); 

const pesquisarCep = async() => {
    limparFormulario();
    
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value = 'CEP não encontrado!';
        }else {
            preencherFormulario(endereco);
        }
    }else{
        document.getElementById('endereco').value = 'CEP incorreto!';
    }
     
}

document.getElementById('cep')
        .addEventListener('focusout',pesquisarCep);

function check_form() {
    let nome = document.getElementById('nome').value;
    let cargo = document.getElementById('cargo').value;
    let dia = document.getElementById('dia').value;
    let mes = document.getElementById('mes').value;
    let ano = document.getElementById('ano').value;
    let cep = document.getElementById('cep').value;
    let endereco = document.getElementById('endereco').value;
    let numero_casa = document.getElementById('num_casa').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let celular = document.getElementById('celular').value;
    let email = document.getElementById('email').value.mata;
    let identidade = document.getElementById('identidade').value;
        
    if (nome == "" || cargo == "" || dia == "" || mes == "" || ano == "" || cep == "" || endereco == ""
        || num_casa == "" || bairro == "" || cidade == "" || estado == "" || celular == "" ||
        email == false || identidade == "" || validacaoCPF() == false) {
        alert('Por favor, preencha todos os campos corretamente.');
        } else {
            criarCandidato();
            alert('verificando cadastro...');
        }
}

const criarCandidato = async (candidato) => {

    const requisicao = await fetch('https://app-cadastro-gama.herokuapp.com/register', { /**servidor backend externo */
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Formulario())
        });
        if (requisicao.status === 200) {
            alert('CADASTRO CONCLUÍDO!');
        }
        
        if (requisicao.status === 500) {
            alert('CPF OU EMAIL JÁ FOI CADASTRADO');
        }
}

const Formulario = () => {
    let form = {
        nome: document.getElementById('nome').value,
        cargo: document.getElementById('cargo').value,
        dia: document.getElementById('dia').value,
        mes: document.getElementById('mes').value,
        ano: document.getElementById('ano').value,
        estado_civil: document.getElementById('estado_civil').value,
        genero: document.getElementById('genero').value,
        cep: document.getElementById('cep').value,
        endereco: document.getElementById('endereco').value,
        numero_casa: document.getElementById('numero_casa').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        telefone: document.getElementById('telefone').value,
        celular: document.getElementById('celular').value,
        email: document.getElementById('email').value,
        rg: document.getElementById('rg').value,
        cpf: document.getElementById('cpf').value,
        veiculo: document.getElementById('veiculo').value,
        habilitacao: document.getElementById('habilitacao').value,
        };
        console.log(form);
        return form
    }
        
