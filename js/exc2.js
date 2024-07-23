/* 2-  Crear un script que solicite al usuario mediante 
un prompt el nombre de ciudades y almacenarlas en un arreglo, 
cuando el usuario selecciona cancelar se debe mostrar el arreglo 
generado, luego realizar las siguientes acciones:

-Mostrar la longitud del arreglo.
-Mostrar en el documento web los ítems 
de las posiciones primera, tercera y última.
-Añade en última posición la ciudad de París.
-Escribe por pantalla el elemento que ocupa la segunda posición.
-Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
["Nueva York, Estados Unidos", "Barcelona, España", "Tokio, Japón", "
Londres, Reino Unido", "Roma, Italia", "Pekín, China", 
"Río de Janeiro, Brasil", "Ámsterdam, Países Bajos", 
"Sídney, Australia", "El Cairo, Egipto"]
conmigo:
let ingresaCiudad;

do{
ingresaCiudad = prompt("Ingresa el nombre de una ciudad, por ejemplo ´San Antonio, Texas, USA´")
} while( ingresaCiudad !== null)
console.log(ingresaCiudad)
const ciudades = [ingresaCiudad]
document.write(`las ciudades ingresadas son: ${ingresaCiudad.length}`)
*/
//con la ayuda de juliangpt

let ingresaCiudad;
const ciudades = [];
do {
  ingresaCiudad = prompt(
    "Ingresa el nombre de al menos 5 ciudades, por ejemplo ´San Antonio´"
  );
  if (ingresaCiudad !== null) {
    ciudades.push(ingresaCiudad);
  }
} while (ingresaCiudad !== null);
console.log(ciudades);
document.write(`las ciudades ingresadas son: ${ciudades.length}`);

document.write("<ul>");
document.write(`<li>La primera ciudad ingresada es: ${ciudades[0]}</li>`);
document.write(`<li>La tercera ciudad ingresada es: ${ciudades[2]}</li>`);
document.write(
  `<li>La última ciudad ingresada es: ${ciudades[ciudades.length - 1]}</li>`
);
document.write("</ul>");

ciudades.push("Paris")
document.write(`Se ingresó por sistema una nueva ciudad: ${ciudades[ciudades.length-1]}<br>`)

document.write(`La segunda ciudad ingresada es: ${ciudades[1]}<br>`)

ciudades.splice(1,1,`Barcelona`)
document.write(`Por sistema se ha modificado el listado, ahora la segunda ciudad ingresada es: ${ciudades[1]}`)