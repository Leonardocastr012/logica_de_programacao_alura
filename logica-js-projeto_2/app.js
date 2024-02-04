let numeroSecreto = gerarNumeroAleatorio()

function exibirTextoNaTela(tag, texto){
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do número secreto')
exibirTextoNaTela('p', 'Esscolha um número entre 1 e 10')

function verificarChute(){
        let chute = document.querySelector('input').value; //pois não é um texto e sim valor numérico
        
        if (chute == numeroSecreto) {
                exibirTextoNaTela('h1','Você descobriu o número secreto!');  
        } else {
                if (chute > numeroSecreto) {
                        exibirTextoNaTela('h1', 'O número sereto é menor!');
                } else {
                        exibirTextoNaTela('h1', 'O número secreto é maior!');
                }
        }
}

function gerarNumeroAleatorio() {
        return parseInt(Math.random() * 10 + 1)
}