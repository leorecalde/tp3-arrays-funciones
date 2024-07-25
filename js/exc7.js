/*- Escriba un script que muestre la tabla de multiplicar 
de un número ingresado por pantalla, la creación de la tabla 
debe ser realizada con una función y mostrar solo los 
resultados del 1 al 10 del número elegido por el usuario.


function tabla(num1, num2, _num3) {
  document.write(`<table><tbody>`);
  for (let indiceFilas = 1; indiceFilas <= 10; indiceFilas++) {
    document.write("<tr>");
    for (let indiceColumna = 1; indiceColumna <= 1; indiceColumna++) {
      document.write(`<td>${num1}</td>`);
      
    }
    for (let indiceColumna1 = 1; indiceColumna1 <= 1; indiceColumna1++) {
      document.write(`<td>${num2}</td>`);
    
    }
    for (let indiceColumna2 = 1; indiceColumna2 <= 3; indiceColumna2++) {
      document.write(`<td>${_num3}</td>`);
      
    }
    document.write("</tr>");
  }
  document.write("</tbody></table>");
}

const multiplicar = (num1, num2) => num1 * num2

const num1 = parseInt(prompt(`ingrese un numero`))
const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const num3 = multiplicar(num1, num2.length)

tabla(num1, num2, num3)

function tabla(num1, num2, _num3) {
  document.write(`<table><tbody>`);
  for (let indiceFilas = 1; indiceFilas <= 10; indiceFilas++) {
    document.write("<tr>");
    for (let indiceColumna = 1; indiceColumna <= 1; indiceColumna++) {
      document.write(`<td>${num1}</td>`);
    }
    for (let indiceColumna1 = 1; indiceColumna1 <= 1; indiceColumna1++) {
      document.write(`<td>${num2[indiceFilas - 1]}</td>`);
    }
    for (let indiceColumna2 = 1; indiceColumna2 <= 1; indiceColumna2++) {
      document.write(`<td>${_num3}</td>`);
    }
    document.write("</tr>");
  }
  document.write("</tbody></table>");
}

const multiplicar = (num1, num2) => num1 * num2;

const num1 = parseInt(prompt(`Ingrese un número`));
const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num3 = multiplicar(num1, num2.length);

tabla(num1, num2, num3);

*/

function tabla(num1, resultados) {
  document.write(`<table><tbody>`);
  for (let indiceFilas = 0; indiceFilas < resultados.length; indiceFilas++) {
    document.write("<tr>");
    document.write(`<td>${num1}</td>`);
    document.write(`<td>${num2[indiceFilas]}</td>`);
    document.write(`<td>${resultados[indiceFilas]}</td>`);
    document.write("</tr>");
  }
  document.write("</tbody></table>");
}

const num1 = parseInt(prompt(`Ingrese un número`));
const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultados = num2.map(elemento => num1 * elemento);

tabla(num1, resultados);









