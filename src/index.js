import validator from './validator.js';

const nmrCartao = document.querySelector("#numero-cartao");
const btnValidar = document.getElementById("btn-validar");

btnValidar.addEventListener("click", function(event) {
    event.preventDefault();
    const texto = nmrCartao.value;
    validator.isValid(texto);
});





/*
passo a passo:
1. pegar o valor do input
2. criptografar/validar o número
3. printar na tela


outra forma de escrever o validator:
import { isValid } from 'validator.js'


const cardNumber = document.getElementById("numero-cartao");
const btnValidar = document.getElementById("btn-validar");

btnValidar.addEventListener("click", function() {
    alert("Esse cartão é válido!");
});

console.log("oi");


//clicar no botão -> on click - >addEventListener

//element.addEventlistener("cick", myFunction);
    //element = elemento a ser clicado

*/

