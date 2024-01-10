let tituloDesafio = document.querySelector('h1');
tituloDesafio.innerHTML = 'Hora do desafio';

function botaoConsole(){
    console.log('O botão foi clicado');
}

function botaoAlert(){
    alert('Eu amo JS');
}

function botaoPrompt(){
    let cidade = prompt('Digite o nome de uma cidade:');
    alert(`Estive em ${cidade} e lembrei de você`);
}
function botaoSoma(){
    let n1 = prompt('Digite um número: ');
    let n2 = prompt('Digite outro número: ');
    let soma = parseInt(n1) + parseInt(n2);
    alert(`A soma de ${n1}+${n2}=${soma}`)
}

//let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. Isso é inverso da keyword var (en-US), que define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco.