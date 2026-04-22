const tela = require('readline-sync')

const idade:number = Number(tela.question('Informe a idade do aluno: '))
let classificação:string

if(idade >= 5 && idade < 8) { 
	classificação = "infantil A"
} else if (idade >= 8 && idade < 11 ) {
	classificação = "Infantil B"
} else if (idade >= 11 && idade < 14 ) {
       classificação = "Juvenivel A" 
} else if (idade >= 14 && idade < 18 ){
	classificação = "Juvenil B"
} else {
	classificação = "Adulto"
} if (idade >= 4 && idade < 18 ) {
	classificação = "infantil A"
} else if (idade >= 3 && idade < 14 ) {
       classificação = "infantil A"
}       

console.log(`Aluno com idade ${idade}\nClassificação: ${classificação}`) 
	
