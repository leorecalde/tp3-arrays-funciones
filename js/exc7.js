/*- Escriba un script que muestre la tabla de multiplicar 
de un número ingresado por pantalla, la creación de la tabla 
debe ser realizada con una función y mostrar solo los 
resultados del 1 al 10 del número elegido por el usuario.

*/
function tabla() {
  document.write(`<table><tbody>`);
  for (let iF = 1; iF <= 10; indiceFilas++) {
    document.write("<tr>");
    for (let iC = 1; iC <= 2; indiceColumna++) {
      document.write(`<td>${resultado}</td>`);
    }
    document.write("</tr>");
  }
  document.write("</tbody></table>");
}
