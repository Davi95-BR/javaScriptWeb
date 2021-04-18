 export function valida(input) {                                                 //Função que valida um tipo de input
    const tipoDeInput = input.dataset.tipo                          // Selecionando o input
    
    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)                                      // Validando
    }   
    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
    } else {
        input.parentElement.classList.add('input-container--invalido')
    }                  
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input)
}

const mensagensDeErro =  {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo email não pode estar vazio.',
        typeMissMatch: 'O email digitado não é válido.'
    },
    senha: {
        valueMissing: 'O campo senha não pode estar vazio.',
        patterMisMatch: 'Senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.'
    },
    dataNascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    }
}

const dataNascimento = document.querySelector('#nascimento')         //Acessando o input de data

dataNascimento.addEventListener('blur', (evento) => {                // (blur = quando perde foco do campo)
    validaDataNascimento(evento.target)
})

function validaDataNascimento(input) {
    const dataRecebida  = new Date(input.value)
    let mensagem = ''                                                  // Passando a string p/ >18

    if(!maiorQue18(dataRecebida)) {                                    // ! == contrário | verificação
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'   
    }

    input.setCustomValidity(mensagem)                                 //  Defini uma mensagem de erro customizada (com let mensagem)
}

function maiorQue18(data) {
    const dataAtual = new Date()                                     // new Date() sem parâmetro trará a data atual

    const dataMais18 = new Date(data.getFullYear() + 18, data.getUTCMonth(), date.getUTCdate())       // Formato que o javaScript espera
    
    return dataMais18 <= dataAtual
}
