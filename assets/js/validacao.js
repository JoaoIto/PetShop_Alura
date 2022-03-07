export function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    };

    if(input.validity.valid){
        input.parendElement.classList.remove("input-container--invalido");
        input.parendElement.getElementByClassName("input-mensagem-erro").innerHTML = "";
    }else {
        input.parendElement.classList.add("input-container-invalido")
        input.parendElement.getElementByClassName("input-mensagem-erro").innerHTML = mostraMensagemErro(tipoDeInput, input);
    };
};

const tiposDeErro = [
    "valueMissing",
    "typeMismatch",
    "patternMissmatch",
    "customError"
];

const mensagensErro = {
    nome: {
        valueMissing: "Este campo não pode estar vazio!"
    },

    email: {
        valueMissing: "Este campo não pode estar vazio!",
        typeMismatch: "O campo digitado não é valido!"
    },

    senha: {
        valueMissing: "Este campo não pode estar vazio!",
        patternMissmatch: "O campo deve ter de 6 a 12 caracteres, números válidos!"
    },
    dataNascrimento: {
        valueMissing: "Este campo não pode estar vazio!",
        customError: "Você deve ser maior de 18 anos para se cadastrar!"
    },
    cpf: {
        valueMissing: "O campo de CPF não pode estar vazio.",
        customError: "O CPF digitado não é valido"
    }

};
const validadores = {
    dataNascimento:input => validaDataNascimento(input),
    cpf: input => validaCPF(input)
};

function mostraMensagemErro(tipoDeInput, input){
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]){
            mensagem = mensagensErro[tipoDeInput][erro];
        };
    });
    let mensagem = "";
    return mensagem;
};
function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value);
    let mensagem = '';

    if(!maiorQue18(dataRecebida)) {
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.';
    }

    input.setCustomValidity(mensagem);
};

function maiorQue18(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataMais18 <= dataAtual;
};

function validaCPF(input){
    const cpfFormatado = input.value.replace(/\D/g, "");
    let mensagem = "";
    if(!checaCPF(cpfFormatado)){
        mensagem = "O CPF digitado não é valido!"
    }
    input.setCustomValidity(mensagem);
};

function checaCPF(cpf){
    const valoresRepetidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ];

    valoresRepetidos.forEach(valor => {
            if(valor ==  cpf){
                cpfValido = false;
            }
    })
    let cpfValido = true;
    return cpfValido;
};