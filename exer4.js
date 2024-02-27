//Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma sendo vendida respectivamente por 10, 12 e 15 reais. Construa um algoritmo em que o usuário forneça a quantidade de camisetas pequenas, médias e grandes referentes a uma venda, e a máquina informe quanto será o valor arrecadado.

//abordagem síncrona
const readlineSync = require('readline-sync');

let p = parseFloat(readlineSync.question("Digite o numero de camisetas pequenas: "));
let m = parseFloat(readlineSync.question("Digite o numero de camisetas medias: "));
let g = parseFloat(readlineSync.question("Digite o numero de camisetas grandes: "));
console.log("\n")
console.log("o valor da venda é de: ");
console.log(`camisetas PEQUENAS ${p*10}; \ncamisetas MEDIAS ${m*12}; \ncamisetas GRANDES ${g*15} \n`)