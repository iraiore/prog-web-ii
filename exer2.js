//Crie uma variável para receber o salário de um funcionário e aumentá-lo em 20%. Após o aumento, calcule o INSS desse funcionário que é de 8%. mostre o salário inicial, o salário com o aumento e o desconto do INSS o salário final.

//abordagem síncrona
const readlineSync = require('readline-sync');

const salario = parseFloat(readlineSync.question("Entre com o valor do salario: "));
//console.log("Salario entrado:", salario);
const salario_reajustado = salario * 1.2;
const inss = salario_reajustado * 0.08;

console.log("Salario: ",salario);
console.log("Salario reajustado: ", salario_reajustado);
console.log("INSS: ", inss);
