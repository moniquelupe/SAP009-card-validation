const validator = {
  maskify(numeroCartao) {
    const maskNumero = [];
    for (let i = 0; i < numeroCartao.lenght; i++) {
      if (i < creditCardNumber.lenght-4) {
        maskNumber.push('#');
      } else {
        maskNumber.push(numeroCartao[i]);
      }
    }
    return maskNumber.join("");
      
    }
  }
  isValid: function(numeroCartao) {
    let numeroCartaoInvertido = numeroCartao.split('').reverse(); // guarda o numero do cartao invertido (reverse) como uma string seprada (split)
    let posPares = [];                                            // guarda as posições pares da string
    let posImpares = [];                                            // guarda as posições ímpares da string
    let somaDoisDig = 0;                                          // guarda o valor somado dos digitos dos números maiores que 9

    let somaPares = 0;
    let somaImpares = 0;
    let somaValidar = 0;
  }
      
    for (let i = 0; i < numeroCartaoInvertido.length; i++) {
      if (i % 2 !== 0) {                                           // verifica se o índice é par ou impar
          
      if (numeroCartaoInvertido[i]*2 > 9) {                     // verifica se o número é maior que 9
          somaDoisDig = numeroCartaoInvertido[i]*2;               // guarda o numero no indice "i" multiplicado por 2
          let temp = somaDoisDig.toString().split('');            // guarda o valor da variavel somaDoisDig como uma string
          somaDoisDig = parseInt(temp[0]) + parseInt(temp [1]);   // converte cada digito da string em número e soma
          posPares.push(somaDoisDig);                             // adiciona o numero somado à string das posições pares
        } else {
          posPares.push(numeroCartaoInvertido[i]*2);
        }
      } else {
        posImpares.push(parseInt(numeroCartaoInvertido[i]))         // adiciona o número à string das posições pares
      }
    }
    console.log(posPares);
    console.log(posImpares);

    for (let i = 0; i < posPares.length; i++) {
      somaPares = somaPares + posPares[i];
    }
      
    for (let i = 0; i < posImpares.length; i++) {
      somaImpares = somaImpares + posImpares[i];

      
    somaValidar = somaPares + somaImpares;
      
   
    console.log(somaPares)
    console.log(somaImpares)
    console.log(somaValidar)
    console.log(somaValidar % 10 === 0)
    return somaValidar % 10 === 0
  }
};

export default validator;