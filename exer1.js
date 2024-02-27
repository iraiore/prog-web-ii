//Criar 4 variáveis para receber as notas de um aluno, calcular e mostrar a média desse aluno.

//abordagem síncrona
const readlineSync = require('readline-sync');

//declarando o vetor e o valor da soma
let NotasAlunos = new Array(4);

//preenchendo o vetor
for(let i=0; i<NotasAlunos.length; i++){
    NotasAlunos[i] = parseFloat(readlineSync.question(`Digite o valor para o indice ${i+1}:`))
}

const soma = NotasAlunos.reduce((total, valor) => total + valor, 0);
const media = soma / NotasAlunos.length;

console.log("soma das notas:", soma);
console.log("Numero de notas:", NotasAlunos.length);
console.log("A media do aluno:", soma/NotasAlunos.length);


