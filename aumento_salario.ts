const tela = require('readline-sync')

const salario:number = Number(tela.question('Informe o salario: '))
const percentual:number = 0.15 // 18/100 
const resultado:number = salario + salario + percentual

console.log(`O salario com ajuste de 15% será: R$ ${resultado.toFixed(2)}`)
