const tela = require("readline-sync")

let lado1:number = Number(tela.question("Digite o lado 1: "));
let lado2:number = Number(tela.question("Digite o lado 2: "));
let lado3:number = Number(tela.question("Digite o lado 2: "));

let classificação:string

if(lado1 === lado2 && lado2 === lado3 && lado1 == lado3) {
	classificação "Equilátero"
} else if (lado1 === lado2 && lado1 !== lado3 && lado2 !== lado3) {
	classificação "Isósceles"
} else if (lado1
