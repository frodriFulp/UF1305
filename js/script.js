// Limpieza de valores introducidos en las cajas de texto
document.getElementById('textintrod').value = '';
document.getElementById('texttrad').value = ''
document.getElementById('palabralarga').value = '';
document.querySelectorAll('.palabras').value = '';
let elements = document.getElementsByClassName('palabras');

/**
 * Función para limpiar los inputs con la clase 'palabras'
 */
function limpiarPalabras(){
    for (let i = 0; i < elements.length; i++) {
        elements[i].value = '';
    }
}

// La lanzamos según termine el render.
limpiarPalabras();


/**
 * Función que altera las vocales de un texto para devolver solo la vocal i.
 */
function mimimi(){
    // Declaración y asignación a string vacía.
    let textintrod = ''
    let texttrad = ''

    // Captura del texto escrito en la caja de texto.
    textintrod = document.getElementById('textintrod').value;


    if (textintrod === '') {
        console.log('debería rellenar texto.')
        texttrad = "¡Por favor, introduzca el texto que desea traducir!";
        document.getElementById('texttrad').value = texttrad
        return texttrad;
    } else {
        texttrad = textintrod.replaceAll(/[aeou]/g, "i")
        texttrad = texttrad.replaceAll(/[áéóú]/g, "í")
        texttrad = texttrad.replaceAll(/[AEOU]/g, "I")
        texttrad = texttrad.replaceAll(/[ÁÉÓÚ]/g, "Í")
        console.log(textintrod, ' ', texttrad)
        document.getElementById('texttrad').value = texttrad
        return texttrad
    }
}

/**
 * Función para comparar la longitud de dos strings.
 * 
 * @param {string} str1 
 * @param {string} str2 
 * @returns {boolean} Devuelve verdadero e inserta el texto indicando cual es la palabra más larga.
 */
function palabraLarga(str1, str2) {
    console.log('palabraLarga se ejecuta.')
    document.getElementById('palabralarga').innerHTML = '';
    let longstr1, longstr2
    longstr1 = str1.length;
    longstr2 = str2.length;
    console.log(longstr1, longstr2)
    if (longstr1 > longstr2){
        document.getElementById('palabralarga').innerHTML = `${str1} es ${longstr1 - longstr2} caracteres más grande.`;
        console.log(`${str1} es ${longstr1 - longstr2} caracteres más grande`);
        return true;
    } else if ( longstr2 > longstr1) {
        document.getElementById('palabralarga').innerHTML = `${str2} es ${longstr2 - longstr1} caracteres más grande.`;
        return true;
    } else {
        document.getElementById('palabralarga').innerHTML = `${str1} y ${str2} tienen el mismo tamaño.`;
        return true;
    }
}