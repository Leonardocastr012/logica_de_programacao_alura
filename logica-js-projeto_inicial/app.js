alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random()*100 + 1);
let numeroMaximo = 100
console.log('O número secreto é o ' + numeroSecreto);
let chute; 
let tentativas = 1;
console.log('Valor do chute: '+ chute);
//loop
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número de 1 a ${numeroMaximo}: `);
    // condicionais
    console.log('Resultado da comparação: ', numeroSecreto == chute);
    if (numeroSecreto == chute){
        //alert('Isso aí! Você descobriu o número secreto é o' + numeroSecreto); 
        break;
    }
    else {
        console.log('Valor do número secreto:'+ numeroSecreto);
        if (numeroSecreto > chute){
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
    } 
    tentativas += 1; // or tentativas ++;
} 
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' //Operador ternário
alert(`Isso aí! Você descobriu o número secreto é o ${numeroSecreto} e teve ${tentativas} ${palavraTentativa}`);
// if (tentativas == 1){
//     alert(`Isso aí! Você descobriu o número secreto é o ${numeroSecreto} e teve ${tentativas} tentativa`); //Usando Template Strings
// } else {
//     alert(`Isso aí! Você descobriu o número secreto é o ${numeroSecreto} e teve ${tentativas} tentativas`); //Usando Template Strings
// }
