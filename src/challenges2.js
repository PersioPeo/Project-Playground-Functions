// Desafio 10
function techList(array, name) {
  let arrayOrdenado = array.sort();
  let arrayTecnologias = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < arrayOrdenado.length; i++) {
    arrayTecnologias.push({ tech: arrayOrdenado[i], name });
  }
  return arrayTecnologias;
}

// Desafio 11
function generatePhoneNumber(array) {
  let result = null;
  let contador = 0;

  resultado = '(\'+arr[0]+\') \'+arr[1]+arr[2]+arr[3]+\'-\'+arr[4]+arr[5]+arr[6]+\'-\'+arr[7]+arr[8]+arr[9]+arr[10]';
  for (let i = 0; i < array.length; i++) {
    if (arr.length !== 11) {
      resultado = 'Array com tamanho incorreto.';
    }
    if (array[i] < 0 || array[i] > 9) {
      resultado = 'não é possível gerar um número de telefone com esses valores';
    }
    contador = 0;
    for (let arr2 of array) {
      if (array[i] === arr2) {
        contador += 1;
      }
    }
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    result = true;
  }
  return result;
}

// Desafio 13
function hydrate(frase) {
  let string = frase.match(/\d+/g);
  let soma = 0;
  let result = null;

  for (let i = 0; i < string.length; i++) {
    soma += parseInt(string[i]);
  }
  if (soma === 1) {
    result = `${soma} copo de água`;
  } else {
    result = `${soma} copos de água`;
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
