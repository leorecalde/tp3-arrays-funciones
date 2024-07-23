/* 6- Solicitar por pantalla al usuario ingresar el valor 
de los lados de un rectángulo, luego crear una función para 
calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:


Input:
lado A = 24
lado B = 5

Output: 58
*/

function perimetro(ladoA, ladoB) {
  const resultado = 2 * (ladoA + ladoB);
  console.log(resultado);
  return resultado;
}

const ladoA = parseInt(prompt(`ingrese el valor del lado A`));
const ladoB = parseInt(prompt(`ingrese el valor del lado B`));

document.write(`el perimetro calculado es ${perimetro(ladoA, ladoB)}`);
