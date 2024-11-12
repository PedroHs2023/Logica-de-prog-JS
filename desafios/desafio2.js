// Desafio 1 
let diaDaSemana = prompt('Qual o dia da semana');
 

if(diaDaSemana == 'Sabado' || diaDaSemana == 'Domingo')
{
    alert('Bom fim de semana');
}else
{
    alert('Boa semana!');
}

//---------------------------------------

//Desafio 2
let numero = prompt('Digite um numero: ')

if(numero > 0)
{
    alert(`O numero é positivo ${numero}`);
}else 
{
    alert(`O numero é negativo ${numero}`);
}

//---------------------------------------

//Desafio 3
let pontos = prompt('Digite a pontuacao: ');

if(pontos >= 100)
{
    alert('Parabens voce venceu!');
}else
{
    alert('Tente novamento para ganhar');
}
//---------------------------------------

//Desafio 4
let saldo = 10000;

alert(`Seu saldo é de R$ ${saldo}`);

//---------------------------------------

//Desafio 5 
let usuario = prompt('Digite seu usuario: ');

alert(`Boa vindas ${usuario}`);


