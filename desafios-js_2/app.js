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

//DESAFIO 3
//1.Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularIMC(altura, peso){
    let imc = peso / (altura * altura);
}
//2.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorial(num){
    function calcularFatorial(numero) {
        if (num === 0 || num === 1) {
          return 1;
        }
      
        let fatorial = 1;
        for (let i = 2; i <= numero; i++) {
          fatorial *= i;
        }
      
        return fatorial;
      }
}
//3.Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
  }
//4.Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
  
//5.Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
//6.Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  