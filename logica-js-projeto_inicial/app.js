alert('Boas vindas ao jogo do número secreto');
let valor = 10;
let numeroSecreto = parseInt(Math.random() * valor + 1);
console.log(numeroSecreto);
let chute ;
let tentativas = 1;


// enquanto o chute nao for igual ao ns 
while(chute != numeroSecreto){ 
    chute = prompt(`Escolha um número entre 1 e ${valor}`);

// se (chute for igual ao numero secreto)
    if (chute == numeroSecreto){
        break;
    }else{
        if(chute > numeroSecreto){
            alert(`O numero secreto é menor que o ${chute}`);
        }else{
            alert(`O numero secreto é maior que o ${chute}`);
        }
        tentativas ++;
    }
}
let palavraTentativa = tentavias > 1 ? 'tentativas': 'tentativa'
alert(`Isso ai! Você descobriu o ${numeroSecreto} com ${tentavias} ${palavraTentativa}`);

