const texto = "O rato roeu a roupa do rei de roma"

// Imprimir tamanho do texto
console.log("Tamanho texto: "+texto.length)
console.log("Texto em caixa alta: "+texto.toUpperCase())
console.log("Texto em caixa baixa: "+texto.toLowerCase())
console.log("Tem a palavra rato: "+texto.includes("rato"))
console.log("Tem a palavra princisa: "+texto.includes("princesa"))
console.log(texto.replace("rato","jose"))
console.log(texto.replaceAll("a","@"))

const email:string = " email@meuemail.com "
console.log(" email: "+email.trim())

