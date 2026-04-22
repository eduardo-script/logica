const teclado = require('readline-sync');

// Entrada das 3 notas
// O Number() converte o texto que você digita em número real
let nota1: number = Number(teclado.question("Digite a primeira nota: "));
let nota2: number = Number(teclado.question("Digite a segunda nota: "));
let nota3: number = Number(teclado.question("Digite a terceira nota: "));

// Cálculo da média aritmética
// Usamos os parênteses para garantir que a soma aconteça ANTES da divisão
let media: number = (nota1 + nota2 + nota3) / 3;

// Saída do resultado
// O .toFixed(2) serve para arredondar o resultado para 2 casas decimais
console.log("------------------------------");
console.log("A media final do aluno e: " + media.toFixed(2));
