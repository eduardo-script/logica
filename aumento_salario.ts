let salario: number = Number(teclado.question("Salario atual: "));
let novoSalario = salario * 1.15;

console.log("Com 15% de aumento, seu salario sera: R$ " + novoSalario.toFixed(2));
