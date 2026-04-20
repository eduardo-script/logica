const tela = require('readline-sync')

const largura:number = Number(tela.question('Informe a largura: '))
const altura:number = Number(tela.question('Informe a altura: '))
 

 if (isNaN(largura) || isNaN(altura)) {
      console.log('Por favor, insira números válidos.');
    } else {
      const area = largura * altura;
      const perimetro = 2 * (largura + altura);

      console.log(`\n--- Resultados ---`);
      console.log(`Área: ${area}`);
      console.log(`Perímetro: ${perimetro}`);
    }
