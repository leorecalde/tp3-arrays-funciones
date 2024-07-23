/*5- Definir una función que muestre información sobre 
una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina 
si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas.
mi version:
function texto(){
    const cadena;

   let bucle = for(let i == 0; i < cadena.lenght; i++ ){
        if(cadena === cadena.toUpperCase()){
            document.write(`El texto ingresado solo tiene mayúsculas.`)

        }else if(cadena === cadena.toLowerCase()){
            document.write(`El texto ingresado solo tiene minúsculas.`)

        }else{
            document.write(`El texto ingresado tiene mayúsculas y minúsculas.`)
        }
    }
}
*/

//corregido x gpt

function texto() {
    const cadena = prompt("Ingrese un texto:");
    console.log(cadena)

    for (let i = 0; i < cadena.length; i++) {
        if (cadena === cadena.toUpperCase()) {
            document.write("El texto ingresado solo tiene mayúsculas.");
            break;
        } else if (cadena === cadena.toLowerCase()) {
            document.write("El texto ingresado solo tiene minúsculas.");
            break;
        } else {
            document.write("El texto ingresado tiene mayúsculas y minúsculas.");
            break;
        }
    }
}

texto();
