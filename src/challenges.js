// Desafio 1
/* 

1 - Crie uma função usando o operador &&
JavaScript possui um operador lógico &&, o qual recebe dois valores e retorna true se ambos os valores são verdadeiros,
e retorna false se algum dos valores não o for.

Considerando isso, implemente na função compareTrue, um código que ao receber dois parâmetros booleanos deve:

Retornar true se ambos os valores forem verdadeiros;
Retornar false se um ou ambos os parâmetros forem falsos.
Faça a função somente utilizando o operador &&.

O que será verificado:

Retorne false quando se chamar a função compareTrue com um parâmetro de valor false e outro de valor true

Retorne false quando se chamar a função compareTrue com dois parâmetros de valor false

Retorne true quando se chamar a função compareTrue com dois parâmetros de valor true

*/
function compareTrue(valor1, valor2) {
 
  if(valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
  
}

// Desafio 2
/*
2 - Crie uma função que calcule a área de um triângulo
Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e outro de altura (chamado height) de um 
triângulo e retorne o cálculo da sua área.

Lembre-se que a área de um triângulo é calculada através da seguinte fórmula: (base * altura) / 2.

O que será verificado:

Retorne o valor 250 quando a funcão calcArea é chamada com o parâmetro base com o valor 10 e o parâmetro height com o valor 50

Retorne o valor 5 quando a funcão calcArea é chamada com o parâmetro base com o valor 5 e o parâmetro height com o valor 2 
espera-se como resultado 5

Retorne o valor 25.5 quando a funcão calcArea é chamada com o parâmetro base com o valor 51 e o parâmetro height com o valor 1 
espera-se como resultado 25.5
*/
function calcArea(base, height) {
 
  return (base * height) / 2;
}

// Desafio 3
/*
3 - Crie uma função que divida a frase
Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada 
espaço na string original.

Exemplo: se a função receber a string "go Trybe", o retorno deverá ser ['go', 'Trybe'].

O que será verificado:

Retorne o valor ['go', 'Trybe'] se a função receber a string 'go Trybe'

Retorne o valor ['vamo', 'que', 'vamo']. se a função receber a string 'vamo que vamo'

Retorne o valor ['foguete'] se a função receber a string 'foguete'
*/
function splitSentence(frase) {
  let array = frase.split("string")
  console.log(array);
    return array;
  }
return frase.split('go Trybe');

// Desafio 4
/*
4 - Crie uma função que use concatenação de strings
Escreva uma função com o nome concatName que, ao receber uma array de strings, retorne uma string com o formato 
'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.

Isso quer dizer que, caso o parâmetro passado para concatName seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a 
função deverá retornar Paolillo, Lucas.

O que será verificado:

Retorne 'Paolillo, Lucas' quando o parâmetro passado na funcão concatName seja ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']

Retorne 'ré, foguete' quando o parâmetro passado na funcão concatName seja ['foguete', 'não', 'tem', 'ré']

Retorne 'captain, captain' quando o parâmetro passado na funcão concatName seja ['captain', 'my', 'captain']
*/
function concatName(parm1) {
  let primeiroItem = parm1[parm1.length -1];
  let ultimoItem = parm1[0];
  return primeiroItem + ", " + ultimoItem; 
    
  }
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties * 1;
  return pontos;
}


// Desafio 6
function highestCount(array) {
  let maior = null;
  let contador = null;

  for (let numero of array) {
    if (maior === null || numero > maior) {
      maior = numero;
      contador = 1;
    } else if (numero === maior) {
      contador++;
    }
  }
  return contador;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = null;

  if (cat1 < cat2) {
    result = cat1;
  } else {
    result = cat2;
  }
  if (mouse > result) {
    return "cat2";
  }
  if (mouse < result) {
    return "cat1";
  }
  return "os gatos trombam e o rato foge";
}
if (mouse === cat1) {
  return "cat1";
}
if (mouse === cat2) {
  return "cat2";
}
if (mouse === cat1 && mouse === cat2) {
  return "os gatos trombam e o rato foge";
}

// Desafio 8
function fizzBuzz(array) {
  let arrayFizzBuzz = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 5 === 0 && array[i] % 3 === 0) {
      arrayFizzBuzz.push("fizzBuzz");
    } else if (array[i] % 5 === 0) {
      arrayFizzBuzz.push("buzz");
    } else if (array[i] % 3 === 0) {
      arrayFizzBuzz.push("fizz");
    } else {
      arrayFizzBuzz.push("bug!");
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(frase) {
  let fraseCodificada = "";
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === "a") {
      fraseCodificada += "1";
    } else if (frase[i] === "e") {
      fraseCodificada += "2";
    } else if (frase[i] === "i") {
      fraseCodificada += "3";
    } else if (frase[i] === "o") {
      fraseCodificada += "4";
    } else if (frase[i] === "u") {
      fraseCodificada += "5";
    } else {
      fraseCodificada += frase[i];
    }
  }
  return fraseCodificada;  

}
function decode(frase) {
  let fraseDecodificada = "";
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === "1") {
      fraseDecodificada += "a";
    } else if (frase[i] === "2") {
      fraseDecodificada += "e";
    } else if (frase[i] === "3") {
      fraseDecodificada += "i";
    } else if (frase[i] === "4") {
      fraseDecodificada += "o";
    } else if (frase[i] === "5") {
      fraseDecodificada += "u";
    } else {
      fraseDecodificada += frase[i];
    }
  }
  return fraseDecodificada;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
