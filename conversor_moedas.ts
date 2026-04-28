const tela = require("readline-sync")

const valorreal:number = Number(tela.question("Digite o valor em R$: "));

console.log("\n--- Conversor de moedas ---");
console.log("1 - Dolar (USB)");
console.log("2 - Euro (EUR)");
console.log("3 - Peso Argentino (ARS)");

const opção = tela.question("Qual moeda você quer converter: ");

let resultado:number = 0;
let moedanome:string = "";

switch (opção) {
        case "+":
                resultado = valorreal * 0.10;
        break
        case "-":
                resultado = numero1 - numero2;
        break
        case "*":
                resultado = numero1 * numero2;
        break
        case "/":
                resultado = numero1 / numero2;
}

console.log(`Numero1: ${numero1}`)
console.log(`Numero2: ${numero2}`)
console.log(`resultado: ${resultado} `);
