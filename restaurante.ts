const teclado = require('readline-sync');

// 1. Entrada de dados
let valorGasto: number = Number(teclado.question("Qual o valor total consumido? R$ "));

// 2. Processamento da Taxa e Total
let taxaGarcom: number = valorGasto * 0.10; // 10% é o mesmo que multiplicar por 0.10
let valorTotal: number = valorGasto + taxaGarcom;

console.log("------------------------------");
console.log("Taxa do garcom (10%): R$ " + taxaGarcom.toFixed(2));
console.log("Valor total com taxa: R$ " + valorTotal.toFixed(2));
console.log("------------------------------");

// 3. Entrada para a divisão
let numPessoas: number = Number(teclado.question("Vai dividir para quantas pessoas? "));

// 4. Cálculo da divisão
let valorPorPessoa: number = valorTotal / numPessoas;

// 5. Saída final
console.log("Cada pessoa deve pagar: R$ " + valorPorPessoa.toFixed(2));
