const tela = require('prompt-sync')()

// Declarando as váriaveis
let nome:string
let idade:number

// Sentando os valores
nome = tela('Qual é o seu nome?')
idade = Number(tela('Qual é a sua idade? '))

// Ssaida das informações
console.log("Nome: "+nome+" idade: "+idade)


