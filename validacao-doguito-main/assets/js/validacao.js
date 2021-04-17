 export function valida() {                                                 //Função que valida um tipo de input
    const tipoDeInput = input.dataset.tipoDeInput                            // Selecionando o input
    
    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)                                      // Validando
    }                        
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input)
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
