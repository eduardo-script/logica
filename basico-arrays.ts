let frutas: string[] = ['maça', 'pera', 'uva', 'melancia', 'abacaxi'] 

console.log('Tamanho: '+frutas.length)
console.log('Primeiro elemento: '+frutas[0])
console.log('Ultimo elemento: '+frutas[frutas.length-1])

frutas.push('morango') //add no final da lista
frutas.unshift('laranja') // add no inicio da lista  


//frutas[1] = 'melão'  substituir valores

//frutas.pop() //"Melão" substituir valores
//frutas.shift() // remove primeiro elemento  

//frutas.sort()
//frutas.reverse()

//Intereção da lista 
for(let i = 0; i < frutas.length; i++) {
let contador = i + 1
console.log(contador + ". "+frutas[i])
} 

