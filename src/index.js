import validator from './validator.js';

const nmrCartao = document.querySelector("#numero-cartao"); // Vai pegar o valor do input do número do cartão
const btnValidar = document.getElementById("btn-validar"); // Vai pegar o botão

btnValidar.addEventListener("click", function (event) {
  event.preventDefault();
  const texto = nmrCartao.value;
  if (validator.isValid(texto)) {
    return alert("Cartão válido");
  }
  return alert("Cartão inválido");
});







/*
passo a passo:
1. pegar o valor do input
2. criptografar/validar o número
3. printar na tela
*/