alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 2;
console.log('O número secreto é o ' + numeroSecreto);
let chute; 
let tentativas = 1;
console.log('Valor do chute: '+ chute);
//loop
while(chute != numeroSecreto){
    chute = prompt('Escolha um número de 1 a 30: ');
    // condicionais
    console.log('Resultado da comparação: ', numeroSecreto == chute);
    if (numeroSecreto == chute){
        //alert('Isso aí! Você descobriu o número secreto é o' + numeroSecreto); 
        alert(`Isso aí! Você descobriu o número secreto é o ${numeroSecreto} e teve ${tentativas} tentativa(s)`); //Usando Template Strings
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