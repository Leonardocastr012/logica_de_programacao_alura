//DESAFIO 1
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

//DESAFIO 2
//1.Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo(){
    console.log('Olá, mundo!');
}
olaMundo()
//2.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function olaNome(nome){
    console.log(`Olá, ${nome}!`);
}
olaNome('Leonardo');
//3.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro(num){
    return num * 2 //console.log(`O dobro de ${num} é ${num*2}`)
}
let resultado = dobro(2);
console.log(resultado);
//4.Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(num1, num2, num3){
    return (num1 + num2 + num3)/3
    //console.log(`A média entre ${num1},${num2} e ${num3} é ${media}`)
}
let resultadoMedia = media(2,3,4);
console.log(resultadoMedia);
//5.Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNum(a, b){
    if(a > b) {
        return a
    } else {
        return b
    }
    //return a > b ? a : b;
}
let maiorValor = maiorNum(9,11);
console.log(maiorValor);
//6.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function quadrado(num){
    return num * num
}
let resultadoQuadrado = quadrado(3)
console.log(resultadoQuadrado)