# UF1305
Exámenes realizados sobre esta unidad.
Branch:
EPA1

## Prueba
1. Crear el Ordinograma o pseudocógido de un algoritmo que reciba un texto cualquiera y modifique todas las vocales que tenga por la vocal “i”. Describe brevemente como funcionará.

2. Observa el siguiente ordinograma y describe brevemente para que sirve. La descripción no debe ocupar mas de 100 caracteres.

![ordinograma](/img/ordinograma.gif)

3. Crear un documento HTML que al renderizarse aparezca un cuadro (“textarea”) donde puedas escribir un texto y al pulsar un botón, se ejecute una función que haga el ordinograma o pseudocógido que has elaborado para resolver el primer ejercicio. Ejemplo: “No se hacer esto.”, debería traducirlo por: “Ni si hicir isti.” El texto traducido podrá aparece en otra caja igual o como un párrafo escrito debajo de la caja y el botón.

4. Lee las siguientes funciones y describe brevemente que hacen y que resultado se obtiene al final. No olvides indicar el. nombre de la función, parámetros de entrada (argumentos) y parámetros de salida (que devuelve), el tipo de los datos está manejando, describir como funciona y cualquier datos que permita a una persona entender la función sin leer el código.

```let num1 = 20,
let num2 = 3,
let name = "Chamahk";


function multiply() {
  return num1 * num2;
}

multiply(); 


function getScore() {
  var num1 = 2,
    num2 = 3;

  function add() {
    return name + " anotó " + (num1 + num2);
  }

  return add();
}

getScore();
``` 

5. Crea una función que pasándole dos “strings”, devuelva cual de las dos tiene más caracteres y cuantos más. Puedes incluirla en el fichero del ejercicio 3 y usar la misma web o crear un nuevo documento. Ej: “boca”, “bocazas” debería devolver: “bocazas es más larga por 3 caracteres”. Para devolver la solución eres libre de usar cualquiera de los cuatro métodos vistos:
- Escribir en un elemento HTML, usando innerHTML.
- Escribir en la salida HTML usando document.write().
- Escribiendo en la consola del navegador, usando console.log().

  Para comprobar si funciona correctamente para deberías tener en cuenta todas las opciones posibles que se pueden presentar, sin saber los tamaños de las palabras.