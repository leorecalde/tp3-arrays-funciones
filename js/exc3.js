/* 3- Escribir un script que simule el lanzamiento de dos dados. 
Hacer uso de la función Math.random para obtener números 
aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array 
el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

CON ESTE CODIGO ME DA NUM EN DECIMALES (LO SAQUE DE DEVOLOPED MOZZILA)
function dados(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  const dado1 = dados(1, 6)
    console.log(dado1);
  

  const dado2 = dados(1, 6)
    console.log(dado2)


function dados(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const libreta = []
let i = 1

do{
const dado1 = dados(1, 6);
console.log(dado1);

const dado2 = dados(1, 6);
console.log(dado2);

switch (dado1 + dado2){
    case 2: libreta.splice(1,0,i);
    break;
    case 3: libreta.splice(2,0,i);
    break;
    case 4: libreta.splice(3,0,i);
    break;
    case 5: libreta.splice(4,0,i);
    break;
    case 6: libreta.splice(5,0,i);
    break;
    case 7: libreta.splice(6,0,i);
    break;
    case 8: libreta.splice(7,0,i);
    break;
    case 9: libreta.splice(8,0,i);
    break;
    case 10: libreta.splice(9,0,i);
    break;
    case 11: libreta.splice(10,0,i);
    break;
    case 12: libreta.splice(11,0,i);
    default: 
    document.write(`no se guardaron tus dados`);
    break;
}
i++
}while(i<=50)


    document.write(`<table><tbody>`);
    for (let indiceFilas = 1; indiceFilas <= 12; indiceFilas++) {
      document.write("<tr>");
      for (let indiceColumna = 1; indiceColumna <= 1; indiceColumna++) {
        document.write(`<td>${1++}</td>`);
      }
      for (let indiceColumna2 = 1; indiceColumna2 <= 1; indiceColumna2++) {
        document.write(`<td>${libreta[1++]}</td>`);
      }

      document.write("</tr>");
    }
    document.write("</tbody></table>"); 
*/

function dados(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const libreta = [];
let i = 1;

do {
    const dado1 = dados(1, 6);
    console.log(dado1);

    const dado2 = dados(1, 6);
    console.log(dado2);

    switch (dado1 + dado2) {
        case 2: libreta.splice(1,0,i); break;
        case 3: libreta.splice(2,0,i); break;
        case 4: libreta.splice(3,0,i); break;
        case 5: libreta.splice(4,0,i); break;
        case 6: libreta.splice(5,0,i); break;
        case 7: libreta.splice(6,0,i); break;
        case 8: libreta.splice(7,0,i); break;
        case 9: libreta.splice(8,0,i); break;
        case 10: libreta.splice(9,0,i); break;
        case 11: libreta.splice(10,0,i); break;
        case 12: libreta.splice(11,0,i); break;
        default: document.write(`no se guardaron tus dados`); break;
    }

    i++;
} while (i <= 50);

document.write(`<table><tbody>`);
for (let indiceFilas = 1; indiceFilas <= 12; indiceFilas++) {
    document.write("<tr>");
    document.write(`<td>${indiceFilas}</td>`);
    document.write(`<td>${libreta[indiceFilas - 1] || ''}</td>`);
    document.write("</tr>");
}
document.write("</tbody></table>");
