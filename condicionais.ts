const tela = require('readline-sync')

const nomeAluno:string = tela.question('Informe o nome do aluno: ')
const nota1:number = Number(tela.question('Informe a primeira nota: ')) 
const nota2:number = Number(tela.question('Informe a segunda nota: ')) 
const nota3:number = Number(tela.question('Informe a terceira nota: '))

const média = (nota1 + nota2 + nota3) / 3

//aluno aprovado so com média maior ou igual à 7.0
let situação:string

if (média >= 7) {
	situação = "Aprovdo"
} else {
	situação = "Reprovado"
}

console.log(`Aluno(a), ${nomeAluno} obteve á média de ${média} e está ${situação}`)

