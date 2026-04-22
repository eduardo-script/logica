const teclado = require('readline-sync');

// 1. Entrada de dados
let largura: number = Number(teclado.question("Digite a largura do retangulo: "));
let altura: number = Number(teclado.question("Digite a altura do retangulo: "));

// 2. Processamento
let area = largura * altura;
let perimetro = 2 * (largura + altura);

// 3. Saída
console.log("--- Resultados ---");
console.log("Area: " + area);
console.log("Perimetro: " + perimetro);
