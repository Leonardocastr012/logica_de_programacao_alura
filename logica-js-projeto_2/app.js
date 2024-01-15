let numeroSecreto = gerarNumeroAleatorio()

function exibirTextoNaTela(tag, texto){
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do número secreto')
exibirTextoNaTela('p', 'Esscolha um número entre 1 e 10')

function verificarChute(){
        let chute = document.querySelector('input').value; //pois não é um texto e sim valor numérico
        console.log(chute == numeroSecreto); //Saber se tá sendo o mesmo valor
}

function gerarNumeroAleatorio() {
        return parseInt(Math.random() * 10 + 1)
}