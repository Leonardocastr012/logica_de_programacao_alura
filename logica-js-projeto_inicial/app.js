alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 2;
console.log('O número secreto é o ' + numeroSecreto);
let chute = prompt('Escolha um número de 1 a 30: ');
console.log('Valor do chute: '+ chute);

// condicionais
console.log('Resultado da comparação: ', numeroSecreto == chute);
if (numeroSecreto == chute){
    //alert('Isso aí! Você descobriu o número secreto é o' + numeroSecreto); 
    alert(`Isso aí! Você descobriu o número secreto é o ${numeroSecreto}`); //Usando Template Strings
}
else {
    console.log('Valor do número secreto:'+ numeroSecreto);
    alert('Você errou :(');
}