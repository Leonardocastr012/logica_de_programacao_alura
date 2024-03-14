//1.Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let escolhaUsuario = prompt('Qual é o dia da semana? ');
if (escolhaUsuario == 'Sábado' || escolhaUsuario == 'Domingo'){
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}
//2.Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt('digite um número positivo ou negativo: ');
if (numero > 0){
    alert('Positivo!');
} else {
    alert('Negativo!');
}
//3.Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt('Qual a sua pontuação? ');
if (pontuacao >= 100){
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}
//4.Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 1000
alert(`Seu saldo é de R$${saldo}`);
//5.Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt('Seu nome: ')
alert(`Seja bem vindo ${nome}`)