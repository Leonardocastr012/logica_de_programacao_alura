let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
}
function exibirMensagemNaTela(){
        exibirTextoNaTela('h1','Jogo do número secreto')
        exibirTextoNaTela('p', 'Esscolha um número entre 1 e 10')
}

exibirMensagemNaTela()

function verificarChute(){
        let chute = document.querySelector('input').value; //pois não é um texto e sim valor numérico
        
        if (chute == numeroSecreto) {
                exibirTextoNaTela('h1','Acertou!');
                let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
                let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
                exibirTextoNaTela('p', mensagemTentativas)
                document.getElementById('reiniciar').removeAttribute('disabled'); //Através do ID vai ativar acessar o botão Novo Jogo
        } else {
                if (chute > numeroSecreto) {
                        exibirTextoNaTela('h1', 'O número secreto é menor!');
                } else {
                        exibirTextoNaTela('h1', 'O número secreto é maior!');
                }
                tentativas++;
                limparCampo();//Vai server para toda vez que fizer o chute o número anterior não ficar no campo de digitar o número
        }
}

function gerarNumeroAleatorio() {
        return parseInt(Math.random() * 10 + 1)
}

function limparCampo() {
        chute = document.querySelector('input');
        chute.value = '';
}

function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemNaTela()
        document.getElementById('reiniciar').setAttribute('disabled', true) //Manter o 'disabled' desabilitado(redundante mas é isso)
}