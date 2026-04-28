const tela = require("readline-sync")
let nomes:string[] = [] 
let anos:number[] = []

let loop:boolean = true

while(loop) {

 const nome = tela.question("Informe o nome da pessoa: ")
 const ano = Number(tela.question("Informe a idade: "))

 nomes.push(nome)
 anos.push(ano) 
 


 const continuar:number = Number(tela.question("Deseja continuar? 1 - Sim | 2 - Não"))
 
 //criando uma variavel para guardar o resultado final
//coloca-los em ordem alfabetica
nomes.unshift('eduardo')
anos.unshift(2002)

if (continuar === 2) {
 loop = false
//imprimir valores em ordem alfabetica	 
 for(let i = 0; i < nome.length; i++) {
  console.log(`${i + 1}. ${nomes[i]} - ${anos[i]}`)
  }	
 }
}
