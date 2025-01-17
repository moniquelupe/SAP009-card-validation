const validator = {
  isValid: function (nmrCartao) {
    const numeroCartaoInvertido = nmrCartao.split('').reverse(); // guarda o numero do cartao invertido (reverse) como uma string seprada (split)
    const posPares = [];                                            // guarda as posições pares da string
    const posImpares = [];                                            // guarda as posições ímpares da string
    let somaDoisDig = 0;                                          // guarda o valor somado dos digitos dos números maiores que 9

    let somaPares = 0;
    let somaImpares = 0;
    let somaValidar = 0;

    for (let i = 0; i < numeroCartaoInvertido.length; i++) {
      if (i % 2 !== 0) {                                           // verifica se o índice é par ou impar

        if (numeroCartaoInvertido[i] * 2 > 9) {                     // verifica se o número é maior que 9
          somaDoisDig = numeroCartaoInvertido[i] * 2;               // guarda o numero no indice "i" multiplicado por 2
          const temp = somaDoisDig.toString().split('');            // guarda o valor da variavel somaDoisDig como uma string
          somaDoisDig = parseInt(temp[0]) + parseInt(temp[1]);   // converte cada digito da string em número e soma
          posPares.push(somaDoisDig);                             // adiciona o numero somado à string das posições pares
        } else {
          posPares.push(numeroCartaoInvertido[i] * 2);
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
    }

    somaValidar = somaPares + somaImpares;

    console.log(somaPares)
    console.log(somaImpares)
    console.log(somaValidar)
    console.log(somaValidar % 10 === 0)
    return somaValidar % 10 === 0

  },
  maskify: function (nmrCartao) {
    const maskNumber = [];
    for (let i = 0; i < nmrCartao.length; i++) {
      if (i < nmrCartao.length - 4) {
        maskNumber.push("#");
      } else {
        maskNumber.push(nmrCartao[i])
      }
    }
    console.log('maskNumber', maskNumber);
    const masked = maskNumber.join("");
    console.log('masked', masked);
    return masked;
  }
}
export default validator;