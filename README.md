# Cartão de Crédito Válido

## Índice

* [1. Introdução](#1-Introdução)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Principais tecnologias utilizadas](#3-principais-tecnologias-utilizadas)

***

## 1. Introdução

Projeto criado para o bootcamp da Laboratoria, em fevereiro de 2023.

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

## 2. Resumo do projeto

Neste projeto, criei uma página de verificação de cartão de crédito que, além
de confirmar se o número é válido ou não, oculta todos (exceto os quatro últimos)
digitos do número digitado.

## 3. Principais tecnologias utilizadas
JavaScript
HTML
CSS
Git e Git Hub

