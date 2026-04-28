const tela = require("readline-sync")

const numero1:number = Number(tela.question("Informe o primeiro numero: "));
const numero2:number = Number(tela.question("Informe o segundo numero: "));
const operação = tela.question("Informe a operação (+, -, *, /) ");

let resultado: number = 0;


switch (operação) {
	case "+":
		resultado = numero1 + numero2;
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






















